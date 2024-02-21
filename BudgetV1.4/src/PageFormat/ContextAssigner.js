import { useEffect } from 'react';
import { ListProvider } from '../Context/CurrentList';
import { OrderProvider } from '../Context/OrderToRender';
import { MyProvider } from '../Context/context';
import { RenderListProvider } from '../Context/ReRenderList';
import MainPage from './LayoutAssigner';
import { useAccountContext } from '../Context/AccountInfo'
import { useCookies } from 'react-cookie'
import HandleServer from '../components/HandleServer';
function ContextAssigner() {
  const [cookies] = useCookies(['UserData']);
  const {accountInfo, updateAccountInfo} = useAccountContext();
  useEffect(() => {
   const fetchData = async () => {
      try {
          const obj = {
              GUID: cookies.UserData
          };


          const temp = await HandleServer(obj, "Get User Name");
          console.log(temp.data.data)
          // Update state with the fetched data
          updateAccountInfo(prevAccountInfo => ({
            ...prevAccountInfo,
            UserName: temp.data.data
        }));
      } catch (error) {
          console.error('Error fetching list:', error);
      }
  };

    // Call the async function to fetch data
    fetchData();
}, [cookies.UserData, accountInfo.UserName, updateAccountInfo]); 

  return (
    <div >
      <MyProvider>
        <RenderListProvider>
          <OrderProvider>
      <ListProvider>
           <MainPage/>
        </ListProvider>
        </OrderProvider>
        </RenderListProvider>
        </MyProvider>

    </div>
  );
}

export default ContextAssigner;

