import { Component, useContext } from "react"
import User from "../../Modules/User";
import Unautherize from "../../Pages/ErrorPage/Unautherize";
import { UserContext } from "./AuthoticationContext"



export class ProtectComponent extends Component
{
   static contextType = UserContext

   hasAuthorized = () =>
   {
      console.log(this.context.userInfo.Pages)
      let result = false ;
      if(this.props.required)
      {
        
        if(this.props.requiredRole )
        {
           if(this.context.userInfo.role === this.props.requiredRole)
           {
            result = true ;
           }
           else
           {
              return false;
           }
          
        }
       
         if(this.props.requiredPage )
         {
            {
               const userHasPermission = this.context.userHasPagePermission(this.props.requiredPage) ;
               console.log(userHasPermission)
               if(userHasPermission.status)
               {
                  result = true ;
                  if( this.props.requiredPermission)
                  {
                     
                     result = userHasPermission.permissions.some(v =>  v.page === this.props.requiredPage && v.permissions.some(c => c === this.props.requiredPermission)
                        ) ;
                     console.log(result)
                  }
                  
               }
               else
               {
                  return false ;
               }     
            }
           
         }
         
         return result;
        
      }
      else
      {
         return true
      }

    
   }
   render()
   {
      if(this.hasAuthorized())
      {
         return this.props.children
      }
      return this.props.status
   }
}