import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [age, setAge] = useState(0)
  const [hrupper, setUpper] = useState(0)
  const [hrlower, setLower] = useState(0)

  const calculate = () => {           //other way to syntax a function
    const hrupper = (220 - age) * 0.85
    setUpper(hrupper)

    const hrlower = (220 -age) * 0.65
    setLower(hrlower) 
  }

  return (
    <div className="App">
      <h3>Heart rate limits calculator</h3>
      <form>
        <div>
          <label>Age</label>
          <input 
            type = "number"
            value = {age}
            onChange = {e => setAge(e.target.value)}
          />
        </div>
        <div>
          <label>Heart rate limit: </label>
          <output>{hrlower} - {hrupper}</output>
        </div>
      </form>
      <button type="button" onClick={calculate}>Calculate</button>
    </div>
  );
}

export default App;
