import axios from "axios";
import Data from "../../Modules/Master/Data";


class   Dataservice
{
     axiosInstance = axios.create(
        {
            baseURL : 'http://localhost:3001/'
        }
    )
   
    


   
}
export default new Dataservice() ;
