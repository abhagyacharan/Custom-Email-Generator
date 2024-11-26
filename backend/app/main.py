#app/main.py
from fastapi import FastAPI
from app.core.redis import setup_redis
from app.services.tasks import send_email
from app.api.routes import router

app = FastAPI()

# setup_redis(app)

app.include_router(router, prefix="/api")

# @app.get("/cache/{key}")
# async def get_from_cache(key: str):
#     redis = app.state.redis
#     value = await redis.get(key)
#     return {"key": key, "value": value}

# @app.post("/cache/")
# async def set_in_cache(key: str, value: str):
#     redis = app.state.redis
#     await redis.set(key, value)
#     return {"status": "success"}

# @app.post("/send_email/")
# def schedule_email(to: str, subject: str, body: str):
#     task = send_email.delay(to, subject, body)
#     return {"task_id": task.id, "status": "scheduled"}