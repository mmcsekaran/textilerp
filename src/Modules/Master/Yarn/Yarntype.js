import { Checkbox, Form, Input, PageHeader,Row, Card,Col } from "antd";
import { Component } from "react";

export default class extends Component{
    render(){
        return(
            <div>
                <PageHeader title='Yarn Type'></PageHeader>
                <div style={{paddingleft:'10px'}}>
                    <Row justify='center' align='middle'>
                        <Col xs={24} sm={16} md={16} xl={16}>
                            <Card 
                            hoverable>
                                <Col span={12}>
                                <Form 
                                layout='vertical'>
                                    <Form.Item 
                                    name={'yarn type'}
                                    label='Yarn Type'
                                    >
                                        <Input />
                                    </Form.Item>
                                    <Form.Item>
                                    <Checkbox>Active</Checkbox>
                                    </Form.Item>
                                </Form>
                                </Col>                            
                            </Card>
                        </Col>               
                    </Row>
                </div>
            </div>
        )
    }
}