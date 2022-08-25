import { useSelector, useDispatch } from 'react-redux';
import { useRef } from 'react'
import './App.css';

function App() {
  const counter = useSelector((state)=>state.counter);
  const dispatch =  useDispatch();
  const inputValue = useRef(null);

  const increment = (value) => {
    dispatch({
      type: 'INC', 
      payload: parseInt(inputValue.current.value)
    })
  }

  const decrement = (value) => {
    dispatch({
      type: 'DEC', payload: parseInt(inputValue.current.value)
    })
  }

  const resetCounter = () => {
    dispatch({
      type: 'RESET'
    })
  }

  return (
    <div>
      <h1>Counter App</h1>
      <h2>{counter}</h2>
      <button onClick={increment}>Increment by: </button>
      <input type="text" ref={inputValue}></input>
      <button onClick={decrement}> :Decrement by</button>
      <br></br><br></br>
      <button onClick={resetCounter}>Reset Counter</button>
    </div>
  );
}

export default App;
