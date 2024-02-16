import React from 'react';
import { usePageContext } from '../Context/RenderPage1';
import Top from '../PageData/AddItem/Top';
import Bottom from '../bottom/Bottom';
import BudgetHead from '../PageData/budget/BudgetHead';
import DisplLogin from '../PageData/LogIn/DisplLogin';
import UserInfo from './UserInfo';
import ToDoList from './ToDoList';
import AboutUs from './AboutUs';
import Bar from '../SideComponents/Bar';
import CreateTable from '../PageData/Display/CreateTable';
function PageHolderSigned2() {
  const { currPage } = usePageContext();

  const renderPageContent = () => {
    switch (currPage) {
      case 1:
      case null:
        return (
          <>
            <Top />
            <Bottom />
          </>
        );
      case 2:
        return <CreateTable />;
      case 3:
        return <DisplLogin />;
      case 4:
      case 6:
        return <UserInfo />;
      case 5:
        return <ToDoList />;
      case 7:
      case 8:
        return <AboutUs Bar={Bar} />;
      default:
        return null;
    }
  };

  return <div>{renderPageContent()}</div>;
}

export default PageHolderSigned2;
