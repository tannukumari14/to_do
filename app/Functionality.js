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
  };

  const addItem = () => {
    if (userInput !== '') {
      const userInputItem = {
        id: Math.random(),
        value: userInput,
        priority: priority,
        completionTime: completionTime,
        status: done,
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

  const toggleDone = (itemId) => {
    const updatedList = list.map((listItem) => {
      if (listItem.id === itemId) {
        return { ...listItem, status: listItem.status === 'Done' ? 'Not Done' : 'Done' };
      }
      return listItem;
    });

    setList(updatedList);
  };

  return (
    <div style={{ margin: 'auto', maxWidth: '80%' }}>
      <div style={{ fontSize: '24px', textAlign: 'center' }}>TODO_LIST</div>
      <div style={{ fontSize: '18px', textAlign: 'center' }}></div>
      <div>
        <input
          style={{ padding: '6px', marginRight: '10px' }}
          id="add_item"
          type="text"
          placeholder="Add item..."
          value={userInput}
          onChange={(e) => updateInput(e.target.value)}
        />
        <select
         id="pro"
          style={{ padding: '6px', marginRight: '10px' }}
          value={priority}
          onChange={(e) => updatePriority(e.target.value)}
        >
          <option value="low">1</option>
          <option value="medium">2</option>
          <option value="high">3</option>
        </select>

        <input
        id="time"
          style={{ padding: '6px', marginRight: '10px' }}
          type="text"
          placeholder="Excimeted Time"
          value={completionTime}
          onChange={(e) => updateCompletionTime(e.target.value)}
        />

        <select
        id="select"
          style={{ padding: '6px', marginRight: '10px' }}
          value={done}
          onChange={(e) => updateDone(e.target.value)}
        >
          <option value="Done">Done</option>
          <option value="Not Done">Not Done</option>
          <option value="All">All</option>
        </select>

        <button
          style={{ padding: '8px 16px' }}
          onClick={addItem}
        >
          ADD
        </button>
      </div>
      <div>
        <table style={{ width: '100%' }}>
          <thead>
            <tr>
              <th style={{ width: '25%' }}>Item</th>
              <th style={{ width: '25%' }}>Priority</th>
              <th style={{ width: '25%' }}>Excimeted</th>
              <th style={{ width: '25%' }}>Status</th>
            </tr>
          </thead>
          <tbody>
            {list.length > 0 ? (
              list
                .filter((item) => {
                  if (done === 'All') {
                    return true;
                  } else {
                    return item.status === done;
                  }
                })
                .map((item) => (
                  <tr key={item.id}>
                    <td
                      style={{
                        border: '1px solid #ccc',
                        padding: '6px',
                        textDecoration: item.status === 'Done' ? 'line-through' : 'none',
                      }}
                    >
                      {item.value}
                    </td>
                    <td
                    id="priority"
                      style={{
                        border: '1px solid #ccc',
                        padding: '6px',
                        textDecoration: item.status === 'Done' ? 'line-through' : 'none',
                      }}
                    >
                      Priority: {item.priority}
                    </td>
                    <td
                      style={{
                        border: '1px solid #ccc',
                        padding: '6px',
                        textDecoration: item.status === 'Done' ? 'line-through' : 'none',
                      }}
                    >
                      Completion Time: {item.completionTime}
                    </td>
                    <td
                    id="com"
                      style={{
                        border: '1px solid #ccc',
                        padding: '6px',
                        textDecoration: item.status === 'Done' ? 'line-through' : 'none',
                      }}
                    >
                      Status: {item.status}
                    </td>
                    <td style={{ border: '1px solid #ccc', padding: '6px' }}>
                      <button onClick={() => deleteItem(item.id)}>Delete</button>
                    </td>
                    <td style={{ border: '1px solid #ccc', padding: '6px' }}>
                      <button onClick={() => toggleDone(item.id)}>
                        {item.status === 'Done' ? 'Not Done' : 'Done'}
                      </button>
                    </td>
                  </tr>
                ))
            ) : (
              <tr>
                <td
                  colSpan="4"
                  style={{ border: '1px solid #ccc', padding: '6px', textAlign: 'center' }}
                >
                  No items in the list
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Functionality;
