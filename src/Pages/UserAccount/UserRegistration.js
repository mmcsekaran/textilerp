import {
  Button,
  Form,
  Input,
  Layout,
  message,
  Radio,
  Result,
  Row,
  Select,
  Typography,
} from "antd";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../component/Security/AuthoticationContext";
import { WithRouter } from "../../component/WithRouter";

class UserRegistration extends Component {
  form = React.createRef();

  constructor(props) {
    super(props);

    this.state = {
      isEmployee: true,
      isCompleted:false
    };
  }
  handleRegister = () => {
    console.log(this.props)
    console.log(this.form);
    
     this.form.current.validateFields(
    ).then
    (
        success => {
           this.context.signUp({
               userId:success.userId,
               registerType:success.regType,
               password:success.password,
               email:success.email
           }).then(
               success => 
               {
                   if(success.status == 200)
                   this.setState({isCompleted:true})
               }
           )
        },
        rej =>
        {
            return
        }
    ).catch()
    {
        return;
    }
    
    // ["regType","userId","password","confirmpassword"],(err,value)=>
    // {
    //     console.log(err)
    //     if(err)
    //     return ;
        
    // });
    
    

    message.success("Register Success");
  };
  validatePassword = (a, password, callback) => {
    if (!password ) {
      callback("Password Should be Minimum 8 Letter");
    }
    else
    {
        callback()
    }
  };
  render() {
    console.log(this.props);
    return (
      <Layout style={{ width: "100vw", height: "100vh" }}>
        <Layout.Content>
          <Row
            justify="center"
            align="middle"
            style={{ width: "100%", height: "100%" }}
          >
{
    this.state.isCompleted ?
    <Result
    title = "User Registration Success"
    status={"success"}
    subTitle ={"Content Needed"}
    
    extra = {[
       <Link to ='/login'><Button style={{background:'green',color:'white'}}>Login</Button></Link> 
    ]}
    >

    </Result>
    :

            <div
              style={{ width: "30%", background: "white", minHeight: "60%" }}
            >
              <Row style={{ padding: "20px", height: "64px" }}>
                <Typography.Title level={2}>Registration</Typography.Title>
              </Row>
              <Row justify="center" style={{ width: "100%" }}>
                <Form
                  ref={this.form}
                  layout="vertical"
                  style={{ width: "100%", padding: "20px" }}
                  name="userRegistrationForm"
                  initialValues={
                      {
                          regType:1,
                          userId:null,
                          password:null,
                          confirmpassword:null,
                          email:null
                      }
                  }
                >
                  <Form.Item name={"regType"} defaultValue={1}>
                    <Radio.Group
                      name="regType"
                      defaultValue={1}
                      onChange={(e) => {
                        this.setState({
                          isEmployee: e.target.value === 1 ? true : false,
                        });
                      }}
                    >
                      <Radio value={1}>
                        <Typography.Text strong>Employee</Typography.Text>
                      </Radio>
                      <Radio value={2}>
                        <Typography.Text strong>Vendor</Typography.Text>
                      </Radio>
                    </Radio.Group>
                  </Form.Item>
                  <Form.Item
                    label={this.state.isEmployee ? "ID" : "UserName"}
                    name="userId"
                  >
                    <Input type="text"></Input>
                  </Form.Item>
                  {!this.state.isEmployee ? (
                    <Form.Item
                      label="Registred Email"
                      name="email"
                      required
                      rules={[
                        {
                          type: "email",
                          message: "Not Valid Email",
                        },
                      ]}
                    >
                      <Input type="email"></Input>
                    </Form.Item>
                  ) : (
                    ""
                  )}

                  <Form.Item label="Password" name={"password"}>
                    <Input type={"password"}></Input>
                  </Form.Item>
                  <Form.Item
                    required
                    name="confirmpassword"
                    label="Confirm Password"
                    rules={[
                      {
                        required: true,
                        message: "Empty Password Not Allowed",
                      },
                      {
                       validator: this.validatePassword,
                      },
                    ]}
                  >
                    <Input type="password"></Input>
                  </Form.Item>
                  <Form.Item>
                    <Button
                      type="primary"
                      style={{ width: "100%" }}
                      size="large"
                      onClick={() => {
                        this.handleRegister();
                      }}
                    >
                      Register
                    </Button>
                  </Form.Item>
                </Form>
              </Row>
            </div>
            }
          </Row>
        </Layout.Content>
      </Layout>
    );
  }
}
UserRegistration.contextType = UserContext
export default WithRouter(UserRegistration);
