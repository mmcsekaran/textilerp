import { RetweetOutlined } from "@ant-design/icons";
import axios from "axios";
import Data from "../Master/Data";

import Dataservice from "../../Core/Services/Dataservice";



import {  Role, UserLogin, UserProfile } from './Users.Modal';




export interface UserRegister
{
    username:string
}


export class UserService 
{
    private service = Dataservice.axiosInstance

    private currentUser:UserProfile | undefined = undefined  ;

    
   public isLogged  = false;
   public ticket:any = null
   public constructor()
    {
        this.loadSession();

        console.log(this.ticket)

    }

    async  login(userLog:UserLogin) 
   {
       
    

        if((userLog.username === null ||userLog. username === '' || userLog.username === undefined) && (userLog.passHash === null || userLog.passHash === '' || userLog.passHash === undefined)) throw new Error("UserName and password is Required");

        
      
       const data = await this.service.get("/user/",
        {
            params:{
                username:userLog.username,
                password:userLog.passHash,
                userType:userLog.userType
            }
        }).then(
            res =>
            {
               this.setSession(res.data[0]);
              
               return res;
            },
            rej => 
            {
                throw rej;
            }
        )

      
        return data.data[0].ticket;   
       
   }

 

    public async  signUp(register:UserRegister):Promise<boolean> 
    {

        return true;
        
    }
  
    setSession(data:any):void
   {
       console.log(data.ticket);
       sessionStorage.setItem("ticket",data.ticket);
       sessionStorage.setItem("userId",data.id);
       this.isLogged = true;
       this.ticket = data.ticket;
      
   }

    loadSession():void
   {
        this.ticket = sessionStorage.getItem("ticket");
        if(typeof this.ticket !== undefined)
        {
            this.isLogged = true
        }
   }

   #clearSession()
   {
        sessionStorage.clear() ;
        this.ticket = null ;
        this.isLogged = false;

   }

   hasPermission = (permission:string):boolean =>
   {
    return true;
   }

   public addRole = (role:Role):boolean =>
   {
    return true;
   }

   public removeRole = (role:Role | string | number):boolean =>
   {
        return true;
   }

   public getRoles():Array<Role>|undefined
   {
       var roles = new Array<Role>();
       
       
       return undefined;
   }

}