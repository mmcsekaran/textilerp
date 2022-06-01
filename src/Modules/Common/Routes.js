import React from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import UserPage from '../User/UserPage'
export default function AppRouters() {
  return (
    <Routes>
        <Route>
            <Route path='/' element={<Outlet></Outlet>}>
                
            </Route>
            <Route path='/users/' element={<Outlet></Outlet>}>
                <Route path='/users/' element= {<UserPage></UserPage>}>

                </Route>
            </Route>
        </Route>
    </Routes>
  )
}
