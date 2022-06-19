import { Card, Form, Input, PageHeader, Row, Col, Space, Select, DatePicker, Button, Table, Steps, message} from "antd";
import TextArea from "antd/lib/input/TextArea";
import { Component } from "react";
import Addresscomponent from "../Common/Addresscomponent";


export default class Partymaster
 extends Component{

    constructor(props)
    {
        super(props)
        this.state = {
            step:0
        }
    }

    Steps = [
        {
            title:'Basic Details',
            content:<>
                <Row justify="center" align="middle">
                    <Col xs={24} sm={16} md={16} xl={16}>
                        <Card CloseButton>
                            <Form 
                            size="small"
                            layout="horizontal"
                            labelCol={{
                                span:8,
                            }}
                            wrapperCol={{
                                span:16,
                            }}
                            >
                                <Space>
                                    <Row>
                                            
                                        <Col span={12}>
                                            <Form.Item
                                            name={'party master*'}
                                            label='Party Master*'
                                            rules={[
                                                {
                                                required: true,
                                                message:'party name is required'
                                                },
                                            ]}
                                            >
                                            <Input />
                                            </Form.Item>
                                        </Col>

                                        <Col span={12}>
                                            <Form.Item
                                            name={'party ledger*'}
                                            label='Party Ledger*'
                                            rules={[
                                                {
                                                required: true,
                                                message:'party ledger is required'
                                                },
                                            ]}
                                            >
                                                <Input />
                                            </Form.Item>
                                        </Col>

                                        <Col span={12}>
                                            <Form.Item
                                            name={'unit name'}
                                            label='Unit Name'
                                            >
                                                <Select>
                                                    <Select.Option value="D2D INTERNATIONAL">D2D INTERNATIONAL</Select.Option>
                                                </Select>
                                            </Form.Item>
                                        </Col>

                                        <Col span={18}>                                 
                                            <Form.Item
                                           >
                                               <Addresscomponent />
                                            </Form.Item>
                                        </Col>

                                        <Col span={12}>
                                            <Form.Item
                                            name={'city'}
                                            label='City'
                                            rules={[
                                                {
                                                required: true,
                                                message:'city is required'
                                                },
                                            ]}
                                            >
                                                <Select>
                                                    <Select.Option value="TIRUPUR">TIRUPUR</Select.Option>
                                                </Select>
                                            </Form.Item>
                                        </Col>

                                        <Col span={12}>
                                            <Form.Item
                                            name={'pin code'}
                                            label='Pin Code'
                                            rules={[
                                                {
                                                required: true,
                                                message:'Pin Code is required'
                                                },
                                            ]}
                                            >
                                                <Input />
                                            </Form.Item>
                                        </Col>

                                        <Col span={12}>
                                            <Form.Item
                                            name={'state'}
                                            label='State'
                                            rules={[
                                                {
                                                required: true,
                                                message:'State is required'
                                                },
                                            ]}
                                            >
                                                <Select>
                                                    <Select.Option value='TAMIL NADU'>TAMIL NADU</Select.Option>
                                                </Select>
                                            </Form.Item>
                                        </Col>

                                        <Col span={12}>
                                            <Form.Item
                                            name={'Country'}
                                            label='Country'
                                            rules={[
                                                {
                                                required: true,
                                                message:'Country is required'
                                                },
                                            ]}
                                            >
                                                <Select>
                                                    <Select.Option value='INDIA'>INDIA</Select.Option>
                                                </Select>
                                            </Form.Item>
                                        </Col>

                                        <Col span={12}>
                                            <Form.Item
                                            name={'phone no'}
                                            label='Phone Number'
                                            >
                                                <Input />
                                            </Form.Item>
                                        </Col>

                                        <Col span={12}>
                                            <Form.Item
                                            name={'gst no'}
                                            label='GST NO'
                                            rules={[
                                                {
                                                required: true,
                                                message:'GST is required'
                                                },
                                            ]}
                                            >
                                                <Input />
                                            </Form.Item>
                                        </Col>

                                        <Col span={12}>
                                            <Form.Item
                                            name={''}
                                            label='PAN NO'
                                            rules={[
                                                {
                                                required: true,
                                                message:'PAN is required'
                                                },
                                            ]}
                                            >
                                                <Input />
                                            </Form.Item>
                                        </Col>

                                        <Col span={12}>
                                            <Form.Item
                                            name={''}
                                            label='TAX Type'
                                            rules={[
                                                {
                                                required: true,
                                                message:'TAX  is required'
                                                },
                                            ]}
                                            >
                                                <Select />
                                            </Form.Item>
                                        </Col>

                                        <Col span={12}>
                                            <Form.Item
                                            name={''}
                                            label='Currency'
                                            rules={[
                                                {
                                                required: true,
                                                message:'Currency is required'
                                                },
                                            ]}
                                            >
                                                <Select />
                                            </Form.Item>
                                        </Col>
                                    </Row> 
                                </Space>                                   
                            </Form>
                        </Card>
                    </Col>
                </Row>                                                         
            </>
        },

        {
            title:'Account Details',
            content:<>
                 <Row justify="center" align="middle">
                    <Col xs={24} sm={16} md={16} xl={16}>
                        <Card>
                            <Form 
                            size="small"
                            layout="horizontal"
                            labelCol={{
                                span:8,
                            }}
                            wrapperCol={{
                                span:16,
                            }}
                            >
                                <Space>
                                    <Row>
                                            
                                        <Col span={12}>
                                            <Form.Item
                                            name={''}
                                            label='Bank name'
                                            >
                                            <Input />
                                            </Form.Item>
                                        </Col>

                                        <Col span={12}>
                                            <Form.Item
                                            name={''}
                                            label='Branch'                                          
                                            >
                                                <Input />
                                            </Form.Item>
                                        </Col>

                                        <Col span={12}>
                                            <Form.Item
                                            name={'ac name'}
                                            label='AC Name'
                                            >
                                               <Input />
                                            </Form.Item>
                                        </Col>

                                        <Col span={12}>                                 
                                            <Form.Item
                                            name={'AC/NO'}
                                            label='AC/NO'
                                            >
                                                <Input />
                                            </Form.Item>
                                        </Col>

                                        <Col span={12}>
                                            <Form.Item
                                            name={''}
                                            label='IFSC Code'
                                            >
                                               <Input />
                                            </Form.Item>
                                        </Col>

                                        <Col span={12}>
                                            <Form.Item
                                            name={''}
                                            label='Bank Address'
                                            >
                                                <TextArea />
                                            </Form.Item>
                                        </Col>

                                        <Col span={12}>
                                            <Form.Item
                                            name={''}
                                            label='Code'
                                            >
                                                <Input />
                                            </Form.Item>
                                        </Col>
                                    </Row> 
                                </Space>                                   
                            </Form>
                        </Card>
                    </Col>
                </Row>                                            
            </>
        },
    ]

    render(){
       

         return(
            <>
                <PageHeader title='Party Master'></PageHeader>
                <Card>
                    <Steps current={this.state.step}>
                        {this.Steps.map(step =>
                             <Steps.Step key={step.title}  title = {step.title} />
                        )}
                    </Steps>

                     <>
                         {this.Steps[this.state.step] && this.Steps[this.state.step].content}
                     </>

                        <Button onClick={() => this.setState({step:this.state.step+1} )}  type="primary" htmlType="submit">Next</Button>
                    
                        <Button onClick={() => this.setState({step:this.state.step-1})}>previous</Button>
                </Card>
             </>
        )
    }
}