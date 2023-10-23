import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReferralSignupForm from "./components/Referral";
// import ReferralSignupForm from './components/Referrals2';
import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Footer";


function App() {
  return (
    <div className="App">
      <NavBar /> 
      <ReferralSignupForm />
      <Footer />
    </div>
  );
}

export default App;