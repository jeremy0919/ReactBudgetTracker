// Tr.js
import React from 'react';
import Td from './td';

function Tr({ data }) {
  // Extract the keys of the object excluding 'GUID'
  const keys = Object.keys(data).filter(key => key !== 'GUID');

  return (
    <tr>
      {keys.map((key, index) => (
        <Td key={index} cell={data[key]} />
      ))}
    </tr>
  );
}

export default Tr;
