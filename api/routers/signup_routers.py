from fastapi import APIRouter
from fastapi import Depends, HTTPException
from sqlalchemy.orm import Session

from ..queries.signup_queries import create_signup_form
from ..models.signup_models import SignupForm
from ..db import get_db

router = APIRouter()

@router.post("/signup/", response_model=SignupForm)
def signup(signup_form: SignupForm, db: Session = Depends(get_db)):
    return create_signup_form(db, signup_form)
