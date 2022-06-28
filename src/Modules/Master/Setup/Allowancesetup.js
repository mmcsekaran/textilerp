import { Card, Col, Form, PageHeader, Row, Input, Select, } from 'antd'
import React, { Component } from 'react'

export default class Allowancesetup extends Component {
  render() {
    return (
      <div>
          <PageHeader title='Allowance Setup'></PageHeader>
          <Row justify='center' align='middle'>
              <Col xs={24} sm={16} md={16} xl={16}>
                  <Card>
                      <Form
                      labelCol={{
                          span:4
                      }}
                      wrapperCol={{
                          span:12
                      }}
                      >
                          <Form.Item
                          label='Entry No'
                          >
                              <Input />
                          </Form.Item>
                          <Form.Item
                          label='Company'
                          >
                              <Select />
                          </Form.Item>
                          <Form.Item
                          label='Process'
                          >
                              <Select />
                          </Form.Item>
                          <Form.Item
                          label='Type'
                          >
                              <Select />
                          </Form.Item>
                          <Form.Item
                          label='DC/Po Qty'
                          >
                              <Select />
                          </Form.Item>
                      </Form>
                  </Card>
              </Col>
          </Row>
      </div>
    )
  }
}
