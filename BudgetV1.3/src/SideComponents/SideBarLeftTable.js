import React from 'react'
import Button from '../components/Button'

function SideBarLeftTable() {
 
    const Button1 = () => {
      alert("Sort by name")
    
    };
    const Button2 = () => {
        alert("Sort by Price")
    };
    const Button3 = () => {
        alert("Sort by List")
    };
    const Button4 = () => {
        alert("Sort by Category")
    };
  return (
    <div>
            
           <Button handleClick={Button1}>Sort by Product</Button>
           <Button handleClick={Button2}>Sort by Price </Button>
            <Button handleClick={Button3}>Sort by List</Button>
            <Button handleClick={Button4}>Sort by Category</Button>
        
    
    </div>
  )
}

export default SideBarLeftTable