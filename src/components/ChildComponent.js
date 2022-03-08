import React from 'react';

function ChildComponent({ greetHandler }) {
  return <button onClick={() => greetHandler('child')}>Greet Parent</button>;
}

export default ChildComponent;
