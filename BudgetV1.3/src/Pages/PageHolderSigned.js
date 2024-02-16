
import { ListProvider } from '../Context/CurrentList';

import { MyProvider } from '../Context/context';
import { RenderListProvider } from '../Context/ReRenderList';
import MainPage from './MainPage';
function PageHolderSigned() {
  return (
    <div >
      <MyProvider>
        <RenderListProvider>
      <ListProvider>
        {/*
        {((currPage === 1) || (currPage ===null)) && <PageMain ComponentToRender={Top} props={"Page 1"} LowerGraphics={Bottom} BarLeft={SideBarLeft} BarRight={SideBarLeftPG1}/>}
        {(currPage === 2)  && <PageMain ComponentToRender={BudgetHead} props={"Page 2"}  BarLeft={SideBarLeft} BarRight={SideBarLeftPG1}/> }
        {(currPage === 3)  && <PageMain ComponentToRender={DisplLogin} props={"Log Out"}  BarLeft={SideBarLeft} BarRight={SideBarRight} />}
        {(currPage === 4)  &&  <PageMain ComponentToRender={UserInfo} props={"Account Information"}  BarLeft={SideBarLeft} BarRight={SideBarRight} />}
        {(currPage === 5)  &&  <PageMain ComponentToRender={SignData} props={"Sign up"} LowerGraphics={LowerGraphics}  BarLeft={SideBarLeft} BarRight={SideBarRight}/>}
        {(currPage === 6)  && <PageMain ComponentToRender={ToDoList} props={"Left to do"}  BarLeft={SideBarLeft} BarRight={SideBarRight}/>}
        {(currPage === 7)  && <AboutUs Bar = {Bar}/>}
        {(currPage === 8)  && <AboutUs Bar = {Bar}/>}
  */}
  <MainPage/>
        </ListProvider>
        </RenderListProvider>
        </MyProvider>

    </div>
  );
}

export default PageHolderSigned;

