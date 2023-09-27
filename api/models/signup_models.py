from sqlalchemy import Column, Integer, String
from sqlalchemy.ext.declarative import declarative_base


BaseModel = declarative_base()


class SignupForm(BaseModel):
    __tablename__ = 'signup_form'
    id = Column(Integer, primary_key=True, index=True)
    phone_number = Column(String, unique=True, index=True)
    city = Column(String, index=True)
    address = Column(String)
    license_plate = Column(String, nullable=True)
    email = Column(String, nullable=True)
    name = Column(String, nullable=True)
    referee = Column(String, nullable=True)
