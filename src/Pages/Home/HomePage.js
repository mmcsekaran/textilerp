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
class HomePage extends Component {
  render() {
    console.log(this.props);
    return (
      <Layout className="home-layout">
        <Layout.Header className="home-header">
          <Typography.Title level={3}>Company Name</Typography.Title>
          <Menu mode='horizontal' style={{width:"80%"}}>
          <Menu.Item ><Link to='/'>Home</Link></Menu.Item>
      
      <Menu.Item ><Link to = '/users'>User Accounts</Link></Menu.Item>
      <Menu.Item><Link to = '/master'>Master</Link></Menu.Item>
      <Menu.Item><Link to = '/garment'>Garment</Link></Menu.Item>
          </Menu>
          <Button className="header-logout" type="primary">
            App
          </Button>
        </Layout.Header>
        <Layout.Content>
          <Layout>
            {/* { <Layout.Sider   className="home-sidebar">
              {getUserMenu(this.props.apiInfo.userInfo)}
            </Layout.Sider> } */}
            <Layout.Content>
              <Routes>
                <Route path ="/master"  element ={<Outlet></Outlet>}>
                  
                  <Route path="/master" element={<MasterMenuPage></MasterMenuPage>}></Route>
                  <Route path="/master/company" element={<CompanyView></CompanyView>}></Route>
                  <Route path="department" element={<ComingSoon></ComingSoon>}></Route>
                </Route>
              <Route exact path='/garment' element = {<ProtectedRoute roles={[ADMIN]}><Outlet></Outlet></ProtectedRoute>}>
                <Route path="/garment" element ={<ComingSoon></ComingSoon>} />
              </Route>
              <Route exact path='/company' element = {<ProtectedRoute roles={[ADMIN]}><CompanyView></CompanyView></ProtectedRoute>}></Route>
              <Route exact path='/users' element = {<ProtectedRoute roles={[ADMIN]}><UserView></UserView></ProtectedRoute>}></Route>
              <Route exact path='/users/roles' element = {<ProtectedRoute roles={[ADMIN]}><RoleView></RoleView></ProtectedRoute>}></Route>
              <Route exact path='/users/pages' element = {<ProtectedRoute roles={[ADMIN]}><PermissionView></PermissionView></ProtectedRoute>}></Route>
                <Route
                exact
                  path="/"
                  element={
                    <ProtectedRoute
                      roles={[ADMIN, EMPLOYEE]}
                      callBack={(role) => {
                        switch (role) {
                          case ADMIN:
                            return <AdminDashboard></AdminDashboard>;
                          case EMPLOYEE:
                            return <EmployeeDashboard></EmployeeDashboard>;

                          default:
                            break;
                        }
                      }}
                    ></ProtectedRoute>
                  }
                ></Route>
                
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