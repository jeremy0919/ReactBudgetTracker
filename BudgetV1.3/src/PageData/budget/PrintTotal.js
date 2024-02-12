import React from 'react';
import useListTotal from '../../DisplayGraphic/useListTotal';
import TrashCan from "../../images/trashCan.png";

function PrintTotal(props) {
  const arr = useListTotal(props.Server1, props.Server2);
  
  const handleDeleteItem = (index) => {
    // Handle deletion logic here
  };

  return (
    <div>
      <ul style={{ listStyleType: 'none', padding: 0 }}> 
        {arr.map((item, index) => (
          <li key={index} style={{ display: 'flex', alignItems: 'center' }}>
            <button className='OtherButtonImage' onClick={() => handleDeleteItem(index)}>
              <img src={TrashCan} alt="Delete" className='OtherButton'/>
            </button>
            <span style={{ marginLeft: '8px' }}>{item[0]}: ${item[1]}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PrintTotal;

