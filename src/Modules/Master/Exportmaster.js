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
                                        name={'company name'}
                                        label='Company Name'
                                        >
                                            <Input />
                                        </Form.Item>
                                    </Col>
                                    <Col span={12}>
                                        <Form.Item
                                        name={'prefix'}
                                        label='prefix'
                                        >
                                            <Input />
                                        </Form.Item>
                                    </Col>
                                    <Col span={12}>                                   
                                        <Form.Item
                                        name={'company link'}
                                        label='Company Link'
                                        >
                                            <Select />
                                        </Form.Item>
                                    </Col>
                                    <Col span={12}>
                                        <Form.Item
                                        name={'branch link'}
                                        label='Branch Link'
                                        >
                                            <Select />
                                        </Form.Item>
                                    </Col>
                                    <Col span={12}>
                                        <Form.Item
                                        name={'gst no'}
                                        label='GST NO'
                                        >
                                            <Input />
                                        </Form.Item>
                                    </Col>
                                    <Col span={12}>
                                        <Form.Item
                                        name={'tin no'}
                                        label='TIN NO'
                                        >
                                            <Input />
                                        </Form.Item>
                                    </Col>
                                    <Col span={12}>
                                        <Form.Item
                                        name={'cst no'}
                                        label='CST NO'
                                        >
                                            <Input />
                                        </Form.Item>
                                    </Col>
                                        
                                    <Col span={12}>
                                        <Form.Item
                                        name={'fax'}
                                        label='FAX'
                                        >
                                            <Input />
                                        </Form.Item>
                                    </Col>
                                    <Col span={12}>
                                        <Form.Item
                                        name={'e-mail'}
                                        label='E-Mail'
                                        >
                                            <Input />
                                        </Form.Item>
                                    </Col>
                                    <Col span={12}>
                                        <Form.Item
                                        name={'cin no'}
                                        label='CIN NO'
                                        >
                                            <Input />
                                        </Form.Item>
                                    </Col>
                                    <Col span={12}>
                                        <Form.Item
                                        name={'pan no'}
                                        label='PAN NO'
                                        >
                                            <Input />
                                        </Form.Item>
                                    </Col>
                                    <Col span={12}>                                   
                                        <Form.Item
                                        name={'currency'}
                                        label='Currency'
                                        >
                                            <Select />
                                        </Form.Item>
                                    </Col>
                                    <Col span={12}>
                                        <Form.Item
                                        name={'ie code'}
                                        label='IE CODE'
                                        >
                                            <Input />
                                        </Form.Item>
                                    </Col>                                    
                                    <Col span={12}>
                                        <Form.Item
                                        name={'aepc no'}
                                        label='AEPC NO'
                                        >
                                            <Input />
                                        </Form.Item>
                                    </Col>
                                    <Col span={12}>
                                        <Form.Item
                                        name={'logistics prefix'}
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
                                                        name={'address'}
                                                        label={'Address'}
                                                        >
                                                            <TextArea />
                                                        </Form.Item>
                                                        </Col>
                                                    <Col span={12}>
                                                        <Form.Item
                                                        name={'city'}
                                                        label={'City'}
                                                        >
                                                            <Select />
                                                        </Form.Item>
                                                    </Col>
                                                    <Col span={12}>
                                                        <Form.Item
                                                        name={'state'}
                                                        label={'State'}
                                                        >
                                                            <Select />
                                                        </Form.Item>
                                                    </Col>
                                                    <Col span={12}>
                                                        <Form.Item
                                                        name={'pincode'}
                                                        label={'PinCode'}
                                                        >
                                                            <Input />
                                                        </Form.Item>
                                                    </Col>
                                                    <Col span={12}>
                                                        <Form.Item
                                                        name={'country'}
                                                        label={'Country'}
                                                        >
                                                            <Select />
                                                        </Form.Item>
                                                    </Col>                                                                                                                                                                                                     
                                                    <Col span={12}>
                                                        <Form.Item
                                                        name={'bank name'}
                                                        label='Bank Name'
                                                        >
                                                            <Input />
                                                        </Form.Item>
                                                    </Col>                                                    
                                                    <Col span={12}>
                                                        <Form.Item
                                                        name={'a/c no'}
                                                        label='A/C no'
                                                        >
                                                            <Input />
                                                        </Form.Item>
                                                    </Col>
                                                    <Col span={12}>
                                                        <Form.Item
                                                        name={'branch'}
                                                        label="Branch"
                                                        >
                                                            <Input />
                                                        </Form.Item>
                                                    </Col>
                                                    <Col span={12}>
                                                        <Form.Item
                                                        name={'ifsc code'}
                                                        label='IFSC Code'
                                                        >
                                                            <Input />
                                                        </Form.Item>
                                                    </Col>
                                                    <Col span={12}>
                                                        <Form.Item
                                                        name={'rtgs code'}
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
                                                        name={'city'}
                                                        label='City'
                                                        >
                                                            <Select />
                                                        </Form.Item>
                                                    </Col>
                                                    <Col span={12}>
                                                        <Form.Item
                                                        name={'state'}
                                                        label='State'
                                                        >
                                                            <Select />
                                                        </Form.Item>
                                                    </Col>
                                                    <Col span={12}>
                                                        <Form.Item
                                                        name={'pin code'}
                                                        label='Pin Code'
                                                        >
                                                            <Input />
                                                        </Form.Item>
                                                    </Col>
                                                    <Col span={12}>
                                                        <Form.Item
                                                        name={'phone no'}
                                                        label='Phone No'
                                                        >
                                                            <Input />
                                                        </Form.Item>
                                                    </Col>
                                                    <Col span={12}>
                                                        <Form.Item
                                                        name={'bank name'}
                                                        label='Bank Name'
                                                        >
                                                            <Input />
                                                        </Form.Item>                                           
                                                    </Col>
                                            
                                                    <Col span={12}>
                                                        <Form.Item
                                                        name={'a/c no'}
                                                        label='A/C no'
                                                        >
                                                            <Input />
                                                        </Form.Item>
                                                    </Col>
                                                    <Col span={12}>
                                                        <Form.Item
                                                        name={'branch'}
                                                        label="Branch"
                                                        >
                                                            <Input />
                                                        </Form.Item>
                                                    </Col>
                                                    <Col span={12}>
                                                        <Form.Item
                                                        name={'ifsc code'}
                                                        label='IFSC Code'
                                                        >
                                                            <Input />
                                                        </Form.Item>
                                                    </Col>
                                                    <Col span={12}>
                                                        <Form.Item
                                                        name={'rtgs code'}
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
