import React from 'react';
import { MyProvider } from '../Context/context';
import Bar from '../SideComponents/Bar';
import SideBar from '../SideComponents/SideBar';

import AboutUs from './AboutUs';
import { usePageContext } from '../Context/RenderPage1';
import UserInfo from './UserInfo';
import DisplLogin from '../PageData/LogIn/DisplLogin';
import ToDoList from './ToDoList';
import Top from '../PageData/AddItem/Top';
import BudgetHead from '../PageData/budget/BudgetHead';
import Bottom from '../bottom/Bottom';
import SideBarLeft from '../SideComponents/SideBarLeft';
import SideBarRight from '../SideComponents/SideBarRight';
import SideBarLeftPG1 from '../SideComponents/SideBarLeftPG1';
import PageHolderSigned2 from './PageHolderSigned copy';

function MainPage() {
  const { currPage } = usePageContext();
  return (
    <div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <MyProvider>
          <div style={{ flex: '0 0 auto' }}> {/* This keeps Bar at the top */}
            <Bar/>
          </div>
          <div style={{ display: 'flex', flex: '1 1 auto' }}> {/* This flex container holds the main content */}
            <div style={{ flex: '1 1 auto', maxWidth: '22%' }}> {/* 1/8 of the screen for SideBar */}
            <SideBar ComponentToRender1={SideBarLeftPG1}/>
            </div>
            <div style={{ flex: '6 1 auto', display: 'flex', flexDirection: 'column', alignItems:"center", textAlign:"center", maxWidth:'56%'}}> {/* This flex container holds DisplLogin and LowerGraphics */}
            <h1>{`Page: ${currPage}`}</h1>
              <PageHolderSigned2/>
    
            </div>
            <div style={{ flex: '1 1 auto', maxWidth: '22%' }}> {/* 1/8 of the screen for SideBar */}
          <SideBar ComponentToRender1 = {SideBarLeft}/>
            </div>
          </div>
        </MyProvider>
      </div>
    </div>
  );
}

export default MainPage;

