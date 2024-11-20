import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react'

function App() {

  const [count, setCount] = useState(0);

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
    </div>
  );
}

export default App;
