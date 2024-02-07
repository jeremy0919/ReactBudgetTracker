import React from 'react'

import { MyProvider } from '../Context/context';

import TopBarUnLogged from '../PageData/LogIn/topBarUnLogged';
import SideBar from '../SideComponents/SideBar';
function Page0({ComponentToRender,props}) {
  return (
    <div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
      <MyProvider>
        <div style={{ flex: '0 0 auto' }}> {/* This keeps Bar at the top */}
          <TopBarUnLogged />
          
        </div>
        <div style={{ display: 'flex', flex: '1 1 auto' }}> {/* This flex container holds the main content */}
        <div style={{ flex: '1 1 auto', maxWidth: '22%' }}> {/* 1/8 of the screen for SideBar */}
          <SideBar></SideBar>
          </div>
          <div style={{ flex: '6 1 auto', display: 'flex', flexDirection: 'column' }}> {/* This flex container holds DisplLogin and LowerGraphics */}
          <h1>{props}</h1>

          <ComponentToRender></ComponentToRender>
            <p>add graphics or something</p>
          </div>
          <div style={{ flex: '1 1 auto', maxWidth: '22%' }}> {/* 1/8 of the screen for SideBar */}
          <SideBar></SideBar>
          </div>
  
        </div>
      </MyProvider>
    </div>
       
    </div>
  )
}

export default Page0
