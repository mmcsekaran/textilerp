import React, { Component } from 'react'
import { Card, Col, Form, Input, Row, Radio, Button, Result, notification } from 'antd';
import { withRouter } from './../Common/withRouter';

 class ResetPassword extends Component {

    constructor(props)
    {
        super(props);

        this.state = {
            formStatus:false
        }

        this.handleFormSubmit.bind(this)
    }

    handleFormSubmit  (e) 
    {
        notification.open
        (
            {
                message:"Request Submitted",
                type:'success',
                duration:0,
                placement:'top',
                onClose:() =>
                {
                    
                }
            }
        )
      this.props.navigate("/login")
       
    }

  render() {
    return (

      <div style ={{width:'100%',height:'100%',background:'whitesmoke'}} >
        
          {
              this.state.formStatus === true ?
          <Row  style ={{width:'100%',height:'100%',background:'whitesmoke'}} justify='center' align='middle'>
              <Col>
              <Result status={'success'} title={"Request Submitted"} subTitle ={<Button type ='link' onClick={
                  () =>
                  {
                      window.history.back()
                  }
              }>Login</Button>}>

              </Result>
              </Col>
          </Row>
          :
            <Row style ={{width:'100%',height:'100%',background:'whitesmoke'}} justify='center' align='middle' >
            <Col  xs={24} sm ={16} md={10} xl = {5} xxl={5}>
                <Card  title={"Reset Password"}>
                    <Form    
                    onFinish={(e) => this.handleFormSubmit(e)}  
                    >
                        <Form.Item
                        name={"requestType"}
                        >
                            <Radio.Group defaultValue={3} >
                                <Radio key={'email'} disabled value={1}>Email</Radio>
                                <Radio key={'phone'} disabled value ={2}>Phone</Radio>
                                <Radio key={'request'} value ={3}>Request</Radio>
                              
                            </Radio.Group>
                        </Form.Item>
                        <Form.Item
                       name={'email'}
                       required
                        rules={[
                            {
                                type:'email',
                                required:true,
                                message:"Email Required",
                               
                            }
                        ]}
                        >
                            <Input type={'email'} placeholder={"Email Or Employee ID (Required)"} />
                        </Form.Item>
                        <Form.Item
                        name={"reason"}
                        >
                            <Input.TextArea autoSize={false}  placeholder={"Remark (Optional)"} />
                        </Form.Item>
                        <Form.Item>
                           <Button htmlType='submit' style={{width:'100%'}} type='primary'>Submit</Button>
                        </Form.Item>
                    </Form>
                </Card>
            </Col>
           
          </Row>
  }
      </div>
    )
  }
}
export default withRouter(ResetPassword)