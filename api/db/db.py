import os
from dotenv import load_dotenv
from sqlalchemy import create_engine
from sqlalchemy.orm import Session, sessionmaker
import databases


load_dotenv()

DATABASE_URL = os.environ.get("DATABASE_URL")
DB_NAME = os.environ.get("DB_NAME")

# Create a SQLAlchemy engine
engine = create_engine(DATABASE_URL)

# Create a database for async function
database = databases.Database(DATABASE_URL)

# Create a session factory
SessionFactory = sessionmaker(autocommit=False, autoflush=False, bind=engine)


def get_db():
    db = SessionFactory()
    try:
        yield db
    finally:
        db.close()


async def get_signup_get_async_db():
    query = "SELECT * FROM signup_form"
    return await database.fetch_all(query)
