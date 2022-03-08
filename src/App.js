import React from 'react';
import './style.css';
import Greet from './components/Greet';
import Message from './components/Message';
import Counter from './components/Counter';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';

//HOOKS
import Usestate from './hooks/Usestate';
import Useeffect from './hooks/Useeffect';
import Usecontext from './hooks/Usecontext';
import ReducerCounterOne from './hooks/ReducerCounterOne';

export default function App() {
  return (
    <div>
      <ReducerCounterOne />

      {/* <FirstContext value={'Aashish'}>
        <SecondContext value={'Rajguru'}>
          <Usecontext />
        </SecondContext>
      </FirstContext> */}

      {/* <Useeffect /> */}

      {/* <Usestate /> */}

      {/* <ParentComponent /> */}

      {/* <EventBind /> */}

      {/* <Counter /> */}

      {/* <Message /> */}

      {/* <Greet name="Aashish" hero="Batman">
        <p>This is children Props</p>
      </Greet>
      <Greet name="Preeti" hero="Batwoman">
        <button>Click</button>
      </Greet> */}
    </div>
  );
}
