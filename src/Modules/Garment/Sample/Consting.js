import { Button, Col, Input, message, PageHeader, Row, Space, Table, Tag } from 'antd'
import React, { Component } from 'react'
import Document, { DocumentProps } from './../../Common/Document';
import { Form } from 'antd';
import { withDocument } from './../../Common/withDocument';

 class SampleConsting


 extends Component {

    onSave = (data) =>
    {
        
      this.props.onSave("hi")
    }

     formRef = React.createRef();

  render() {
    console.log(this.prop)
    return (
      <div>
          <Document
          AuthorizeTo={
           {
             PagePermission:'COSTING_ENQUIRY1',
             roles:["admin1"],
             users:['CHANDRU']
           }
          }
          documentTitle = "Consting Enquiry"
          status={"Unsaved"}
          toolBar =
          {
            [
              'New',
              'Save'
            ]
          }
         form = { this.form}
          onSave = {this.onSave}
          >
            <Form
            labelCol={{span:9}}
            labelAlign ='left'
            name='myform'
            ref={this.formRef}
            layout='horizontal'
            >
            <Row justify='space-between'>
              <Space>
                <Col>
                <Form.Item>
                  <Input placeholder='Style No' />
                </Form.Item>
                <Form.Item>
                  <Input placeholder='Buyer Name' />
                </Form.Item>
                </Col>
              </Space>
              <Space>
                <Col>
                <Form.Item>
                  <Input placeholder='Category' />
                </Form.Item>
                <Form.Item>
                  <Input placeholder='Style Description' />
                </Form.Item>
                </Col>
              </Space>
              <Space>
                <Col>
                <Form.Item>
                  <Input placeholder='Country' />
                </Form.Item>
                <Form.Item>
                  <Input placeholder='Fabric' />
                </Form.Item>
                </Col>
              </Space>
              <Space>
                <Col>
                <Form.Item>
                  <Input placeholder='GSM/Width' />
                </Form.Item>
                <Form.Item>
                  <Input placeholder='Fabric' />
                </Form.Item>
                </Col>
              </Space>
            </Row>
           
          <Form.Item>
            <Table
            title={() =>
              {return <>
              Details
             <div style={{float:'right'}}><Button >Add Item</Button></div> 
              </>}}
            >
              
            </Table>
          </Form.Item>
            </Form>
          </Document>

        
      </div>
    )
  }
}

export default withDocument(SampleConsting,{})