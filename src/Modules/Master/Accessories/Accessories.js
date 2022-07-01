import {Button, PageHeader, Select, Table, Col, Modal, Form, Input, Row, Radio, } from 'antd'
import React, { Component } from 'react'

export default class Processgroup extends Component {

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

        return(
            <div>
                <PageHeader title='Acessories/General Master'
                extra={[<Button type='primary' onClick={this.showModal}>Accessories</Button>]}>
               </PageHeader>
               <Table
               bordered
                columns={[
                    {
                        title: "S.No",
                        width:40,
                        
                       
                        render: (text, record, index) => index + 1,
                    },
                    {
                        title :'Acc Name',
                        width :100
                        
                    },
                    {
                        title :'Item Name',
                       
                    },
                    {
                        title :'UOM',
                        
                        
                    },
                    {
                        title :'Conversion'

                    },
                    {
                        title :'Conv UOM'
                    },
                    {
                        title :'Active'
                    },
                    {
                        title : 'Tax Group'
                    },
                    {
                        title :'HSN Code'
                    },
                    {
                        title :'Trim Code'
                    },
               ]}
                
                >
                      
                </Table>
                <Modal title='Accessories'
                centered 
                visible={this.state.visible}
                okText='create'
                onOk = {this.handleOk}
                onCancel={this.handleCancel}    
                width={1000}
                >
                   <Row justify='center' aligin='middle'>
                       <Col xs={24} sm={16} md={16} xl={16}>
                           <Form
                           ref={this.form}
                           size='small'
                           >
                               <Row>
                                    <Col span={12}>
                                        <Form.Item
                                        name={'category'}
                                        label='Category'
                                        >
                                            <Select />
                                        </Form.Item>
                                    </Col> 
                                    <Col span={12}>
                                        <Form.Item
                                        name={'item group'}
                                        label='Item Group'
                                        >
                                            <Select />
                                        </Form.Item>
                                    </Col> 
                                </Row>
                                <Row>
                                    <Col span={12}>
                                        <Form.Item
                                        name={'item name'}
                                        label='Item Name'
                                        >
                                            <Select />
                                        </Form.Item>
                                    </Col> 
                                    <Col span={4}>
                                        <Form.Item
                                        name={'pur'}
                                        label='PUR'
                                        >
                                            <Select />
                                        </Form.Item>
                                    </Col> 
                                    <Col span={4}>
                                        <Form.Item
                                        name={'conv qty'}
                                        label='Conv Qty'
                                        >
                                            <Select />
                                        </Form.Item>
                                    </Col> 
                                    <Col span={4}>
                                        <Form.Item
                                        name={'plan uom'}
                                        label='Plan UOM'
                                        >
                                            <Select />
                                        </Form.Item>
                                    </Col> 
                                    <Col span={5}>
                                        <Form.Item
                                        name={'allowance %'}
                                        label='ALLOWANCE %'
                                        >
                                            <Select />
                                        </Form.Item>
                                    </Col> 
                                    <Col span={5}>
                                        <Form.Item
                                        name={'max manual qty'}
                                        label='MAX Manual QTY'
                                        >
                                            <Select />
                                        </Form.Item>
                                    </Col> 
                                    <Col span={10}>
                                        <Form.Item
                                        name={'tax group'}
                                        label='Tax Group'
                                        >
                                            <Select />
                                        </Form.Item>
                                    </Col> 
                                    <Col span={12}>
                                        <Form.Item
                                        name={'hsn code'}
                                        label='HSN Code'
                                        >
                                            <Select />
                                        </Form.Item>
                                    </Col> 
                                    <Col span={12}>
                                        <Form.Item
                                        name={'sales tax group'}
                                        label='Sales TAX Group '
                                        >
                                            <Select />
                                        </Form.Item>
                                    </Col> 
                                    <Col span={12}>
                                        <Form.Item
                                        name={'sequence no'}
                                        label='Sequence No '
                                        >
                                            <Select />
                                        </Form.Item>
                                    </Col> 
                                    <Col span={12}>
                                        <Form.Item
                                        name={'general purchase'}
                                        label='General Purchase'
                                        >
                                            <Select />
                                        </Form.Item>
                                    </Col>
                                </Row> 
                                <Col>
                                    <Form.Item
                                    name={'item type'}
                                    label='Item Type'
                                    >
                                        <Radio.Group>
                                            <Radio value={1}>SEWING TRIMS</Radio>
                                            <Radio value={2}>PACKING TRIMS</Radio>
                                            <Radio value={3}>OTHERS</Radio>
                                        </Radio.Group>
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