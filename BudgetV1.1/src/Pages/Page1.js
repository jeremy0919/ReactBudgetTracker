import React from 'react'
import Bar from '../SideComponents/Bar';
import Bottom from '../bottom/Bottom';
import { MyProvider } from '../Context/context';
import Top from '../PageData/AddItem/Top';
import SideBarRight from '../SideComponents/SideBarRight';
import SideBarLeft from '../SideComponents/SideBarLeft';
function Page1() {
  return (
    <div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
      <MyProvider>
        <div style={{ flex: '0 0 auto' }}> {/* This keeps Bar at the top */}
          <Bar />
        </div>
        <div style={{ display: 'flex', flex: '1 1 auto' }}> {/* This flex container holds the main content */}
        <div style={{ flex: '1 1 auto', maxWidth: '22%' }}> {/* 1/8 of the screen for SideBar */}
            <SideBarRight />
          </div>
          <div style={{ flex: '6 1 auto', display: 'flex', flexDirection: 'column' }}> {/* This flex container holds DisplLogin and LowerGraphics */}
          <Top></Top>
          <Bottom></Bottom>
          </div>
          <div style={{ flex: '1 1 auto', maxWidth: '22%' }}> {/* 1/8 of the screen for SideBar */}
          <SideBarLeft />
          </div>
  
        </div>
      </MyProvider>
    </div>
       
    </div>
  )
}

export default Page1

/*

 <MyProvider>
          <Bar></Bar> 
          <Top></Top>
          <Bottom></Bottom>
        </MyProvider>
*/