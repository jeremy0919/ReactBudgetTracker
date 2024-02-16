import React, { useEffect, useState } from 'react';
import { useMyContext } from '../Context/context';
import DrawGraphic from '../DisplayGraphic/DrawGraphic';
import { useCookies } from 'react-cookie';
import HandleServer from '../components/HandleServer';
import { useListContext } from '../Context/CurrentList';
import Print2 from '../components/Print2';
import { useRenderContext } from '../Context/ReRenderList';
function Bottom() {
    const { isGraphicVisible } = useMyContext();
    const [list, setList] = useState({});
    const [cookies] = useCookies(['UserData']);
    const {CurrentList }= useListContext()
    const [printList, setPrintList] = useState([])
    const {amRendering} = useRenderContext();
    useEffect(() => {
        const fetchData = async () => {
            try {
                const obj = {
                    GUID: cookies.UserData,
                    listName:CurrentList
                };

    
                const temp = await HandleServer(obj, "Get List");

                setList(temp.data);
            } catch (error) {
                console.error('Error fetching list:', error);
            }
        };
    
        fetchData();
    }, [isGraphicVisible.Graphic1, cookies.UserData, CurrentList, amRendering]);

useEffect(() => {
        
    const fetchData = async () => {
        try {
            const obj = {
                GUID:cookies.UserData,
                listName:CurrentList
            };

            const ListID = await HandleServer(obj, "Get List");
             setPrintList(ListID.data)
       
        } catch (error) {
            console.error('Error fetching list:', error);
        }
    };
    fetchData();
},[isGraphicVisible.Graphic2, cookies.UserData, CurrentList, amRendering])
    return (
        <div className='Bottom'>
            {isGraphicVisible.Graphic1 &&  <DrawGraphic list= {list} />}
            {isGraphicVisible.Graphic2 &&  <Print2 printList = {printList}/>}
        </div>
    );
}

export default Bottom;

