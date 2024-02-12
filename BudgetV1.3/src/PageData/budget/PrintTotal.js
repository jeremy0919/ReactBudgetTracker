import React from 'react';
import useListTotal from '../../DisplayGraphic/useListTotal';
import TrashCan from "../../images/trashCan.png";
import { useCookies } from 'react-cookie';
import HandleServer from '../../components/HandleServer';

function PrintTotal(props) {
  const arr = useListTotal(props.Server1, props.Server2);
  const [cookies] = useCookies(['UserData']);
  const handleDeleteItem = (index) => {
   const obj = {
      GUID: cookies.UserData,
      listName: index
   }
   HandleServer(obj, "Delete List")
 
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

