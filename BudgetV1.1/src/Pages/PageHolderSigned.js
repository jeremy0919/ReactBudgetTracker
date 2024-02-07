
import Page1 from './Page1';
import Page2 from './Page2';
import AboutUs from './AboutUs';
import { usePageContext } from '../Context/RenderPage1';
import SignUp from './SignUp';
import UserInfo from './UserInfo';
import { ListProvider } from '../Context/CurrentList';
import Bar from '../SideComponents/Bar';
import PageMain from './PageMain';
import DisplLogin from '../PageData/LogIn/DisplLogin';
import ToDoList from './ToDoList';
function PageHolderSigned() {
  const { currPage } = usePageContext();

  return (
    <div >
      <ListProvider>
        {((currPage === 1) || (currPage ===null)) && <Page1 />}
        {(currPage === 2)  && <Page2 />}
        {(currPage === 3)  && <PageMain ComponentToRender={DisplLogin} props={"Log Out"} />}
        {(currPage === 4)  && <UserInfo />}
        {(currPage === 5)  && <SignUp />}
        {(currPage === 6)  && <PageMain ComponentToRender={ToDoList} props={"Left to do"}/>}
        {(currPage === 7)  && <AboutUs Bar = {Bar}/>}
        {(currPage === 8)  && <AboutUs Bar = {Bar}/>}
    
        </ListProvider>
    </div>
  );
}

export default PageHolderSigned;

