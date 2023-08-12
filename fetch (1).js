import React, { useContext, useEffect, useState } from 'react';
import './FetchData.css';
import { CounterContext } from './App';


const FetchData = () => {
  const { count, handleIncrement, handleDecrement } = useContext(CounterContext);
  const [data, setData] = useState([]);
  const [selectedItemId, setSelectedItemId] = useState(null);

  useEffect(() => {
    fetch('https://fakestoreapi.com/users')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.log(error));
  }, []);

  const handleClick = (itemId) => {
    setSelectedItemId(itemId);
  };

  const selectedItem = data.find(item => item.id === selectedItemId);
console.log(count);
  return (
    <div>
      {data.map(item => (
        <div key={item.id} className="data-item">
          <nav>
            <h3 className="name">{item.username}</h3>
            <div className='sep'>
            <button className="data-button" onClick={() => handleClick(item.id)}>
              Click me
            </button>
            <div>Counter: {count[item.id] || 0}</div>
            <button className="inc-button" onClick={() => handleIncrement(item.id)}>Increment</button>
            <button className="dec-button" onClick={() => handleDecrement(item.id)}>Decrement</button>
            </div>
          </nav>
        </div>
      ))}

      {selectedItem && (
        <div className="selected-item">
          <h2>{selectedItem.name.firstname} {selectedItem.name.lastname}</h2>
          console.log(selectedItem.name.firstname);
          <p>Email: {selectedItem.email}</p>
          <p>Phone: {selectedItem.phone}</p>
          {/* Add additional content here */}
        </div>
      )}
    </div>
  );
};

export default FetchData;
