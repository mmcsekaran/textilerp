import { Form, Input,Row,Col,Space,Select } from 'antd'
import React, { Component } from 'react'

export default class CadCalculation extends Component {
  render() {
    return (
     <Form>
         <Form.List>
             {(fields,{add,remove}) =>(
                 <>
                 {field => (
                    <>
                    <Form.Item>
                    <Space>
                                <Row>
                                   <Col span={8}>
                                 <Select
                                 placeholder ="Dimension"
                                 onChange={() =>
                                {

                                }}
                                  type={"number"}
                                  
                                  disabled={!this.state.isFabricCal}
                                ></Select>
                                </Col >
                               <Col span={8}>
                                <Input
                                placeholder="CMS"
                                  type={"number"}
                                  disabled={!this.state.isFabricCal}
                                />
                               </Col>
                               <Col span={8}>
                                <Input
                                placeholder="Inc. Allw"
                                  type={"number"}
                                  readOnly
                                  disabled={!this.state.isFabricCal}
                                />
                               </Col>
                                </Row>
                               
                               
                              </Space>
                    </Form.Item>
                    </> 
                 )}
                 </>
             )}
         </Form.List>
     </Form>
    )
  }
}
