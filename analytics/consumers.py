import json
from asyncio import sleep
from channels.generic.websocket import AsyncWebsocketConsumer
from influxdb_client.client import influxdb_client

from analytics.models import Tags

bucket = "Line"
org = "evgenius"
token = "U7e0IXVqgxfD_obXQTce9qi2b7v-bBLs2rJNT1egYoq-4jq9Z5lfODfAwvpTroIKeab-osnFOV7bxRWOyP5svw=="
measurement = "Line"

# Store the URL of your InfluxDB instance
url = "http://192.168.8.101:8086/"

query_string = ''
query_elements = Tags.objects.filter(on_dashboard=True)

last_el_number = len(query_elements)
ind = 1
add_query_row = ' or r._field == '

for el in query_elements:
    query_string += f'"{el} - {el.label}"'
    query_string += add_query_row
    if ind == last_el_number:
        query_string += f'"{el}"'
        break
    ind += 1

client = influxdb_client.InfluxDBClient(
    url=url,
    token=token,
    org=org
)


class GraphConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        await self.accept()

        results = []

        for i in range(100000):

            # Query script
            query_api = client.query_api()
            query = f'from(bucket: "{bucket}")\
            |> range(start: -600ms, stop: -100ms)\
            |> filter(fn:(r) => r._measurement == "{measurement}")\
            |> filter(fn:(r) => r._field == {query_string})'

            result = query_api.query(org=org, query=query)
            print(result)
            for table in result:
                for record in table.records:
                    print(record)

                    results.append(
                        (record.get_field(), round(record.get_value()))
                    )

            message = dict(results)
            await self.send(
                json.dumps(
                    message
                )
            )
            await sleep(1)
