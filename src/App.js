import logo from './logo.svg';
import './App.css';
import { Link, useLocation, BrowserRouter as Router } from "react-router-dom";

// http://localhost:3000&wow=github
// window.location.href = "https://github.com";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function Home() {
  const query = useQuery();
  console.log(query.get("wow"));
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          I am too lazy to change the default home page ¯\_(ツ)_/¯
        </p>
      </header>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Home />
    </Router>
  );
}

export default App;
