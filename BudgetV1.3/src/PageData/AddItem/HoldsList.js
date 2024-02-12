import React from 'react';
import { useMyContext } from '../../Context/context';
import HandleServer from '../../components/HandleServer';
import { useListContext } from '../../Context/CurrentList';
import { useCookies } from 'react-cookie';

function HoldsList(props) {
  const {CurrentList} = useListContext();
  const [cookies] = useCookies(['UserData']);
  const { setIsGraphicVisible } = useMyContext ();
  const handleUpdateList = () => { 
    const obj = {
      Product: props.props.Product,
      Cost: props.props.Cost,
      Category: props.props.Category,
      GUID: cookies.UserData,
      ListID: CurrentList
    }
    HandleServer(obj,'Add Item')
    setIsGraphicVisible({Graphic2: previous => !previous});
    setIsGraphicVisible({Graphic2: previous => !previous});
  };

  return (
    <div >
      <button className='Buttons' onClick={handleUpdateList}>   <span className='Span'></span>Update List</button>

  
    </div>
  );
}

export default HoldsList;
