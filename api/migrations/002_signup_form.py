steps = [
    [
        """
        CREATE TABLE signup_form (
        id SERIAL PRIMARY KEY NOT NULL,
        phone_number VARCHAR(100) NOT NULL UNIQUE,
        address VARCHAR(350) NOT NULL,
        license_plate VARCHAR(10) NULL,
        email VARCHAR(40) NULL,
        name VARCHAR(40) NULL
        );
        """,
        """
        DROP TABLE signup_form;
        """,
    ],
]
