import React, { useEffect, useState } from 'react';
import { useMyContext } from '../../Context/context';
import { useCookies } from 'react-cookie';
import HandleServer from '../../components/HandleServer';
import { useListContext } from '../../Context/CurrentList';
import { useRenderContext } from '../../Context/ReRenderList';
import Tr from './tr';
function CreateTable() {
    const { isGraphicVisible } = useMyContext();
    const [ReadyToRender, setReadyToRender] = useState(false);
    const [cookies] = useCookies(['UserData']);
    const {CurrentList }= useListContext()
    const [printList, setPrintList] = useState([])
    const {amRendering} = useRenderContext();
useEffect(() => {
        
    const fetchData = async () => {
        try {
            const obj = {
                GUID:cookies.UserData,
                listName:CurrentList
            };


            const ListID = await HandleServer(obj, "Get List");
             setPrintList(ListID.data)
             setReadyToRender(true)
            // Update state with the fetched data
        } catch (error) {
            console.error('Error fetching list:', error);
        }
    };

    // Call the async function to fetch data
    fetchData();
},[isGraphicVisible.Graphic2, cookies.UserData, CurrentList, amRendering])
  return (
<div>
  {ReadyToRender && (
    <table>
      <thead>
        <tr>
          <th>Product</th>
          <th>Cost</th>
          <th>Category</th>
          <th>List Name</th>
        </tr>
      </thead>
      <tbody>
        {printList.map((item, index) => (
          <Tr key={index} data={item} />
        ))}
      </tbody>
      <tfoot>{/* Your table footer content here */}</tfoot>
    </table>
  )}
</div>

  )
}

export default CreateTable