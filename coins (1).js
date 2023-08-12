import React from 'react';
import FetchData from './fetch'; 
import './coins.css'
const Data= () => {
  return (
  
        <div className='sidebar'>
      <h1 className='head'>PLAY</h1>
      <div className="content"><FetchData/></div>
      </div>
  );
};

export default Data;
