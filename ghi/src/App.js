import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReferralSignupForm from './components/Referral';
import { NavBar } from './components/NavBar';
import { Footer } from './components/Footer';
import { GoogleAPI } from './components/GoogleMap';

function App() {
  const [selectedCoordinates, setSelectedCoordinates] = useState({ lat: 42.361145, lng: -71.057083 });

  const markers = [selectedCoordinates];

  return (
    <div className="App">
      <NavBar />
      <ReferralSignupForm onAddressSelect={(coordinates) => setSelectedCoordinates(coordinates)} />
      <GoogleAPI lat={selectedCoordinates.lat} lng={selectedCoordinates.lng} zoom={8} markers={markers} />
      <Footer />
    </div>
  );
}

export default App;