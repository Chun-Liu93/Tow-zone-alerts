from sqlalchemy import Column, Integer, String
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()


class SignupForm(Base):
    __tablename__ = "signup_form"
    id = Column(Integer, primary_key=True)
    phone_number = Column(String, nullable=False)
    city = Column(String, nullable=False)
    address = Column(String, nullable=False)
    license_plate = Column(String, nullable=True)
    email = Column(String, nullable=True)
    name = Column(String, nullable=True)
    referee = Column(Integer, nullable=True)
