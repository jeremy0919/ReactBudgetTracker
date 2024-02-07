import React from 'react'
import Page0 from './Page0'
import { usePageContext } from '../Context/RenderPage1'
import SignData from '../PageData/SignUp/SignData';
import DisplLogin from '../PageData/LogIn/DisplLogin';
import { useAccountContext } from '../Context/AccountInfo';
import TopBarUnLogged from '../PageData/LogIn/topBarUnLogged';
import AboutUs from './AboutUs';
import OurProduct from './OurProduct';
function PageHolderUnsigned() {
    const { currPage } = usePageContext();
    const {accountInfo} = useAccountContext();
    console.log(accountInfo)
  return (
    <div>
        {(currPage === 9)  && <Page0 ComponentToRender={OurProduct} props={"Our product"}/>}
        {((currPage === 3) || (currPage ===null))  && <Page0 ComponentToRender={SignData} props={"Sign Up"} />}
        {(currPage === 5)  && <Page0 ComponentToRender={DisplLogin} props={"Log in"}/>}
        {(currPage === 8)  && <AboutUs Bar={TopBarUnLogged}/>}
    </div>
  )
}

export default PageHolderUnsigned