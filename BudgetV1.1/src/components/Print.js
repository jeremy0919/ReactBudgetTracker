import React, { useState, useEffect } from 'react';
import Delete from '../PageData/AddItem/Delete';
import HandleServer from './HandleServer';
import { useListContext } from '../Context/CurrentList';
import { useCookies } from 'react-cookie';
function Print() {
    const [printList, setPrintList] = useState([])
    const [canRender, setCanRender] = useState(false)
    const {CurrentList }= useListContext()
    const [cookies] = useCookies(['UserData']);
    console.log(CurrentList)
    const handleClick = async () => {
        const obj = {
            username:cookies.UserData,
            listName:CurrentList
        }
        const ListID = await HandleServer(obj, "Get List");
        setPrintList(ListID.data)
        setCanRender(!canRender);
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
    useEffect(() => {
        
        const fetchData = async () => {
            try {
                const obj = {
                    username:cookies.UserData,
                    listName:CurrentList
                };

    
                const ListID = await HandleServer(obj, "Get List");
                 setPrintList(ListID.data)
                
                // Update state with the fetched data
            } catch (error) {
                console.error('Error fetching list:', error);
            }
        };
    
        // Call the async function to fetch data
        fetchData();
    },[CurrentList,cookies.UserData])
    return (
<div>
    <button className='Buttons' onClick={handleClick}> <span className='Span'></span>Print</button>
    {canRender && (
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
)}
</div>

    );
}

export default  Print;
