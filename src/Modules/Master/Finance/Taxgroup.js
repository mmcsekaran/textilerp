import { Form, Input, Select, PageHeader, Row, Col, Card, Table} from 'antd'
import React, { Component } from 'react'

export default class Taxgroup extends Component {
  render() {
    return (
        <div>
            <PageHeader title='HSN Code'></PageHeader>
            <Row justify='center' align='middle'>
                <Col xs={24} sm={16} md={16} xl={16}>
                    <Card>
                        <Form
                        labelCol={{
                            span:5
                        }}
                        wrapperCol={{
                        span:12
                        }}
                        >
                            <Form.Item
                            name={'type'}
                            label='Type'
                            >
                                <Select />
                            </Form.Item>
                            <Form.Item name={'tax group'} label='Tax Group' >
                                <Input />
                            </Form.Item>
                            <Form.Item name={'code'} label='Code'>
                                <Input />
                            </Form.Item>
                        </Form>                    
                    </Card>
                    <Table
                        bordered
                        columns={[
                            {
                                title:'s.no'
                            },
                            {
                                title:'Tax Type'
                            },
                            {
                                title:'Order Ledger Name'
                            }
                        ]}
                        >

                        </Table>
                </Col>
            </Row>
        </div>
    )
  }
}

