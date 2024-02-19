import React , {useEffect, useState} from 'react'
import { useAccountContext } from '../Context/AccountInfo';
import HandleServer from '../components/HandleServer';
import { usePageContext } from '../Context/RenderPage1';
import { useCookies } from 'react-cookie';
function EditPersonalInfo() {
    const [Language, setSelectedOption] = useState('English');
    const [cookies] = useCookies(['UserData']);

    const handleDropdownChange = (event) => {
        setSelectedOption(event.target.value);
      };
    const {updateAccountInfo} = useAccountContext();
    const {setCurrPage} = usePageContext();
  const [useName, updateUserName] = useState("")
  const [passWord, updatePassword] = useState("")
  const [Email, updateEmail] = useState("")
  const [Budget, updateBudget] = useState("")
  useEffect(() => {
    const fetchData = async () => {
      try {
        const obj = {GUID: cookies.UserData};
        console.log(obj)
        const response = await HandleServer(obj, "Get Info User");
        console.log(response)
        // Assuming response.data.userName contains the user name
        updateUserName(response.data.UserName);
        updatePassword(response.data.Password);
        updateEmail(response.data.Email)
        updateBudget(response.data.Budget)
      } catch (error) {
        console.error('Error fetching user information:', error);
        // Handle error state here if necessary
      }
    };

    fetchData(); // Call the async function to fetch data when component mounts
  }, [cookies.UserData]);
  const handleSubmit = async (event) => {
    event.preventDefault()
    const obj = {
        UserName: useName,
        Password: passWord,
        Email: Email,
        Language: Language,
        Budget: Budget,
        GUID: cookies.UserData

    };

    try {
        const temp = await HandleServer(obj, "Update User Info");
        console.log(temp)
        if (temp.status === 200|| temp.status === 201) {
          updateAccountInfo({ userName: useName, Email: Email, Language: Language, Signedin:true });
       
          setCurrPage(6)
          
        } else {
            alert("Update failed");
        }
    } catch (error) {
        console.error("Error occurred while communicating with server:", error);
        // Handle error gracefully
    }
}; // create server call to get account info
// create server call to modify account json
  return (
    <div >
        <form onSubmit={handleSubmit} className='SignUp'>
            <label>User Name: </label>
            <input type='Text' onChange={(e) => {updateUserName(e.target.value)}} value={useName} ></input>
            <label>Password: </label>
            <input type='Password'  onChange={(e) => {updatePassword(e.target.value)}} value={passWord}></input>
            <label>Email: </label>
            <input type='Text'  onChange={(e) => {updateEmail(e.target.value)}} value={Email}></input>
            <label>Budget: </label>
            <input type='Text'  onChange={(e) => {updateBudget(e.target.value)}}value={Budget}></input>
       
            <select value={Language} onChange={handleDropdownChange}>
                <option value="English">English</option>
                <option value="Spanish">Spanish</option>
                <option value="French">French </option>
                <option value="German">German </option>
            </select>
            <button type='submit'>Update Information</button>
        </form>
    </div>
  )
}

export default EditPersonalInfo