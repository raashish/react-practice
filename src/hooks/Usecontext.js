import React, { useState, useEffect, useContext } from 'react';
import { FirstContext, SecondContext } from '../App'

function Usecontext() {
  const first = useContext(FirstContext);
  const second = useContext(SecondContext);
  return <div>{first} - {second}</div>;
}

export default Usecontext;
