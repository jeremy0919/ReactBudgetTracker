import React from 'react'
import Button from '../components/Button'
import { usePageContext } from '../Context/RenderPage1';
function SideBarUser() {
  const {setCurrPage} = usePageContext();
    const editUserDetails = () => {
        setCurrPage(7)
    }
  return (
    <div>
        <Button handleClick={editUserDetails} > Change Account Information</Button>
    </div>
  )
}

export default SideBarUser