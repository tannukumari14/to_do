"use client"
import React, { useState } from 'react';
const Form = () => {
  const [userInput, setUserInput] = useState('');
  const [priority, setPriority] = useState(' ');
  const [done, setDone] = useState(false); 
  const [completionTime, setCompletionTime] = useState('');
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

  const addItem = () => {
    if (userInput !== '') {
      const userInputItem = {
        id: Math.random(),
        value: userInput,
        priority: priority,
        completionTime: completionTime,
        done: done, 
      };

      setList([...list, userInputItem]);
      setUserInput('');
      setPriority(' 1');
      setCompletionTime('');
      setDone(false); 
    }
  };

  const deleteItem = (itemId) => {
    const updatedList = list.filter((item) => item.id !== itemId);
    setList(updatedList);
  };

  const toggleDone = (itemId) => {
    const updatedList = list.map((listItem) => {
      if (listItem.id === itemId) {
        return { ...listItem, done: !listItem.done }; 
      }
      return listItem;
    });

    setList(updatedList);
  };

  const shortpro = [...list].sort((a, b) => a.priority - b.priority);

  return (
    <div className="first">
      <div className='mainbox'>
        <div className='text'>TODO_LIS</div>
        <div className='name-text'>Shanti Singh</div>
        <div className='input-text'>
          <input
            className='input'
            placeholder="Add item..."
            value={userInput}
            onChange={(e) => updateInput(e.target.value)}
          />
          <select
            className='select'
            value={priority}
            onChange={(e) => updatePriority(e.target.value)}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
          <input
            className='time'
            placeholder="Completion Time"
            value={completionTime}
            onChange={(e) => updateCompletionTime(e.target.value)}
          />
          <button className='button' onClick={addItem}>
            ADD
          </button>
        </div>
        <div className='secondDiv'>
          {list.length > 0 ? (
            shortpro.map((item) => (
              <div key={item.id} className='innerDiv'>
                <span className="item-text" style={{ textDecoration: item.done ? 'line-through' : 'none' }}> Projectname : {item.value}</span>
                <span className="item-text" style={{ textDecoration: item.done ? 'line-through' : 'none' }}> Priority : {item.priority}</span>
                <span className="item-text" style={{ textDecoration: item.done ? 'line-through' : 'none' }}> Completion Time : {item.completionTime}</span>
                <span className="item-text" style={{ textDecoration: item.done ? 'line-through' : 'none' }}>ProjectDone : {item.done ? 'Yes' : 'No'}</span>
                <span>
                  <button className='innerButton' onClick={() => deleteItem(item.id)}>
                    Delete
                  </button>
                </span>
                <span>
                  <button className='innerButton' onClick={() => toggleDone(item.id)}>
                    {item.done ? 'Done' : 'NotDone'}
                  </button>
                </span>
              </div>
            ))
          ) : (
            <div className='lastDiv'>No items in the list</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Form;
