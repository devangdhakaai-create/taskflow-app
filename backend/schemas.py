from pydantic import BaseModel

# What we expect when CREATING a task
class TaskCreate(BaseModel):
    title: str
    done: bool = False

# What we expect when UPDATING a task
class TaskUpdate(BaseModel):
    title: str | None = None
    done: bool | None = None

# What we send BACK in responses — includes id
class TaskResponse(BaseModel):
    id: int
    title: str
    done: bool

    class Config:
        from_attributes = True