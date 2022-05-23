import { useLocation, useNavigate, useParams } from "react-router-dom"


export const WithRouter = WrapperComponent =>
{
    function ComponentWithRouter(props) 
   {let location = useLocation();
    let navigate =useNavigate();
    let params = useParams();
    return(
        <WrapperComponent
        {...props}

        router = {{location,navigate,params}}
        >

        </WrapperComponent>
    )
   }
   return ComponentWithRouter
}