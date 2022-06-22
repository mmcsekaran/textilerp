import { Card, Form, PageHeader, Row, Input,Col, Select, Checkbox } from "antd";
import { Component } from "react";

export default class extends Component{
    render(){
        return(
            <div>
                <PageHeader title='Count Master'></PageHeader>
                <div>
                    <div style={{paddingleft:'10px'}}>
                        <Row justify="center" align="middle">
                            <Col xs={24} sm={16} md={16} xl={16}>
                                <div className="count-card">
                                    <Card
                                    hoverable>
                                        <Form 
                                        layout="vertical">
                                            <Form.Item
                                            name={'counts'}
                                            label='Counts'>
                                                <Input />

                                            </Form.Item>
                                            <Row>
                                            <Col span={12}>
                                            <Form.Item
                                            name={'Description'}
                                            label='Description'>
                                                <Input />

                                            </Form.Item>
                                            </Col>
                                               

                                            <Col span={12}>
                                                <Form.Item
                                                    name={'Type'}
                                                    label='Type'
                                                    >
                                                        <Select>
                                                            
                                                        </Select>
                                                    </Form.Item>
                                            </Col>
                                            </Row>
                                            
                                                <Form.Item
                                                    name={'Count Type'}
                                                    label='Count Type'
                                                    >
                                                       <Input />
                                                    </Form.Item>
                                           

                                            
                                        
                                             <Checkbox>Active</Checkbox>

                                        </Form>

                                    </Card>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
        )
    }
}