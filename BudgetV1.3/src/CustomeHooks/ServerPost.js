import axios from 'axios';
async function ServerPost(obj, endPoint) {
            console.log(`ServerPort:`)
            console.log(obj)
            const temp = `http://localhost:5000/${endPoint}`
            try {
                // Make a POST request to the server
                const response=  await axios.post(temp,  {obj} );
   
                return response
                // Dispatch the action to update the state
        
            } catch (error) {
                console.error('Error updating list:', error);
                return error
            }
            };
       
export default ServerPost