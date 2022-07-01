import { Card, Col, Form, Input, PageHeader, Row, Select } from 'antd'
import React, { Component } from 'react'

export default class Hsncode extends Component {
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
                          <Form.Item name={'hsn code'} label='HSN Code' >
                              <Input />
                          </Form.Item>
                          <Form.Item name={'description'} label='Description'>
                              <Input />
                          </Form.Item>
                      </Form>
                  </Card>
              </Col>
          </Row>
      </div>
    )
  }
}
