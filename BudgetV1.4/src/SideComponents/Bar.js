import React from 'react';
import Button from '../components/Button';

import { usePageContext } from '../Context/RenderPage1';
function Bar() {
    const LogIn = () => {
        setCurrPage(3)
    };


    const {setCurrPage} = usePageContext();
    const Button2 = () => {
        setCurrPage(4)
    };

    const Button3 = () => {
        setCurrPage(2)
    
    };

    const Button4 = () => {
        setCurrPage(1)
      
    };

    return (
        <div className='TopBar' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}> 
           <Button handleClick={Button4}>Page 1</Button>
           <Button handleClick={Button3}>Display</Button>
            <Button handleClick={LogIn}>About me</Button>
            <Button handleClick={Button2}>User Info</Button>
        
           
         
        </div>
    );
}

export default Bar;
