import os
from dotenv import load_dotenv
from sqlalchemy import create_engine, select
from sqlalchemy.orm import sessionmaker, Session
import databases
from models.sqlalchemy_models import SqlAlchemySignupForm


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


async def get_signup_get_async_db(phone_number: str):
    query = select(SqlAlchemySignupForm).where(SqlAlchemySignupForm.phone_number == phone_number)
    return await database.fetch_one(query)


async def get_signup_by_id(db: Session, id: int):
    query = select(SqlAlchemySignupForm).where(SqlAlchemySignupForm.id == id)
    return await database.fetch_one(query)
