from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from queries.signup_queries import create_signup_form
from models.signup_models import SignupForm
from db.db import get_db

router = APIRouter()


@router.post("/signup/", response_model=SignupForm)
def signup(signup_form: SignupForm, db: Session = Depends(get_db)):
    try:
        # Call the create_signup_form function to insert the user into the database
        new_user = create_signup_form(db, signup_form)
        return new_user
    except Exception:
        # Handle any exceptions, such as database errors
        raise HTTPException(status_code=500, detail="Internal server error")
