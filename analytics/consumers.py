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
        query_api = client.query_api()

        for i in range(100000):
            results = []
            # Query script
            query = f'from(bucket: "{bucket}")\
            |> range(start: -600ms)\
            |> filter(fn:(r) => r._measurement == "{measurement}")\
            |> filter(fn:(r) => r._field == {query_string})'

            result = query_api.query(org=org, query=query)
            for table in result:
                for record in table.records:
                    results.append(
                        (record.get_field(), round(record.get_value(), 3))
                    )

            # query_api = client.query_api()
            query = f'from(bucket: "{bucket}")\
            |> range(start: -10m)\
            |> filter(fn:(r) => r._measurement == "{measurement}")\
            |> filter(fn:(r) => r._field == "PO_Zone 1 Pyrometer - RTO_TO_LINE" \
            or r._field == "PO_Zone 2 Pyrometer - RTO_TO_LINE" \
            or r._field == "PO_Zone 3 Pyrometer - RTO_TO_LINE" \
            or r._field == "FO_Zone 1 Pyrometer - RTO_TO_LINE" \
            or r._field == "FO_Zone 2 Pyrometer - RTO_TO_LINE" \
            or r._field == "FO_Zone 3 Pyrometer - RTO_TO_LINE")\
            |> window(every: 1s)'

            result_oven = query_api.query(org=org, query=query)
            results_oven = []
            for table in result_oven:
                table_records = table.records[0]
                field = table_records.get_field()
                value = table_records.get_value()
                time = table_records.get_time()

                results_oven.append(
                    {'field': field, 'y': round(value, 0), 'x': str(time)}
                )

            results.append(('oven', results_oven))
            message = dict(results)
            await self.send(
                json.dumps(
                    message
                )
            )
            await sleep(1)
