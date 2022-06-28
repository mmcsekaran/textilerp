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

export type SampleCostingMasterProps =
{
  value?:SampleCostingMasterType,
  onChange?:(value:SampleCostingMasterType) => void
}
export type SampleCostingMasterType = 
{
  imageSrc?:string,

}

export type SampleCostingMasterState =
{
  data:SampleCostingMasterType,
  imageLoading:boolean
}

export default class SampleCostingMaster extends Component<SampleCostingMasterProps,SampleCostingMasterState> {


  constructor(props:SampleCostingMasterProps)
  {
    super(props);

    this.state = {
      data : 
      {
        imageSrc:undefined
      },
      imageLoading:false
    }

  }

  onValueChanges = (_:any,value:SampleCostingMasterType) =>
  {
    if(this.props.onChange)
    {
      this.props.onChange(value);
    }
  }

  render() {
    return (
      <div>  
        <Form name='cost-master'
        onValuesChange={this.onValueChanges}
        >
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
                          const data = this.state.data;
                          data.imageSrc = url;
                          this.setState({...this.state,
                            imageLoading: false,
                            data: data,
                          });
                        });
                      }}
                    >
                      {this.state.data.imageSrc ? (
                        <Image
                          width={200}
                          height={200}
                          preview={false}
                          src={this.state.data.imageSrc}
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
                    <Form.Item name={"styleNumber1"} label={"Style Number"}>
                      <Input placeholder="Style Number" />
                    </Form.Item>
                  </Col>
                </Row>
                <Row gutter={5}>
                  <Col md={8}>
                    <Form.Item name={"styleCategory1"} label={"Style Category"}>
                      <StyleCategory />
                    </Form.Item>
                  </Col>
                  <Col md={8}>
                    <Form.Item name={"styleNumber2"} label={"Style Number"}>
                      <Input placeholder="Style Number" />
                    </Form.Item>
                  </Col>
                  <Col md={8}>
                    <Form.Item name={"styleNumber3"} label={"Style Number"}>
                      <Input placeholder="Style Number" />
                    </Form.Item>
                  </Col>
                </Row>
                <Row gutter={5}>
                  <Col md={8}>
                    <Form.Item name={"styleCategory4"} label={"Style Category"}>
                      <StyleCategory />
                    </Form.Item>
                  </Col>
                  <Col md={8}>
                    <Form.Item name={"styleNumber5"} label={"Style Number"}>
                      <Input placeholder="Style Number" />
                    </Form.Item>
                  </Col>
                  <Col md={8}>
                    <Form.Item name={"styleNumber6"} label={"Style Number"}>
                      <Input placeholder="Style Number" />
                    </Form.Item>
                  </Col>
                </Row>
              </Col>
            </Row>
        </Form>
         
           
      </div>
    )
  }
}
