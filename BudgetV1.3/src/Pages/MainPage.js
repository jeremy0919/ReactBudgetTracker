import React from 'react';
import { MyProvider } from '../Context/context';
import Bar from '../SideComponents/Bar';
import SideBar from '../SideComponents/SideBar';
import { usePageContext } from '../Context/RenderPage1';
import SideBarLeft from '../SideComponents/SideBarLeft';

import SideBarLeftPG1 from '../SideComponents/SideBarLeftPG1';
import PageHolderSigned2 from './PageHolderSigned2';
import SideBarRight from '../SideComponents/SideBarRight';
import SideBarUser from '../SideComponents/SideBarUser';
function MainPage() {
  const { currPage } = usePageContext();
  console.log(currPage)
  return (
    <div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <MyProvider>
          <div style={{ flex: '0 0 auto' }}> {/* This keeps Bar at the top */}
            <Bar/>
          </div>
          <div style={{ display: 'flex', flex: '1 1 auto' }}> {/* This flex container holds the main content */}
            <div style={{ flex: '1 1 auto', maxWidth: '20%' }}> {/* 1/8 of the screen for SideBar */}
            {(currPage !== 4 && currPage !== 6 )? <SideBar ComponentToRender1={SideBarLeftPG1}/> : null}
            {(currPage === 4 || currPage === 6) ? <SideBar ComponentToRender1={SideBarUser}/> : null}
            </div>
            <div style={{ flex: '6 1 auto', display: 'flex', flexDirection: 'column', alignItems:"center", textAlign:"center", maxWidth:'60%'}}> {/* This flex container holds DisplLogin and LowerGraphics */}
              <PageHolderSigned2/>
    
            </div>
            <div style={{ flex: '1 1 auto', maxWidth: '20%' }}> {/* 1/8 of the screen for SideBar */}
  {(currPage !== 4 && currPage !== 6 )? <SideBar ComponentToRender1={SideBarLeft}/> : null}
  {(currPage === 4 || currPage === 6) ? <SideBar ComponentToRender1={SideBarRight}/> : null}
</div>
          </div>
        </MyProvider>
      </div>
    </div>
  );
}

export default MainPage;

