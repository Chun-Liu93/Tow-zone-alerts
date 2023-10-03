from pydantic import BaseModel
from typing import Optional


class SignupForm(BaseModel):
    id: Optional[int]
    phone_number: int  # Change data type to str to match VARCHAR
    city: str
    address: str
    license_plate: Optional[str]  # Change data type to str to match VARCHAR
    email: Optional[str]
    name: Optional[str]
    referee: Optional[int]
