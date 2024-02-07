
import axios from 'axios';

async function ServerGet(endPoint) {


  
    
            try {
                const response = await axios.get(`http://localhost:5000/${endPoint}`);
                console.log(response.data)
                return response.data
            } catch (error) {
                console.log(error);
                return error
            }
 
}

export default ServerGet;
