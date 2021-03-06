import { Menu } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
import { Component } from 'react';
import { HomeTwoTone, UserOutlined } from '@ant-design/icons';
import {AiFillDatabase} from 'react-icons/ai'
import {GiSewingMachine} from 'react-icons/gi'
import {FaUsersCog} from 'react-icons/fa'
export default function UserMenu() {
    return (
        <Menu style={{height:'100%',paddingTop:'10px'}} theme='light' mode='vertical'>

            {/* User Groups and roles and their permission Menus */}

                <Menu.SubMenu title ="Users" icon = {<FaUsersCog style={{fontSize:'18pt'}}></FaUsersCog>}>
                     <Menu.Item>
                   
                    <Link to="/users">Users</Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to="/users/roles">Roles</Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to="/users/permissions">Permission</Link>
                </Menu.Item> 
                </Menu.SubMenu>
              
        
            {/* Garment related masters and page setups all things. */}
            <Menu.SubMenu icon ={<AiFillDatabase  style={{fontSize:'18pt'}}></AiFillDatabase>} title={"Master"}>
           
                <Menu.SubMenu title={"Admin"}>
                
                <Menu.Item>
                    <Link to= "/master/partymaster">Party Master</Link>
                </Menu.Item>

                <Menu.Item >
                    <Link to ="/master/exportmaster">Export Master</Link>
                </Menu.Item>

                <Menu.Item >
                    <Link to ="/master/buyermaster">Buyer Master</Link>
                </Menu.Item>

                <Menu.Item >
                    <HomeTwoTone style={{paddingRight:'20px',fontSize:'16pt'}}></HomeTwoTone>
                    <Link to ="/master/processmaster">Process Master</Link>
                </Menu.Item>
                <Menu.Item >
                    <Link to ="/master/city">City Master</Link>
                </Menu.Item>

                <Menu.Item >
                    <Link to ="/master/processgroup">Process Group</Link>
                </Menu.Item>

                <Menu.Item >
                    <Link to ="/master/departmentmaster">Department Master</Link>
                </Menu.Item>

                </Menu.SubMenu>
                
                <Menu.SubMenu title={"Setup"}>
                   
                    <Menu.Item><Link to='/master/setup/adminsetup'>Adminsetup</Link></Menu.Item>
                    <Menu.Item><Link to='/master/setup/approvalmaster'>Approvalmaster</Link></Menu.Item>
                    <Menu.Item><Link to='/master/setup/approvalpassword'>Approvalpassword</Link></Menu.Item>
                    <Menu.Item><Link to="/master/setup/digitalsignature">Digitalsignature</Link></Menu.Item>
                    <Menu.Item><Link to='/master/setup/allowancesetup'>Allowance Setup</Link></Menu.Item>
                    <Menu.Item><Link to='/master/setup/hsncode'></Link>HSN Code</Menu.Item>
                    
                </Menu.SubMenu>

                <Menu.SubMenu title={"Finance"}>

                    <Menu.Item><Link to='/master/finance/taxtype'>Tax Type</Link></Menu.Item>
                    <Menu.Item><Link to='/master/finance/taxgroup'>Tax Group</Link></Menu.Item>
                    <Menu.Item><Link to='/master/finance/addition'></Link>Addition Deduction Components </Menu.Item>

                </Menu.SubMenu>
                
                <Menu.SubMenu title={"Material"}>
                
                <Menu.SubMenu title={"Yarn"}>

                    <Menu.Item>
                        <Link to="/master/yarn/yarncount">Yarn Count Master</Link>
                    </Menu.Item>

                    <Menu.Item>
                        <Link to="/master/yarn/countmaster">Count Master</Link>
                    </Menu.Item>

                    <Menu.Item>
                        <Link to="/master/yarn/yarntype">Yarn Type</Link>
                    </Menu.Item>

                </Menu.SubMenu>

                <Menu.SubMenu title={"Fabric"}>

                    <Menu.Item>
                        <Link to="/master/fabric/fabrictype/">Fabric Type</Link>
                    </Menu.Item>

                    <Menu.Item>
                        <Link to="/master/fabric/fabmaster/">Fabric Master</Link>
                    </Menu.Item>

                   <Menu.Item>
                       <Link to ="/master/fabric/fabricname">Fabri Name Master</Link>
                   </Menu.Item>
                   
                   <Menu.Item>
                       <Link to ="/master/fabric/contentmaster">Content Master</Link>
                   </Menu.Item>

                   <Menu.Item>
                       <Link to ="/master/designmaster">Design Master</Link>
                   </Menu.Item>

                </Menu.SubMenu>

                <Menu.SubMenu title='Costing'>

                    <Menu.Item>
                        <Link to ="/master/costingenty">Costin Entry</Link> 
                    </Menu.Item>

                </Menu.SubMenu>

                <Menu.SubMenu title='Accessories'>

                    <Menu.Item>
                        <Link to="/master/accessories/accessories/">Accessories</Link>
                    </Menu.Item>

                    <Menu.Item>
                        <Link to="/master/accessories/buyeraccdesc/">Buyer/Acc/Des</Link>
                    </Menu.Item>

                    <Menu.Item>
                        <Link to="/master/accessories/uommaster/">UOM Master</Link>
                    </Menu.Item>

                    <Menu.Item>
                        <Link to="/master/accessories/sizemaster/">Size Master </Link>
                        <Link to="/master/styleno/">StyleNo</Link>
                    </Menu.Item>

                    <Menu.Item>
                        <Link to="/master/styleitem/">StyleItem Description</Link>
                    </Menu.Item>

                    <Menu.Item>
                        <Link to="/master/portionmaster/">Portion Master</Link>
                    </Menu.Item>

                </Menu.SubMenu>

                    <Menu.Item>
                        <Link to="/master/general/">General</Link>
                    </Menu.Item>

                </Menu.SubMenu>
                <Menu.SubMenu title ={"Order"}>
                    <Menu.Item > <Link to='/master/order/style' >Style</Link></Menu.Item>
                    <Menu.Item > <Link to='/master/order/process' >Process</Link></Menu.Item>
                    
                </Menu.SubMenu>
            </Menu.SubMenu>
            <Menu.SubMenu icon ={<GiSewingMachine  style={{fontSize:'18pt'}}/>} title="Garment"  >
                <Menu.SubMenu title="Master">
                    <Menu.Item><Link to = '/garment/master/color'>Color</Link></Menu.Item>
                    <Menu.Item><Link to = '/garment/master/yarn'>Yarn</Link></Menu.Item>
                </Menu.SubMenu>
                <Menu.SubMenu title = {"Sample"}>
                <Menu.Item><Link to = '/garment/sample/techpack'>Tech Sheet</Link></Menu.Item>
                </Menu.SubMenu>
                <Menu.SubMenu title = {"Order"}>
                <Menu.Item><Link to = '/garment/order/new'>New Order</Link></Menu.Item>
                </Menu.SubMenu>
            </Menu.SubMenu>
        </Menu>
    )
}
