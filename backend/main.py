from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from database import engine, Base
from routers import tasks

# Create all tables in database on startup
Base.metadata.create_all(bind=engine)

app = FastAPI()

# Allow React frontend to talk to this backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Register task routes
app.include_router(tasks.router)

@app.get("/")
def root():
    return {"message": "TaskFlow API is running"}