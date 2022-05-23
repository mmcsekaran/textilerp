
import { toHaveDisplayValue } from "@testing-library/jest-dom/dist/matchers";
import axios, { Axios } from "axios";
import React, { Component, useContext } from "react";
import { UserContext, UserProvider } from "../Security/AuthoticationContext";



export const APIContext = React.createContext({baseURL:""});




export class APIProvider extends Component
{
   static contextType  = UserContext ;
        apiServer = axios.create(
        {
            baseURL:this.props.baseURL
        }    
    )

    constructor(props)
    {
      super(props);
      this.state = {
        baseURL : this.props.baseURL,
      
      }
    }
    render()
    {
     
        return  <APIContext.Provider value ={{userInfo:this.context.userInfo,baseURL :this.props.baseURL}}>
         
          {this.props.children}
        
        </APIContext.Provider>
    }
    
}

export const ConnectAPI = WrapperComponent =>
{
  
    
     function Wrapper (props) 
     {
      const apiContext = useContext(APIContext);
      const user = useContext(UserContext)
      return <WrapperComponent {...props} apiInfo = {apiContext} ></WrapperComponent>
      
     }
    
   return Wrapper

}


