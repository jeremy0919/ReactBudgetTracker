import React from 'react';
import Delete from '../PageData/AddItem/Delete';
import { useMyContext } from '../Context/context';
import { useCookies } from 'react-cookie';
import { useRenderContext } from '../Context/ReRenderList';
function Print2(props) {
  const { isGraphicVisible } = useMyContext ();
const {amRendering, setAmRendering} = useRenderContext();
    const printList = props.printList;
    const [cookies] = useCookies(['UserData']);
    const handleClick = async () => {
      console.log(isGraphicVisible.Graphic2)
      if(isGraphicVisible.Graphic2){
        setAmRendering(!amRendering)
        }
        /*
        setIsGraphicVisible(previousState => ({
          ...previousState,
          Graphic2: !previousState.Graphic2
        }));
        setIsGraphicVisible(previousState => ({
          ...previousState,
          Graphic2: !previousState.Graphic2
        }));
        */
    };function getCategoryColor(category) {
    switch (category) {
        case 'Groceries':
            return 'rgba(34, 51, 255, .5)'; // Set the color for Category1
        case 'Gas':
            return 'rgba(51, 255, 87,  .5)'; // Set the color for Category2
        case 'Resteraunts':
            return 'rgba(87, 51, 255,  .5)'; // Set the color for Category3
        case 'Clothes':
            return 'rgba(255, 255, 51,  .5)'; // Set the color for Category1
        case 'Supliments':
            return 'rgba(255, 51, 255,  .5)'; // Set the color for Category2
        case 'LivingExpenses':
            return 'rgba(51, 255, 255,  .5)'; // Set the color for Category3
        default: // other
            return 'rgba(255, 87, 51,  .5)'; // Default color if category is not specified
    }
}

    return (
<div>
  <ul className='PrintList' style={{ listStyleType: 'none' }}> 
    {printList.map((item, index) => (
      <li key={index} className='PrintListText' style={{ backgroundColor: getCategoryColor(item.Category),   }}>
        <p >
          Product: {item.Product}, 
          Cost: {item.Cost}, 
          Category: {item.Category}
          <Delete obj={{ GUID: cookies.UserData, Product: item.Product, Cost: item.Cost, Category: item.Category }} handleUpdateList={handleClick} style={{ justifyContent: "right" }} />
        </p>
      </li>
    ))}
  </ul>
</div>


    );
}

export default  Print2;
