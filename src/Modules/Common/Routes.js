import React from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import ComingSoon from '../../Pages/ErrorPage/ComingSoon'
import Unautherize from '../../Pages/ErrorPage/Unautherize'
import UserPage from '../User/UserPage'
import UserRole from '../User/UserRole'
import AdminSetup from'../Master/AdminSetup'
import Yarncount from '../Master/Yarncount'
import Countmaster from '../Master/Countmaster'
import Yarntype from '../Master/Yarntype'
import Fabrictype from '../Master/Fabrictype'
import Fabricmaster from '../Master/Fabricmaster'
import Fabricname from '../Master/Fabricname'

import Color from '../Garment/Master/Color'
import UserPage from '../User/UserPage'
import Yarn from './../Garment/Master/Yarn';
import TechPack from './../Garment/Sample/TechPack';
import SampleConsting from './../Garment/Sample/Consting';
export default function AppRouters() {
  return (
    <Routes>
        <Route>
            <Route path='/' element={<Outlet></Outlet>}>
                
            </Route>
            <Route path='/users' element={<Outlet></Outlet>}>
                <Route path='/users/' element= {<UserPage></UserPage>}>

                </Route>
                <Route path = '/users/roles' element = {<UserRole></UserRole>} />
                <Route path ='/users/*' element = {<ComingSoon></ComingSoon>} />
            </Route>
            <Route path='/master/' element={<Outlet></Outlet>}>
                  <Route path='/master/setup/adminsetup' element = { <AdminSetup></AdminSetup> }/>
                  <Route path='/master/yarncount' element = { <Yarncount></Yarncount>} />
                  <Route path='/master/countmaster' element = { <Countmaster></Countmaster>} />
                  <Route path='/master/yarntype' element = { <Yarntype></Yarntype>} />
                  <Route path='/master/fabric' element = { <Fabrictype></Fabrictype>} />
                  <Route path='/master/fabmaster' element = { <Fabricmaster></Fabricmaster>} />
                  <Route path='/master/fabricname' element = { <Fabricname></Fabricname>} />
                  <Route path ='/master/*' element = {<Unautherize></Unautherize>} />
              </Route>
                
            
            
            <Route path='/garment' element={<Outlet></Outlet>}>
                <Route path='master/' element= {<Outlet></Outlet>}>
                    <Route path = '/garment/master/color' element = {<Color></Color>} />
                    <Route path = '/garment/master/yarn' element = {<Yarn></Yarn>} />
              </Route>
                <Route path='sample/' element= {<Outlet></Outlet>}>
                    <Route path = '/garment/sample/techpack' element = {<SampleConsting></SampleConsting>} />
                    
              </Route>
            </Route>
        </Route>
    </Routes>
  )
}
