import React from 'react';
import { usePageContext } from '../Context/RenderPage1';
import SideBarRight from '../SideComponents/SideBarRight';
import SideBarLeftPG1 from '../SideComponents/SideBarLeftPG1';
import SideBarLeftTable from '../SideComponents/SideBarLeftTable';
import SideBar from '../SideComponents/SideBar';
function SideBarLeftHolder() {
  const { currPage } = usePageContext();

  const renderPageContent = () => {
    switch (currPage) {
        case 1:
        case null:
        case 3:
        case 5:
        case 8:
            return <SideBarLeftPG1 />;
        case 4:
        case 6:
            return(<div>
             <SideBarRight /> ;
             </div>
            )
        case 2:        
            return <SideBarLeftTable />;
            case 7:
              return <SideBar/>

      default:
        return null;
    }
  };

  return <div className='SideBar' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}> { renderPageContent()} </div>;
}

export default SideBarLeftHolder;
