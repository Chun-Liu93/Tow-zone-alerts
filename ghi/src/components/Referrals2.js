// import React, { useState, useEffect } from "react";
// import { Container, Col, Row } from "react-bootstrap";


// const defaultUserValues = {
//     email: "",
//     city: undefined,
//     state: ""
// }

// function ReferralSignupForm() {
//     const [phoneNumber, setPhoneNumber] = useState("");
//     const [city, setCity] = useState("");
//     const [otherInputForCity, setOtherInputForCity] = useState(false);
//     const [address, setAddress] = useState("");
//     const [licensePlate, setLicensePlate] = useState("");
//     const [email, setEmail] = useState("");
//     const [name, setName] = useState("");
//     const [keepUpdated, setKeepUpdated] = useState("")
//     const [localArtist, setLocalArtist] = useState("")
//     const [referee, setReferee] = useState("");
//     const [howDidYouHear, setHowDidYouHear] = useState("");
//     const [otherInputForHowDidYouHear, setOtherInputForHowDidYouHear] = useState(false);
//     const [otherSource1, setOtherSource1] = useState("");
//     const [otherSource2, setOtherSource2] = useState("");
//     const [isValidNumber, setIsValidNumber] = useState(true);
//     const [isValidEmail, setIsValidEmail] = useState(true);
//     const [isFormSubmitted, setIsFormSubmitted] = useState(false);
//     // const [errorMessage, setErrorMessage] = useState(null);
//     // const [successMessage, setSuccessMessage] = useState('');
//     const [result, setResult] = useState(undefined)
//     const  [errors, setErrors] = useState({})
//     const [values, setValues] = useState(defaultUserValues)

//     const handleSignUp = async (e) => {
//         // console.dir({fn:"handleSignUp"})
//         e.preventDefault();
//         setIsFormSubmitted(true);

//         if (!phoneNumber || !city || !address || !howDidYouHear || !keepUpdated || !localArtist) {
//             console.error('Required fields are missing.');
//             return;
//         }
//         if(!isValidNumber) {
//             return;
//         }
//         if(!isValidEmail) {
//             return;
//         }    
        
//         const accountData = {
//         phone_number: phoneNumber,
//         license_plate: licensePlate,
//         email,
//         name,
//         city,
//         address,
//         keepUpdated,
//         localArtist,
//         };
        


//         const response = await fetch('https://nmihika.pythonanywhere.com/google_form_trigger', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(accountData),
//         })
//         const json = await response.json()
//         setResult(json)
//     };

//     const validateNumber = (input) => {
//         const phoneValidation = /^[0-9]{10}$/;
//         return phoneValidation.test(input);
//     }

//     const validateEmail = (email) => {
//         const emailValidation = /^[^\s@]+@[^\s@]+\.(com|net|org|edu|gov|mil|co\.uk|io|ai|us)$/i;
//         return emailValidation.test(email);
//         };

//     const handleCityChange =(e) => {
//         const selectedValue = e.target.value;
//         setCity(selectedValue);
//         if (selectedValue === "Other") {
//             setOtherInputForCity(true);
//         } else {
//             setOtherInputForCity(false);
//         }
//     }
    
//     const handleHowDidYouHearChange = (e) => {
//         const selectedValue = e.target.value;
//         setHowDidYouHear(selectedValue);
//         if (selectedValue === "Other") {
//             setOtherInputForHowDidYouHear(true);
//         } else {
//             setOtherInputForHowDidYouHear(false);
//         }
//     };

//     return (
//     <section className="body-container" id="connect">
//         <Container>
//             <h1>Tow Zone Alerts (TZA) Sign Up Form</h1>
//             <p>
//             <br />
//             Welcome to Tow Zone Alerts (TZA)! We hope our reminder and peer-to-peer texts help you avoid tickets and towings. In the process, we aim to increase civic and community engagement. To that end, if you indicate that you're interested (in Question 5), we'll tell you about events put on by local community groups, artists, and businesses in your area.
//             </p>
//             <p>
//             <br />
//             You can always opt out of the text line by responding to our phone number (844-997-4214) “I'm out”. If you're interested but have doubts, read our privacy policy here or reach out to us (617-870-3853 or towzonealerts@gmail.com).
//             </p>
//             <p>
//             <br />
//             Check out our website towzonealerts.com and our backstory.
//             </p>
//             {result && JSON.stringify(result)}
//             <form onSubmit={handleSignUp}>
//             <Row className="row-equal-height">
//                 <Col xs={6} sm={6}>
//                         <div className="form-group">
//                             <label htmlFor="phoneNumber">Phone Number:</label>
//                             <input
//                             type="text"
//                             className="form-control"
//                             id="phoneNumber"
//                             name="phoneNumber"
//                             value={phoneNumber}
//                             onChange={(e) => setPhoneNumber(e.target.value)}
//                             />
//                         </div>
//                         <br />
//                         <div className="form-group">
//                         <label htmlFor="city">City:</label>
//                             <select
//                             className="form-control"
//                             id="city"
//                             value={city}
//                             onChange={handleCityChange}
//                             >
//                             <option value="">Select an option</option>
//                             <option value="boston">Boston</option>
//                             <option value="cambridge">Cambridge</option>
//                             <option value="somerville">Somerville</option>
//                             <option value="Other">Other:</option>
//                             </select>
//                         {otherInputForCity && (
//                         <div className="form-group">
//                             <label>Other Source:</label>
//                             <input
//                                 type="text"
//                                 className="form-control"
//                                 id="otherSource1"
//                                 value={otherSource1}
//                                 onChange={(e) => setOtherSource1(e.target.value)}
//                             />
//                             </div>
//                         )}
//                         </div>
//                         <br />
//                         <div className="form-group">
//                             <label htmlFor="address">Location where you normally park:</label>
//                             <input
//                             type="text"
//                             className="form-control"
//                             id="address"
//                             name="address"
//                             value={address}
//                             onChange={(e) => setAddress(e.target.value)}
//                             />
//                         </div>
//                 </Col>
//                 <Col xs={6} sm={6}>
//                         <div className="form-group">
//                             <label htmlFor="licensePlate"></label>
//                             License Plate Number (optional):
//                             <input
//                                 type="text"
//                                 className="form-control"
//                                 id="license"
//                                 name="licensePlate"
//                                 value={licensePlate}
//                                 onChange={(e) => setLicensePlate(e.target.value)}
//                             />
//                         </div>
//                         <br />
//                         <div className="form-group">
//                             <label htmlFor="howDidYouHear">How did you hear about us:</label>
//                             <select
//                                 className="form-control"
//                                 id="howDidYouHear"
//                                 value={howDidYouHear} 
//                                 onChange={handleHowDidYouHearChange} 
//                             >
//                                 <option value="">Select an option</option> 
//                                 <option value="Realtor/Real Estate Agent">Real Estate</option>
//                                 <option value="Facebook">Facebook</option>
//                                 <option value="Alumni Email">Alumni Email</option>
//                                 <option value="Flier">Fliers</option>
//                                 <option value="Boston Global Article">Boston Global Article</option>
//                                 <option value="Channel 7 News">Channel 7 News</option>
//                                 <option value="Other">Other:</option>
//                             </select>
//                         </div>
//                         {otherInputForHowDidYouHear && (
//                         <div className="form-group">
//                             <label>Other Source:</label>
//                             <input
//                                 type="text"
//                                 className="form-control"
//                                 id="otherSource2"
//                                 value={otherSource2}
//                                 onChange={(e) => setOtherSource2(e.target.value)}
//                             />
//                         </div>
//                         )}
//                         <br />
//                         <div className="form-group">
//                             <label>
//                             Email (optional):
//                             </label>
//                             <input
//                                 type="text"
//                                 className="form-control"
//                                 id="email"
//                                 name="email"
//                                 value={email}
//                                 onChange={(e) => setEmail(e.target.value)}
//                             />
//                         </div>
//                         <br />
//                         <div className="form-group">
//                             <label>
//                             Name (optional):
//                             </label>
//                             <input
//                                 type="text"
//                                 className="form-control"
//                                 name="name"
//                                 value={name}
//                                 onChange={(e) => setName(e.target.value)}
//                             />
//                         </div>
//                         <br />
//                         <div className="form-group">
//                             <label htmlFor="keepUpdated">Want to receive the occasional text message about events/promotions from local businesses and artists? </label>
//                             <input
//                                 type="text"
//                                 className="form-control"
//                                 id="question2"
//                                 name="keepUpdated"
//                                 value={keepUpdated}
//                                 onChange={(e) => setKeepUpdated(e.target.value)}
//                             >
//                             </input>
//                         </div>
//                         <br /> 
//                         <div className="form-group">
//                             <label htmlFor="localArtist">Know a local business or artist that is interested in advertising?</label>
//                             <input
//                                 type="text"
//                                 className="form-control"
//                                 id="question2"
//                                 name="localArtist"
//                                 value={localArtist}
//                                 onChange={(e) => setLocalArtist(e.target.value)}
//                             >
//                             </input>
//                         </div>
//                         <br />
//                         <div className="form-group">
//                             <label>
//                             Referee (optional):
//                             </label>
//                             <input
//                                 type="text"
//                                 className="form-control"
//                                 name="referee"
//                                 value={referee}
//                                 onChange={(e) => setReferee(e.target.value)}
//                             />
//                         </div>
//                         <br />
//                         <button type="submit" className="btn btn-primary">Sign Up</button>
                    
//                 </Col>
//             </Row>
//             </form>
//         </Container>
//     </section>
// );
// }

// export default ReferralSignupForm;