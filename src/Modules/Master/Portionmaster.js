import {Button, PageHeader, Select, Table, Col, Modal, Form, Input, Row, Radio,Card,Checkbox } from 'antd'
import React, { Component } from 'react'

export default class Portionmaster extends Component 
{
    form = React.createRef() ;

    constructor(props) 
    {
        super(props);
        this.state={
            visible:false,
            showEditor:false,
        }
    }

    showModal = () => {
        this.setState({
        visible:true,
        })
    }

    handleOk = () =>{
        console.log();
        this.setState({
          visible:false,  
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
      <div><PageHeader title='Portion Master'
      extra={[<Button type='primary' onClick={this.showModal}>Portionmaster</Button>]}>
     </PageHeader>
     <Table
     bordered
     columns={[
        {
            title: "S.No", 
       
            render: (text, record, index) => index + 1,
        },
        {
            title :'Portion',
            
        },
        {
            title :'Main Part',
           
        },
        {
            title :'Active'
        },
     ]}
     >
     </Table>
     <Modal title='Portion'
                centered 
                visible={this.state.visible}
                okText='create'
                onOk = {this.handleOk}
                onCancel={this.handleCancel}    
                width={1000}
                >
                <Row justify='center' align='middle'>
              <Col xs={24} sm={16} md={16} xl={16}>
              <Form
                ref={this.form}
                 size='small'
                           >
                  
                      <Col span={12}>
                      
                          <Form.Item 
                          name={'Portion Master'}
                          label='Portion Master' 
                          style={{width:500}}
                          >
                              <Input />
                          </Form.Item>
                          </Col>
                          <Col span={12}>
                            <Form.Item
                            name={'Main Part'}
                            label='Main Part'
                            >
                                <Select />
                            </Form.Item>
                          </Col>
                          <Col span={12}>
                          <Form.Item>
                          <Checkbox>Active</Checkbox>
                          </Form.Item>
                          </Col>
                      </Form> 
                      </Col>                                     
          </Row>
     </Modal>
     </div>
    )
  }
}

