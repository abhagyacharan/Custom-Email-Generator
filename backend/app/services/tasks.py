#app/services/tasks.py
from celery import Celery
import time

celery_app = Celery(
    "tasks",
    broker="redis://localhost:6379/0",  # Redis as the broker
    backend="redis://localhost:6379/1",  # Redis for result storage
)

celery_app.conf.worker_pool = "solo"

@celery_app.task
def send_email(to: str, subject: str, body: str):
    # Simulate email sending delay
    time.sleep(2)
    return f"Email sent to {to} with subject '{subject}'"
