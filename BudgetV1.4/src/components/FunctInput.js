import React, { useState, useEffect } from 'react'

function FunctInput({ handleInput, curr, value }) {
  const [inputValue, setInputValue] = useState(value);

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  const handleChange = (e) => {
    setInputValue(e.target.value);
    handleInput({ type: curr, value: e.target.value });
  }

  return (
    <div>
      <input type='text' value={inputValue} onChange={handleChange} />
    </div>
  )
}

export default React.memo(FunctInput);
