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
import 'bootstrap/dist/css/bootstrap.min.css';
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

  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <UserProvider> 
            <APIProvider baseURL ="usrl">  
           
           <Routes>
            <Route  element ={<ProtectedRoute roles={[ADMIN,EMPLOYEE]} >
             <Outlet></Outlet>
            </ProtectedRoute>} >
            <Route path='/*' element = {<HomePage></HomePage>}></Route>
              </Route> 
             <Route exact path='/login' element ={<LoginPage></LoginPage>} />
             <Route exact path='/register' element ={<UserRegistration></UserRegistration>} />
             
           </Routes>
           
           </APIProvider>
          </UserProvider> 
 </BrowserRouter>






       
      </div>
    );
  }
}

export default App;
