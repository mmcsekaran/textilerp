import { ConfigContext } from 'antd/lib/config-provider'
import axios, { Axios } from 'axios'
import React, { Component, useContext } from 'react'
import { UserContext, ApiProvider } from './AuthoticationContext'

const apiServer = axios.create(
    {
        baseURL:'https://fakestoreapi.com',
        headers:{
            "Access-Control-Allow-Origin": "*"
         }
    }
)

export default function ConnectAPI(WrappedComponent) {

   
    
  return class extends Component
  {
    
    
     static contextType = UserContext;
          
      

      fetchWeatherCast = async () =>
      {
          try{
            const data = await apiServer.get("/users",
            {
                headers:
                {
                   "Access-Control-Allow-Origin": "*",
                   "Authorization":`Bearer ${this.context.token}`
                }
            });
   
            return data.data ;
          }
          catch(ex)
          {
              return null;
          }
              
      }

      constructor(props)
      {
          super(props);

        this.state =
        {
            test:
            {
                getWeather:this.fetchWeatherCast,
               
            },
            user:{
                userLogin :this.login
            },
            token : null,
            isLogin:false
        }
          
      }
      componentDidMount()
      {
          console.log()
      }
      render()
      {
          
          return  <WrappedComponent   apiInfo = {this.state} {...this.props} ></WrappedComponent>
             
           
          
      }
  }
  

    
  
}


