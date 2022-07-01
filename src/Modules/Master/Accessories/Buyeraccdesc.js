import { Card, Col, Form,Input,PageHeader,Row, Select } from 'antd'
import React, { Component } from 'react'

export default class Buyeraccdesc extends Component {
  render() {
    return (
      <div>
          <PageHeader title='Buyer/Acc/Des'></PageHeader>
          <div>
              <Row justify='center' align='middle'>
                  <Col xs={24} md={16}>
                      <Card>
                      <Form
                      size='small'
                      labelCol={{
                          span:8
                      }}
                      wrapperCol={{
                          span:16
                      }}
                      >
                          <Row>
                          <Col span={12}>
                          <Form.Item
                          name={'buyer name'}
                          label='Buyer Name'
                          >
                              <Select />
                          </Form.Item>
                          </Col>
                          <Col span={12}>
                          <Form.Item
                          name={'acc name'}
                          label='Acc Name'
                          >
                              <Select />
                          </Form.Item>
                          </Col>
                          </Row>
                          <Col span={12}>
                          <Form.Item
                          name={'description'}
                          label='Description'
                          >
                              <Input style={{width:"400px"}} size='large' />
                          </Form.Item>
                          </Col>
                          <Col span={12}>
                          <Form.Item
                          name={'hsn code'}
                          label='HSN Code'
                          >
                              <Input />
                          </Form.Item>
                          </Col>
                      </Form>
                      </Card>
                  </Col>
              </Row>
          </div>
      </div>
    )
  }
}
