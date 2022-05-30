import { Card, Col, Layout, Menu, PageHeader, Row, Typography } from "antd";
import React, { Component } from "react";
import MenuCard from "../Component/MenuCard";
import MenuGroup from "../Component/MenuGroup";
import logo from "../../logo.svg";
import companyimg from "../../assets/img/company.png";
import { Link, Outlet, Route, Routes } from "react-router-dom";
import D2DApi from "../D2DApi";
import Company, { CompanyView } from "./Company";
import Document from "../Component/Document";
import CompanyViewer from "./Company/CompanyViewer";
export class MasterMenuPage extends Component {
  render() {
    D2DApi.user.singIn({username:null,password:null}).then(
      suc => console.log(suc)
    )
    return (
      <Layout style={{ borderRadius: "10px" }}>
       
        <Layout.Content style={{padding:'3%',background:'ghostwhite'}}>
          <Routes>
             <Route path="/setup/company" element = {<Document><CompanyViewer></CompanyViewer></Document>}></Route>
          </Routes>
        
         
         
        </Layout.Content>
      </Layout>
    );
  }
}

export default 
{
  routerProps:
  {
    path:'master/*',
    element:<MasterMenuPage></MasterMenuPage>
  },
  children :[
    {
      name:'companymaster',
      title:'Setup',
      children:[{
        name:'setupMaster',
        title:'Company',
        children:[],
        path:'/master/setup/company',
        type : 3,
        permit:'MASTER.SETUP.COMPANY'
      }],
      path:'/master/setup/',
      type : 2,
      permit:'MASTER.SETUP'
    }
    
  ],
  name:'Master',
  title:"Master",
  type:1,
  path:'master/*',
  element:<MasterMenuPage></MasterMenuPage>,
  permit:'MASTER'
};
