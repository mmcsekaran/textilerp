import React from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import ComingSoon from '../../Pages/ErrorPage/ComingSoon'
import Unautherize from '../../Pages/ErrorPage/Unautherize'

import UserRole from '../User/UserRole'
import AdminSetup from'../Master/AdminSetup'
import Yarncount from '../Master/Yarn/Yarncount'
import Countmaster from '../Master/Yarn/Countmaster'
import Yarntype from '../Master/Yarn/Yarntype'
import Fabrictype from '../Master/Fabric/Fabrictype'
import Fabricmaster from '../Master/Fabric/Fabricmaster'
import Fabricname from '../Master/Fabric/Fabricname'
import UserPage from '../User/UserPage'
import Color from '../Garment/Master/Color'
import Yarn from './../Garment/Master/Yarn';
import TechPack from './../Garment/Sample/TechPack';
import Costingentry from '../Master/Costingentry'
import Partymaster from '../Master/Partymaster'
import Exportmaster from '../Master/Exportmaster'
import Buyermaster from '../Master/Buyermaster'
import Processmaster from '../Master/Processmaster'
import SampleConsting from './../Garment/Sample/SampleCosting';
import Citylist from './../Master/City/Citylist';
import Processgroup from '../Master/Processgroup'
import Departmentmaster from '../Master/Departmentmaster'
import { Content } from 'antd/lib/layout/layout'
import Contentmaster from '../Master/Fabric/Contentmaster'
import Accessories from '../Master/Accessories'
import Buyeraccdesc from '../Master/Buyeraccdesc'
import Designmaster from '../Master/Designmaster'
import Sizemaster from '../Master/Sizemaster'
import Approvalmaster from '../Master/Approvalmaster'
import Styleno from '../Master/Styleno'
import Portionmaster from '../Master/Portionmaster'
import Uommaster from '../Master/Uommaster'
import Styleitem from '../Master/Styleitem'
export default function AppRouters() {
  return (
        <Routes>
            <Route path='/' element={<Outlet></Outlet>}>
                
            </Route>
            <Route path='/users' element={<Outlet></Outlet>}>
                <Route path='/users/' element= {<UserPage></UserPage>}>

                </Route>
                <Route path = '/users/roles' element = {<UserRole></UserRole>} />
                <Route path ='/users/*' element = {<ComingSoon></ComingSoon>} />
            </Route>
            <Route path='/master/' element={<Outlet></Outlet>}>
              <Route path='/master/partymaster' element = { <Partymaster></Partymaster>} />
              <Route path='/master/exportmaster' element = { <Exportmaster></Exportmaster>} />
              <Route path='/master/buyermaster' element = { <Buyermaster></Buyermaster>} />
              <Route path='/master/processmaster' element = { <Processmaster></Processmaster>} />
                  <Route path='/master/setup/adminsetup' element = { <AdminSetup></AdminSetup> }/>
                  <Route path='/master/approvalmaster' element = { <Approvalmaster></Approvalmaster>} />
                  <Route path='/master/yarn/yarncount' element = { <Yarncount></Yarncount>} />
                  <Route path='/master/yarn/countmaster' element = { <Countmaster></Countmaster>} />
                  <Route path='/master/yarn/yarntype' element = { <Yarntype></Yarntype>} />
                  <Route path='/master/fabric/fabrictype' element = { <Fabrictype></Fabrictype>} />
                  <Route path='/master/fabric/fabmaster' element = { <Fabricmaster></Fabricmaster>} />
                  <Route path='/master/fabric/fabricname' element = { <Fabricname></Fabricname>} />
                  <Route path='/master/fabric/contentmaster' element = {<Contentmaster></Contentmaster>} />  
                  <Route path='/master/designmaster' element = {<Designmaster></Designmaster>} />
                  <Route path='/master/costingenty' element = { <Costingentry></Costingentry>} />
                  <Route path='/master/city' element = { <Citylist></Citylist>} />
                  <Route path='/master/processgroup' element = { <Processgroup></Processgroup>} />
                  <Route path='/master/departmentmaster' element = { <Departmentmaster></Departmentmaster>} />
                  <Route path='/master/accessories' element = { <Accessories></Accessories>} />
                  <Route path='/master/buyeraccdesc' element = { <Buyeraccdesc></Buyeraccdesc>} />
                  <Route path='/master/uommaster' element = { <Uommaster></Uommaster>} />
                  <Route path='/master/sizemaster' element = { <Sizemaster></Sizemaster>} />
                  <Route path ='/master/*' element = {<Unautherize></Unautherize>} />
                  <Route path='/master/*' element = {<Unautherize></Unautherize>} />
                  <Route path='/master/styleno' element = {<Styleno></Styleno>} />
                  <Route path='/master/styleitem' element = {<Styleitem></Styleitem>} />
                  <Route path='/master/portionmaster' element = {<Portionmaster></Portionmaster>} />
              </Route>
                
            
            
            <Route path='/garment' element={<Outlet></Outlet>}>
                <Route path='master/' element= {<Outlet></Outlet>}>
                    <Route path = '/garment/master/color' element = {<Color></Color>} />
                    <Route path = '/garment/master/yarn' element = {<Yarn></Yarn>} />
              </Route>
                <Route path='sample/' element= {<Outlet></Outlet>}>
                    <Route path = '/garment/sample/techpack' element = {<SampleConsting ></SampleConsting>} />
                    
              </Route>
            </Route>
        </Routes>
  
  )
}
