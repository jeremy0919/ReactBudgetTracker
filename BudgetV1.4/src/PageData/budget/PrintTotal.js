import React, {useState} from 'react';
import useListTotal from '../../DisplayGraphic/useListTotal';
import TrashCan from "../../images/trashCan.png";
import { useCookies } from 'react-cookie';
import HandleServer from '../../components/HandleServer';
import { usePageContext } from '../../Context/RenderPage1';

function PrintTotal(props) {
  const {currPage, setCurrPage} = usePageContext()  
  const arr = useListTotal(props.Server1, props.Server2);
  const [cookies] = useCookies(['UserData']);
  const [isOpen, setIsOpen] = useState(false);

    const openPopUp = () => {
        setIsOpen(true);
    }

    const closePopUp = () => {
        setIsOpen(false);
    }
    const handleDeleteItemsInList = (index) => {
      const obj = { // object needs list name and GUID 
         GUID: cookies.UserData,
         listName: index
      }
      HandleServer(obj, "Delete items in list")
      if(currPage ===6){
       setCurrPage(4)
      }
   
      if(currPage ===4){
       setCurrPage(6)
      }
   
     };
    const handleEmptyList = (index) => {
      const obj = { // object needs list name and guid
         GUID: cookies.UserData,
         listName: index
      }
      HandleServer(obj, "Remove list name from items")
      if(currPage ===6){
       setCurrPage(4)
      }
   
      if(currPage ===4){
       setCurrPage(6)
      }
   
     };
  const handleDeleteList = (index) => {//object needs list name and userID
   const obj = {
      GUID: cookies.UserData,
      listName: index
   }
   HandleServer(obj, "Delete list and remove items from list")
   if(currPage ===6){
    setCurrPage(4)
   }

   if(currPage ===4){
    setCurrPage(6)
   }

  };
  const handleDeleteAll = (index) => { // object needs listname and userID
    const obj = {
       GUID: cookies.UserData,
       listName: index
    }
    HandleServer(obj, "Delete list and items")
    if(currPage ===6){
     setCurrPage(4)
    }
 
    if(currPage ===4){
     setCurrPage(6)
    }
 
   };
  return (
    <div>
      <ul style={{ listStyleType: 'none', padding: 0 }}> 
        {arr.map((item, index) => (
          <li key={index} style={{ display: 'flex', alignItems: 'center' }}>
            {props.Server1 !== "Category Names" && (
              <button className='OtherButtonImage' onClick={openPopUp}>
                <img src={TrashCan} alt="Delete" className='OtherButton'/>
              </button>
            )}
            <span style={{ marginLeft: '8px' }}>{item[0]}: ${item[1]}</span>
          </li>
        ))}
      </ul>
      {isOpen && (
                <div className="popup">
                    <div style={{ backgroundColor: 'white', borderRadius: '10px', width:'25%', height:'24%', boxShadow:' 0px 0px 10px 0px rgba(0,0,0,0.5)'}} >
                    <button style={{position:'absolute', top:'37%', right:'38%'}} onClick={closePopUp}>X</button>
                        <p>This is a pop-up with buttons!</p>
                        <button onClick={handleDeleteItemsInList}>Delete items in list</button>
                        <button onClick={handleEmptyList}>Empty List</button>
                        <button onClick={handleDeleteList}>Delete list but save items</button>
                        <button onClick={handleDeleteAll}>Delete All</button>
                    </div>
                </div>
            )}
    </div>
  );
}

export default PrintTotal;

