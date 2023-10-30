# queries.signup_queries.py
from sqlalchemy.orm import Session
from models.sqlalchemy_models import SqlAlchemySignupForm


def create_signup_form(db: Session, signup_form: SqlAlchemySignupForm):
    # Create a new user instance and populate it with the provided data
    new_user = SqlAlchemySignupForm(
        id=signup_form.id,
        phone_number=signup_form.phone_number,
        city=signup_form.city,
        address=signup_form.address,
        license_plate=signup_form.license_plate,
        email=signup_form.email,
        name=signup_form.name,
        referee=signup_form.referee,
    )

    # Add the new user to the session
    db.add(new_user)

    try:
        # Commit the transaction to persist the new user in the database
        db.commit()
        # Refresh the user instance to get the generated ID
        db.refresh(new_user)
        return new_user
    except Exception as e:
        # Handle any database-related errors here
        db.rollback()
        raise e


def get_signup_by_phone_number(db: Session, phone_number: str) -> SqlAlchemySignupForm:
    return db.query(SqlAlchemySignupForm).filter(SqlAlchemySignupForm.phone_number == phone_number).first()


def update_user_data(db: Session, phone_number: str, updated_data: dict) -> SqlAlchemySignupForm:
    user = db.query(SqlAlchemySignupForm).filter(SqlAlchemySignupForm.phone_number == phone_number).first()
    if user:
        for field, value in updated_data.items():
            setattr(user, field, value)
        try:
            db.commit()
            db.refresh(user)
            return user
        except Exception as e:
            db.rollback()
            raise e
    else:
        return None


def delete_signup_record(db: Session, id: int):
    record_to_delete = db.query(SqlAlchemySignupForm).filter(SqlAlchemySignupForm.id == id).first()
    if record_to_delete:
        db.delete(record_to_delete)
        db.commit()


def get_signup_by_id(db: Session, id: int) -> SqlAlchemySignupForm:
    return db.query(SqlAlchemySignupForm).filter(SqlAlchemySignupForm.id == id).first()
