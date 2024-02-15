import React from 'react'
import Button from '../components/Button'

function SideBarUser() {
    const editUserDetails = () => {
        alert("create new page maybe? havent decided yet")
    }
  return (
    <div>
        <Button handleClick={editUserDetails} > Change Account Information</Button>
    </div>
  )
}

export default SideBarUser