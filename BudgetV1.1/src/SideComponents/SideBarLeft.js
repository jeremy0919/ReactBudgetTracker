import React, {useEffect, useState} from 'react'
import Button from '../components/Button'
import { useListContext } from '../Context/CurrentList';
import { useAccountContext } from '../Context/AccountInfo';
import { useCookies } from 'react-cookie';
import HandleServer from '../components/HandleServer';
function SideBarLeft() {
  const {CurrentList, ChangeList} = useListContext();
    const {updateAccountInfo} = useAccountContext()
    const [newList, changeList] = useState()
    const [ListArray, Updt] = useState([])
    const [newBudget, changeBudget] = useState()
    const [cookies] = useCookies(['UserData']);
    const Button2 = () => {
      updateAccountInfo({Budget:newBudget})
      const obj= {
        GUID: cookies.UserData,
        budget:newBudget
      }
      HandleServer(obj,"Update Budget")
    };
    const Button3 = (e) => {
      updateAccountInfo({CurrentList:e.target.value})
      ChangeList(e.target.value)
      console.log(CurrentList)
    };
    const Button4 = () => {
      const obj= {
        GUID: cookies.UserData,
        NewList:newList
      }
      
      HandleServer(obj,"Make List")
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
              <div className='SideBar' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}> 

            <p>Budget: </p>
            <p>Remaining Budget:</p>
          
           <input type="text" onChange={(e)=>changeBudget(e.target.value)}/>
           <Button handleClick={Button2}>Change Max Budget</Button>


          <p>  Change current List(dropDown)</p>
            <select onChange={Button3}>
                    {/* Map over the list names and generate options */}
                    {ListArray.map((ListName, index) => (
                        <option key={index} value={ListName}>
                            {ListName}
                        </option>
                    ))}
                </select>
              <input type='text' onChange={(e) => changeList(e.target.value)}></input>
            <Button handleClick={Button4}>Create New list</Button>
        
           
         
        </div>
    </div>
  )
}

export default SideBarLeft