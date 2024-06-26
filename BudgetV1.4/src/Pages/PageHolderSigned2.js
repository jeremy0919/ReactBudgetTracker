import React from 'react';
import { usePageContext } from '../Context/RenderPage1';
import Top from '../PageData/AddItem/Top';
import Bottom from '../bottom/Bottom';
import { CheckedProvider } from '../Context/CheckedItems';
import UserInfo from './UserInfo';
import ToDoList from './ToDoList';
import AboutUs from './AboutUs';
import Bar from '../SideComponents/Bar';
import CreateTable from '../PageData/Display/CreateTable';
import EditPersonalInfo from './EditPersonalInfo';
import { ClearInputProvider } from '../Context/clearInput';
function PageHolderSigned2() {
  const { currPage } = usePageContext();

  const renderPageContent = () => {
    switch (currPage) {
      case 1:
      case null:
        return (
          <>
          <ClearInputProvider>
            <Top />
            <Bottom />
            </ClearInputProvider>
          </>
        );
      case 2:
        return<> 
        <CheckedProvider>
        <CreateTable />
        </CheckedProvider>
        </>
      case 3:
        return <AboutUs  Bar={Bar}  />;
      case 4:
      case 6:
        return <UserInfo />;
      case 5:
        return <ToDoList />;
      case 7:
        return <EditPersonalInfo/>;
      case 8:
        return <AboutUs Bar={Bar} />;
      default:
        return null;
    }
  };

  return <div>{renderPageContent()}</div>;
}

export default PageHolderSigned2;
