import React, { createContext, useState } from 'react';
const CounterContext = createContext({});



const App = (props) => {
  const [count, setCount] = useState({});
  const handleIncrement = (id) => {
    setCount(prevCount => ({
      ...prevCount,
      [id]: (prevCount[id] || 0) + 1
    }));
  }
  debugger;
  const handleDecrement = (id) => {
    setCount(prevCount => ({
      ...prevCount,
      [id]: (prevCount[id] || 0) - 1
    }));
  };
  console.log(count)
  return (
    <>
    <CounterContext.Provider value={{ count, handleIncrement, handleDecrement }}>
     
      
          {props.children}
        
    </CounterContext.Provider>
    </>
  );
};


export {App,CounterContext};
