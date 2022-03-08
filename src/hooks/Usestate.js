import React, { useState } from 'react';

function Usestate() {
  //HookCounter 1************
  // const [count, setCount] = useState(0);
  // return (
  //   <>
  //     <h2>Count - {count}</h2>
  //     <br />
  //     <button onClick={() => setCount(count + 1)}>Click Me</button>
  //   </>
  // );

  //HookCounter 2************
  // const initialValue = 0;
  // const [count, setCount] = useState(initialValue);

  // const incrementFive = () => {
  //   for (let i = 0; i < 5; i++) {
  //     // setCount(count + 1)
  //     setCount((prevCount) => prevCount + 1);
  //   }
  // };
  // return (
  //   <>
  //     <h2>Count - {count}</h2>
  //     <br />
  //     <button onClick={() => setCount((prevCount) => prevCount + 1)}>Increment</button>
  //     <button onClick={() => setCount((prevCount) => prevCount - 1)}>Decrement</button>
  //     <button onClick={() => setCount(initialValue)}>Reset</button>
  //     <button onClick={incrementFive}>IncrementFive</button>
  //   </>
  // );

  //useState with object**************(Spread Operator!)
  // const [name, setName] = useState({
  //   firstName: '',
  //   lastName: '',
  // });
  // return (
  //   <div>
  //     <input
  //       type="text"
  //       value={name.firstName}
  //       onChange={(e) => setName({ ...name, firstName: e.target.value })}
  //     />
  //     <input
  //       type="text"
  //       value={name.lastName}
  //       onChange={(e) => setName({ ...name, lastName: e.target.value })}
  //     />
  //     <h2>Your first name is: {name.firstName}</h2>
  //     <h2>Your last name is: {name.lastName}</h2>
  //     <h2>{JSON.stringify(name)}</h2>
  //   </div>
  // );

  //useState with Array***************
  const [items, setItems] = useState([]);
  const addItems = () => {
    setItems([
      ...items,
      {
        id: items.length,
        value: Math.floor(Math.random() * 10) + 1,
      },
    ]);
  };
  return (
    <div>
      <button onClick={addItems}>Add a Number</button>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.value}</li>
        ))}
      </ul>
    </div>
  );
}

export default Usestate;
