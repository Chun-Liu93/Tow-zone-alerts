import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Referral } from "./components/Referral";
import { NavBar } from "./components/NavBar"; // Updated the import statement

function App() {
  return (
    <div className="App">
      <NavBar /> {/* Updated component name to NavBar */}
      <Referral />
    </div>
  );
}

export default App;