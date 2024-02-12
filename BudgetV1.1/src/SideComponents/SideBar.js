import React from 'react'

function SideBar({ComponentToRender1}) {

  return (
    <div>
              <div className='SideBar' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}> 
              <ComponentToRender1></ComponentToRender1>
        
           
         
        </div>
    </div>
  )
}

export default SideBar