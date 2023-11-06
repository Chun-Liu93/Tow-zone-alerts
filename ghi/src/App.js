import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReferralSignupForm from "./components/Referral";
import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Footer";
import { GoogleAPI } from "./components/GoogleMap"; // Import GoogleAPI
import { FindAddress } from "./components/Places";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ReferralSignupForm />
      <FindAddress />
      <GoogleAPI /> {/* Use the GoogleAPI component here */}
      <Footer />
    </div>
  );
}

export default App;
