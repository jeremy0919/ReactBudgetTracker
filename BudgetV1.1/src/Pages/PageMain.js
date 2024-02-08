import React from 'react';
import { MyProvider } from '../Context/context';
import Bar from '../SideComponents/Bar';
import SideBarLeft from '../SideComponents/SideBarLeft';
import SideBarRight from '../SideComponents/SideBarRight';

function PageMain({ ComponentToRender, props, LowerGraphics }) {
  return (
    <div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <MyProvider>
          <div style={{ flex: '0 0 auto' }}> {/* This keeps Bar at the top */}
            <Bar/>
          </div>
          <div style={{ display: 'flex', flex: '1 1 auto' }}> {/* This flex container holds the main content */}
            <div style={{ flex: '1 1 auto', maxWidth: '22%' }}> {/* 1/8 of the screen for SideBar */}
              <SideBarRight/>
            </div>
            <div style={{ flex: '6 1 auto', display: 'flex', flexDirection: 'column' }}> {/* This flex container holds DisplLogin and LowerGraphics */}
              <h1>{props}</h1>
              <ComponentToRender/>
              {LowerGraphics && <LowerGraphics/>}
            </div>
            <div style={{ flex: '1 1 auto', maxWidth: '22%' }}> {/* 1/8 of the screen for SideBar */}
              <SideBarLeft/>
            </div>
          </div>
        </MyProvider>
      </div>
    </div>
  );
}

export default PageMain;

