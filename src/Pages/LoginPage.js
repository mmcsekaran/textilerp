import {
  Card,
  Col,
  Form,
  Input,
  Layout,
  Row,
  Button,
  Image,
  Checkbox,
  Anchor,
  Typography,
  message,
} from "antd";
import { Link } from "react-router-dom";
import React, { Component } from "react";
import logo from "../logo.svg";
import { UserContext } from "../component/Security/AuthoticationContext";
import { WithRouter } from "../component/WithRouter";
// import 'bootstrap/dist/css/bootstrap.min.css'

class LoginPage extends Component {

     form = React.createRef() ;

     constructor(props)
     {
         super(props)

        
     }

    handleLogin = () =>
    {
       const loginData = this.form.current.getFieldsValue(true);

      this.context.signIn(loginData.userName,loginData.password).then(
          suc =>
          {
              if(this.props.onSignIn)
              {
                  this.props.onSignIn(suc)

              }
              this.props.router.navigate("/")
              console.log(this.props)
          }
      )
    }

  render() {
    return (
      <Layout
        style={{ width: "100%", height: "100vh", background: "lightgrey" }}
      >
        <Layout.Content>
          <Row justify="center" align="middle" style={{ height: "100%" }}>
            <div
              style={{ width: "50%", height: "55%", background: "whitesmoke" }}
            >
              <Row style={{ height: "100%", width: "100%" }}>
                <Col style={{ width: "50%", padding: "20px" }}>
                  <Row align="middle">
                    <Typography.Title strong level={3}>
                      Sign In
                    </Typography.Title>
                  </Row>
                  <Row>
                    <Form
                      style={{ width: "100%" }}
                      layout="vertical"
                      size="medium"
                      title="text"
                    ref={this.form}
                    >
                      <Form.Item
                        label={
                          <Typography.Text strong>UserName</Typography.Text>
                        }
                        name="userName"
                      >
                        <Input type="text"></Input>
                      </Form.Item>
                      <Form.Item
                        label={
                          <Typography.Text strong>Password</Typography.Text>
                        }
                        name="password"
                      >
                        <Input type="password"></Input>
                      </Form.Item>
                      <Form.Item>
                        <Checkbox>
                          <Typography.Text strong>Remember Me</Typography.Text>
                        </Checkbox>
                        <Button type="link" style={{ float: "right" }}>
                          <Typography.Link
                            strong
                            onClick={() => {
                              message.info("Forger Password");
                            }}
                          >
                            Forget Password?
                          </Typography.Link>
                        </Button>
                      </Form.Item>
                      <Form.Item>
                        <Button
                          htmlType="submit"
                          style={{
                            width: "100%",
                            background: "green",
                            color: "white",
                          }}
                          onClick={this.handleLogin}
                          size="large"
                        >
                          <Typography.Text strong style={{ color: "white" }}>
                            Submit
                          </Typography.Text>
                        </Button>
                      </Form.Item>
                    </Form>
                  </Row>
                </Col>
                <Col
                  style={{ background: "green", width: "50%", height: "100%" }}
                >
                  <Row
                    justify="center"
                    align="middle"
                    style={{ height: "100%", color: "white" }}
                  >
                    <Col>
                      <Typography.Title
                        level={2}
                        style={{ textAlign: "center", color: "white" }}
                      >
                        Welcome to login
                      </Typography.Title>
                      <Typography.Title
                        style={{ textAlign: "center", color: "white" }}
                        level={4}
                      >
                        Don't Have an account?
                      </Typography.Title>
                      <div style={{ textAlign: "center" }}>
                        <Button shape="round" size="large">
                          <Typography.Title level={5}><Link to="/register">Sign Up</Link></Typography.Title>
                        </Button>
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </div>
          </Row>
        </Layout.Content>
      </Layout>
    );
  }
}

LoginPage.contextType = UserContext;
export default WithRouter(LoginPage)