import { Card, Col, Form, Input, PageHeader, Row, Select,Checkbox } from "antd";
import { Component } from "react";

export default class
    extends Component {
    render() {
        return (
            <div>
                <PageHeader title='Yarn Count Master'></PageHeader>
                <div>
                    <div style={{ paddingLeft: '10px' }}>
                        <Row justify="center" align="middle">
                            <Col xs={24} sm={16} md={16} xl={16}>
                                <div className="yarn-card">
                                    <Card 
                                    hoverable>
                                        <Form 
                                        layout='vertical'
                                       
                                        >
                                            <Row >

                                        <Col span ={12}>
                                            <Form.Item
                                               name={'Counts*'}
                                               label='Counts*'
                                               >
                                                <Select>
                                                    
                                                </Select>
                                            </Form.Item>
                                            </Col>
                                            <Col span ={12}>
                                            <Form.Item
                                               name={'Yarn Type*'}
                                               label='Yarn Type*'
                                               >
                                                <Select>
                                                    
                                                </Select>
                                            </Form.Item>
                                            </Col>
                                            </Row>
                                            <Form.Item
                                               name={'Composition*'}
                                               label='Composition*'
                                               >
                                                <Select>
                                                    
                                                </Select>
                                            </Form.Item>
                                            <Form.Item
                                               name={'Yarn Counts'}
                                               label='Yarn Counts'
                                               >
                                                   <Input size="medium" />
                                               </Form.Item>
                                               <Col span ={12}>
                                               <Form.Item
                                               name={'Tax Group*'}
                                               label='Tax Group*'
                                               >
                                                <Select>
                                                    
                                                </Select>
                                            </Form.Item>
                                            </Col>
                                            
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