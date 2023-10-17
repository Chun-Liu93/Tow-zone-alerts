from sqlalchemy import Column, Integer, String
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.types import TypeDecorator, VARCHAR

Base = declarative_base()


# Custom TypeDecorator for handling multiple data types
class MultiType(TypeDecorator):
    impl = VARCHAR

    def process_bind_param(self, value, dialect):
        if value is None:
            return None
        if isinstance(value, int):
            return str(value)
        return value

    def process_result_value(self, value, dialect):
        if value is None:
            return None
        try:
            return int(value)
        except ValueError:
            return value


class SqlAlchemySignupForm(Base):
    __tablename__ = "signup_form"
    id = Column(Integer, primary_key=True)
    phone_number = Column(Integer, nullable=False)
    city = Column(String, nullable=False)
    address = Column(MultiType, nullable=False)
    license_plate = Column(String, nullable=True)
    email = Column(MultiType, nullable=True)
    name = Column(String, nullable=True)
    referee = Column(Integer, nullable=True)
