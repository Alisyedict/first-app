import React, { useState } from 'react';

const CustomInput = ({ onEnter }) => {
  const [inputValue, setInputValue] = useState('');

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      onEnter(inputValue);
      setInputValue('');
    }
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAdd = () => {
    onEnter(inputValue);
    setInputValue('');
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default CustomInput;
