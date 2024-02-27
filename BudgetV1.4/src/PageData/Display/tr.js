// Tr.js
import React from 'react';
import Td from './td';
import HandleServer from '../../components/HandleServer';
import Checkbox from './CheckBox';
function Tr({ data }, {GUID}) {
  const keys = Object.keys(data).filter(key => key !== 'GUID'&& key!=="productGUID");
  const onDeleteClick = () =>{ // I bet you I can add in the delete File
    const obj ={
      GUID:GUID,
      productGUID: data.productGUID
    }
    HandleServer("delete", obj)
  }
  const onEditClick = () =>{
    const obj ={
      GUID:GUID,
      productGUID: data.productGUID
    }
    HandleServer("Edit Product", obj)
  }
  function getCategoryColor(category) {
    switch (category) {
        case 'Groceries':
            return 'rgba(34, 51, 255, .5)'; // Set the color for Category1
        case 'Gas':
            return 'rgba(51, 255, 87,  .5)'; // Set the color for Category2
        case 'Restaurants':
            return 'rgba(87, 51, 255,  .5)'; // Set the color for Category3
        case 'Clothes':
            return 'rgba(255, 255, 51,  .5)'; // Set the color for Category1
        case 'Supplements':
            return 'rgba(255, 51, 255,  .5)'; // Set the color for Category2
        case 'LivingExpenses':
            return 'rgba(51, 255, 255,  .5)'; // Set the color for Category3
        default: // other
            return 'rgba(255, 87, 51,  .5)'; // Default color if category is not specified
    }
  }

  return (
    <tr className='TableRow1' style={{backgroundColor: getCategoryColor(data.Category)}}>
                 <td>
                <Checkbox id={data.productGUID}/>
              </td>
      {keys.map((key, index) => (
        <Td key={index} cell={data[key]} />
      ))}
          <td>
                <button onClick={() => onEditClick()}>Edit</button>
            </td>
                  <td>
                <button onClick={() => onDeleteClick()}>Delete</button>
            </td>
        
    </tr>
  );
}

export default Tr;

