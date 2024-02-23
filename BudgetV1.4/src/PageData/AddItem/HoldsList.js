import React from 'react';
import HandleServer from '../../components/HandleServer';
import { useListContext } from '../../Context/CurrentList';
import { useCookies } from 'react-cookie';
import { useRenderContext } from '../../Context/ReRenderList';
import { v4 as uuidv4 } from 'uuid';
function HoldsList(props) {
  const {CurrentList} = useListContext();
  const [cookies] = useCookies(['UserData']);
  const {amRendering, setAmRendering} = useRenderContext();
  const handleUpdateList = () => { 
    const productGUID = uuidv4();
    const obj = {
      Product: props.props.Product,
      Cost: props.props.Cost,
      Category: props.props.Category,
      GUID: cookies.UserData,
      productGUID:productGUID, // added so that when listnames get deleted or edited GUID can still be used to remove
      ListID: CurrentList
    }
    HandleServer(obj, 'Add Item').then(() => {
      setAmRendering(!amRendering)
    }).catch(error => {
      console.error('Error updating list:', error);
    });
  };

  return (
    <div >
      <button className='Buttons' onClick={handleUpdateList}>   <span className='Span'></span>Update List</button>

  
    </div>
  );
}

export default HoldsList;
