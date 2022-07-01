import { PageHeader, Card, Form, Input, Row, Col, Select, Radio, Checkbox, Space} from 'antd'
import React, { Component } from 'react'

export default class Processmaster extends Component {
  render() {
    return (
      <div>
          <PageHeader title='Process Master'></PageHeader>
          <div>
              <Card>
                <div>
                    <Row justify='center' align='middle'>
                        <Col xs={24} sm={16} md={16} xl={16}>
                            <Card>
                                <Form
                                size='small'
                                layout='horizontal'
                                >
                                    <Form.Item
                                    name={'process group'}
                                    label='Process Group'
                                    >
                                        <Select />
                                    </Form.Item>
                                    <Form.Item
                                    name={'process name'}
                                    label='Process Name'
                                    >
                                        <Select />
                                    </Form.Item>
                                    <Form.Item
                                    name={'bill qty'}
                                    label='Bill Qty'
                                    >
                                        <Radio.Group>
                                            <Radio value={1}>Send Qty</Radio>
                                            <Radio value={2}>GRN Qty</Radio>
                                            <Radio value={3}>Col Pcs</Radio>
                                         </Radio.Group>
                                    </Form.Item>
                                    <Row>
                                        <Space>
                                        <Col>
                                          <Form.Item
                                          name={'sequence no'}
                                          label='Sequence No'
                                          >
                                              <Input />
                                          </Form.Item>
                                        </Col>
                                        <Col>
                                        <Form.Item
                                        name={'lot req'}
                                        label='Lot Req'
                                        >
                                            <Radio.Group>
                                                <Radio value={1}>Yes</Radio>
                                                <Radio value={2}>No</Radio>
                                            </Radio.Group>   
                                        </Form.Item>
                                        </Col>
                                        </Space>
                                    </Row>
                                    <Form.Item
                                    name={'tax group'}
                                    label='Tax Group'
                                    >
                                        <Select />
                                    </Form.Item>
                                    <Form.Item
                                    name={'sales tax group'}
                                    label='Sales Tax Group'
                                    >
                                        <Select />
                                    </Form.Item>                                        
                                        <Checkbox>Active</Checkbox>
                                                                           
                                        <Checkbox>Hide Rate</Checkbox>
                                    
                                        <Checkbox>Operation</Checkbox>                                   
                                    <Form.Item
                                    name={'garment process'}
                                    label='Garment Process'
                                    >
                                        <Select />
                                    </Form.Item>   
                                      <Form.Item
                                        name={'cost type'}
                                        label='Cost Type'
                                        >
                                            <Radio.Group>
                                                <Radio value={1}>Variable Cost</Radio>
                                                <Radio value={2}>Operational Cost</Radio>
                                                <Radio value={3}>None</Radio>
                                            </Radio.Group>   
                                        </Form.Item> 
                                        <Form.Item>
                                           <Checkbox>Bill Pass Required</Checkbox>
                                           <Checkbox>Cutting Delivery Process</Checkbox>   
                                        </Form.Item>
                                        
                                        <Row>
                                            <Col span={12}>
                                            <Form.Item
                                            name={'based on'}
                                            label='Based On'
                                            >
                                                <Select />
                                            </Form.Item>
                                            </Col>

                                            <Col span={5}>
                                            <Form.Item
                                            name={'in'}
                                            label='In'
                                            >
                                                <Select />
                                            </Form.Item>
                                            </Col>
                                        </Row>

                                        <Form.Item
                                        name={'hsn code/sac code'}
                                        label='HSN Code/SAC Code'
                                        >
                                            <Select />
                                        </Form.Item>
                                        <Form.Item
                                        name={'costing group'}
                                        label='Costing Group '
                                        >
                                            <Select />
                                        </Form.Item>
                                </Form>
                            </Card>
                        </Col>
                    </Row>
                </div>
              </Card>
          </div>
      </div>
    )
  }
}
