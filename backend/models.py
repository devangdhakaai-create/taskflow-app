from sqlalchemy import Column, Integer, String, Boolean
from database import Base

# This class represents the 'tasks' table in PostgreSQL
class Task(Base):
    __tablename__ = "tasks"

    # Primary key — auto increments for each new task
    id = Column(Integer, primary_key=True, index=True)
    
    # Task title — cannot be empty
    title = Column(String, nullable=False)
    
    # Done status — defaults to False when task is created
    done = Column(Boolean, default=False)