import React, { useState, useEffect } from 'react';
import Delete from '../PageData/AddItem/Delete';
import { useMyContext } from '../Context/context';
function Print2(props) {
    const { setIsGraphicVisible } = useMyContext();
    const printList = props.printList;
    const handleClick = async () => {
        setIsGraphicVisible(previousState => ({
          ...previousState,
          Graphic2: !previousState.Graphic2
        }));
        setIsGraphicVisible(previousState => ({
          ...previousState,
          Graphic2: !previousState.Graphic2
        }));
    };
    function getCategoryColor(category) {
        switch (category) {
          case 'Groceries':
            return '#2233ff'; // Set the color for Category1
          case 'Gas':
            return '#33FF57'; // Set the color for Category2
          case 'Resteraunts':
            return '#5733FF'; // Set the color for Category3
            case 'Clothes':
                return '#FFFF33'; // Set the color for Category1
              case 'Supliments':
                return '#FF33FF'; // Set the color for Category2
              case 'LivingExpenses':
                return '#33FFFF'; 
                
          default: // other
            return '#FF5733'; // Default color if category is not specified
        }
      }
    return (
<div>
  <ul className='PrintList' style={{ listStyleType: 'none' }}> 
    {printList.map((item, index) => (
      <li key={index} className='PrintListText' style={{ backgroundColor: getCategoryColor(item.Category) }}>
        <p>
          Product: {item.Product}, 
          Cost: {item.Cost}, 
          Category: {item.Category}
          <Delete index={index} handleUpdateList={handleClick} style={{justifyContent:"right"}} />
        </p>
      </li>
    ))}
  </ul>
</div>

    );
}

export default  Print2;
