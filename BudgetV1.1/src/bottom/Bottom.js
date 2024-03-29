import React, { useEffect, useState } from 'react';
import { useMyContext } from '../Context/context';
import DrawGraphic from '../DisplayGraphic/DrawGraphic';
import { useCookies } from 'react-cookie';
import HandleServer from '../components/HandleServer';
import { useListContext } from '../Context/CurrentList';
import Print2 from '../components/Print2';
function Bottom() {
    const { isGraphicVisible } = useMyContext();
    const [list, setList] = useState({});
    const [cookies] = useCookies(['UserData']);
    const {CurrentList }= useListContext()
    const [printList, setPrintList] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            try {
                const obj = {
                    GUID: cookies.UserData,
                    listName: "All"
                };

    
                const temp = await HandleServer(obj, "Get List");
                
                // Update state with the fetched data
                setList(temp.data);
            } catch (error) {
                console.error('Error fetching list:', error);
            }
        };
    
        // Call the async function to fetch data
        fetchData();
    }, [isGraphicVisible.Graphic1, cookies.UserData]); // Add dependencies to the useEffect hook

useEffect(() => {
        
    const fetchData = async () => {
        try {
            const obj = {
                GUID:cookies.UserData,
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
},[isGraphicVisible.Graphic2, cookies.UserData, CurrentList])
    return (
        <div className='Bottom'>
            {isGraphicVisible.Graphic1 &&  <DrawGraphic list= {list} />}
            {isGraphicVisible.Graphic2 &&  <Print2 printList = {printList}/>}
        </div>
    );
}

export default Bottom;

