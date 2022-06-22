import { Layout, Button, Typography, Menu, Dropdown, Avatar ,Image} from "antd";

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

import Modules from "../../Modules";
import ResetPassword from './../../Modules/User/ResetPassword';
import { LoginOutlined, LogoutOutlined, MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import logo from '../../assets/img/d2d.png'
import UserMenu from "../../Modules/Common/UserMenu";
import AppRouters from "../../Modules/Common/Routes";
import { GiHamburgerMenu } from "react-icons/gi";
class HomePage extends Component {

  constructor(props)
  {
    super(props);
    this.state = {
      sideClose:false
    }
  }

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

  hanleSiderBar= () =>
  {
    this.setState({sideClose:!this.state.sideClose})
  }

  render() {
    console.log(this.props);
    return (
      <Layout className="home-layout">
        
        
             <Layout.Sider collapsed ={this.state.sideClose}   collapsedWidth={70}  className="home-sidebar">
              <section style={{height:'50px'}}>
                <Button style={{marginTop:'8px',marginLeft:'18px'}}  type="text" onClick={this.hanleSiderBar} icon ={<GiHamburgerMenu style={{fontSize:'22pt',color:'white'}}></GiHamburgerMenu>}></Button>
                {/* <span style={{fontSize:'22pt',fontWeight:'bold',color:'white',paddingLeft:'5px'}}>D2D</span> */}
                {/* <Button onClick={()=>
                {
                  this.setState({sideClose:!this.state.sideClose})
                }} type="text" style={{float:'right',marginTop:'10px'}} icon ={this.state.sideClose ? <MenuUnfoldOutlined style={{fontSize:'20pt',color:'white'}}></MenuUnfoldOutlined >:<MenuFoldOutlined style={{fontSize:'20pt',color:'white'}}></MenuFoldOutlined>} ></Button>
              */} </section>
             {/* <Menu className="home-menubar" mode='vertical' >
             {Modules.map(module => this.generateMenu(module))}
          </Menu> */}
         <UserMenu/>  
            </Layout.Sider> 
        <Layout.Content>
        <Layout>
        <Layout.Header style={{background:'linear-gradient(45deg,#1893cc ,#1893cc)'}} className="home-header">
         
        {/*  */}
         <Typography.Text strong style={{color:'white',fontSize:'2.4em',fontFamily:'mono'}}>D2D International</Typography.Text>
        
         <Dropdown trigger={['click']} overlay={ <Menu style={{width:'100%',background:'#1893cc',color:'white'}}>
           <Menu.Item style={{background:'#1893cc',color:'white'}}>
            <LogoutOutlined style={{fontSize:'12pt',marginRight:'5px'}}></LogoutOutlined> Profile
           </Menu.Item> 
           <Menu.Divider/>
           <Menu.Item style={{background:'#1893cc',color:'white'}}>
            <LogoutOutlined style={{fontSize:'12pt',marginRight:'5px'}}></LogoutOutlined> Logout
           </Menu.Item> 
           </Menu>
        }>
           <Avatar icon = {<LoginOutlined></LoginOutlined>} style={{background:'transparent'}} className="header-logout"></Avatar>
         </Dropdown>
         
         
        </Layout.Header>
         
            <Layout.Content className="app-container" style={{paddingLeft:'40px',paddingRight:'40px'}} >
              {/* <Routes>              
               {Modules.map(module => (<Route {...module.routerProps} key={module.name}>
               <Route exact path="*" element={<ComingSoon></ComingSoon>}/>
               
               </Route>))}  
                 
              </Routes> */}
              <AppRouters></AppRouters>
            </Layout.Content>
            <Layout.Footer>Copyrights R 2022 </Layout.Footer>
          </Layout>
        </Layout.Content>

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
