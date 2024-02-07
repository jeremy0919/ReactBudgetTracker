import React from 'react';

function Row({ data, Category }) {
  const colorStyle = {
    backgroundColor: data,
    width: '50px', // Adjust as needed
    height: '20px', // Adjust as needed
    border: '1px solid black' // Optional: Add border for better visibility
  };

  return (
    <>
      <td style={colorStyle}>
        {Category}
      </td>
    </>
  );
}

export default Row;
