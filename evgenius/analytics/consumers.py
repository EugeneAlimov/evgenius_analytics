import json
from random import randint
from asyncio import sleep

from channels.generic.websocket import AsyncWebsocketConsumer


class GraphConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        await self.accept()

        # async def receive(self, text_data=None, bytes_data=None):
        for i in range(1000):
            await self.send(
                json.dumps({
                    'speed': {
                        'speedEntry': randint(0, 40),
                        'speedProcess': randint(0, 40),
                        'speedExit': randint(0, 40),
                    },
                    'temperature': {
                        'prime':
                            [
                                randint(200, 250),
                                randint(200, 250),
                                randint(200, 250)
                            ],
                        'finish':
                            [
                                randint(10, 100),
                                randint(10, 100),
                                randint(10, 100)
                            ],
                    },
                })
            )
            await sleep(1)
