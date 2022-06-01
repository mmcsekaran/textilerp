import logo from './logo.svg';
import './App.css';
import Test from './test';
import Test2 from './Test2';
import AppLayout from './component/Layout';
import { BrowserRouter, Navigate, Outlet, Route, Routes } from 'react-router-dom';
import { UserContext, UserProvider, USER, ADMIN, EMPLOYEE } from './component/Security/AuthoticationContext';
import { Component } from 'react';
import { APIProvider } from './component/API/APIProvider';
import LoginPage from './Pages/LoginPage';
import { Layout, message } from 'antd';
import HomePage from './Pages/Home/HomePage';
import UserRegistration from './Pages/UserAccount/UserRegistration';
import { ProtectedRoute } from './component/Security/ProtectedRoute';
import {registerLicense} from '@syncfusion/ej2-base'
import Login from './Modules/User/User.Login';
import Register from './Modules/User/User.Register';
import Unautherize from './Pages/ErrorPage/Unautherize';
import ResetPassword from './Modules/User/ResetPassword';
import ChangePassword from './Modules/User/SetupPassword';
import * as api from 'garmentapi'
registerLicense("ORg4AjUWIQA/Gnt2VVhhQlFaclhJXGFWfVJpTGpQdk5xdV9DaVZUTWY/P1ZhSXxRdkFjX39XcXxQQmJcVUc=")

export class App extends Component {

  constructor(props) {
    super(props);

      this.state ={
        signIn:false,
        userInfo:null,
      }
  }

 handleSignIn =e =>
 {
   this.setState({signIn:true,userInfo:e})
   
  
 }

  componentDidMount() {
    console.log(api)
  }

  render() {
    return (
      <div className='fullview'>
        <BrowserRouter>
          <UserProvider> 
            <APIProvider baseURL ="usrl">  
           
           <Routes>
            <Route  element ={<ProtectedRoute roles={[ADMIN,EMPLOYEE]} >
             <Outlet></Outlet>
            </ProtectedRoute>} >
            <Route path='/*' element = {<HomePage></HomePage>}></Route>
              </Route> 
             <Route exact path='/login' element ={<Login></Login>} />
             <Route exact path='/register' element ={<Register></Register>} />
             <Route exact path ="/resetpassword" element ={<ChangePassword></ChangePassword>}></Route>       
           </Routes>
           
           </APIProvider>
          </UserProvider> 
 </BrowserRouter>






       
      </div>
    );
  }
}

export default App;
