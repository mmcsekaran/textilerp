import React from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
export default function AppRouters() {
  return (
    <Routes>
        <Route>
            <Route path='/' element={<Outlet></Outlet>}>
                
            </Route>
            <Route path='/users/' element={<Outlet></Outlet>}>
                <Route>
                    
                </Route>
            </Route>
        </Route>
    </Routes>
  )
}
