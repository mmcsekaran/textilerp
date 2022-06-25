import { Card, Col, Form, Input, PageHeader, Row, Select,Checkbox,Modal, Button } from "antd";
import { Component } from "react";
import FabricInput from "./FabricInput";


export default class 
    extends Component {

        constructor(props)
        {
            super(props);
            this.state={
                visible:false,
            }
        }

        showModel = () =>{
            this.setState({
                visible:true,
            })
        }

        handleOk = (e) => {
            this.setState({
                visible:false,
            })
        }

        handleCanel = () => {
            this.setState({
                visible:false,
            })
        }
        
    render() {
        return (
            <div>
                <PageHeader title='Fabric Master'
                extra={[<Button type='primary' onClick={this.showModel}>Add</Button>]}></PageHeader>
                <div>
                    <Modal
                    visible={this.state.visible}
                    okText='create'
                    onOk={this.handleOk}
                    onCancel={this.handleCanel}
                    >
                        <Row justify='center' align='middle'>
                            <Col xs={24} sm={16} md={16} xl={16}>                                
                                <Form 
                                layout='vertical'
                                >
                                    <Form.Item 
                                    name={'Fabric type'}
                                    label='Fabric type'
                                    >
                                        <Input />
                                    </Form.Item>
                                    <Form.Item>
                                    <Checkbox>Active</Checkbox>
                                    </Form.Item>
                                </Form>                           
                            </Col>               
                        </Row>
                    </Modal>
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