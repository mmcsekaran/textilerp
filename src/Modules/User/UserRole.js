import { PageHeader,Card, Form, Input, Button, Col, Row, Select, DatePicker, Space,message, Modal } from "antd";
import { Component } from "react";
import './userrole.css';

export default class extends Component{

  state = {Visible:false}
      showModal = () => {
        this.setState({
          Visible:true,
        });
      }  
      
      handleOk = (e) => {
        console.log (e);
        this.setState({
          Visible:false,
        });
      }

      handleCancel = (e) => {
        console.log =(e);
        this.setState({
          Visible:false,
        });
      }
    render(){
      const success = () => {
        message.success('');
      };

      
        return(
            <div>
                <PageHeader title='Salesquote'></PageHeader>
                <div >
                    <Row justify='center' align='middle'>
                        <Col style={{width:'95%'}} >
                            <Card 
                            hoverable>
                              <Form 
                              size="small"
                               layout="horizontal">
                                 <div  justify='center' align='middle'>
                                   <Form.Item>
                                   <Space>
                               <Button type="primery"   htmlType="submit"
                               onClick={success} shape="round" >Main</Button>
                               <Button type="primery" shape="round">Quote Details</Button>
                               </Space>
                               </Form.Item>
                               </div> 
                       
                                  <Row>

                                   <Space>
                                      <Form.Item
                                        name={'Quote No'}
                                        label='Quote No'

                                        rules={[
                                          {
                                            required: true,
                                            message: 'Quote No required',
                                          },
                                        ]}
                                        >
                                          <Input />

                                      </Form.Item> 

                                      
                                      <Form.Item
                                        name={'Revision No'}
                                        label='Revision No'>
                                          <Input />
                                      </Form.Item>
                                                              
                                      <Form.Item>
                                        <DatePicker/>
                                      </Form.Item>
                                   </Space>
                                  </Row>                              
                                   
                                  <Row>                                   
                                <Space>
                           
                                     <Form.Item
                                       name={'Byer'}
                                       label='Byer'
                                      >
                                        <Input />
                                     </Form.Item>
                                                             
                                    <Form.Item >
                                     <Input />
                                    </Form.Item>
                                
                                      <Form.Item 
                                      name={'Currency'}
                                      label='Currency'
                                     >
                                        <Input />
                                    </Form.Item>
                                                            
                                    <Form.Item>
                                     <Select />
                                    </Form.Item>
                                </Space>
                                 </Row>
                                 
                                 <Row>
                                  <Space>
                                   <Form.Item
                                   name={'order ref no'}
                                   label='Order Ref No' 
                                   >
                                     <Input />
                                   </Form.Item>

                                   <Form.Item
                                   name={'date'}
                                   label='Date'                                
                                 >
                                     <DatePicker />
                                   </Form.Item>

                                   <Form.Item
                                   name={'merchandiser'}
                                   label='merchandiser'                                                                   
                                  >
                                     <Select />
                                   </Form.Item>

                                   <Form.Item
                                   name={'payment'}
                                   label='Payment'                                 
                                  >
                                     <Select />
                                   </Form.Item>
                                   </Space>                                  
                                 </Row>
                                 <Row>
                                   <Space>
                                   <Form.Item
                                   name={'fabric'}
                                   label='Fabric'                                
                                   >
                                     <Select />
                                   </Form.Item>

                                  <Form.Item
                                   name={'style'}
                                   label='Style'                                
                                 >
                                     <Select/>
                                   </Form.Item>
                                                                     
                                   <Form.Item
                                   name={'pattern'}
                                   label='Pattern'
                                   >
                                     <Select />
                                   </Form.Item>
                                                                     
                                   <Form.Item
                                   name={'size'}
                                   label='Size'
                                  >
                                     <Select />
                                   </Form.Item>
                                   </Space>
                                   
                                 </Row>
                                                           
                              </Form>
                                          
                            </Card>
                        </Col>               
                    </Row>
                    <div>
                      <Button type="primary" onClick={this.showModal}>Open</Button>
                      <Modal
                      title='User'
                      visible={this.state.Visible}
                      onOk={this.handleOk}
                      onCancel={this.handleCancel}
                      >
                        <Form>
                          <Form.Item
                          label='name'
                          >
                            <Input />
                          </Form.Item>
                        </Form>
                      </Modal>
                    </div>
                </div>
            </div>
        )
    }
}