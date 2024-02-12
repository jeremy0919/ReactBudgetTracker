import React from 'react';
import Button from '../../components/Button';

import { usePageContext } from '../../Context/RenderPage1';
function TopBarUnLogged() {
    const LogIn = () => {
        setCurrPage(3)
    };


    const {setCurrPage} = usePageContext();
    const Button2 = () => {
        setCurrPage(8)
    };

    const Button3 = () => {
        setCurrPage(5)
    
    };

    const Button4 = () => {
        setCurrPage(9)
      
    };

    return (
        <div className='TopBar' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}> 
           <Button handleClick={Button4}>Our product</Button>
           <Button handleClick={Button3}>Log in</Button>
            <Button handleClick={LogIn}>Sign up</Button>
            <Button handleClick={Button2}>About us</Button>
        
           
         
        </div>
    );
}

export default TopBarUnLogged;
