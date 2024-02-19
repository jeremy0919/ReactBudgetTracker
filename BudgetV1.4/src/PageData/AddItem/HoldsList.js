import React from 'react';
import HandleServer from '../../components/HandleServer';
import { useListContext } from '../../Context/CurrentList';
import { useCookies } from 'react-cookie';
import { useRenderContext } from '../../Context/ReRenderList';
function HoldsList(props) {
  const {CurrentList} = useListContext();
  const [cookies] = useCookies(['UserData']);
  const {amRendering, setAmRendering} = useRenderContext();
  const handleUpdateList = () => { 
    const obj = {
      Product: props.props.Product,
      Cost: props.props.Cost,
      Category: props.props.Category,
      GUID: cookies.UserData,
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
