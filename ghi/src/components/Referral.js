import React, { useState, useEffect } from "react";
import { Container, Col, Row } from "react-bootstrap";
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
            <Row>
        <Col xs={12} sm={6}>
            <form onSubmit={handleRegistration}>
                <div className="form-group">
                    <label htmlFor="phoneNumber">Phone Number:</label>
                    <input
                    type="text"
                    className="form-control"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="address">Location where you normally park:</label>
                    <input
                    type="text"
                    className="form-control"
                    id="address"
                    name="address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="city">City:</label>
                    <select className="form-control" id="city">
                    <option value="boston">Boston</option>
                    <option value="cambridge">Cambridge</option>
                    <option value="somerville">Somerville</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="licensePlate">License Number:</label>
                    <input
                    type="text"
                    className="form-control"
                    id="licensePlate"
                    name="licensePlate"
                    value={licensePlate}
                    onChange={(e) => setLicensePlate(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email (optional):</label>
                    <input
                    type="text"
                    className="form-control"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="name">Name (optional):</label>
                    <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    />
                </div>
            </form>
        </Col>
        <Col xs={12} sm={6}>
            <form>
                <div className="form-group">
                    <label htmlFor="license">
                    License Number:
                    <input
                        type="text"
                        className="form-control"
                        id="license"
                        name="licensePlate"
                        value={licensePlate}
                        onChange={(e) => setLicensePlate(e.target.value)}
                    />
                    </label>
                </div>
                <br />
                <div className="form-group">
                    <label>
                    Email (optional):
                    <input
                        type="text"
                        className="form-control"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    </label>
                </div>
                <br />
                <div className="form-group">
                    <label>
                    Name (optional):
                    <input
                        type="text"
                        className="form-control"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    </label>
                </div>
                <br />
                <button type="submit" className="btn btn-primary">Sign Up</button>
            </form>
        </Col>
        </Row>
    </Container>
    </section>
);
}

export default ReferralSignupForm;