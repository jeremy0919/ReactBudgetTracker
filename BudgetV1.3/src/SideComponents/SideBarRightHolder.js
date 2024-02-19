import React from 'react';
import { usePageContext } from '../Context/RenderPage1';
import SideBarUser from './SideBarUser';
import SideBarLeft from './SideBarLeft';
import DisplLogin from '../PageData/LogIn/DisplLogin';
import SideBar from './SideBar';
function SideBarRightHolder() {
  const { currPage } = usePageContext();

  const renderPageContent = () => {
    switch (currPage) {
        case 1:
        case null:
        case 2:
        case 3:
        case 5:
        case 8:
            return <SideBarLeft />;
            
        case 4:
        case 6:
          return(<div>
            <SideBarUser /> 
            <DisplLogin/>
            </div>
           )
           case 7:
            return <SideBar/>
      default:
        return null;
    }
  };

  return <div className='SideBar' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}> { renderPageContent()} </div>;
}

export default SideBarRightHolder;
