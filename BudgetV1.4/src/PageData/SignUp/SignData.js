import React , {useState} from 'react'
import { useAccountContext } from '../../Context/AccountInfo';
import HandleServer from '../../components/HandleServer';
import { usePageContext } from '../../Context/RenderPage1';
import { useCookies } from 'react-cookie';
import { v4 as uuidv4 } from 'uuid';
function SignData() {
    const [Language, setSelectedOption] = useState('English');
    const [setCookie] = useCookies(['UserData']);
    const guid = uuidv4();
    const handleDropdownChange = (event) => {
        setSelectedOption(event.target.value);
      };
    const {updateAccountInfo} = useAccountContext();
    const {setCurrPage} = usePageContext();
  const [useName, updateUserName] = useState("")
  const [passWord, updatePassword] = useState("")
  const [Email, updateEmail] = useState("")
  const handleSetCookie = () => {
    setCookie('UserData', guid);
    setCookie('UserName', useName);
  };
  const handleSubmit = async (event) => {
    event.preventDefault()
    const obj = {
        UserName: useName,
        Password: passWord,
        Email: Email,
        Language: Language,
        Budget: 0,
        GUID: guid

    };

    try {
        const temp = await HandleServer(obj, "New User");
        console.log(temp)
        if (temp.status === 200|| temp.status === 201) {
          updateAccountInfo({ UserName: useName, Email: Email, Language: Language, Signedin:true });
          handleSetCookie()
          setCurrPage(1)
          
        } else {
            alert("User already exists");
        }
    } catch (error) {
        console.error("Error occurred while communicating with server:", error);
        // Handle error gracefully
    }
};
  return (
    <div >
        <form onSubmit={handleSubmit} className='SignUp'>
            <label>User Name: </label>
            <input type='Text' onChange={(e) => {updateUserName(e.target.value)}} ></input>
            <label>Password: </label>
            <input type='Password'  onChange={(e) => {updatePassword(e.target.value)}}></input>
            <label>Email: </label>
            <input type='Text'  onChange={(e) => {updateEmail(e.target.value)}}></input>
       
            <select value={Language} onChange={handleDropdownChange}>
                <option value="English">English</option>
                <option value="Spanish">Spanish</option>
                <option value="French">French </option>
                <option value="German">German </option>
            </select>
            <button type='submit'>Sign up</button>
        </form>
    </div>
  )
}

export default SignData