import React from 'react';
import useListTotal from '../../DisplayGraphic/useListTotal';
import TrashCan from "../../images/trashCan.png";
import { useCookies } from 'react-cookie';
import HandleServer from '../../components/HandleServer';
import { usePageContext } from '../../Context/RenderPage1';
function PrintTotal(props) {
  const {currPage, setCurrPage} = usePageContext()  
  const arr = useListTotal(props.Server1, props.Server2);
  const [cookies] = useCookies(['UserData']);
  const handleDeleteItem = (index) => {
   const obj = {
      GUID: cookies.UserData,
      listName: index
   }
   HandleServer(obj, "Delete List")
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
              <button className='OtherButtonImage' onClick={() => handleDeleteItem(item[0])}>
                <img src={TrashCan} alt="Delete" className='OtherButton'/>
              </button>
            )}
            <span style={{ marginLeft: '8px' }}>{item[0]}: ${item[1]}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PrintTotal;

