from pydantic import BaseModel
from typing import Optional, Union


class FormError(BaseModel):
    error: bool
    message: str


class PydanticSignupForm(BaseModel):
    id: Optional[int]
    phone_number: str  # Change data type to str to match VARCHAR
    city: str
    address: Union[str, int]
    license_plate: Optional[str]  # Change data type to str to match VARCHAR
    email: Optional[Union[str, int, None]]
    name: Optional[str]
    referee: Optional[int]

    def as_dict(self):
        return {"id": self.id,
                "phone_number": self.phone_number,
                "city": self.city,
                "address": self.address,
                "license_plate": self.license_plate,
                "email": self.email,
                "name": self.name,
                "referee": self.referee
                }


class Update_signup_form(BaseModel):
    phone_number: str
    city: str
    address: Union[str, int]
    license_plate: Optional[str]
    email: Optional[Union[str, int, None]]
    name: Optional[str]
    referee: Optional[int]

    def as_dict(self):
        return {
                "phone_number": self.phone_number,
                "city": self.city,
                "address": self.address,
                "license_plate": self.license_plate,
                "email": self.email,
                "name": self.name,
                "referee": self.referee
                }
