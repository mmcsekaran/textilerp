import React, { useContext } from "react"
import { UserContext } from "./AuthoticationContext";
import {Navigate} from 'react-router-dom'
import Unautherize from "../../Pages/ErrorPage/Unautherize";
import { UserService } from "../../Modules/User/UserService";



export const ProtectedRoute =({children,roles,callBack}) =>
{
    const user = useContext(UserContext)
    const service = new  UserService();
    console.log(service)
    const userHasRequiredRole = service.isLogged  ?true:false
  
    if(service.isLogged)
    {
        if(callBack ) return callBack(user.userInfo.role)
        return children
    }
    if(user.userInfo.isLogin && !userHasRequiredRole)
    {
        return <Unautherize></Unautherize>
    }
    return <Navigate to="/login"></Navigate>
}