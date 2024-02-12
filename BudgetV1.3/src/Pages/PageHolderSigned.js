
import AboutUs from './AboutUs';
import { usePageContext } from '../Context/RenderPage1';
import UserInfo from './UserInfo';
import { ListProvider } from '../Context/CurrentList';
import Bar from '../SideComponents/Bar';
import PageMain from './PageMain';
import DisplLogin from '../PageData/LogIn/DisplLogin';
import ToDoList from './ToDoList';
import Top from '../PageData/AddItem/Top';
import BudgetHead from '../PageData/budget/BudgetHead';
import Bottom from '../bottom/Bottom';
import SignData from '../PageData/SignUp/SignData';
import LowerGraphics from '../PageData/LogIn/LowerGraphics';
import SideBarLeft from '../SideComponents/SideBarLeft';
import SideBarRight from '../SideComponents/SideBarRight';
import SideBarLeftPG1 from '../SideComponents/SideBarLeftPG1';
import { MyProvider } from '../Context/context';
function PageHolderSigned() {
  const { currPage } = usePageContext();
  return (
    <div >
      <MyProvider>
      <ListProvider>
        {((currPage === 1) || (currPage ===null)) && <PageMain ComponentToRender={Top} props={"Page 1"} LowerGraphics={Bottom} BarLeft={SideBarLeft} BarRight={SideBarLeftPG1}/>}
        {(currPage === 2)  && <PageMain ComponentToRender={BudgetHead} props={"Page 2"}  BarLeft={SideBarLeft} BarRight={SideBarLeftPG1}/> }
        {(currPage === 3)  && <PageMain ComponentToRender={DisplLogin} props={"Log Out"}  BarLeft={SideBarLeft} BarRight={SideBarRight} />}
        {(currPage === 4)  &&  <PageMain ComponentToRender={UserInfo} props={"Account Information"}  BarLeft={SideBarLeft} BarRight={SideBarRight} />}
        {(currPage === 5)  &&  <PageMain ComponentToRender={SignData} props={"Sign up"} LowerGraphics={LowerGraphics}  BarLeft={SideBarLeft} BarRight={SideBarRight}/>}
        {(currPage === 6)  && <PageMain ComponentToRender={ToDoList} props={"Left to do"}  BarLeft={SideBarLeft} BarRight={SideBarRight}/>}
        {(currPage === 7)  && <AboutUs Bar = {Bar}/>}
        {(currPage === 8)  && <AboutUs Bar = {Bar}/>}
    
        </ListProvider>
        </MyProvider>

    </div>
  );
}

export default PageHolderSigned;

