import { Card, Col, Layout, Menu, PageHeader, Row, Typography } from "antd";
import React, { Component } from "react";
import MenuCard from "../Component/MenuCard";
import MenuGroup from "../Component/MenuGroup";
import logo from "../../logo.svg";
import companyimg from "../../assets/img/company.png";
import { Link } from "react-router-dom";
export class MasterMenuPage extends Component {
  render() {
    return (
      <Layout style={{ borderRadius: "10px" }}>
        <Layout.Sider>
          <Menu
          mode="vertical"
          selectable={false}
         role='listitem'
          >
             
                <Menu.ItemGroup title="Admin">
                <Menu.SubMenu title="Setup">
                  <Menu.Item><Link to ="/master/company">Company</Link></Menu.Item>
                  <Menu.Item>Suppliers</Menu.Item>
                  <Menu.Item>Bank</Menu.Item>
                  <Menu.Item>City</Menu.Item>
                  <Menu.Item>State</Menu.Item>
                  <Menu.Item>Country</Menu.Item>
                  <Menu.Item>Production Units</Menu.Item>
                  <Menu.Item>Block</Menu.Item>
                  <Menu.Item>Zone</Menu.Item>
                  <Menu.Item>Department</Menu.Item>
                </Menu.SubMenu>
                </Menu.ItemGroup>
                <Menu.ItemGroup title="HRMS">
                  <Menu.Item>Department</Menu.Item>
                  <Menu.Item>Designation</Menu.Item>
                    <Menu.Divider></Menu.Divider>
                </Menu.ItemGroup>
                <Menu.ItemGroup title="Dyeing">
                <Menu.SubMenu title="Dyes / Chemicals"> </Menu.SubMenu>
                </Menu.ItemGroup>
                <Menu.ItemGroup title="Garments">
                <Menu.SubMenu title="Style"> </Menu.SubMenu>
                <Menu.SubMenu title="Accessories"> </Menu.SubMenu>
                </Menu.ItemGroup>
             
          </Menu>
        </Layout.Sider>
        <Layout.Content style={{padding:'3%',background:'lightgreen'}}>
          {/* Administator Group */}
          <MenuGroup title={"Basic"}>
            <MenuCard title={"Company"} link ="/master/company" image={companyimg} />
            <MenuCard title={"Supplier"} link ="/master/suppliers" image={companyimg} />
            <MenuCard title={"Bank"} image={companyimg} />
            <MenuCard title={"City"} image={companyimg} />
            <MenuCard title={"State"} image={companyimg} />
            <MenuCard title={"Country"} image={companyimg} />
            <MenuCard title={"Production Unit"} image={companyimg} />
            <MenuCard title={"Building Block"} image={companyimg} />
            <MenuCard title={"Department"} image={companyimg} />
            <MenuCard title={"Department1"} link ={'/master/department'} image={companyimg} />
          </MenuGroup>

          <MenuGroup title={"Users"}>
            <MenuCard title="User List" />
            <MenuCard title="Roles" />
            <MenuCard title="Permission" />
           
          </MenuGroup>
          <MenuGroup title={"Employee"}>
            <MenuCard title="Designation" />
            <MenuCard title="Shift Template" />
          
           
          </MenuGroup>
          <MenuGroup title={"Order"}>
            <MenuCard title="Yarn" />
            <MenuCard title="Fabric" />
            <MenuCard title="Style" />
            <MenuCard title="" />
          </MenuGroup>
          <MenuGroup title={"Finance"}></MenuGroup>
        </Layout.Content>
      </Layout>
    );
  }
}

export default MasterMenuPage;
