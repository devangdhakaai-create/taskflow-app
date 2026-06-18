from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

# Connection string — tells SQLAlchemy where your database is
# Format: postgresql://username:password@host:port/database_name
DATABASE_URL = "postgresql://postgres:786786@localhost:5432/taskflow"

# Engine is the actual connection to the database
engine = create_engine(DATABASE_URL)

# Each request gets its own database session
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# Base class — all our models will inherit from this
Base = declarative_base()

# Dependency — gives a db session to each route, closes it when done
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()