import axios from "axios"
import masterapi from "./masterapi";



const BASE_URL ="";

const APIInstance = axios.create(
    {
        baseURL:BASE_URL
    }
);

const fetchGet = async (url) =>
{
    
}

export default  {

    master:masterapi,
    get:fetchGet,
}