"use client"
import React, { useState } from 'react';

function App() {
  const [data, setData] = useState([]);
  const [item, setItem] = useState('');
  const [priority, setPriority] = useState('1');
  const [timing, setTiming] = useState('1'); 

  const addItem = () => {
    const newItem = {
      text: item,
      priority: priority,
      timing: timing,
    };
    setData([...data, newItem]);
    setItem('');
    setPriority('1'); 
    setTiming('1'); 
  };

  const removeData = (indexToRemove) => {
    const updatedData = data.filter((_, index) => index !== indexToRemove);
    setData(updatedData);
  };

  return (
    <div className="first_div">
      <input
        id="input"
        type="text"
        placeholder="Enter text"
        value={item}
        onChange={(e) => setItem(e.target.value)}
      />
      <br />
      <label id="pro">Priority:</label>
      <select
        id="Priority"
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
      >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
      <br />
      <label id="time">Timing:</label>
      <select
        id="timing"
        value={timing}
        onChange={(e) => setTiming(e.target.value)}
      >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
      <br />
      <button id="add" onClick={addItem}>
        Add Item
      </button>
      <br />
	   <ul style={{ display: 'flex', listStyleType: 'none',  whiteSpace: 'pre'}}>
	  {data.map((item, index) => (
		<li key={index}>
		  <span>    		{item.text}    		</span>
		  <span>    		Priority: {item.priority}    		</span>
		  <span>    		Timing: {item.timing}    		</span> 
		  <br /> 
		  <button onClick={() => removeData(index)}>Remove</button>
		  <button>Done</button>
		</li>
	  ))}
	</ul>

    </div>
  );
}

export default App;

