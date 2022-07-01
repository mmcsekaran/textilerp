import { Card, Col, Form, Input, PageHeader, Row, Select } from 'antd'
import React, { Component } from 'react'

export default class Approvalpassword extends Component {
  render() {
    return (
      <div>
          <PageHeader title='Approval Password'></PageHeader>
            <Row justify='center' align='middle'>
                <Col xs={24} sm={16}>
                    <Card>
                        <Form
                        labelCol={{
                            span:6
                        }}
                        wrapperCol={{
                            span:12
                        }}
                        >
                            <Form.Item
                            name={'username'}
                            label='Username'
                            >
                                <Select />
                            </Form.Item>
                            <Form.Item
                            name={'password'}
                            label='Password'
                            >
                                <Input.Password />
                            </Form.Item>
                        </Form>
                    </Card>
                </Col>
            </Row>         
      </div>
    )
  }
}
