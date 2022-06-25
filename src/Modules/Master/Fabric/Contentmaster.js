import { PageHeader,Card, Form, Input, Checkbox, Col, Row } from "antd";
import  { Component } from 'react';

export default class Contentmaster extends Component {
  render() {
    return (
      <div> 
        <PageHeader title='Content Master'></PageHeader>
      <div style={{paddingleft:'10px'}}>
          <Row justify='center' align='middle'>
              <Col xs={24} sm={16} md={16} xl={16}>
                  <Card 
                  hoverable>
                      <Col span={12}>
                      <Form 
                      layout='vertical'>
                          <Form.Item 
                          name={'Content Master'}
                          label='Content Master'
                          >
                              <Input />
                          </Form.Item>
                          <Form.Item>
                          <Checkbox>Active</Checkbox>
                          </Form.Item>
                      </Form>
                      </Col>                            
                  </Card>
              </Col>               
          </Row>
      </div>
  </div>
)
}
}