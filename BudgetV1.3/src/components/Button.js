import React from 'react'

function Button({handleClick, children}) {
  return (
    <div>
      
       <button className='Buttons' onClick={handleClick}> <span className='Span'></span>{children}  </button>
      
    </div>
  )
}

export default Button