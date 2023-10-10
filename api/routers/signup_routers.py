from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from queries.signup_queries import create_signup_form
from models.pydantic_models import SignupForm
from db.db import get_db

router = APIRouter()


@router.post("/signup/", response_model=SignupForm)
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



# @router.get("/signup/{signup_id}", response_model=SignupForm)
# def get_signup_form_by_id(signup_id: int, db: Session = Depends(get_db)):
#     signup_form = db.query(SignupForm).filter(SignupForm.id == signup_id).first()
#     if not signup_form:
#         raise HTTPException(status_code=404, detail="SignupForm not found")
#     return signup_form
