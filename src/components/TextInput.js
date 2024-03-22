import React, { useState } from "react";

const TextInput = () => {
  const [userInput, setUserInput] = useState(1)

  function handleInputChange(event) {
    setUserInput(event.target.value);
  }

  return (
    <>
      <input
        type="number"
        min='1'
        max='80'
        value={userInput}
        onChange={handleInputChange}
        className='w-12 justify-center text-center border-2'
      />
    </>
  )
}

export default TextInput