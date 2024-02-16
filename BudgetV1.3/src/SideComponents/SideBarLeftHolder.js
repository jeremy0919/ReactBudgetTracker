import React from 'react';
import { usePageContext } from '../Context/RenderPage1';
import SideBarRight from './SideBarRight';
import SideBarLeftPG1 from './SideBarLeftPG1';
import DisplLogin from '../PageData/LogIn/DisplLogin';
import SideBarLeftTable from './SideBarLeftTable';
function SideBarLeftHolder() {
  const { currPage } = usePageContext();

  const renderPageContent = () => {
    switch (currPage) {
        case 1:
        case null:
        case 3:
        case 5:
        case 7:
        case 8:
            return <SideBarLeftPG1 />;
        case 4:
        case 6:
            return <SideBarRight />;
        case 2:        
            return <SideBarLeftTable />;
         

      default:
        return null;
    }
  };

  return <div className='SideBar' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}> { renderPageContent()} </div>;
}

export default SideBarLeftHolder;
