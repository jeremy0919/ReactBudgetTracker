import React, {useEffect, useState} from 'react'
import Button from '../components/Button'
import { useListContext } from '../Context/CurrentList';
import { useAccountContext } from '../Context/AccountInfo';
import { useCookies } from 'react-cookie';
import HandleServer from '../components/HandleServer';
import { useMyContext } from '../Context/context';
function SideBarLeftPG1() {
  const { setIsGraphicVisible } = useMyContext ();
  const {CurrentList, ChangeList} = useListContext();
  const {updateAccountInfo} = useAccountContext()
  const [newList, changeList] = useState()
  const [ListArray, Updt] = useState([])
  const [cookies] = useCookies(['UserData']);
  const Button2 = () => {
    setIsGraphicVisible(previousState => ({
      Graphic2:false,
      Graphic1: !previousState.Graphic1
    }));
  };
  const Button1 = () => {
    setIsGraphicVisible(previousState => ({
      Graphic1:false,
      Graphic2: !previousState.Graphic2
    }));
    
  };
  const Button3 = (e) => {
    updateAccountInfo({CurrentList:e.target.value})
    ChangeList(e.target.value)
    setIsGraphicVisible({Graphic1:false})
  
  };
  const Button4 = () => {
    const obj= {
      GUID: cookies.UserData,
      NewList:newList
    }
    
    HandleServer(obj,"Make List")
    ChangeList(newList)
    changeList("")
    setIsGraphicVisible({Graphic1:false})
   // Updt(...ListArray, newList)
   
};
useEffect(() => {
  const fetchData = async () => {
      try {
          const obj = { GUID: cookies.UserData }; // Assuming UserData contains the username
          const temp = await HandleServer(obj, "Lists");
          console.log(temp.data)
          Updt(temp.data);
      } catch (error) {
          console.error('Error fetching budget:', error);
      }
  };

  fetchData();
}, [cookies.UserData]);

  return (
    <div>
      
      <p>  Change current List </p>
            <select onChange={Button3}>
                    {/* Map over the list names and generate options */}
                    {ListArray.map((ListName, index) => (
                        <option key={index} value={ListName}>
                            {ListName}
                        </option>
                    ))}
                </select>
                <br></br>
              <input type='text' onChange={(e) => changeList(e.target.value)} value={newList}></input>
            <Button handleClick={Button4}>Create New list</Button>
                     
           
         
              <button className='Buttons' onClick={Button2}>   <span className='Span'></span>Display Spending Chart</button>
            <button className='Buttons' onClick={Button1}> <span className='Span'></span>Print</button>
    </div>
  )
}

export default SideBarLeftPG1