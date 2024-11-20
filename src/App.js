import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react'

function App() {

  const [count, setCount] = useState(0);

  const [error, setError] = useState("");

  useEffect(() => {
    console.log('Effect Running' + count)
  }, [count]);

  // useEffect(() => {
  //   console.log('Effect Running')
  // }, []);

  // useEffect(() => {
  //   console.log('Effect Running')
  // });

  return (
    <div className="App">
      <div>{count}</div>
      <button onClick={() => {
        setCount(count + 1);
      }}> + Increment</button>

      <button onClick={() => {
        if (count > 3 ) {
          setError("There is an Error");
        }
      }}> Error Button</button>

    </div>
  );
}

export default App;
