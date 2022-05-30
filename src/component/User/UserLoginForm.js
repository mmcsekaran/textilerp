import { Button, Input } from "antd";
import { message } from "antd";
import { Form } from "antd";
import { useForm } from "antd/lib/form/Form";
import Modal from "antd/lib/modal/Modal";
import React, { Component }  from "react";
import { Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserContext } from "../Security/AuthoticationContext";
import API from "../Security/ConnectServer";



 class UserLoginForm extends Component
{
    static contextType = UserContext;
  formref = React.createRef();
    constructor(props)
    {
        super(props);
        
        this.state = {
            showLogin : true
        }
    }
   
    handleLogin =  () =>
    {
     const  values = this.formref.current.getFieldsValue(true);

        this.context.signIn(values.userName,values.password).then
        (result =>
            {
              
            if(result.status === 200)
            {
                message.success(result.message,1,() =>
            {
               this.setState({showLogin : false})
            }
            );

          
             }
             else
             {
                message.error(result.message)
             }
            });

  

      


    }

    componentDidMount()
    {
      
    }

    render()
    {
        

    return   <div>
           <Alert dismissible >gjagjg</Alert>
          <Modal
        
          visible = {this.state.showLogin}
          title ="Login"
          closable ={false}
          centered
          footer ={[]}
          
          >
              <Form
                 name="myform"
              
               ref = {this.formref}
              layout="vertical"
              >
                  <Form.Item
                  
                  label  ="User Name"
                  name='userName'
                  >
                      <Input type='text'>
                      
                      </Input>
                  </Form.Item>
                  <Form.Item
                  
                  label  ="Password"
                  name="password"
                  >
                      <Input type='password'>
                      
                      </Input>
                     
                  </Form.Item> 
                  <Button type='link' ><Link to ="/register" >Register Now</Link></Button>
                  <Button htmlType="submit" type='primary' style={{float:'right'} } onClick = { this.handleLogin} >
                        Login
                </Button>
              </Form>
          </Modal>
       </div>
    }
}


export default UserLoginForm