import React, { useReducer } from 'react';
//useReducer with simple state & simple action
const initialState = {
  firstCounter: 0,
};

const reducer = (state, action) => {
  switch (action) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    case 'reset':
      return initialState;
    default:
      return state;
  }
};

function ReducerCounterTwo() {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <div>Count - {count.firstCounter} </div>
      <button onClick={() => dispatch('increment')}>Increment</button>
      <button onClick={() => dispatch('decrement')}>Decrement</button>
      <button onClick={() => dispatch('reset')}>Reset</button>
    </div>
  );
}

export default ReducerCounterTwo;
