import React from 'react';
import { usePageContext } from '../Context/RenderPage1';
import SideBarUser from './SideBarUser';
import SideBarLeft from './SideBarLeft';
function SideBarRightHolder() {
  const { currPage } = usePageContext();

  const renderPageContent = () => {
    switch (currPage) {
        case 1:
        case null:
        case 2:
        case 3:
        case 5:
        case 7:
        case 8:
            return <SideBarLeft />;
        case 4:
        case 6:
            return <SideBarUser />;

      default:
        return null;
    }
  };

  return <div className='SideBar' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}> { renderPageContent()} </div>;
}

export default SideBarRightHolder;
