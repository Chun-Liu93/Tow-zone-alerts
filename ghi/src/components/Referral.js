import React, { useState, useEffect } from "react";
import { Container, Col, Row } from "react-bootstrap";
import axios from "axios";

function ReferralSignupForm() {
    const [phoneNumber, setPhoneNumber] = useState("");
    const [city, setCity] = useState("");
    const [otherInputForCity, setOtherInputForCity] = useState(false);
    const [address, setAddress] = useState("");
    const [licensePlate, setLicensePlate] = useState("");
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [howDidYouHear, setHowDidYouHear] = useState("");
    const [otherInputForHowDidYouHear, setOtherInputForHowDidYouHear] = useState(false);
    const [otherSource, setOtherSource] = useState("");


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
    };

    const handleCityChange =(e) => {
        const selectedValue = e.target.value;
        setCity(selectedValue);
        if (selectedValue === "Other") {
            setOtherInputForCity(true);
        } else {
            setOtherInputForCity(false);
        }

    }

    const handleHowDidYouHearChange = (e) => {
        const selectedValue = e.target.value;
        setHowDidYouHear(selectedValue);
        if (selectedValue === "Other") {
            setOtherInputForHowDidYouHear(true);
        } else {
            setOtherInputForHowDidYouHear(false);
        }
    };

    return (
    <section className="body-container" id="connect">
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
            <Row className="row-equal-height">
                <Col xs={6} sm={6}>
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
                        <br />
                        <div className="form-group">
                        <label htmlFor="city">City:</label>
                            <select
                            className="form-control"
                            id="city"
                            value={city}
                            onChange={handleCityChange}
                            >
                            <option value="">Select an option</option>
                            <option value="boston">Boston</option>
                            <option value="cambridge">Cambridge</option>
                            <option value="somerville">Somerville</option>
                            <option value="Other">Other:</option>
                            </select>
                        {otherInputForCity && (
                        <div className="form-group">
                            <label>Other Source:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="otherSource"
                                value={otherSource}
                                onChange={(e) => setOtherSource(e.target.value)}
                            />
                            </div>
                        )}
                        </div>
                        <br />
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
                    </form>
                </Col>
                <Col xs={6} sm={6}>
                    <form>
                        <div className="form-group">
                            <label htmlFor="licensePlate"></label>
                            License Number:
                            <input
                                type="text"
                                className="form-control"
                                id="license"
                                name="licensePlate"
                                value={licensePlate}
                                onChange={(e) => setLicensePlate(e.target.value)}
                            />
                        </div>
                        <br />
                        <div className="form-group">
                            <label htmlFor="howDidYouHear">How did you hear about us:</label>
                            <select
                                className="form-control"
                                id="howDidYouHear"
                                value={howDidYouHear} 
                                onChange={handleHowDidYouHearChange} 
                            >
                                <option value="">Select an option</option> 
                                <option value="Realtor/Real Estate Agent">Real Estate</option>
                                <option value="Facebook">Facebook</option>
                                <option value="Alumni Email">Alumni Email</option>
                                <option value="Flier">Fliers</option>
                                <option value="Boston Global Article">Boston Global Article</option>
                                <option value="Channel 7 News">Channel 7 News</option>
                                <option value="Other">Other:</option>
                            </select>
                        </div>
                        {otherInputForHowDidYouHear && (
                        <div className="form-group">
                            <label>Other Source:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="otherSource"
                                value={otherSource}
                                onChange={(e) => setOtherSource(e.target.value)}
                            />
                        </div>
                        )}
                        <br />
                        <div className="form-group">
                            <label>
                            Email (optional):
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="email"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <br />
                        <div className="form-group">
                            <label>
                            Name (optional):
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                name="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
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