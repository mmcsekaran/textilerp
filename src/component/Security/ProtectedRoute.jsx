import React, { useContext } from "react"
import { UserContext } from "./AuthoticationContext";
import {Navigate} from 'react-router-dom'
import Unautherize from "../../Pages/ErrorPage/Unautherize";



export const ProtectedRoute =({children,roles,callBack}) =>
{
    const user = useContext(UserContext)
    const userHasRequiredRole = user && roles.includes(user.userInfo.role)  ?true:false
    console.log(user , userHasRequiredRole);
    if(user.userInfo.isLogin && userHasRequiredRole)
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