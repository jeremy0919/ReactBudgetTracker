import React from 'react'
import SideBar from '../SideComponents/SideBar'
import { MyProvider } from '../Context/context'

function AboutUs({Bar}) {
  return (
    <div>

<MyProvider>
       
  
       <div style={{ display: 'flex', flex: '1 1 auto' }}> 
       <div style={{ flex: '1 1 auto', maxWidth: '22%' }}> 
            <SideBar />
          </div>
          <div style={{ flex: '7 1 auto' }}>
           <h1>
                About Me
           </h1>
           <p>
            I am a computer Science major that really enjoys learning new things and has set out to learn react.js to try app development
            in react.native. This is my first react.js application to help demonstrate my knowledge of the lnagugae. This app showcases server calls,
            hooks, context, and dom manipulation through react.
           </p>
          </div>
          <div style={{ flex: '1 1 auto', maxWidth: '22%' }}> {/* 1/8 of the screen for SideBar */}
            <SideBar />
          </div>
        </div>
      </MyProvider>
        
    </div>
  )
}

export default AboutUs