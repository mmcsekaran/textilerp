import React, { Component } from 'react'
import { Divider, Image, Radio, Row } from 'antd';
import { Col } from 'antd';
import { Card } from 'antd';
import { Typography } from 'antd';
import { Form } from 'antd';
import { Button } from 'antd';
import { Input } from 'antd';
import logo from '../../logo.svg'
import { Link } from 'react-router-dom';
export default class Register extends Component {

  constructor(props)
  {
    super(props);

    this.state = 
    {
      userType:1
    }
  }

  

  render() {
    return (
     
       <div> 
         
         <Row  className='h-min-100' justify='center' align='middle'>
             <Col xs={24} sm ={16} md={8} xl = {6} xxl={5} >
            <Card  style={{background:'rgb(255,255,255)',borderColor:'rgb(255,255,255)'}} title={
                <div >
                <Image style={{width:'100px',height:'50px'}} src={logo}></Image>
                <Typography.Text strong style={{paddingLeft:'5px',fontSize:'18px'}} >D2D INTERNATIONAL</Typography.Text>
                </div>
            } >
                
                    <Form
                    
                    title='Login'
                    style={{margin:'5%'}}
                    >
                      <Form.Item >
                         <Radio.Group defaultValue={1} onChange ={(e) =>
                        {
                          console.log(e)
                         this.setState({userType:e.target.value}) ;
                        }}>
                           <Radio key={"employee"} value={1} >Employee</Radio>
                           <Radio key ={"vendor"} value={2}>Vendor</Radio>
                           </Radio.Group>
                     </Form.Item>
                     <Form.Item >
                       { this.state.userType === 2 ? <Input typeof='email' placeholder='Email' type={'text'}  />
                       :
                       <Input autoComplete='off' placeholder='Employee No' type={'text'}  />
                       }
                         
                     </Form.Item>
                     <Form.Item>
                         <Input.Password placeholder='Password' autoComplete='new-password' />
                     </Form.Item>
                     <Form.Item>
                         <Input.Password placeholder='Confirm Password' autoComplete={'new-password'} />
                     </Form.Item>
                     <Form.Item >
                         <Button style={{width:'100%',background:'teal', color:'white'}} size='large' type='default' title='Login'
                         onClick={this.handleLogin}
                         >Login</Button>
                     </Form.Item>
                     <Form.Item  >
                      
                       <span style ={{float:'right'}}> Have a account? <a style={{color:'green', fontSize:'14px',fontWeight:'bold'}} size='large' type='link' title='Login'  ><Link to="/login">Sign In</Link></a></span> 
                        <span><a style={{float:'left'}} size='large' type='link' title='Login'  >Forget Password</a></span>
                     </Form.Item>
                   
                    </Form>
               
            </Card>
            </Col>
           
         </Row>
   
         </div>
     
    )
  }
}
