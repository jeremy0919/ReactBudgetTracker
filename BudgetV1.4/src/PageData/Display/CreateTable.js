import React, { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import HandleServer from '../../components/HandleServer';
import { useListContext } from '../../Context/CurrentList';
import { useOrderContext } from '../../Context/OrderToRender';
import Tr from './tr';
function CreateTable() {
    const [ReadyToRender, setReadyToRender] = useState(false);
    const [cookies] = useCookies(['UserData']);
    const {CurrentList }= useListContext()
    const [printList, setPrintList] = useState([])
    const {currOrder} = useOrderContext();
useEffect(() => {
        
    const fetchData = async () => {
        try {
            const obj = {
                GUID:cookies.UserData,
                Method:currOrder
            };


            const ListID = await HandleServer(obj, "Sort List");
             setPrintList(ListID.data)
             setReadyToRender(true)
            // Update state with the fetched data
        } catch (error) {
            console.error('Error fetching list:', error);
        }
    };

    // Call the async function to fetch data
    fetchData();
},[ cookies.UserData, CurrentList, currOrder])
  return (
<div>
  {ReadyToRender && (
    <table className='Table1'>
      <thead>
        <tr>
          <th>Select</th>
          <th>Product</th>
          <th>Cost</th>
          <th>Category</th>
          <th>List Name</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {printList.map((item, index) => (
          <Tr key={index} data={item} GUID={cookies.UserData} />
        ))}
      </tbody>
      <tfoot>

      </tfoot>
    </table>
  )}
</div>

  )
}

export default CreateTable