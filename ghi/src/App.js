import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReferralSignupForm, { Referral } from "./components/Referral";
import { NavBar } from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar /> 
      <ReferralSignupForm />
    </div>
  );
}

export default App;