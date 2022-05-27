import { Menu } from 'antd'
import React, { Component } from 'react'
import { UserContext } from '../Security/AuthoticationContext'
import menuData from '../Menu/menuData.json'
import { Link } from 'react-router-dom'
import axios from 'axios'


export default class UserMenu extends Component {

    constructor(props)
    {
        super(props);
        this.state = {
            userMenu : []
        }
    }

    static contextType = UserContext

 

getMenu = (menu) =>
{
    console.log(this.context.userInfo.isLogin)
    if(this.context.userInfo.isLogin && menu.roles.some( p => p == this.context.userInfo.role))
    {
    switch(menu.type)
    {
        case 1:
                return <Menu.ItemGroup title= {menu.title}>
                    {
                        
                        menu.children && menu.children.map(mnu => this.getMenu(mnu))

                    }
                </Menu.ItemGroup>
        case 2:
                return <Menu.SubMenu title= {menu.title}>
                    {
                      menu.children  && menu.children.map(mnu => this.getMenu(mnu))
                    }

                </Menu.SubMenu>
        case 3:
                return <Menu.Item><Link to ={menu.path}>{menu.title}</Link></Menu.Item>

    }
}
return ""
}

fetchUserMenu = () =>
{
    //TO-DO
        axios.get("/").then(
        suc => 
        {
           
          this.setState({userMenu:menuData})
        },
        fail => 
        {
            console.log("fail")
        }
    )
    
}

componentDidMount()
{
    this.fetchUserMenu();

    registerModule("Garment");
    registerModule("Dyeing");
    registerModule("App");
    registerModule("App1");
    

}

  render() {
      console.log(menuData)
    return (
        
        <Menu mode='inline' theme='light' style={{height:'100%'}}>
            {
                this.state.userMenu.map(menu =>
                    {
                       return  this.getMenu(menu)
                    })
            }
        </Menu>
    )
  }
}

const moduleList = {
    modules:[]
}

export const registerModule = module =>
{
    console.log(moduleList)
    moduleList.modules = new Set([...moduleList.modules,module])

}