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
        
        <ul className='Title' style={{ listStyleType: 'none' }}> 
       
            {printList.map((item, index) => (
                <li key={index}>
                    <p>Product: {item.Product}</p>
                    <p>Cost: {item.Cost}</p>
                    <p>Category: {item.Category}</p>
                    <Delete index={index} handleUpdateList={handleClick} />
                </li>
            ))}
        </ul>
    )}
</div>

    );
}

export default  Print;
