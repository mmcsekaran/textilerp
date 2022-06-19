import { Button, Col, Form, Image, Input, Row, Select, Table, Typography } from "antd";
import React, { Component } from "react";
import StyleCategory from "../../Common/StyleCategory";
import StyleEditor from "./StyleEditor";
export interface SampleCostingProps {
  costingNo: number;
}
export default class SampleCosting extends React.Component<SampleCostingProps> {
  render() {
    return (
      <div>
        <Form.Provider>
          <Form name='costmas'>
            <Row>
             
              <Col md={18} style={{padding:'20px'}}>
                <Row>
                  <Form.Item></Form.Item>
                </Row>
                <Row gutter={5}>
                  <Col md={8}>
                    <Form.Item
                    name={"styleCategory"}
                    label = {"Style Category"}
                    >
                      <StyleCategory/>
                    </Form.Item>
                  </Col>
                  <Col md={8}>
                    <Form.Item name={"styleNumber"}
                    label ={"Style Number"}
                    >
                      <Input placeholder="Style Number"/>
                    </Form.Item>
                  </Col>
                  <Col md={8}>
                    <Form.Item name={"styleNumber"}
                    label ={"Style Number"}
                    >
                      <Input placeholder="Style Number"/>
                    </Form.Item>
                  </Col>
                </Row>
                <Row gutter={5}>
                  <Col md={8}>
                    <Form.Item
                    name={"styleCategory"}
                    label = {"Style Category"}
                    >
                      <StyleCategory/>
                    </Form.Item>
                  </Col>
                  <Col md={8}>
                    <Form.Item name={"styleNumber"}
                    label ={"Style Number"}
                    >
                      <Input placeholder="Style Number"/>
                    </Form.Item>
                  </Col>
                  <Col md={8}>
                    <Form.Item name={"styleNumber"}
                    label ={"Style Number"}
                    >
                      <Input placeholder="Style Number"/>
                    </Form.Item>
                  </Col>
                </Row>
                <Row gutter={5}>
                  <Col md={8}>
                    <Form.Item
                    name={"styleCategory"}
                    label = {"Style Category"}
                    >
                      <StyleCategory/>
                    </Form.Item>
                  </Col>
                  <Col md={8}>
                    <Form.Item name={"styleNumber"}
                    label ={"Style Number"}
                    >
                      <Input placeholder="Style Number"/>
                    </Form.Item>
                  </Col>
                  <Col md={8}>
                    <Form.Item name={"styleNumber"}
                    label ={"Style Number"}
                    >
                      <Input placeholder="Style Number"/>
                    </Form.Item>
                  </Col>
                </Row>
               
              </Col>
              <Col md={6} style={{padding:'15px'}}>
                <div style={{width:'100%',height:'100%'}}>
                  <Image width={230} height ={250} src="error" style={{background:'green'}}>

                  </Image>
                </div>
              </Col>
            </Row>
            <Row>
              
            </Row>
            <Row>
              <Col md={24}>
                <div style={{padding:'10px', width:'100%',height:'50px'}}>
                
                </div>
                  <Table
                  title={()=><><Typography.Text strong style={{fontSize:'14pt'}} >Fabric Details</Typography.Text><Button type="primary" style ={{float:'right'}}>Add Fabric</Button></> }
                    columns={[
                      {
                        title : "S.No",
                        width:50,
                        align:'center'
                      },
                      {
                        title : "Panel Name",
                        align:'center',
                        width:150
                      },
                      {
                        title : "Fabric",
                        align:'center'
                      },
                      {
                        title : "Cad",
                        width:100,
                        align:'center'
                      },
                      {
                        title : "GSM",
                        width:100,
                        align:'center'
                      },
                      {
                        title : "Process Template",
                        align:'center',
                        width:150
                      },
                      {
                        title : "Fabric Consumption",
                        width:100,
                        align:'center'
                      },
                      {
                        title : "Fabric Cost (KGS)",
                        width:100,
                        align:'center'
                      },
                      {
                        title : "Fabric Cost",
                        width:100,
                        align:'center'
                      },
                    ]}
                   
                  ></Table>
              </Col>
            </Row>
          </Form>
        </Form.Provider>
      </div>
    );
  }
}
