import { ADMIN, EMPLOYEE, USER, VENDOR } from "../../component/Security/AuthoticationContext"

const menuList =[
    {
        name :"home",
        title :"Home",
        link :"/",
        type:"menu",
        menus:[],
        roles :[ADMIN,EMPLOYEE,USER,VENDOR]
    }
]


export const getUserMenuList = () =>
{
    
}
