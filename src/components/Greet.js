import React from 'react';

const Greet = ({ name, hero, children }) => {
  return <div><h1>Hi {name} a.k.a {hero}</h1>
  {children}</div>;
};

export default Greet;
