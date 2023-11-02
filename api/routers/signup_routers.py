from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from queries.signup_queries import create_signup_form
from models.pydantic_models import PydanticSignupForm, FormError, Update_signup_form
from models.sqlalchemy_models import SqlAlchemySignupForm
from db.db import get_db, get_signup_get_async_db, get_signup_by_id, get_signup_by_id_async
import re
import logging
from typing import Union
from sqlalchemy import update

router = APIRouter()


@router.post("/signup/", response_model=Union[PydanticSignupForm, FormError])
def create_new_account(account_data: PydanticSignupForm, db: Session = Depends(get_db)):
    db_account = create_signup_form(db, account_data)
    print(db_account)
    print(db_account.address)
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
    pattern = re.compile(r'\d+')
    res = pattern.match(phone_number)
    return True if res else False


# Retrieves and checks to see if id exists
def id_exists(db, id: int):
    signup_data = db.query(SqlAlchemySignupForm).filter(SqlAlchemySignupForm.id == id).first()
    if signup_data:
        return True
    else:
        raise HTTPException(status_code=404, detail="User not found")


def delete_signup_record(db: Session, id: int):
    db_account = db.query(SqlAlchemySignupForm).filter(SqlAlchemySignupForm.id == id).first()
    if db_account:
        db.delete(db_account)
        db.commit()
    else:
        raise HTTPException(status_code=404, detail="Signup form not found")


@router.get("/signup/{phone_number}", response_model=Union[PydanticSignupForm, FormError])
async def get_signup(phone_number: str, db: Session = Depends(get_signup_get_async_db)):
    if valid_phone_number(phone_number):
        signup_data = await get_signup_get_async_db(phone_number=phone_number)
        if signup_data:
            return signup_data
        else:
            return FormError(message="User not found")
    else:
        return FormError(message="Phone number should be a number")


@router.get("/signup/{id}", response_model=Union[PydanticSignupForm, FormError])
async def get_signup_by_id_route(id: int, db: Session = Depends(get_signup_by_id_async)):
    if id_exists(id):
        signup_data = await get_signup_by_id_async(id=id)
        if signup_data:
            return signup_data
        else:
            return FormError(message="User not found")
    else:
        return FormError(message="ID should be a number")


@router.patch("/signup/{phone_number}", response_model=Union[Update_signup_form, dict])
async def update_signup_form(phone_number: str, user_data: Update_signup_form, db: Session = Depends(get_db)):
    columns_to_update = user_data.dict(exclude_unset=True)
    columns_to_update.pop("id", None)
    try:
        update_info = (
            update(SqlAlchemySignupForm)
            .where(SqlAlchemySignupForm.phone_number == phone_number)
            .values(**columns_to_update)
        )
        db.execute(update_info)
        db.commit()
        return db.query(SqlAlchemySignupForm).filter(SqlAlchemySignupForm.phone_number == phone_number).first()
    except Exception as e:
        logging.error(f'Error updating user: {str(e)}')
        db.rollback()
        return {"message": "Could not update the user"}


@router.delete("/signup/{id}", response_model=None, status_code=204)
async def delete_signup_form(id: int, db: Session = Depends(get_db)):
    result = get_signup_by_id(db, id)
    if result:
        delete_signup_record(db, id)
    else:
        raise HTTPException(status_code=404, detail="Signup form not found")


@router.get("/signup/{id}", response_model=Union[PydanticSignupForm, FormError])
async def get_signup_by_id_route(id: int, db: Session = Depends(get_signup_by_id_async)):
    if id_exists(id):
        signup_data = await get_signup_by_id_async(id=id)
        if signup_data:
            return signup_data
        else:
            return FormError(message="User not found")
    else:
        return FormError(message="ID should be a number")
