import {
  Button,
  Col,
  Divider,
  Input,
  message,
  PageHeader,
  Row,
  Space,
  Switch,
  Table,
  Tag,
  Typography,
} from "antd";
import React, { Component, useState } from "react";
import Document, { DocumentProps } from "./../../Common/Document";
import { Form, DatePicker, Select } from "antd";
import { withDocument } from "./../../Common/withDocument";
import BuyerComponent from "../../Common/BuyerComponent";
import { Card, Image } from "antd";
import Designnation from "../../Common/Designnation";

import DivisionComponent from "./../../Common/DivisionComponent";
import StyleDescriptionComponent from "./../../Common/StyleDescriptionComponent";
import ColorComponent from "./../../Common/ColorComponent";
import SizeTemplateComponent from "./../../Common/SizeTemplateComponent";
import FabricTypeComponent from "./../../Common/FabricTypeComponent";
import FabricCompositionComponent from "../../Common/FabricComposition";
import moment from "moment";
import logo from "../../../assets/img/d2d.png";
import { CloseCircleOutlined } from "@ant-design/icons";
import CadCalculation from "./../../Common/CadCalculation";
import { useForm } from "antd/lib/form/Form";
import '../../Common/Component.css'
class SampleConsting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isFabricCal: false,
    };
  }

  handleFieldChange = (data) => {
    console.log(data);
  };
  handleValueChange = (_, values) => {
    console.log(values);
  };
  onSave = (data) => {
    this.props.onSave("hi");
  };

  formRef = React.createRef();

  onFinish = (values) => {
    console.log(values);
  };

  render() {
    console.log(this.prop);
    return (
      <div>
        <Card>
          <Document
            AuthorizeTo={{
              PagePermission: "COSTING_ENQUIRY1",
              roles: ["admin1"],
              users: ["CHANDRU"],
            }}
            documentTitle="Consting Enquiry"
            status={"Unsaved"}
            toolBar={["New", "Save"]}
            form={this.form}
            onSave={this.onSave}
          >
            <Form
              labelCol={{ span: 9 }}
              labelAlign="left"
              name="myform"
              ref={this.formRef}
              layout="horizontal"
              onFinish={this.onFinish}
              onFieldsChange={this.handleFieldChange}
              onValuesChange={this.handleValueChange}
            >
              <Row>
                <Col span={8}>
                  <Form.Item name={"costno"} label="Costing No">
                    <Input readOnly disabled type={"text"} />
                  </Form.Item>
                  <Form.Item label="Date">
                    <DatePicker defaultValue={moment()} format="DD/MM/YYYY" />
                  </Form.Item>
                  <Form.Item label={"Buyer"}>
                    <BuyerComponent />
                  </Form.Item>
                  <Form.Item label="Division">
                    <DivisionComponent />
                  </Form.Item>

                  <Form.Item label="Style Description">
                    <StyleDescriptionComponent />
                  </Form.Item>
                  <Form.Item label="Color">
                    <ColorComponent />
                  </Form.Item>
                  <Form.Item label="Size Range">
                    <SizeTemplateComponent />
                  </Form.Item>
                  <Form.Item label="Fabric">
                    <FabricTypeComponent />
                  </Form.Item>
                  <Form.Item label="GSM" name={"gsm"}>
                    <Input type={"number"} />
                  </Form.Item>
                  <Form.Item label="Fabric Composition">
                    <FabricCompositionComponent />
                  </Form.Item>
                </Col>
                <Col style={{ paddingLeft: "20px" }} span={6}>
                  <Form.Item>
                    <Image
                      width={200}
                      sizes="large"
                      src="error"
                      fallback="data:image/png;base64,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"
                    ></Image>
                  </Form.Item>
                </Col>
              </Row>
              <Form.List name="components">
                {(fields, { add, remove }) => (
                  <Card
                    extra={[
                      <Button onClick={() => add()}>Add Component</Button>,
                      <Select
                        onSelect={(value) => {
                          add(value);
                          console.log(value);
                        }}
                        style={{ width: "400px" }}
                        mode="multiple"
                      ></Select>,
                    ]}
                  >
                    {fields.map(({ key, name, ...restField }) => (
                      <Card
                        key={key}
                        extra={[
                          <Button
                            onClick={() => remove(name)}
                            block
                            icon={<CloseCircleOutlined />}
                          ></Button>,
                        ]}
                      >
                        <Form.Item
                          {...restField}
                          name={[name, "componentName"]}
                        >
                          <Select placeholder="Select Component">
                            <Select.Option key={1}>Top</Select.Option>
                          </Select>

                          {console.log(restField)}
                        </Form.Item>

                     

                      
                        <Form.Item>
                          <FabToCadInput />
                        
                        </Form.Item>
                      </Card>
                    ))}
                  </Card>
                )}
              </Form.List>
              <Form.Item>
                <Button htmlType="submit">Save</Button>
              </Form.Item>
            </Form>
          </Document>
        </Card>
      </div>
    );
  }
}

export default withDocument(SampleConsting, {});

const FabToCadInput = ({ value = {}, onChange }) => {
  const [form] = Form.useForm();

  const [calc, setCalc] = useState(false);
  const [comp1, setComb1] = useState({
    name: "",
    cms: 0,
    allow: 0,
    includeAllow: 0,
  });
  const [comp2, setComb2] = useState({
    name: "",
    cms: 0,
    allow: 0,
    includeAllow: 0,
  });
  const [comp3, setComb3] = useState({
    name: "",
    cms: 0,
    allow: 0,
    includeAllow: 0,
  });
  const [comp4, setComb4] = useState({
    name: "",
    cms: 0,
    allow: 0,
    includeAllow: 0,
  });

  const handleFieldChange = (_, values) => {
    console.log("received field change", values);
    // const rowcopy = [...values.cad];
    // console.log(values);
    // let cadweight = 0;
    // values.cad.forEach((mcad, index) => {
    //   if (mcad && mcad.cms && mcad.allow) {
    //     mcad.incallow = parseFloat(mcad.cms) + parseFloat(mcad.allow);
    //     rowcopy.slice(index, 1, mcad);
    //     cadweight = cadweight + mcad.incallow;

    //     form.setFieldsValue({ cad: rowcopy });
    //   }
    //   form.setFieldsValue({ cadWt: cadweight });
    // });

      const len_incl_allow = parseFloat(values.len_cms) + parseFloat(values.len_allow);
      const slen_incl_allow= parseFloat(values.slen_cms) + parseFloat(values.slen_allow);
      const wid_incl_allow = parseFloat(values.wid_cms) + parseFloat(values.wid_allow)
      form.setFieldsValue({len_incl_allow:len_incl_allow,slen_incl_allow:slen_incl_allow,wid_incl_allow:wid_incl_allow})
      console.log("received field change", form.getFieldsValue(true));
  };


  

  return (
    <Form layout="horizontal" onValuesChange={handleFieldChange} form={form}
    
    >
      <Row>
    <Col xs={24} sm={24} md={24} lg={12}>
      <Row>
        <Col>
          <Form.Item noStyle
         
          >
            <Input disabled className="disabled-input"  value={"Cad Weight"} placeholder="Cad Weight" type={"text"} />
          </Form.Item>
        </Col>
        <Col span={4}>  
          <Form.Item noStyle
          name={"cadWt"}
          >
            <Input disabled = {!calc} placeholder="Cad" type={"number"} />
          </Form.Item>
        </Col>
        <Col span={4}>
       
        </Col>
        <Col span={4}>
        <Switch unCheckedChildren ={"Calculation"} checkedChildren={"Cad Weight"} onChange ={(e) =>
    {
setCalc(e)
    }} ></Switch>
        </Col>
      </Row>
      { calc ?
      <>
      <Row>
        <Col>
          <Form.Item noStyle
         
          >
            <Input className="disabled-input" disabled value={"LENGTH"} type={"text"} />
          </Form.Item>
        </Col>
        <Col span={4}>  
          <Form.Item noStyle
          name={"len_cms"}
          >
            <Input disabled = {!calc} placeholder="CMS" type={"number"} />
          </Form.Item>
        </Col>
        <Col span={4}>
          <Form.Item noStyle name={"len_allow"}>
            <Input disabled = {!calc} placeholder="Allowance" type={"number"}  />
          </Form.Item>
        </Col>
        <Col span={4}>
          <Form.Item noStyle name={"len_incl_allow"}>
            <Input className="disabled-input" disabled placeholder="Inc. Allw" type={"number"}  />
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Item noStyle >
            <Input className="disabled-input" disabled value="SLV. LENGTH" type={"text"} />
          </Form.Item>
        </Col>
        <Col span={4}>  
          <Form.Item noStyle name={"slen_cms"} >
            <Input disabled = {!calc} placeholder="CMS" type={"number"} />
          </Form.Item>
        </Col>
        <Col  span={4} >
          <Form.Item noStyle name={"slen_allow"}>
            <Input disabled = {!calc} placeholder="Allowance" type={"number"}  />
          </Form.Item>
        </Col>
        <Col  span={4}>
          <Form.Item noStyle name={"slen_incl_allow"}>
            <Input className="disabled-input" disabled placeholder="Inc. Allw" type={"number"} readOnly />
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Item noStyle >
            <Input className="disabled-input" disabled value="WIDTH" type={"text"} />
          </Form.Item>
        </Col>
        <Col  span={4}>  
          <Form.Item noStyle name={"wid_cms"}>
            <Input disabled = {!calc} placeholder="CMS" type={"number"} />
          </Form.Item>
        </Col>
        <Col  span={4}>
          <Form.Item noStyle name={"wid_allow"}>
            <Input disabled = {!calc} placeholder="Allow" type={"number"}  />
          </Form.Item>
        </Col>
        <Col  span={4}>
          <Form.Item noStyle name={'wid_incl_allow'} >
            <Input className="disabled-input" disabled  placeholder="Inc. Allw" type={"number"}  />
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Item noStyle>
            <Input className="disabled-input" disabled value="GSM" type={"text"} />
          </Form.Item>
        </Col>
        <Col  span={4}>  
          <Form.Item noStyle name={"gsm"} >
            <Input disabled = {!calc} placeholder="GSM" type={"number"} />
          </Form.Item>
        </Col>
        <Col  span={4}>
          <Form.Item noStyle>
            <Input className="disabled-input"  value="LOSS %" type={"text"} disabled />
          </Form.Item>
        </Col>
        <Col  span={4}>
          <Form.Item noStyle name={"loss"} >
            <Input  disabled = {!calc} placeholder="loss" type={"number"}  />
          </Form.Item>
        </Col>
      </Row></>
      :''}</Col>
<Col span={12}>
<Form.Item>
  <Input/>
</Form.Item>
</Col>
    
</Row>
    

      {/* <Form.List name={"cad"}>
        {(fields,{add,remove}) =>
        
       (
         <> 
         <Row>
        <Col>
        <Form.Item
      
        >
          <Input />
        </Form.Item>
        </Col>
        <Col>
        <Form.Item  name={'cadWt'}>
          <Input name="cadWt" />
        </Form.Item>
        </Col>
        <Col> <Button onClick={()=>add()}>Add</Button>
        </Col>
      </Row>
        
         <Row>
           <Col span={3}>Dimension</Col>
           <Col span={3}>CMS</Col>
           <Col span={3}>Allowance</Col>
           <Col span={3}>Incl Allow</Col>
         </Row>
          {fields.map(({key,name,...restField}) =>
          (
            
          <Row>
            <Col>
            <Form.Item
            {...restField}
            name={[name,'cms']}
            noStyle
            >
              <Input name="cms" type={'text'}></Input>
            </Form.Item></Col>
            <Col >
            <Form.Item
            noStyle
            {...restField}
            name={[name,'allow']}
            >
              <Input name="allow" type={'text'}></Input>
            </Form.Item></Col>
           <Col> <Form.Item
            noStyle
            {...restField}
            name={[name,'incallow']}
            
            >
              <Input disabled style={{background:'green',color:'white'}} color="white" name="incallow" type={'text'}></Input>
            </Form.Item> </Col>
            </Row>
           
        
          ))
          }
         </>
       )}
      </Form.List> */}
    </Form>
  );
};
