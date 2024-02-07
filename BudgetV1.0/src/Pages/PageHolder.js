import React from 'react'
import PageHolderSigned from './PageHolderSigned'
import PageHolderUnsigned from './PageHolderUnsigned'
import { useAccountContext } from '../Context/AccountInfo'
import { useCookies } from 'react-cookie'
function PageHolder() {
    const {accountInfo} =useAccountContext()
    const [cookies] = useCookies(['UserData']);
    console.log(accountInfo)
    console.log(cookies.UserData)
  return (
    <div>
        {(cookies.UserData!==undefined) && <PageHolderSigned/>}
        {(cookies.UserData===undefined) && <PageHolderUnsigned/>}
    </div>
  )
}

export default PageHolder