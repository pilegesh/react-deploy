import logo from './logo.svg';
import {useState} from 'react'
import './App.css';

function App() {
  const [count, setCount] = useState(0)

  return (
      <div style={{margin:30}}>
        <h2>{count}</h2>
        <button onClick={() => setCount(prevCount => prevCount+1)}>increment</button>
      </div>

  )

}

export default App;
