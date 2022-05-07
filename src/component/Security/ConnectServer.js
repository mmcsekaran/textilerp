import { ConfigContext } from 'antd/lib/config-provider'
import axios, { Axios } from 'axios'
import React, { Component, useContext } from 'react'
import { UserContext, ApiProvider } from './AuthoticationContext'

const apiServer = axios.create(
    {
        baseURL:'https://localhost:44393',
        headers:{
            "Access-Control-Allow-Origin": "*"
         }
    }
)

export default function API(WrappedComponent) {

   
    
  return class extends Component
  {
    
    
     static contextType = UserContext;
          
      

      fetchWeatherCast = () =>
      {
          let data ;
         apiServer.get("/api/WeatherForecast/list",
         {
             headers:
             {
                "Access-Control-Allow-Origin": "*",
                "Authorization":`Bearer ${this.context.token}`
             }
         }).then(
             res => { data = res.data} ,
             rej => { data = rej }
         )

         return data ;
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


