import React, { Component } from 'react'
import {Row,Col,Form,Card,Radio,Input,Button, notification} from 'antd'
import { withRouter } from '../Common/withRouter'
class ChangePassword extends Component {

    handleFormSubmit = (e) =>
    {
        notification.open(
            {
                message:"Password change successfully",
                placement:'top',
                duration:1,
                onClose:() =>
                {
                    this.props.navigate("/login")
                }
            }
        )
    }

  render() {
    return (
        <div style ={{width:'100%',height:'100%',background:'whitesmoke'}} >
        
        
          <Row style ={{width:'100%',height:'100%',background:'whitesmoke'}} justify='center' align='middle' >
          <Col  xs={24} sm ={16} md={10} xl = {6} xxl={5}>
              <Card  title={"Set New Password"}>
                  <Form    
                  onFinish={(e) => this.handleFormSubmit(e)}  
                  autoComplete ={'off'}
                  >
                  
                      <Form.Item
                     name={'oldpassword'}
                     required
                    
                      rules={[
                          {
                              type:'string',
                              required:true,
                              message:"Email Required",
                              min:4,
                              max:8
                              
                             
                          }
                      ]}
                      >
                          <Input.Password placeholder={"Current Password"} />
                      </Form.Item>
                      <Form.Item
                     name={'newpassword'}
                     required
                      rules={[
                          {
                              type:'string',
                              required:true,
                              message:"Email Required",
                              min:4,
                              max:8
                             
                          }
                      ]}
                      >
                          <Input.Password showCount visibilityToggle={false} placeholder={"New Password"} />
                      </Form.Item>
                     
                      <Form.Item
                     name={'confirmpassword'}
                     required
                      rules={[
                          {
                              type:'string',
                              required:true,
                              message:"Email Required",
                              min:4,
                              max:8
                             
                          }
                      ]}
                      >
                          <Input.Password showCount visibilityToggle={false} placeholder={"Confirm Password"} />
                      </Form.Item>
                     
                      <Form.Item>
                         <Button htmlType='submit' style={{width:'100%'}} type='primary'>Submit</Button>
                      </Form.Item>
                  </Form>
              </Card>
          </Col>
         
        </Row>

    </div>
    )
  }
}

export default withRouter(ChangePassword)