from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from queries.signup_queries import create_signup_form, get_signup_by_phone_number
from models.pydantic_models import SignupForm, FormError
from db.db import get_db
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
def get_signup(phone_number: str, db: Session = Depends(get_db)):
    if valid_phone_number(phone_number):
        signup_data = get_signup_by_phone_number(db, phone_number)
        return {
            "id": signup_data.id,
            "phone_number": signup_data.phone_number,
            "city": signup_data.city,
            "address": signup_data.address,
            "license_plate": signup_data.license_plate,
            "email": signup_data.email,
            "name": signup_data.name,
            "referee": signup_data.referee
        }
    else:
        return {
            "error": True,
            "message": "phone number should be a number"
        }
    
@router.patch("/signup/{phone_number}", response_model=Union[SignupForm, FormError])
def update_signup():