import redis.asyncio as redis
from fastapi import FastAPI

class RedisClient:
    _redis = None

    @classmethod
    async def get_redis(cls):
        if not cls._redis:
            cls._redis = redis.Redis(host="localhost", port=6379, decode_responses=True)
        return cls._redis

    @classmethod
    async def close_redis(cls):
        if cls._redis:
            await cls._redis.close()

# Initialize and shutdown Redis in app lifecycle
def setup_redis(app: FastAPI):
    @app.on_event("startup")
    async def startup():
        app.state.redis = await RedisClient.get_redis()

    @app.on_event("shutdown")
    async def shutdown():
        await RedisClient.close_redis()
