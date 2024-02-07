
import React from 'react';
import Bar from '../SideComponents/Bar';
import { MyProvider } from '../Context/context';
import SignData from '../PageData/SignUp/SignData';
import SideBar from '../SideComponents/SideBar';
import LowerGraphics from '../PageData/LogIn/LowerGraphics';

function SignUp() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <MyProvider>
        <div style={{ flex: '0 0 auto' }}> {/* This keeps Bar at the top */}
          <Bar />
        </div>
        <div style={{ display: 'flex', flex: '1 1 auto' }}> {/* This flex container holds the main content */}
        <div style={{ flex: '1 1 auto', maxWidth: '22%' }}> {/* 1/8 of the screen for SideBar */}
            <SideBar />
          </div>
          <div style={{ flex: '6 1 auto', display: 'flex', flexDirection: 'column' }}> {/* This flex container holds DisplLogin and LowerGraphics */}
            <SignData/>
            <LowerGraphics />
          </div>
          <div style={{ flex: '1 1 auto', maxWidth: '22%' }}> {/* 1/8 of the screen for SideBar */}
            <SideBar />
          </div>
        </div>
      </MyProvider>
    </div>
  );
}

export default SignUp;
