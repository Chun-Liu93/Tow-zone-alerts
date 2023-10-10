steps = [
    [
        """
        CREATE TABLE signup_form (
        id SERIAL PRIMARY KEY NOT NULL,
        phone_number VARCHAR(10) NOT NULL UNIQUE,
        city VARCHAR(20) NOT NULL,
        address VARCHAR(200) NOT NULL,
        license_plate VARCHAR(10) NULL,
        email VARCHAR(40) NULL,
        name VARCHAR(40) NULL,
        referee VARCHAR(10) NULL
        );
        """,
        """
        DROP TABLE signup_form;
        """,
    ],
]
