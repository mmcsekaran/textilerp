import { Card, Col, Form, Input, PageHeader, Row, Select,Checkbox,Modal } from "antd";
import { Component } from "react";
import FabricInput from "./Fabric/FabricInput";


export default class 
    extends Component {
    render() {
        return (
            <div>
                <PageHeader title='Fabric Master'></PageHeader>
                <div>
                    <div style={{ paddingLeft: '10px' }} >
                        <Row justify="center" align="middle">
                            <Col xs={24} sm={16} md={16} xl={16}>
                                <div className="fabric-card">
                                    
                                    <Card 
                                    hoverable>
                                        <Form 
                                        layout='vertical'
                                        onValuesChange  = {(_,value) => {console.log(value)}}
                                        >
                                            <Row >

                                        <Col span ={12}>
                                            <Form.Item
                                               name={'Fab Type*'}
                                               label='Fab Type*'
                                               >
                                                <Select>
                                                    
                                                </Select>
                                            </Form.Item>
                                        </Col>

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
                                               name={'Fabric list'}
                                               label='Fabric List'
                                               >
                                                <Select>
                                                    
                                                </Select>
                                            </Form.Item>
                                            </Col>

                                            <Col span ={12}>
                                                <Form.Item
                                                name={'Content list'}
                                                label='Content List'
                                                >
                                                    <Select>
                                                        
                                                    </Select>
                                                </Form.Item>
                                            </Col>
                                            </Row>

                                            <Form.Item
                                               name={'Fabric Name'}
                                               label='Fabric Name'
                                               >
                                                   <Input />
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
                                            <Form.Item
                                            name={"fabric"}
                                            >
                                                <FabricInput onSelect={(e) =>
                                                {
                                                    console.log(e);
                                                }}></FabricInput>
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