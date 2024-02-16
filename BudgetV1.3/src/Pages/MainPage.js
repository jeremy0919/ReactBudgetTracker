import React from 'react';
import { MyProvider } from '../Context/context';
import Bar from '../SideComponents/Bar';
import PageHolderSigned2 from './PageHolderSigned2';
import SideBarLeftHolder from '../SideComponents/SideBarLeftHolder';
import SideBarRightHolder from '../SideComponents/SideBarRightHolder';
function MainPage() {
  return (
    <div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <MyProvider>
          <div style={{ flex: '0 0 auto' }}> {/* This keeps Bar at the top */}
            <Bar/>
          </div>
          <div style={{ display: 'flex', flex: '1 1 auto' }}> {/* This flex container holds the main content */}
            <div style={{ flex: '1 1 auto', maxWidth: '20%' }}> {/* left of screen */}
  
          <SideBarLeftHolder/>
            </div>
            <div style={{ flex: '6 1 auto', display: 'flex', flexDirection: 'column', alignItems:"center", textAlign:"center", maxWidth:'60%'}}> {/* This flex container holds DisplLogin and LowerGraphics */}
              <PageHolderSigned2/>
    
            </div>
            <div style={{ flex: '1 1 auto', maxWidth: '20%' }}> {/* right of scree  */}
            <SideBarRightHolder/>
</div>
          </div>
        </MyProvider>
      </div>
    </div>
  );
}

export default MainPage;

