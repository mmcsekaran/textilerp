import React, { Component } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "./AuthoticationContext";
import APIServer from "./ConnectServer";
 class Authorize  extends Component
 {
    

     render()
     {
         console.log(this.props)

         return this.context.isLogin === true ? this.props.children: <Navigate to = "/login"/>
     }
}
Authorize.contextType = UserContext
export default Authorize
