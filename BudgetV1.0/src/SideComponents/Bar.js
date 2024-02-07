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
           <Button handleClick={Button3}>Page 2</Button>
            <Button handleClick={LogIn}>Log In/Sign up</Button>
            <Button handleClick={Button2}>User Info</Button>
        
           
         
        </div>
    );
}

export default Bar;
