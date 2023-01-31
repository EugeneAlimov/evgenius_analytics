import json
from random import randint
from asyncio import sleep
from channels.generic.websocket import AsyncWebsocketConsumer
from influxdb_client.client import influxdb_client

bucket = "Line"
org = "evgenius"
token = "AYxGUOAj0Ho1vqmyMeQDpHPaSPYNcTZznrQ9bDJCvNM9fvF6tAepPH6jyxuTaalmbqgZKe98efDVoCFAyu6kJw=="
measurement = "Line"
# Store the URL of your InfluxDB instance
url = "http://192.168.8.167:8086/"

client = influxdb_client.InfluxDBClient(
    url=url,
    token=token,
    org=org
)


class GraphConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        await self.accept()

        # print(results)
        results = []

        # async def receive(self, text_data=None, bytes_data=None):
        for i in range(100000):
            print(i)

            # Query script
            query_api = client.query_api()
            query = f'from(bucket: "{bucket}")\
            |> range(start: -600ms, stop: -100ms)\
            |> filter(fn:(r) => r._measurement == "{measurement}")\
            |> filter(fn:(r) => r._field == "ACT_SPEED - ENTRY" or r._field == "actual_speed - PROCESS" or r._field == "ACT_SPEED - EXIT" or r._field == "PO_Zone 1 Pyrometer - Prime Oven" or r._field == "PO_Zone 2 Pyrometer - Prime Oven" or r._field == "PO_Zone 3 Pyrometer - Prime Oven" or r._field == "FO_Zone 1 Pyrometer - Finish Oven" or r._field == "FO_Zone 2 Pyrometer - Finish Oven" or r._field == "FO_Zone 3 Pyrometer - Finish Oven")'
            result = query_api.query(org=org, query=query)

            for table in result:
                for record in table.records:
                    results.append(
                        # (
                        (record.get_field(), round(record.get_value()))
                        # )
                    )

            message = dict(results)
                # 'speed': {
                #     'speedEntry': results[0],
                #     'speedProcess': results[8],
                #     'speedExit': results[1],
                # },
                # 'temperature': {
                #     'prime':
                #         [
                #             results[5],
                #             results[6],
                #             results[7]
                #         ],
                #     'finish':
                #         [
                #             results[2],
                #             results[3],
                #             results[4]
                #         ],
                # },

            print(message)
            await self.send(
                json.dumps(
                    message
                )
            )
            await sleep(1)
