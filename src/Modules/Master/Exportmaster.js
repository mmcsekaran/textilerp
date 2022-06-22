import { Card, Col, Form, Input, PageHeader, Row, Select, Tabs, Space } from 'antd'
import TextArea from 'antd/lib/input/TextArea';
import { Component } from 'react'
import './card.css';

export default class Exportmaster extends Component {
   

  render() {

    const { TabPane } = Tabs;  
    
    return (
        <div>
            <div style={{ paddingleft:'10px'}}>
          <PageHeader title='Exporter Master'></PageHeader>
          </div>
            <div className='card-content'>
              <Row justify='center' align='middle'>
                  <Col xs={24} sm={16} md={16} xl={16}>
                        <Card>
                            <Form
                            labelCol={{
                                span:8,
                            }}
                            wrapperCol={{
                                span:16,
                            }}
                            size='small'
                            layout='horizontal'
                            >
                                <Row>
                                    <Col span={12}>
                                        <Form.Item
                                        label='Company Name'
                                        >
                                            <Input />
                                        </Form.Item>
                                    </Col>
                                    <Col span={12}>
                                        <Form.Item
                                        label='prefix'
                                        >
                                            <Input />
                                        </Form.Item>
                                    </Col>
                                    <Col span={12}>                                   
                                        <Form.Item
                                        label='Company Link'
                                        >
                                            <Select />
                                        </Form.Item>
                                    </Col>
                                    <Col span={12}>
                                        <Form.Item
                                        label='Branch Link'
                                        >
                                            <Select />
                                        </Form.Item>
                                    </Col>
                                    <Col span={12}>
                                        <Form.Item
                                        label='GST NO'
                                        >
                                            <Input />
                                        </Form.Item>
                                    </Col>
                                    <Col span={12}>
                                        <Form.Item
                                        label='TIN NO'
                                        >
                                            <Input />
                                        </Form.Item>
                                    </Col>
                                    <Col span={12}>
                                        <Form.Item
                                        label='CST NO'
                                        >
                                            <Input />
                                        </Form.Item>
                                    </Col>
                                        
                                    <Col span={12}>
                                        <Form.Item
                                        label='FAX'
                                        >
                                            <Input />
                                        </Form.Item>
                                    </Col>
                                    <Col span={12}>
                                        <Form.Item
                                        label='E-Mail'
                                        >
                                            <Input />
                                        </Form.Item>
                                    </Col>
                                    <Col span={12}>
                                        <Form.Item
                                        label='CIN NO'
                                        >
                                            <Input />
                                        </Form.Item>
                                    </Col>
                                    <Col span={12}>
                                        <Form.Item
                                        label='PAN NO'
                                        >
                                            <Input />
                                        </Form.Item>
                                    </Col>
                                    <Col span={12}>                                   
                                        <Form.Item
                                        label='Currency'
                                        >
                                            <Select />
                                        </Form.Item>
                                    </Col>
                                    <Col span={12}>
                                        <Form.Item
                                        label='IE CODE'
                                        >
                                            <Input />
                                        </Form.Item>
                                    </Col>                                    
                                    <Col span={12}>
                                        <Form.Item
                                        label='AEPC NO'
                                        >
                                            <Input />
                                        </Form.Item>
                                    </Col>
                                    <Col span={12}>
                                        <Form.Item
                                        label='Logistics Prefix'
                                        >
                                            <Input />
                                        </Form.Item>
                                    </Col>
                                </Row>
                            </Form>
                        </Card>
                        <div>
                            <Tabs type="card">
                                <TabPane tab='Company Address' key={1}>                                   
                                    <Form
                                    size="small"
                                    layout="horizontal"
                                    labelCol={{
                                        span:8,
                                    }}
                                    wrapperCol={{
                                        span:16,
                                    }}
                                    style={{
                                        border:'1px solid black'
                                    }}
                                    > 
                                        <Card>
                                            <Space>
                                                <Row> 
                                                    <Col span={12}>
                                                        <Form.Item
                                                        label={'Address'}
                                                        >
                                                            <TextArea />
                                                        </Form.Item>
                                                        </Col>
                                                    <Col span={12}>
                                                        <Form.Item
                                                        label={'City'}
                                                        >
                                                            <Select />
                                                        </Form.Item>
                                                    </Col>
                                                    <Col span={12}>
                                                        <Form.Item
                                                        label={'State'}
                                                        >
                                                            <Select />
                                                        </Form.Item>
                                                    </Col>
                                                    <Col span={12}>
                                                        <Form.Item
                                                        label={'PinCode'}
                                                        >
                                                            <Input />
                                                        </Form.Item>
                                                    </Col>
                                                    <Col span={12}>
                                                        <Form.Item
                                                        label={'Country'}
                                                        >
                                                            <Select />
                                                        </Form.Item>
                                                    </Col>                                                                                                                                                                                                     
                                                    <Col span={12}>
                                                        <Form.Item
                                                        label='Bank Name'
                                                        >
                                                            <Input />
                                                        </Form.Item>
                                                    </Col>                                                    
                                                    <Col span={12}>
                                                        <Form.Item
                                                        label='A/C no'
                                                        >
                                                            <Input />
                                                        </Form.Item>
                                                    </Col>
                                                    <Col span={12}>
                                                        <Form.Item
                                                        label="Branch"
                                                        >
                                                            <Input />
                                                        </Form.Item>
                                                    </Col>
                                                    <Col span={12}>
                                                        <Form.Item
                                                        label='IFSC Code'
                                                        >
                                                            <Input />
                                                        </Form.Item>
                                                    </Col>
                                                    <Col span={12}>
                                                        <Form.Item
                                                        label='RTGS Code'
                                                        >
                                                            <Input />
                                                        </Form.Item>
                                                    </Col>
                                                </Row>
                                            </Space>                                            
                                        </Card>
                                    </Form>                                    
                                </TabPane>
                                
                                <TabPane tab='Billing Address' key={2}>
                                    <Form
                                    size="small"
                                    layout="horizontal"
                                    labelCol={{
                                        span:8,
                                    }}
                                    wrapperCol={{
                                        span:16,
                                    }}
                                    style={{
                                        border:'1px solid brown'
                                        
                                    }}    
                                                                   
                                    >
                                        <Card>
                                            <Space>
                                                <Row>                                            
                                                    <Col span={12}>
                                                        <Form.Item
                                                        label='Address'
                                                        >
                                                            <TextArea />
                                                        </Form.Item>
                                                    </Col>
                                                    <Col span={12}>
                                                        <Form.Item
                                                        label='City'
                                                        >
                                                            <Select />
                                                        </Form.Item>
                                                    </Col>
                                                    <Col span={12}>
                                                        <Form.Item
                                                        label='State'
                                                        >
                                                            <Select />
                                                        </Form.Item>
                                                    </Col>
                                                    <Col span={12}>
                                                        <Form.Item
                                                        label='Pin Code'
                                                        >
                                                            <Input />
                                                        </Form.Item>
                                                    </Col>
                                                    <Col span={12}>
                                                        <Form.Item
                                                        label='Phone No'
                                                        >
                                                            <Input />
                                                        </Form.Item>
                                                    </Col>
                                                    <Col span={12}>
                                                        <Form.Item
                                                        label='Bank Name'
                                                        >
                                                            <Input />
                                                        </Form.Item>                                           
                                                    </Col>
                                            
                                                    <Col span={12}>
                                                        <Form.Item
                                                        label='A/C no'
                                                        >
                                                            <Input />
                                                        </Form.Item>
                                                    </Col>
                                                    <Col span={12}>
                                                        <Form.Item
                                                        label="Branch"
                                                        >
                                                            <Input />
                                                        </Form.Item>
                                                    </Col>
                                                    <Col span={12}>
                                                        <Form.Item
                                                        label='IFSC Code'
                                                        >
                                                            <Input />
                                                        </Form.Item>
                                                    </Col>
                                                    <Col span={12}>
                                                        <Form.Item
                                                        label='RTGS Code'
                                                        >
                                                            <Input />
                                                        </Form.Item>
                                                    </Col>
                                                </Row>
                                            </Space>                                                      
                                        </Card>
                                    </Form> 
                                </TabPane>   
                            </Tabs>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
  }
}
