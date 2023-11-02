"use client"
import React, { useState } from 'react';

const Functionality = () => {
  const [userInput, setUserInput] = useState('');
  const [priority, setPriority] = useState('low');
  const [completionTime, setCompletionTime] = useState('');
  const [done, setDone] = useState('All');
  const [list, setList] = useState([]);

  const updateInput = (value) => {
    setUserInput(value);
  };

  
  const updatePriority = (value) => {
    setPriority(value);
  };

  const updateCompletionTime = (value) => {
    setCompletionTime(value);
  };

  const updateDone = (value) => {
    setDone(value);
  }

  const addItem = () => {
    if (userInput !== '') {
      const userInputItem = {
        id: Math.random(),
        value: userInput,
        priority: priority,
        completionTime: completionTime,
        status : done,
      };

      setList([...list, userInputItem]);
      setUserInput('');
      setPriority('low');
      setCompletionTime('');
      setDone('All');
    }
  };

  const deleteItem = (itemId) => {
    const updatedList = list.filter((item) => item.id !== itemId);
    setList(updatedList);
  };

  return (
    <div className='first'>
      <div className='text'>TODO_LIST</div>
      <div className='name-text'>Shivani</div>
      <div className='input-text'>
        <input
          className='input'
          placeholder="Add item..."
          value={userInput}
          onChange={(item) => updateInput(item.target.value)}
        />
        <select
          className='select'
          value={priority}
          onChange={(e) => updatePriority(e.target.value)}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>

        <input
          className='time'
          placeholder="Completion Time"
          value={completionTime}
          onChange={(item) => updateCompletionTime(item.target.value)}
        />

        <select 
            className='select'
            value={done}
            onChange={(e) => updateDone(e.target.value)}
        >
            <option value="Done">Done</option>
            <option value="Not Done">Not Done</option>
            <option value="All">All</option>  
        </select>

        <button className='button' onClick={addItem}>
          ADD
        </button>

      </div>
      <div className='secondDiv'>
        {list.length > 0 ? (
          list
            .filter((item) =>{
                if (done === "All"){
                    return true
                }else{
                    return item.status === done;
                }

            })
            .map((item) => (
                <div key={item.id} className='innerDiv'>
                <span className="item-text">{item.value}</span>
                <span className="item-text">Priority: {item.priority}</span>
                <span className="item-text">Completion Time: {item.completionTime}</span>
                <span className='item-text'>Status: {item.status}</span>
                <span>
                    <button className='innerButton' onClick={() => deleteItem(item.id)}>
                    Delete
                    </button>
                </span>
                </div>
          ))
        ) : (
          <div className='lastDiv'>No items in the list</div>
        )}
      </div>
    </div>
  );
};

export default Functionality;



