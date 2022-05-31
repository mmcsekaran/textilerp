import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {  Container } from 'react-bootstrap'
import {Card, Row, Typography ,Form, Input, Button, Avatar,Image, Col, Alert,notification, message,Radio} from 'antd'
import './index.css'
import { FastBackwardFilled, UserOutlined } from '@ant-design/icons'
import logo from '../../logo.svg'
import { UserService } from './UserService' 
import { withRouter } from '../Common/withRouter'
import {Redirect} from 'react-router-dom'
import { Link } from 'react-router-dom';

 class Login extends Component {

    constructor(props)
    {
        super(props);

        this.state = {
            userType:1
        }
    }
    #service = new UserService();
    handleLogin = (data) =>
    {
        console.log(this.props)


        this.#service.login(data
           
        ).then(
            res =>
            {
                 notification.open(
            {
                message:"Login Success",
                description:"Check username and password",
                duration:2,
                placement:'top',
               onClose :() =>
               {
                   this.props.navigate('/');
               }
            }
        )
            },
            rej =>
            {
                notification.open(
                    {
                        message:"Login Failed",
                        description:"Check username and password",
                        duration:2,
                        placement:'top',
                       
                    })
            }
        )
       
        
    }
   

  render() {
      
    return (
        <div> 
         
        <Row  className='h-min-100' justify='center' align='middle'>
            <Col xs={24} sm ={16} md={10} xl = {5} xxl={5} >
           <Card  style={{background:'rgb(255,255,255)',borderColor:'rgb(255,255,255)'}} title={
               <div >
               <Image style={{width:'100px',height:'50px'}} src={logo}></Image>
               <Typography.Text strong style={{paddingLeft:'5px',fontSize:'18px'}} >D2D INTERNATIONAL</Typography.Text>
               </div>
           } >
               
                   <Form
                   
                   title='Login'
                   style={{margin:'10%'}}
                   onFinish = {(e) => 
                {
                    this.handleLogin(e)
                }}
                   >
                    <Form.Item
                    name={"userType"}
                    >
                         <Radio.Group defaultValue={1} onChange ={(e) =>
                        {
                          console.log(e)
                         this.setState({userType:e.target.value}) ;
                        }}>
                           <Radio key={"employee"} value={1} >Employee</Radio>
                           <Radio key ={"vendor"} value={2}>Vendor</Radio>
                           </Radio.Group>
                     </Form.Item>
                     <Form.Item
                     name={"username"}
                     >
                       { this.state.userType === 2 ? <Input prefix= {<UserOutlined></UserOutlined>} typeof='email' placeholder='Email' type={'text'}  />
                       :
                       <Input prefix= {<UserOutlined></UserOutlined>} autoComplete='off' placeholder='Employee No' type={'number'}  />
                       }
                         
                     </Form.Item>
                    <Form.Item
                    name={"password"}
                    >
                        <Input.Password  placeholder='Password' autoComplete='new-password' />
                    </Form.Item>
                    <Form.Item >
                        <Button htmlType='submit' style={{width:'100%',background:'teal', color:'white'}} size='large' type='default' title='Login'
                      
                        >Login</Button>
                    </Form.Item>
                    <Form.Item  >
                        <a style={{float:'right',color:'green', fontSize:'14px',fontWeight:'bold'}} size='large' type='link' title='Login'  ><Link to="/register">Register Now</Link></a> 
                        <a style={{float:'left'}} size='large' type='link' title='Login'  > <Link to='/resetpassword'>Forget Password</Link> </a>
                    </Form.Item>
                  
                   </Form>
              
           </Card>
           </Col>
          
        </Row>
  
        </div>
    )
  }
}


export default withRouter(Login)