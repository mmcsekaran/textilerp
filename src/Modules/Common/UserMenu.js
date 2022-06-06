import { Menu } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
import { Component } from 'react';

export default function UserMenu() {
    return (
        <Menu style={{height:'100%'}} mode='inline'>

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

                </Menu.SubMenu>
                <Menu.SubMenu title={"Material"}>


                    <Menu.Item>
                        <Link to="/master/yarn">Yarn</Link>
                    </Menu.Item>



                    <Menu.Item>
                        <Link to="/master/fabric/">Fabric</Link>

                    </Menu.Item>

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
            <Menu.ItemGroup title="Garment" >
                <Menu.SubMenu title="Master">
                    <Menu.Item><Link to = '/garment/master/color'>Color</Link></Menu.Item>
                    <Menu.Item><Link to = '/garment/master/yarn'>Yarn</Link></Menu.Item>
                </Menu.SubMenu>
                <Menu.SubMenu title = {"Sample"}>
                <Menu.Item><Link to = '/garment/sample/techpack'>Tech Sheet</Link></Menu.Item>
                </Menu.SubMenu>
            </Menu.ItemGroup>
        </Menu>
    )
}
