import React, { useEffect, useState } from 'react';
import { useMyContext } from '../Context/context';
import DrawGraphic from '../DisplayGraphic/DrawGraphic';
import { useCookies } from 'react-cookie';
import HandleServer from '../components/HandleServer';
function Bottom() {
    const { isGraphicVisible } = useMyContext();
    const [list, setList] = useState({});
    const [cookies] = useCookies(['UserData']);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const obj = {
                    username: cookies.UserData,
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
    }, [isGraphicVisible, cookies.UserData]); // Add dependencies to the useEffect hook
    
    return (
        <div className='Bottom'>
            {isGraphicVisible &&  <DrawGraphic list= {list} />}
        </div>
    );
}

export default Bottom;

