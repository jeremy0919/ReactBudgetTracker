import React, {useState} from 'react'
import { useAccountContext } from '../../Context/AccountInfo';
import HandleServer from '../../components/HandleServer';
import { usePageContext } from '../../Context/RenderPage1';
import { useCookies } from 'react-cookie';
import Button from '../../components/Button';
function DisplLogin() {
  const [cookies, setCookie, removeCookie] = useCookies(['UserData']);
  const [useName, updateUserName] = useState("")
  const [passWord, updatePassword] = useState("")
  const {accountInfo, updateAccountInfo} = useAccountContext();
  const {setCurrPage} = usePageContext();
  const handleSetCookie = (GUID) => {
    setCookie('UserData', GUID);
  };
 // const [language, updateLanguage] = useState("")
  const haandleSubmit = async (event) =>{
    event.preventDefault()
    const obj = {
      UserName: useName,
      Password: passWord,}
    const temp = await HandleServer(obj,"Get User")
    if(temp.status === 201|| temp.status === 200){
      updateAccountInfo({UserName: temp.data.UserName, Email: temp.data.Email, Language: temp.data.Language, Signedin: true, Budget: temp.data.Budget}) 
      handleSetCookie(temp.data.GUID)
      setCurrPage(1)
      
    }
    else{
      alert("invalid account info")
     // should work
    }
  }
  const handleSecondButton = () =>{
    updateAccountInfo({UserName: "Guest", Email: "unknown", Language: "English",Signedin: false})
    removeCookie('UserData')
  }
  if(cookies.UserData===undefined){
  return (
    
    <div>
        <form onSubmit={haandleSubmit} className='LogIn'>
            <label>User Name: </label>
            <input type='Text' onChange={(e) => {updateUserName(e.target.value)}} ></input>
            <label>Password: </label>
            <input type='password'  onChange={(e) => {updatePassword(e.target.value)}}></input>
            <button type='submit'>Log In</button>
        </form>
    </div>
  )
  }
  else {
    return (
    
      <div>
          <Button  handleClick={handleSecondButton} >Sign out</Button>
      </div>
    )
  }
}

export default DisplLogin