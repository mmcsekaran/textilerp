import { Button, Form, Input, Modal, PageHeader, Table, Row, Col } from 'antd';
import React, { Component } from 'react'

export default class Uommaster extends Component {

    constructor(props)
    {
        super(props);
        this.state={
            visible:false,
        }
    }

    showModal =() =>{
        this.setState({
            visible:true,
        })
    }

    handleOk = () =>{
        console.log();
        this.setState({
            visible:true,
        })
    }

    handleCancel = () =>{
        console.log();
        this.setState({
            visible:false,
        })
    }

  render() {
    return (
      <div>
          <PageHeader title='UOM Master'
          extra={[<Button type='primary' onClick={this.showModal}>Add</Button>]}></PageHeader>
          <Table
           bordered
                columns={[
                    {
                        title: "S.No.",
                        
                        
                        render: (text, record, index) => index + 1,
                    },
                    {
                        title :'UOM',
                        
                    },
                    {
                        title :'Conversion',
                        
                    },
                    {
                        title :'Active',
                    }
                ]}
            >

            </Table>  
            <Modal
            centered
            title='UOM Master'
            visible={this.state.visible}
            okText='create'
            onOk={this.handleOk}
            onCancel={this.handleCancel}
            >
                <Row>
                    <Col xs={24} md={16}>
                        <Form
                        labelCol={{
                            span:8,
                        }}
                        wrapperCol={{
                            span:16,
                        }}
                        >
                            <Form.Item
                            label='Uom'
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                            label='Uom Name'
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                            label='PCS'
                            >
                                <Input />
                            </Form.Item>
                        </Form>
                    </Col>
                </Row>
            </Modal>             
      </div>
    )
  }
}
