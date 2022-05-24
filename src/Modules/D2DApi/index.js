import axios from "axios"
import masterapi from "./masterapi";
import user from "../User/user";


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
    user:user,
    master:masterapi,
    get:fetchGet,
}