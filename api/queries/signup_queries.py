from sqlalchemy.orm import Session
from ..models.signup_models import SignupForm


def create_signup_form(db: Session, signup_form: SignupForm):
    db_signup_form = SignupForm(**signup_form.dict())
    db.add(db_signup_form)
    db.commit()
    db.refresh(db_signup_form)
    return db_signup_form