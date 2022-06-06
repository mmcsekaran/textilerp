import { Button, Card, Col, DatePicker, Input, PageHeader, Space, Typography } from 'antd'
import React, { Component } from 'react'
import { Row } from 'antd';
import { CiCircleFilled } from '@ant-design/icons';
import { Form } from 'antd';
import ToolBar from '../../Common/ToolBar';
import { message } from 'antd';

export default class TechPack extends Component {

    onSave = () =>
    {
        message.success("Click Save")
    }

    render() {
        return (
            <div>
                <PageHeader
                    title="Tech Sheets"
                >
                    <ToolBar onSave = {() => this.onSave()}>

                    </ToolBar>
                     </PageHeader>
                    <Row justify='center' >
                        <Col span={12}>
                            <Card
                                title={<>
                                    <Typography.Text>Tech Sheet</Typography.Text>
                                    <Button type='primary' style={{ float: 'right' }} >Add</Button>
                                </>}

                            >
                                <Form
                                layout='vertical'
                                >

                                    <Space>
                                        <Row>

                                       
                                        <Form.Item
                                            labelAlign='left'
                                            label="Season"

                                        >
                                            <Input placeholder='Season' />

                                        </Form.Item>
                                        <Form.Item
                                            labelAlign='left'
                                            label="Date"

                                        >
                                            <DatePicker/>

                                        </Form.Item>
                                   
                                        <Form.Item
                                            labelAlign='left'
                                            label="Buyer"

                                        >
                                            <Input placeholder='Season' />

                                        </Form.Item>
                                        <Form.Item
                                            labelAlign='left'
                                            label="Style #"

                                        >
                                            <DatePicker/>

                                        </Form.Item> </Row>
                                    </Space>
                                    <Space>
                                        <Form.Item
                                            labelAlign='left'
                                            label="Sizes"

                                        >
                                            <Input placeholder='Season' />

                                        </Form.Item>
                                        <Form.Item
                                            labelAlign='left'
                                            label="Technical Designer"

                                        >
                                           <Input/>

                                        </Form.Item>
                               
                                        <Form.Item
                                            labelAlign='left'
                                            label="Fabric"

                                        >
                                            <Input placeholder='Season' />

                                        </Form.Item>
                                        <Form.Item
                                            labelAlign='left'
                                            label="Product Category"

                                        >
                                           <Input/>

                                        </Form.Item>
                                    </Space>
                                    <Space>
                                        <Form.Item
                                            labelAlign='left'
                                            label="Fabric Content"

                                        >
                                            <Input placeholder='Season' />

                                        </Form.Item>
                                        <Form.Item
                                            labelAlign='left'
                                            label="Brand / Label"

                                        >
                                           <Input/>

                                        </Form.Item>
                                    </Space>

                                </Form>

                            </Card>
                        </Col>
                    </Row>
               
            </div>
        )
    }
}
