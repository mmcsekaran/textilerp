import { RetweetOutlined } from "@ant-design/icons";
import axios from "axios";
import Data from "../../Modules/Master/Data";
import user from "../../Modules/User/user";
import Dataservice from "./Dataservice";
import { UserLogin } from "./Modal/userLogin";

export class UserService 
{
    private service = Dataservice.axiosInstance

   public isLogged  = false;
   public ticket = null
   public constructor()
    {
        this.loadSession();

        console.log(this.ticket)

    }

    async  login(userLog:UserLogin) 
   {
       
    

        if((userLog.username === null ||userLog. username === '' || userLog.username === undefined) && (userLog.password === null || userLog.password === '' || userLog.password === undefined)) throw new Error("UserName and password is Required");

        
      
       const data = await this.service.get("/user/",
        {
            params:{
                username:userLog.username,
                password:userLog.password
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
   }

   #clearSession()
   {
        sessionStorage.clear() ;
        this.ticket = null ;
        this.isLogged = false;

   }
}