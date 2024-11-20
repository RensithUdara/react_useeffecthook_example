import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [error, setError] = useState("");
  const [data, setData] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  const handleResize = () => {
    console.log('Resizing');
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    console.log("Effect ran only on first render");
  }, []);

  useEffect(() => {
    console.log('Count or Error changed', count, error);
  }, [count, error]);

  useEffect(() => {
    const fetchData = async () => {
      console.log('Fetching data...');
      try {
        const response = await new Promise((resolve) =>
          setTimeout(() => resolve({ data: "Hello World" }), 1000)
        );
        setData(response.data);
      } catch (e) {
        console.error("Error fetching data", e);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      console.log("Timer tick");
    }, 1000);

    return () => {
      clearInterval(timer);
      console.log("Timer cleaned up");
    };
  }, []);

  return (
    <div className={`App ${darkMode ? "dark" : ""}`}>
      <header className="App-header">
        <h1>useEffect Examples</h1>
        <button className="toggle-btn" onClick={() => setDarkMode(!darkMode)}>
          Toggle {darkMode ? "Light" : "Dark"} Mode
        </button>
      </header>

      <div className="content">
        <div className="count-display">{count}</div>
        <button
          className="action-btn"
          onClick={() => {
            setCount(count + 1);
          }}
        >
          + Increment
        </button>

        <button
          className="action-btn error-btn"
          onClick={() => {
            if (count > 3) {
              setError("There is an Error");
            }
          }}
        >
          Trigger Error
        </button>

        <div className="error">{error}</div>

        <div className="data">Fetched Data: {data}</div>
      </div>
    </div>
  );
}

export default App;
