import { Card, Form, PageHeader, Radio, Row, Col, Input, Button } from 'antd'
import React, { Component } from 'react'
import './adminsetup.css';
export default class
  extends Component {
  render() {
    return (
      <div>
        <PageHeader title={"AdminSetup"}></PageHeader>
        <div >
          <div style={{ paddingLeft: '10px' }} >
            <Row justify='center' align='middle'>
              <Col xs={24} sm={16} md={16} xl={16}>
                
                <Button type='primery'>View History</Button>
                <Button type='primery'>Save</Button>
                <Button type='primery'>List View</Button>
                <div className='role-card'>
                  <Card
                    hoverable>
                    <Form
                      labelCol={{
                        span: 6,
                      }}
                      wrapperCol={{
                        span: 12,
                      }}
                      style={{}}
                      layout='horizontal'
                    >
                      <Form.Item
                        name={"Crystal path"}
                        label="Crystal path"
                      >
                        <Input />
                      </Form.Item>
                      <Form.Item
                        name={"Attachment Path"}
                        label="Attachment Path"
                      >
                        <Input />
                      </Form.Item>
                      <Form.Item
                        name={'Yarn lot (y/n)'}
                        label='Yarn lot (y/n)'
                      >
                        <Radio.Group>
                          <Radio value={1}>Yes</Radio>
                          <Radio value={2}>No</Radio>
                        </Radio.Group>
                      </Form.Item>
                      <Form.Item
                        name={"Stk Audit All Qty"}
                        label="Stk Audit All Qty"
                      >
                        <Input />
                      </Form.Item>
                      <Form.Item
                        name={'Sample Budget Required'}
                        label='Sample Budget Required'
                      >
                        <Radio.Group>
                          <Radio value={1}>Yes</Radio>
                          <Radio value={2}>No</Radio>
                        </Radio.Group>
                      </Form.Item>
                      <Form.Item
                        name={"Stock Divison %"}
                        label="Stock Divison %"

                      >
                        <Input />
                      </Form.Item>
                    </Form>
                  </Card>
                </div>
              </Col>
            </Row>

          </div>
        </div>
      </div>
    )
  }
}
