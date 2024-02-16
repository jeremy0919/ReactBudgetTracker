import React from 'react'
import ContextAssigner from './ContextAssigner'
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
        {(cookies.UserData!==undefined) && <ContextAssigner/>}
        {(cookies.UserData===undefined) && <PageHolderUnsigned/>}
    </div>
  )
}

export default PageHolder