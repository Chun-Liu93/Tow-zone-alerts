from pydantic import BaseModel
# from queries.pool import pool
# from typing import List, Optional


class DuplicateAccountError(ValueError):
    pass


class AccountIn(BaseModel):
    email: str
    username: str
    password: str
