import { Card, Form, Input, PageHeader, Row, Select,Col, DatePicker, Space, Button, Table,Typography } from "antd";
import { Component } from "react";
import { Tab } from "react-bootstrap";

export default class extends Component{
    render(){
        return(
            <div>
                <PageHeader title='Costing Enty'></PageHeader>
                <div>
                    <Row justify="center" align="middle">
                        <Col style={{width:'95%'}}>
                            <Card>
                                <Form
                                size="small"
                                layout="horizontal">
                                    <Card hoverable>
                                    <Row>
                                        <Space>
                                    <Form.Item
                                    name={'exporter name'}
                                    label='Exporter Name'>
                                        <Select />
                                    </Form.Item>
                                    <Form.Item
                                    name={'costing no/Dt'}
                                    label='Costing no/Dt'>
                                        <Input />
                                    </Form.Item> 
                                    <Form.Item>
                                        <DatePicker />
                                    </Form.Item> 
                                    <Form.Item
                                    name={'style'}
                                    label="Style"
                                    >
                                        <Input />
                                    </Form.Item>
                                    <Form.Item
                                    name={'season'}
                                    label='Season'
                                    >
                                        <Select />
                                    </Form.Item>
                                    </Space>
                                    </Row>
                                    <Row>
                                    <Space>
                                        <Form.Item
                                        name={'byer name'}
                                        label='Byer Name'
                                        >
                                            <Select />
                                        </Form.Item>
                                        <Form.Item
                                        name={'style description'}
                                        label='Style Description'
                                        >
                                            <Input />
                                        </Form.Item>
                                        <Form.Item
                                        name={'Quoted Date'}
                                        label='Quoted Date'
                                        >
                                        <DatePicker />
                                    </Form.Item> 
                                    <Form.Item
                                        name={'del Date'}
                                        label='Del Date'
                                        >
                                        <DatePicker />
                                    </Form.Item> 
                                    <Form.Item
                                        name={'target price'}
                                        label='Target Price'
                                        >
                                            <Input />
                                        </Form.Item>
                                    </Space>
                                    </Row>
                                    <Row>
                                        <Space>
                                                <Form.Item
                                            name={'merch/dmm'}
                                            label='Merch/DMM'>
                                                <Input />
                                            </Form.Item> 
                                            <Form.Item>
                                                <Input />
                                            </Form.Item> 
                                            <Form.Item
                                            name={'ord qty'}
                                            label='Ord Qty'
                                            >
                                                <Input />
                                            </Form.Item>
                                            <Form.Item
                                            name={'uom'}
                                            label='UOM'
                                            >
                                                <Select />
                                            </Form.Item>
                                            <Form.Item
                                            name={'size range'}
                                            label='Size Range'
                                            >
                                                <Select />
                                            </Form.Item>
                                            <Form.Item
                                            name={'product'}
                                            label='Product'
                                            >
                                                <Select />
                                            </Form.Item>
                                            <Form.Item
                                            name={'ck date'}
                                            label='CK Date'
                                            >
                                                <DatePicker />
                                            </Form.Item>
                                            <Form.Item
                                            name={'input date'}
                                            label='Input Date'
                                            >
                                                <DatePicker />
                                            </Form.Item>
                                        </Space>
                                    </Row>
                                    <Row>
                                        <Space>
                                            <Form.Item
                                                name={'placement print'}
                                                label='Placement Print'
                                                >
                                                    <Input />
                                            </Form.Item>
                                            <Form.Item
                                                name={'emblishment'}
                                                label='Emblishment'
                                                >
                                                    <Input />
                                            </Form.Item>
                                            <Form.Item
                                                name={'nominate acc cost'}
                                                label='Nominate Acc Cost'
                                                >
                                                    <Input />
                                            </Form.Item>
                                            <Form.Item
                                                name={'sample'}
                                                label='Sample'
                                                >
                                                    <Input />
                                            </Form.Item>
                                            <Form.Item
                                                name={'testing'}
                                                label='Testing'
                                                >
                                                    <Input />
                                            </Form.Item>
                                            <Form.Item
                                                name={'Other Cost'}
                                                label='Other Cost'
                                                >
                                                    <Input />
                                            </Form.Item>
                                            <Form.Item
                                                name={'Admin Overhead'}
                                                label='Admin Overhead'
                                                >
                                                    <Input />
                                            </Form.Item>
                                            <Form.Item
                                                name={'rejection'}
                                                label='Rejection'
                                                >
                                                    <Input />
                                            </Form.Item>
                                            <Form.Item
                                                name={'transport'}
                                                label='Transport'
                                                >
                                                    <Input />
                                            </Form.Item>
                                            <Form.Item>
                                                <Button type="primery">Copy cost</Button>
                                            </Form.Item>
                                        </Space>
                                    </Row>
                                    <Row>
                                        <Space>
                                            <Form.Item
                                            name={'board'}
                                            label='Board'
                                            >
                                                <Input />
                                            </Form.Item>
                                            <Form.Item
                                            name={'others'}
                                            label='Others'
                                            >
                                                <Input />
                                            </Form.Item>
                                            <Form.Item
                                            name={'Department'}
                                            label='Department'
                                            >
                                                <Select />
                                            </Form.Item>
                                        </Space>
                                    </Row>
                                    </Card>
                                    <Card hoverable>
                                        <Table>
                                        <Table.Column  title='S.No' />
                                        <Table.Column  title='Portion' />
                                        <Table.Column  title='Fabric Name' />
                                        <Table.Column  title='Design' />
                                        <Table.Column  title='Color' />
                                        <Table.Column  title='GSM' />
                                        <Table.Column  title='Width (CM)' />
                                        <Table.Column  title='Length (CM)' />
                                        <Table.Column  title='No of Parts' />
                                        <Table.Column  title='PCS Wgt' />
                                        <Table.Column  title='Net PCS Wgt (KGS)' />
                                        <Table.Column  title='Yarn' />
                                        <Table.Column  title='Total Yarn Rate' />
                                        <Table.Column  title='Process' />
                                        <Table.Column  title='Total Process Rate' />
                                        <Table.Column  title='Loss %' />
                                        <Table.Column  title='Value' />
                                        <Table.Column  title='Total Fabric Cost' />
                                        <Table.Column  title='No Of PCS' />
                                        <Table.Column  title='Fabric Price' />
                                        </Table>
                                        </Card>
                                        <Row>
                                            <Space>
                                            <Card hoverable
                                             title='Accesories'
                                             >
                                                <Table>
                                                    <Table.Column title={'S.NO'}/>
                                                    <Table.Column title={'Acc Des'} />
                                                    <Table.Column title={'Consumption'} />
                                                    <Table.Column title={'Calc Type'} />
                                                    <Table.Column title={'No of PCS'} />
                                                    <Table.Column title={'Qty'} />
                                                    <Table.Column title={'Rate'} />
                                                    <Table.Column title={'Amt'} />
                                                </Table>

                                            </Card>
                                            <Card hoverable
                                            title='CMT Rate'>
                                                <Table>
                                                   <Table.Column title={'S.NO'} />
                                                   <Table.Column title={'combo'} />
                                                   <Table.Column title={'Process'} />
                                                   <Table.Column title={'Rage'} />
                                                   <Table.Column title={'No.Of PCS'} />
                                                   <Table.Column title={'Confirmed Rate'} />
                                                </Table>
                                            
                                            </Card>
                                            </Space>
                                        </Row> 
                                            <Row>
                                                <Space>
                                                  <Card hoverable
                                                   title='Emblishment'
                                                   >
                                                       <Table>
                                                          <Table.Column title={'S.No'} />
                                                          <Table.Column title={'Emblishment'} />
                                                          <Table.Column title={'P.Rate'} />
                                                      </Table>

                                                  </Card>
                                               
                                               
                                                  <Card  hoverable
                                                  title='Testing Cost'
                                                  >
                                                      <Table>
                                                          <Table.Column title={'S.No'} />
                                                          <Table.Column title={'Testing'} />
                                                          <Table.Column title={'Qty'} />
                                                          <Table.Column title={'Rate'} />
                                                          <Table.Column title={'Cost'} />
                                                      </Table>

                                                  </Card>
                                               
                                               
                                                  <Card hoverable
                                                  title='Sample Cost'
                                                  >
                                                      <Table>
                                                          <Table.Column title={'S.No'} />
                                                          <Table.Column title={'Combo'} />
                                                          <Table.Column title={'Qty'} />
                                                          <Table.Column title={'Type'} />
                                                          <Table.Column title={'Rate'} />
                                                          <Table.Column title={'Amt'} />
                                                      </Table>

                                                  </Card>
                                               </Space>
                                            </Row>
                                </Form>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </div>
            
        )
    }
}