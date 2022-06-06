import { Menu } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
import { Component } from 'react';

export default function UserMenu() {
    return (
        <Menu style={{height:'100%'}} theme='dark' mode='inline'>

            {/* User Groups and roles and their permission Menus */}

            <Menu.ItemGroup title={"Users"}>
                <Menu.Item>
                    <Link to="/users">Users</Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to="/users/roles">Roles</Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to="/users/permissions">Permission</Link>
                </Menu.Item>
            </Menu.ItemGroup>
            {/* Garment related masters and page setups all things. */}
            <Menu.ItemGroup title={"Master"}>
                
                <Menu.SubMenu title={"Setup"}>
                   
                    <Menu.Item>
                    <Link to='/master/setup/adminsetup'>Adminsetup</Link>
                    </Menu.Item>

                </Menu.SubMenu>
                
                <Menu.SubMenu title={"Material"}>
                
                <Menu.SubMenu title={"Yarn"}>

                    <Menu.Item>
                        <Link to="/master/yarncount">Yarn Count Master</Link>
                    </Menu.Item>

                    <Menu.Item>
                        <Link to="/master/countmaster">Count Master</Link>
                    </Menu.Item>

                    <Menu.Item>
                        <Link to="/master/yarntype">Yarn Type</Link>
                    </Menu.Item>

                </Menu.SubMenu>

                <Menu.SubMenu title={"Fabric"}>

                    <Menu.Item>
                        <Link to="/master/fabric/">Fabric Type</Link>
                    </Menu.Item>

                    <Menu.Item>
                        <Link to="/master/fabmaster/">Fabric Master</Link>
                    </Menu.Item>

                   <Menu.Item>
                       <Link to ="/master/fabricname">Fabri Name Master</Link>
                   </Menu.Item>

                </Menu.SubMenu>

                    <Menu.Item>
                        <Link to="/master/accessories/">Accessories</Link>
                    </Menu.Item>
                    <Menu.Item>
                        <Link to="/master/general/">General</Link>
                    </Menu.Item>

                </Menu.SubMenu>
                <Menu.SubMenu title ={"Order"}>
                    <Menu.Item > <Link to='/master/order/style' >Style</Link></Menu.Item>
                    <Menu.Item > <Link to='/master/order/process' >Process</Link></Menu.Item>
                    
                </Menu.SubMenu>
            </Menu.ItemGroup>
        </Menu>
    )
}
