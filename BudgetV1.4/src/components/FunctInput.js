import React from 'react'

function FunctInput({handleInput, curr}) { 

    

  return (
    <div>
        <input type='text' onChange={(e) => handleInput({type: curr, value: e.target.value})}/> 
    </div>
  )
}

export default React.memo (FunctInput)