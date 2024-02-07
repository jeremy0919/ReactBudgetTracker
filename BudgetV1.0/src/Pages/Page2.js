import React from 'react'
import Bar from '../SideComponents/Bar'
import { MyProvider } from '../Context/context';
import SideBarRight from '../SideComponents/SideBarRight';
import SideBarLeft from '../SideComponents/SideBarLeft';
import BudgetHead from '../PageData/budget/BudgetHead';
function Page2() {
  return (
    <div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
      <MyProvider>
        <div style={{ flex: '0 0 auto' }}> {/* This keeps Bar at the top */}
          <Bar />
        </div>
        <div style={{ display: 'flex', flex: '1 1 auto' }}> {/* This flex container holds the main content */}
        {/* store budget in userInfo pull from userInfo on page load and display else create new */ }
        <div style={{ flex: '1 1 auto', maxWidth: '22%' }}> {/* 1/8 of the screen for SideBar */}
        <SideBarRight />
          </div>
          <div style={{ flex: '6 1 auto', display: 'flex', flexDirection: 'column' }}> {/* This flex container holds DisplLogin and LowerGraphics */}
            <BudgetHead></BudgetHead>
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

export default Page2