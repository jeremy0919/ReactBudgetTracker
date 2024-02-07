import React, { useEffect, useState } from 'react';
import { useAccountContext } from '../Context/AccountInfo'
import DrawGraphic from '../DisplayGraphic/DrawGraphic'
import Bar from '../SideComponents/Bar';
import GraphicKey from '../DisplayGraphic/GraphicKey';
import PrintTotal from '../PageData/budget/PrintTotal';
import { useCookies } from 'react-cookie';
import HandleServer from '../components/HandleServer';
function UserInfo() {
    const {accountInfo} = useAccountContext()
    const [list, setList] = useState({});
    const [renderG, UpdateRender] = useState(false);

    const [cookies] = useCookies(['UserData']);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const obj = {
                    username: cookies.UserData,
                    listName: "All"
                };

    
                const temp = await HandleServer(obj, "Get List");
                
                // Update state with the fetched data
                setList(temp.data);
                UpdateRender(true)
            } catch (error) {
                console.error('Error fetching list:', error);
            }
        };
    
        // Call the async function to fetch data
        fetchData();
    }, [cookies.UserData]);     
            return (
              <div>
                <Bar />
                <div style={{ padding: '20px' }}> {/* Add padding for better spacing */}
                  <h2>Account Information</h2>
                  <div style={{ marginBottom: '20px' }}>
                    <p>
                      <strong>UserName:</strong> {cookies.UserData}<br />
                      <strong>Language:</strong> {accountInfo.Language}<br />
                      <strong>Email:</strong> {accountInfo.Email}
                    </p>
                    <p>Edit Personal Information button</p>
                    <p>Edit list and budget Information button</p>
                  </div>
            
                  <h2>Spending</h2>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}> {/* Use flexbox to space out the elements */}
                    <div style={{ flex: '1', maxWidth: '22%', paddingTop:'6%'}}> {/* Adjust widths as necessary */}
                      <GraphicKey />
                    </div>
                    <div style={{ flex: '5', display: 'flex', flexDirection: 'column' }}>
                      {renderG && <DrawGraphic list={list} />}
                    </div>
                    <div style={{ flex: '1', maxWidth: '20%' }}> {/* Adjust widths as necessary */}
                    <h3>Money Spent by List</h3>
                    <PrintTotal Server1="Lists" Server2="Total List"/>
                    <h3>Money Spent by Category</h3>
                    <PrintTotal Server1="Category Names" Server2="Total Category"/>
                
                        </div>
                  </div>
                </div>
              </div>
            );
            
}

export default UserInfo