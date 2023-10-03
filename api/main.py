from fastapi import FastAPI, Depends, HTTPException
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from pydantic import BaseModel
from jose import JWTError, jwt
from passlib.context import CryptContext
from routers import signup_routers
from fastapi.middleware.cors import CORSMiddleware

# Initialize FastAPI app
app = FastAPI()
app.include_router(signup_routers.router)

origins = ["http://localhost:3000"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Secret key to sign JWTs
SECRET_KEY = "your-secret-key"
ALGORITHM = "HS256"


# Create a Pydantic model for user credentials
class User(BaseModel):
    username: str


# Sample user data (in a real app, you'd have a database)
fake_users_db = {
    "testuser": {
        "username": "artemis",
        "password": "cliu093991",
    }
}

# Password hashing
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

# OAuth2 password bearer
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")


# Function to create a JWT token
def create_jwt_token(data: dict):
    to_encode = data.copy()
    token = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    return token


# Function to decode and verify JWT token
def decode_jwt_token(token: str):
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        return payload
    except JWTError:
        raise HTTPException(status_code=401, detail="Could not validate credentials")


# Route to generate a JWT token
@app.post("/token")
def generate_token(form_data: OAuth2PasswordRequestForm = Depends()):
    user = fake_users_db.get(form_data.username)
    if user is None or not pwd_context.verify(form_data.password, user["password"]):
        raise HTTPException(status_code=400, detail="Incorrect username or password")
    
    # Create a JWT token with user data
    token_data = {"sub": user["username"]}
    access_token = create_jwt_token(token_data)
    return {"access_token": access_token, "token_type": "bearer"}


# Protected route that requires a valid JWT token
@app.get("/protected")
def get_protected_data(current_user: User = Depends(decode_jwt_token)):
    return {"message": "This is a protected route", "user": current_user}


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
