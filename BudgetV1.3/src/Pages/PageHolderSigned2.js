
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
function PageHolderSigned2() {
  const { currPage } = usePageContext();
  return (
    <div >

      {((currPage === 1) || (currPage ===null)) && <Top/>}
            {((currPage === 1) || (currPage ===null)) && <Bottom/> }
            {(currPage === 2)  &&( <BudgetHead/>) }
            {(currPage === 3)  &&( <DisplLogin/>) }
            {(currPage === 4)  &&( <UserInfo/>) }
            {(currPage === 5)  &&( <ToDoList/>) }
            {(currPage === 6)  &&( <ToDoList/>) }
            {(currPage === 7)  && <AboutUs Bar = {Bar}/>}
            {(currPage === 8)  && <AboutUs Bar = {Bar}/>}
  

    </div>
  );
}

export default PageHolderSigned2;

