import { LoadingOutlined, PlusOutlined, DeleteFilled } from '@ant-design/icons';
import { Form, Row, Col, Upload, Input, Table, Typography, Button ,Image} from 'antd';
import { RcFile } from 'antd/lib/upload';
import React, { Component } from 'react'
import StyleCategory from '../../../../Common/StyleCategory';
import PortionEditor from '../../PortionEditor';
import CMTCosting from './CMTCosting';
import CostingSummary from './CostingSummary';
import Emplishment from './Emplishment';
import ProfitSummary from './ProfitSummary';
import TrimsCosting from './TrimsCosting';

const getBase64 = (img: RcFile, callback: (url: string) => void) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => callback(reader.result as string));
    reader.readAsDataURL(img);
  };

export default class SampleCostingMaster extends Component {
  render() {
    return (
      <div>
         <Form name="costmas">
            <Row>
              <Col md={5} style={{ padding: "15px" }}>
                <Row>
                  <div
                    style={{
                      width: "200px",
                      height: "200px  ",
                      border: "1px dashed gray",
                    }}
                  >
                    <Upload
                      showUploadList={false}
                      listType="picture"
                      className="avatar-uploader"
                      beforeUpload={(file) => {
                        getBase64(file, (url) => {
                          const data = this.state.costingData;
                          data.imageSrc = url;
                          this.setState({
                            imageLoading: false,
                            costingData: data,
                          });
                        });
                      }}
                    >
                      {this.state.costingData.imageSrc ? (
                        <Image
                          width={200}
                          height={200}
                          preview={false}
                          src={this.state.costingData.imageSrc}
                        />
                      ) : (
                        <Row
                          justify="center"
                          align="middle"
                          style={{ height: "100%" }}
                        >
                          {this.state.imageLoading ? (
                            <LoadingOutlined />
                          ) : (
                            <PlusOutlined style={{ fontSize: "14pt" }} />
                          )}
                          {/* <div style={{marginTop:8}}>Upload</div> */}
                        </Row>
                      )}
                    </Upload>
                  </div>
                </Row>
              </Col>
              <Col md={18}>
                <Row style={{ paddingTop: "20px" }} gutter={5}>
                  <Col md={8}>
                    <Form.Item name={"styleCategory"} label={"Style Category"}>
                      <StyleCategory />
                    </Form.Item>
                  </Col>
                  <Col md={8}>
                    <Form.Item name={"styleNumber"} label={"Style Number"}>
                      <Input placeholder="Style Number" />
                    </Form.Item>
                  </Col>
                  <Col md={8}>
                    <Form.Item name={"styleNumber"} label={"Style Number"}>
                      <Input placeholder="Style Number" />
                    </Form.Item>
                  </Col>
                </Row>
                <Row gutter={5}>
                  <Col md={8}>
                    <Form.Item name={"styleCategory"} label={"Style Category"}>
                      <StyleCategory />
                    </Form.Item>
                  </Col>
                  <Col md={8}>
                    <Form.Item name={"styleNumber"} label={"Style Number"}>
                      <Input placeholder="Style Number" />
                    </Form.Item>
                  </Col>
                  <Col md={8}>
                    <Form.Item name={"styleNumber"} label={"Style Number"}>
                      <Input placeholder="Style Number" />
                    </Form.Item>
                  </Col>
                </Row>
                <Row gutter={5}>
                  <Col md={8}>
                    <Form.Item name={"styleCategory"} label={"Style Category"}>
                      <StyleCategory />
                    </Form.Item>
                  </Col>
                  <Col md={8}>
                    <Form.Item name={"styleNumber"} label={"Style Number"}>
                      <Input placeholder="Style Number" />
                    </Form.Item>
                  </Col>
                  <Col md={8}>
                    <Form.Item name={"styleNumber"} label={"Style Number"}>
                      <Input placeholder="Style Number" />
                    </Form.Item>
                  </Col>
                </Row>
              </Col>
            </Row>
            {/* Summary Pages*/ }
            <Row gutter={10}>
              <Col md={8}>
                <CostingSummary accessories={this.state.trimsCosting?.total} cmt = {this.state.cmtCosting?.total} emplishment = {this.state.empCosting.total} transport ={10} onChange = {(value) =>
                {
                  this.setState({costingSummary:value})
                }}/>
              </Col>

             
              <Col md={16}>
               <ProfitSummary costingSummary={this.state.costingSummary} />
              </Col>
            </Row>
            <Row>
              <Col md={24}>
                <div
                  style={{ padding: "10px", width: "100%", height: "50px" }}
                ></div>
                <Table
                  pagination={false}
                  title={() => (
                    <>
                      <Typography.Text strong style={{ fontSize: "14pt" }}>
                        Fabric Details
                      </Typography.Text>
                      <Button
                        onClick={() => {
                          this.setState({ showEditor: true });
                        }}
                        type="primary"
                        style={{ float: "right" }}
                      >
                        Add Fabric
                      </Button>
                    </>
                  )}
                  columns={[
                    {
                      title: "S.No",
                      width: 50,
                      align: "center",
                      render(value, record, index) {
                        return <>{index + 1}</>;
                      },
                    },
                    {
                      title: "Combo",
                      width: 120,
                      align: "left",
                      dataIndex: "comboName",
                    },
                    {
                      title: "Component",
                      width: 120,
                      align: "left",
                      dataIndex: "componentName",
                    },
                    {
                      title: "Panel Name",
                      align: "left",
                      width: 120,
                      dataIndex: "panelName",
                      render(value, record, index) {
                        return <a>{value}</a>;
                      },
                    },
                    {
                      title: "Fabric",
                      align: "left",
                      dataIndex: "fabric",
                    },
                    {
                      title: "Cad",
                      width: 80,
                      align: "left",
                      dataIndex: "cad",
                    },
                    {
                      title: "Process Template",
                      align: "center",
                      width: 150,
                      dataIndex: "processTemplate",
                    },
                    {
                      title: "Fabric Cost (KGS)",
                      width: 100,
                      align: "center",
                      dataIndex: "totalProcessRate",
                    },
                    {
                      title: "Fabric Cost",
                      width: 100,
                      align: "center",
                      render: (_, record) => {
                        return (
                          <>{record.totalProcessRate * (record.cad / 1000)}</>
                        );
                      },
                    },
                    {
                      title: "",
                      width: 100,
                      align: "center",
                      render: (_, record) => {
                        return (
                          <>
                            <Button
                              type="text"
                              icon={<DeleteFilled></DeleteFilled>}
                            ></Button>
                          </>
                        );
                      },
                    },
                  ]}
                  dataSource={this.state.costingData.components}
                ></Table>
              </Col>
            </Row>
            <Row gutter={10}>
              <Col md={24}>
                <div
                  style={{ padding: "10px", width: "100%", height: "50px" }}
                ></div>
                <TrimsCosting data={this.state.trimsCosting?.trimsData} onChange={this.onChangeTrims} />
              </Col>
            </Row>
            <Row gutter={10}>
              <Col md={12}>
                <div
                  style={{ padding: "10px", width: "100%", height: "50px" }}
                ></div>
                <CMTCosting data = {this.state.cmtCosting?.cmtData} onChange ={this.onChangeCMT} ></CMTCosting>
              </Col>
              <Col md={12}>
                <div
                  style={{ padding: "10px", width: "100%", height: "50px" }}
                ></div>
                  <Emplishment onChange={this.onUpdateEmplishment} />
              </Col>
            </Row>
            <Row gutter={10} style={{ marginTop: "10px" }}>
              <Col md={12}>
                <div>
                  <PortionEditor />
                </div>
              </Col>
              <Col md={12}>
                <PortionEditor type="fabric" />
              </Col>
            </Row>
          </Form>
      </div>
    )
  }
}
