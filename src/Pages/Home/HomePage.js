import { Layout, Button, Typography, Menu } from "antd";

import React, { Component } from "react";
import { Link, Outlet, Route, Routes } from "react-router-dom";
import { APIContext, ConnectAPI } from "../../component/API/APIProvider";
import {
  ADMIN,
  EMPLOYEE,
  USER,
  VENDOR,
} from "../../component/Security/AuthoticationContext";
import { ProtectedRoute } from "../../component/Security/ProtectedRoute";

import AdminDashboard from "../Admin/AdminDashboard";
import EmployeeDashboard from "../Employee/EmployeeDashboard";
import VendorDashboard from "../Vendor/VendorDashboard";
import CompanyView from '../../Modules/Master/Company'
import "./home.css";
import UserList from "../../component/User/UserList";
import UserView from "../../Modules/User";
import RoleView from "../../Modules/User/Authorization/Roles/RoleView";
import PermissionView from "../../Modules/User/Authorization/Permission/PermissionView";
import MasterMenuPage from "../../Modules/Master";
import ComingSoon from "../ErrorPage/ComingSoon";
import UserMenu from "../../component/Menu";
import Modules from "../../Modules";
class HomePage extends Component {

  generateModuleMenu = (module) =>
  {
    
        <Menu.ItemGroup title ={module.name} key ={module.name}>
            { 
              this.generateMenu(module.children)
            }
        </Menu.ItemGroup>
    
  }

  generateMenu = menu =>
  {
    if(menu !== undefined)
    {
      console.log(menu)
      
          if(menu.type === 1)
          {
          return  <Menu.ItemGroup title ={menu.name} key ={module.name}>
            { 
              menu.children.map(mn => this.generateMenu(mn))
            }
              </Menu.ItemGroup>
          }
          if(menu.type === 2)
          {
           return  <Menu.SubMenu title ={menu.title}>
              {
                 menu.children.map(mn => this.generateMenu(mn))
              }
            </Menu.SubMenu>
          }
          if(menu.type === 3)
          {
            console.log(menu)
           return  <Menu.Item  >
           
              
         <Link to ={menu.path} > {  menu.title}</Link>

              
            </Menu.Item>
          }
          if(menu.type === 4)
          {
           
      return  <Menu.Divider></Menu.Divider>
          }
        
    }
  }


  render() {
    console.log(this.props);
    return (
      <Layout className="home-layout">
        <Layout.Header className="home-header">
          <Typography.Title level={3}>Company Name</Typography.Title>
          <Menu mode='horizontal' style={{width:"80%"}}>
           
          </Menu>
          <Button className="header-logout" type="primary">
            App
          </Button>
        </Layout.Header>
        <Layout.Content>
         
          <Layout>
             <Layout.Sider   className="home-sidebar">
             <Menu className="home-menubar" mode='vertical' >
             {Modules.map(module => this.generateMenu(module))}
          </Menu>
            </Layout.Sider> 
            <Layout.Content>
              <Routes>              
               {Modules.map(module => (<Route {...module.routerProps} key={module.name}>
               
               </Route>))}               
              </Routes>
            </Layout.Content>
          </Layout>
        </Layout.Content>
        <Layout.Footer>Copyrights R 2022 </Layout.Footer>
      </Layout>
    );
  }
}

export default ConnectAPI(HomePage);

const getDashboard = (userType) => {
  switch (userType) {
    case ADMIN:
      return <AdminDashboard></AdminDashboard>;
    case USER:
    case EMPLOYEE:
      return <EmployeeDashboard></EmployeeDashboard>;
    case VENDOR:
      return <VendorDashboard></VendorDashboard>;
    default:
      break;
  }
};

const getUserMenu = (user) => {
  return (
    <Menu theme="light" className="home-menubar" mode="inline">
      <Menu.Item ><Link to='/'>Home</Link></Menu.Item>
      
      <Menu.Item ><Link to = '/users'>User Accounts</Link></Menu.Item>
      <Menu.Item><Link to = '/master'>Master</Link></Menu.Item>
      <Menu.Item><Link to = '/garment'>Garment</Link></Menu.Item>
      <Menu.Item>Home</Menu.Item>
      <Menu.Item>Home</Menu.Item>
      <Menu.Item>Home</Menu.Item>
      <Menu.Item>Home</Menu.Item>
    </Menu>
  );
};
