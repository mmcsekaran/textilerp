import { Components } from "antd/lib/date-picker/generatePicker";
import { tuple } from "antd/lib/_util/type";
import React, { Component } from "react";
import axios from 'axios';
import APIServer from "./ConnectServer";
import ExportTypography from "antd/lib/typography/Typography";
export const UserContext = React.createContext(null)
const apiServer = axios.create(
    {
        baseURL:'https://localhost:44393',
        headers:{
            "Access-Control-Allow-Origin": "*"
         }
    }
)
export class APIProvider extends Component
{
    
    constructor(props)
    {
        super(props);
        this.state =
        {
            isLogin : false,
            userLogin : this.login ,
            userLogout : this.logout,
            userRegister : this.register,
            userProfile : this.getProfile,
            token :null,
           weather:{
               getWeather : this.fetchWeatherCast
           }
        }
    }
    fetchWeatherCast = async () =>
    {
         
      const res = await apiServer.get("/api/WeatherForecast/list",
       {
           headers:
           {
              "Access-Control-Allow-Origin": "*",
              "Authorization":`Bearer ${this.state.token}`
           }
       });

       return res.data ;

     
    }
 login = async (username,Password) =>
{

   try {
       const res = await axios.post("https://localhost:44393/api/user/login",
     {
         userName : username,
         password :Password
     },
     {
         headers:{
            "Access-Control-Allow-Origin": "*"
         }
     });
         
     
          this.setState({isLogin : true,token : res.data});
             return {
                 status : res.status,
                 message: "Login Success"
             };
     
          return false ;  
   } catch (error) {
       console.log(error)
       return {
           status : error.code,
           message: error.message
       } ;
   }
     
         
         
     
  
  

    
}

 logout  = async () =>
{

}

 register = async (userRegData) =>
{

}
 getProfile = async(username) =>
{

}






    
render()
{
    return <UserContext.Provider value={this.state}>
        
             {this.props.children}
       
      
    </UserContext.Provider>

}
}

export const WeatherContext = React.createContext(null) ;