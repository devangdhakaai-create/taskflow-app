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
        
# For registering a new user
class UserCreate(BaseModel):
    email: str
    password: str

# What we send back after register/login
class UserResponse(BaseModel):
    id: int
    email: str

    class Config:
        from_attributes = True

# What we send back after successful login
class Token(BaseModel):
    access_token: str
    token_type: str