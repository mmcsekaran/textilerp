import { Card, Form, Input, PageHeader, Row, Col, Select, Space } from 'antd'
import TextArea from 'antd/lib/input/TextArea'
import React, { Component } from 'react'

export default class 
 extends Component {

  render() {
      return (
            <div>
                <PageHeader title='Buyer Master'></PageHeader>
                <div>
                    <Row justify='center' align='middle'>
                        <Col xs={24} sm={16} md={16} xl={16}>
                            <Card>
                                <Form
                                labelCol={{
                                    span:8,
                                }}
                                wrapperCol={{
                                    span:16,
                                }}
                                size='small'
                                layout='horizontal'
                                >
                                    <Row>
                                        <Col span={18}>
                                            <Form.Item
                                            label='Buyer Name'
                                            >
                                                <Input />
                                            </Form.Item>
                                        </Col>
                                        <Col span={12}>
                                            <Form.Item
                                            label='Order prefix'
                                            >
                                                <Input />
                                            </Form.Item>
                                        </Col>
                                        <Col span={12}>                                   
                                            <Form.Item
                                            label='Buyer Code'
                                            >
                                                <Input />
                                            </Form.Item>
                                        </Col>
                                        <Col span={12}>
                                            <Form.Item
                                            label='Address'
                                            >
                                                <TextArea  />
                                            </Form.Item>
                                        </Col>
                                        <Col span={12}>
                                            <Form.Item
                                            label='City'
                                            >
                                                <Input />
                                            </Form.Item>
                                        </Col>
                                        <Col span={12}>
                                            <Form.Item
                                            label='Country'
                                            >
                                                <Input />
                                            </Form.Item>
                                        </Col>
                                        <Col span={12}>
                                            <Form.Item
                                            label='Ship Allow'
                                            >
                                                <Input />
                                            </Form.Item>
                                        </Col>
                                        
                                        <Col span={12}>
                                            <Form.Item
                                            label='Currency'
                                            >
                                                <Select />
                                            </Form.Item>
                                        </Col>
                                        <Col span={12}>
                                            <Form.Item
                                            label='Tax Type'
                                            >
                                                <Input />
                                            </Form.Item>
                                        </Col>                                       
                                    </Row>
                                </Form>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}
