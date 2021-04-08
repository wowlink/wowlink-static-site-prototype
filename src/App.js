import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import { useLocation, BrowserRouter as Router } from "react-router-dom";

// http://localhost:3000&wow=github
// window.location.href = "https://github.com";

const fakeAsync = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function Home() {
  const query = useQuery();
  const wowlink = query.get("wow");
  const [progress, setProgress] = useState({ msg: "initiation" });

  useEffect(() => {
    const convertAndRedirect = async () => {
      setProgress({ msg: "fetch mappings" });
      await fakeAsync(2000);
      setProgress({ msg: "redirect 🚀🚀🚀" });
    }
    if (!wowlink) {
      setProgress({ msg: "wowlink not found 🔥🔥🔥" });
      return;
    }
    convertAndRedirect();
  }, [wowlink]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          I am too lazy to change the default home page ¯\_(ツ)_/¯
        </p>
        {
          wowlink &&
          <p>
            WowLink: {wowlink}
          </p>
        }
        <p>
          Progress: {progress.msg}
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
