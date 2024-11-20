import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react'

function App() {

  const [count, setCount] = useState(0);

  const [error, setError] = useState("");

  const handleResize = () => {
    console.log('Resizing')
  };

  useEffect(() => {
    window.addEventListener("resize" , handleResize)

    return () => {

    }
  }, []);

  // useEffect(() => {
  //   console.log('Effect Running' + count)
  // }, [count , error]);

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
        if (count > 3) {
          setError("There is an Error");
        }
      }}> Error Button</button>

    </div>
  );
}

export default App;
