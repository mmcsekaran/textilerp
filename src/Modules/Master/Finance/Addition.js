import {PageHeader, Row, Col, Select, Input, Card, Form, Checkbox} from 'antd'
import React, { Component } from 'react'

export default class Addition extends Component {
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
                            name={'applicable for'}
                            label='Applicable For'
                            >
                                <Select />
                            </Form.Item>
                            <Form.Item name={'Component code'} label='Component Code' >
                                <Input />
                            </Form.Item>
                            <Form.Item name={'description'} label='Description'>
                                <Input />
                            </Form.Item>
                            <Form.Item name={'percentage'} label='percentage'>
                                <Input />
                                <Checkbox value="A">Purchase A/C</Checkbox>                            
                                <Checkbox value="B">Assessable Value Remarks</Checkbox>
                            </Form.Item>                           
                            <Form.Item name={'g/l a/c'} label='G/L A/C'>
                                <Select />
                            </Form.Item>
                            <Form.Item name={'tax type'} label='Tax type'>
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
