import React from 'react';
import { useCheckedContext } from '../../Context/CheckedItems';

const Checkbox = ({ id }) => {
  const { itemsChecked, updateCheckedItems } = useCheckedContext();

  const handleCheckboxChange = () => {
    const isChecked = itemsChecked.includes(id);

    if (isChecked) {
      const updatedItems = itemsChecked.filter(item => item !== id);
      updateCheckedItems(updatedItems);
    } else {
      updateCheckedItems([...itemsChecked, id]);
    }
  };

  return (
    <input
      type="checkbox"
      checked={itemsChecked.includes(id)}
      onChange={handleCheckboxChange}
    />
  );
};

export default Checkbox;
