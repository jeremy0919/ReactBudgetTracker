import React from 'react'
import useListTotal from '../../DisplayGraphic/useListTotal';
function PrintTotal(props) {
  const arr = useListTotal(props.Server1, props.Server2);
  return (
    <div>
        <ul> 
       
        {arr.map((item, index) => (
    <li key={index}>
        {item[0]}: ${item[1]}
    </li>
))}
   </ul>
    </div>
  )
}

export default PrintTotal