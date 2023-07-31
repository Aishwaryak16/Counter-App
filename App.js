
import { useState } from 'react';
import './App.css';

function App() {
const [value, setValue] = useState(0);
  
  const increment = () =>{
    const res = value + 1;
    setValue(res);
  }

  const decrement = () => {
    const output = value - 1;
    setValue(output);
  }

  const reset = () => {
    setValue(0);
  }

  return (
    <div className="App">
      <div className='counter-container'>
     <h1>Counter</h1>
     <h2 className='mt-3'>{value}</h2>
      <div className='btn-wp mt-4'>
        <button className='btn btn-primary me-3' onClick={increment}>Increment</button>
        <button className='btn btn-danger me-3' onClick={decrement}>Decrement</button>
        <button className='btn btn-secondary' onClick={reset}> Reset </button>
      </div>
    </div>
    </div>
  );
}

export default App;
