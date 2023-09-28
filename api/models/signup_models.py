from pydantic import BaseModel
from typing import Optional


class SignupForm(BaseModel):
    id: int
    phone_number: int
    city: str
    address: str
    license_plate: str
    email: Optional[str]
    name: Optional[str]
    referee: Optional[int]
    # __tablename__ = 'signup_form'
    # id = Column(Integer, primary_key=True, index=True)
    # phone_number = Column(String, unique=True, index=True)
    # city = Column(String, index=True)
    # address = Column(String)
    # license_plate = Column(String, nullable=True)
    # email = Column(String, nullable=True)
    # name = Column(String, nullable=True)
    # referee = Column(String, nullable=True)
