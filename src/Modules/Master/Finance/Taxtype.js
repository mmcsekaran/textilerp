import {PageHeader, Form, Row, Col, Input,Card} from 'antd'
import React, { Component} from 'react'

export default class Taxtype extends Component {
  
  render() {
    return (
      <div>
          <PageHeader title='Tax Type'></PageHeader>
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
                       <Form.Item name={'tax type'} label='Tax Type' >
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
