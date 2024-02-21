import React from 'react'
import ContextAssigner from '../PageFormat/ContextAssigner'
import PageHolderUnsigned from './PageHolderUnsigned'

import { useCookies } from 'react-cookie'
function PageHolder() {

    const [cookies] = useCookies(['UserData']);
  return (
    <div>
        {(cookies.UserData!==undefined) && <ContextAssigner/>}
        {(cookies.UserData===undefined) && <PageHolderUnsigned/>}
    </div>
  )
}

export default PageHolder