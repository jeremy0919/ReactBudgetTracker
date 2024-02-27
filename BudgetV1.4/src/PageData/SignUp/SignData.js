import React , {useState} from 'react'
import { useAccountContext } from '../../Context/AccountInfo';
import HandleServer from '../../components/HandleServer';
import { usePageContext } from '../../Context/RenderPage1';
import { useCookies } from 'react-cookie';
import { v4 as uuidv4 } from 'uuid';
function SignData() {
    const [Language, setSelectedOption] = useState('English');
    const [cookies, setCookie, removeCookie] = useCookies(['UserData']);
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const guid = uuidv4();
    const handleDropdownChange = (event) => {
        setSelectedOption(event.target.value);
      };
    const {updateAccountInfo} = useAccountContext();
    const {setCurrPage} = usePageContext();
  const [useName, updateUserName] = useState("")
  const [passWord, updatePassword] = useState("")
  const [Email, updateEmail] = useState("")
  const [errors, setErrors] = useState({  useName: '', passWord: '', Email:''  }); // State for errors

  const handleSetCookie = () => {
    setCookie('UserData', guid);
    setCookie('UserName', useName);
  };

  const handleSubmit = async (event) => {
    event.preventDefault()
    let formValid = true;
    const newErrors = { useName: '', passWord: '', Email:'' };

    if (!useName) {
      newErrors.useName = 'Username is required';
      formValid = false;
    }

    if (!passWord) {
      newErrors.passWord = 'Password is required';
      formValid = false;
    }
    if (!Email) {
      newErrors.Email = 'Email is required';
      formValid = false;
    }
    if( !emailRegex.test(Email)){
      newErrors.Email = 'Proper email required';
      formValid = false;
    }
  
    if (!formValid) {
      setErrors(newErrors);
      return;
    }
    else{
    const obj = {
        UserName: useName,
        Password: passWord,
        Email: Email,
        Language: Language,
        Budget: 1000,
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
  }
};
  return (
    <div >
        <form onSubmit={handleSubmit} className='SignUp'>
            <label>User Name: </label>
            <input type='Text' onChange={(e) => {updateUserName(e.target.value)}} ></input>
            {errors.useName && <div style={{ color: 'red' }}>{errors.useName}</div>}
            <label>Password: </label>
            <input type='Password'  onChange={(e) => {updatePassword(e.target.value)}}></input>
            {errors.passWord && <div style={{ color: 'red' }}>{errors.passWord}</div>}
            <label>Email: </label>
            <input type='Text'  onChange={(e) => {updateEmail(e.target.value)}}></input>
            {errors.Email && <div style={{ color: 'red' }}>{errors.Email}</div>}
       
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