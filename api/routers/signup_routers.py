from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from queries.signup_queries import create_signup_form, get_signup_by_phone_number
from models.pydantic_models import SignupForm, FormError
from db.db import get_db, get_signup_get_async_db
import re
from typing import Union

router = APIRouter()


@router.post("/signup/", response_model=Union[SignupForm, FormError])
def create_new_account(account_data: SignupForm, db: Session = Depends(get_db)):
    db_account = create_signup_form(db, account_data)
    print(db_account)
    print(db_account.address)
    # return db_account
    return {
        "id": db_account.id,
        "phone_number": db_account.phone_number,
        "city": db_account.city,
        "address": db_account.address,
        "license_plate": db_account.license_plate,
        "email": db_account.email,
        "name": db_account.name,
        "referee": db_account.referee
    }


def valid_phone_number(phone_number: str):
    # there it should be validation
    pattern = re.compile(r'\d+')
    res = pattern.match(phone_number)
    return True if res else False


@router.get("/signup/{phone_number}", response_model=Union[SignupForm, FormError])
async def get_signup(phone_number: str, db: Session = Depends(get_signup_get_async_db)):
    if valid_phone_number(phone_number):
        signup_data = await get_signup_get_async_db(phone_number=phone_number)
        # signup_data = await get_signup_by_phone_number(db, phone_number)  # Await the asynchronous database operation
        if signup_data:
            return signup_data
        else:
            return FormError(message="User not found")
    else:
        return FormError(message="Phone number should be a number")


@router.patch("/signup/{phone_number}", response_model=Union[SignupForm, FormError])
async def update_signup(phone_number: str, db: Session = Depends(get_signup_get_async_db)):
    if valid_phone_number(phone_number):
        signup_data = await get_signup_get_async_db(phone_number=phone_number)
        if signup_data:
            return signup_data
        else:
            return FormError(message="User not found")
    else:
        return FormError(message="Phone number should be a number")
