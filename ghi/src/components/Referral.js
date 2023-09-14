import React, { useState, useEffect } from "react";
import { Container, Col } from "react-bootstrap";
import axios from "axios";

function ReferralSignupForm() {
const [phoneNumber, setPhoneNumber] = useState("");
const [address, setAddress] = useState("");
const [licensePlate, setLicensePlate] = useState("");
const [email, setEmail] = useState("");
const [name, setName] = useState("");

const handleRegistration = (e) => {
    e.preventDefault();
    const accountData = {
    phoneNumber,
    address,
    licensePlate,
    email,
    name,
    };

    fetch('/referralsignup', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(accountData),
    })
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
    });
}

return (
    <section className="info" id="connect">
    <Container>
        <h1>Tow Zone Alerts (TZA) Sign Up Form</h1>
        <p>
        <br />
        Welcome to Tow Zone Alerts (TZA)! We hope our reminder and peer-to-peer texts help you avoid tickets and towings. In the process, we aim to increase civic and community engagement. To that end, if you indicate that you're interested (in Question 5), we'll tell you about events put on by local community groups, artists, and businesses in your area.
        </p>
        <p>
        <br />
        You can always opt out of the text line by responding to our phone number (844-997-4214) “I'm out”. If you're interested but have doubts, read our privacy policy here or reach out to us (617-870-3853 or towzonealerts@gmail.com).
        </p>
        <p>
        <br />
        Check out our website towzonealerts.com and our backstory.
        </p>
        <Col xs={12} sm={6}>
            <form onSubmit={handleRegistration}>
                <label>
                    Phone Number:
                    <input
                    type="text"
                    name="phoneNumber"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                </label>
                <br />
                {/* Add similar input fields for other form fields */}
                <button type="submit">Sign Up</button>
            </form>
        </Col>
    </Container>
    </section>
);
}

export default ReferralSignupForm;
