import React from 'react';
import Print from '../../components/Print';
import { useMyContext } from '../../Context/context';
import HandleServer from '../../components/HandleServer';
import { useListContext } from '../../Context/CurrentList';
import { useCookies } from 'react-cookie';
function HoldsList(props) {
  const {CurrentList} = useListContext();
  const [cookies] = useCookies(['UserData']);
  const handleUpdateList = () => { 
    const obj = {
      Product: props.props.Product,
      Cost: props.props.Cost,
      Category: props.props.Category,
      GUID: cookies.UserData,
      ListID: CurrentList
    }
    HandleServer(obj,'Add Item')
    setIsGraphicVisible(previous => !previous);
    setIsGraphicVisible(previous => !previous);
  };
  const { setIsGraphicVisible } = useMyContext ();
  const Button2 = () => {
      setIsGraphicVisible(previous => !previous);
  };

  return (
    <div >
      <button className='Buttons' onClick={handleUpdateList}>   <span className='Span'></span>Update List</button>
      <button className='Buttons' onClick={Button2}>   <span className='Span'></span>Display Spending Chart</button>
      <Print></Print>
  
    </div>
  );
}

export default HoldsList;
