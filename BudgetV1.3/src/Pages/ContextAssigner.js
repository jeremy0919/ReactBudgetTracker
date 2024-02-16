
import { ListProvider } from '../Context/CurrentList';
import { OrderProvider } from '../Context/OrderToRender';
import { MyProvider } from '../Context/context';
import { RenderListProvider } from '../Context/ReRenderList';
import MainPage from './MainPage';
function ContextAssigner() {
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

