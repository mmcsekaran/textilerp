import React from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import Color from '../Garment/Master/Color'
import UserPage from '../User/UserPage'
import Yarn from './../Garment/Master/Yarn';
import TechPack from './../Garment/Sample/TechPack';
export default function AppRouters() {
  return (
    <Routes>
        <Route>
            <Route path='/' element={<Outlet></Outlet>}>
                
            </Route>
            <Route path='/users' element={<Outlet></Outlet>}>
                <Route path='/users/' element= {<UserPage></UserPage>}>

                </Route>
            </Route>
            <Route path='/garment' element={<Outlet></Outlet>}>
                <Route path='master/' element= {<Outlet></Outlet>}>
                    <Route path = '/garment/master/color' element = {<Color></Color>} />
                    <Route path = '/garment/master/yarn' element = {<Yarn></Yarn>} />
              </Route>
                <Route path='sample/' element= {<Outlet></Outlet>}>
                    <Route path = '/garment/sample/techpack' element = {<TechPack></TechPack>} />
                    
              </Route>
            </Route>
        </Route>
    </Routes>
  )
}
