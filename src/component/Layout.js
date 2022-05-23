import React, { Component }from "react"; 
import {Layout} from 'antd'
import './Layout.css'
import { Typography } from "antd";
import UserLoginForm from "./User/UserLoginForm";
import {Route, BrowserRouter, Router, Routes, Link, Outlet} from 'react-router-dom'
import UserRegistrationForm from "./User/UserRegistrationForm";
import AdminPanel from "./Admin/AdminPanel";
import { Menu } from "antd";
import UserList from "./User/UserList";
import { ProtectedRoute } from "./Security/ProtectedRoute";
export default class AppLayout extends Component
{

    render()
    {
      return  <Layout style={{height:"100vh"}}  > 
       
            <Layout.Header style={{background:"#FFFFFF"}} >
                <Menu mode="horizontal" >
                    <Menu.SubMenu title ='Admin'>
                    <Menu.Item><Link to ="/users">Users</Link></Menu.Item>
                    </Menu.SubMenu>
                 
                </Menu>
            </Layout.Header>
            <Layout.Content style={{height:'80vh'}}  >
              
            
                   <Routes>
                       <Route  exact path="/users" element = { <ProtectedRoute><UserList></UserList></ProtectedRoute> } >
                      
                        </Route>
                       <Route exact path="/login"    element= {<UserLoginForm></UserLoginForm>}></Route>
                       <Route exact path="/register" element= {<UserRegistrationForm></UserRegistrationForm>}></Route>
                   </Routes>
            
               
            </Layout.Content>
            <Layout.Footer>
                Footer
            </Layout.Footer>
        </Layout>
    }

}