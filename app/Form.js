const Form = () => {
  return (
    <div className="form-container">
      <input
        id="myInput"
        type="text"
        placeholder="text"
      />
      <br />
      <label id="pro">Priority:</label>
      <select id="Priority">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
      <br />
      <label id="time">Timing</label>
      <select id="timing">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
      <br />
      <input
        placeholder="ADD"
      />
    </div>
  );
};

export default Form;

