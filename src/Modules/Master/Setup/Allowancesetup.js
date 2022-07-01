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
                      size='small'
                      >
                          <Form.Item
                          name={'entry no'}
                          label='Entry No'
                          >
                              <Input />
                          </Form.Item>
                          <Form.Item
                          name={'company'}
                          label='Company'
                          >
                              <Select />
                          </Form.Item>
                          <Form.Item
                          name={'process'}
                          label='Process'
                          >
                              <Select />
                          </Form.Item>
                          <Form.Item
                          name={'type'}
                          label='Type'
                          >
                              <Select />
                          </Form.Item>
                          <Form.Item
                          name={'dc/po qty'}
                          label='DC/Po Qty'
                          >
                              <Input />
                          </Form.Item>
                          <Form.Item
                          name={'recp qty'}
                          label='Recp Qty'
                          >
                              <Input />
                          </Form.Item>
                          <Form.Item
                          name={'transfer qty'}
                          label='Transfer Qty'
                          >
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
