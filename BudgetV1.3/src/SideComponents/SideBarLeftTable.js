import React from 'react'
import Button from '../components/Button'
import { useOrderContext } from '../Context/OrderToRender';
function SideBarLeftTable() {
  const {currOrder, setCurrOrder} = useOrderContext();
    const Button1 = () => {
     if(currOrder==='AlphabeticalAscending'){
      setCurrOrder('AlphabeticalDescending')
     }
     else{
      setCurrOrder('AlphabeticalAscending')
     }
    };
    const Button2 = () => {
      if(currOrder==='CostAscending'){
        setCurrOrder('CostDescending')
       }
       else{
        setCurrOrder('CostAscending')
       }
    };
    const Button3 = () => {
      if(currOrder==='ListAscending'){
        setCurrOrder('ListDescending')
       }
       else{
        setCurrOrder('ListAscending')
       }
    };
    const Button4 = () => {
      if(currOrder==='CategoryAscending'){
        setCurrOrder('CategoryDescending')
       }
       else{
        setCurrOrder('CategoryAscending')
       }
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