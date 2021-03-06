import { PlusCircleOutlined, MinusCircleOutlined } from "@ant-design/icons";
import { Button, Col, Form, FormInstance, Input, Modal, Row, Select, Typography } from "antd";
import Search from "antd/lib/transfer/search";
import React, { RefObject, useImperativeHandle, useState } from "react";
import { SearchSelect } from "../../../../Common/SearchSelect";
import { ModalEditorProps } from "../interface/ModalEditorProps";
import { FabricComponent, FabricProcess } from "./FabricCosting";
import FabricInput from './../../../../Master/Fabric/FabricInput';

export interface SampleCostingFormData {
    key:string
    comboName?: string;
    componentName?: string;
    panelName?: string;
    color?: string;
    cad: number;
    fabric?: string;
    process?: Array<FabricProcess>;
    totalProcessLoss: number;
    totalProcessRate: number;
    processTemplate?: string;
    cadCost:number
  }
  
  interface SampleCostingEditorProps {
    value?: FabricComponent;
    onChange?: (value?: FabricComponent) => void;
    ref?:RefObject<EditorChildRef<FabricComponent>>;
  }
const SampleCostingEditorModal = React.forwardRef((props:SampleCostingEditorProps,ref)  => {
    const [form] = Form.useForm();
    const [processLoss, setProcessLoss] = useState(0);
    const [processRate, setProcessRate] = useState(0);
    const [processTemplate, setProcessTemplate] = useState("");
    const valueChange = (_: any, values: any) => {
      const cad = parseFloat(values.cad) | 0;
      console.log(values);
      if (values.process) {
        const process = [...values.process];
        let totalCost = 0;
        let totalLoss = 0;
        let proTemplate = "";
        process.forEach((pro, index) => {
          let loss = 0;
          let price = 0;
  
          proTemplate =
            proTemplate +
            (pro?.processName ? pro.processName : "") +
            (index < process.length - 1 ? "+" : "");
  
          if (pro?.processLoss) loss = parseFloat(pro.processLoss);
          if (pro?.processRate) price = parseFloat(pro.processRate);
          totalCost += price; // (totalCost+price)*loss/((100/100)-loss)
          totalLoss += loss; // (totalCost+price)*loss/((100/100)-loss)
          // pro.cost = totalCost
          // process.splice(index,1,pro);
          //form.setFieldsValue({processTemplate:proTemplate})
        });
  
        setProcessLoss(totalLoss);
        setProcessRate(totalCost);
        setProcessTemplate(proTemplate);
      }


    };

    useImperativeHandle(ref,() =>(
      {
        finish:(callBack: (value: FabricComponent) => void) => {
          let formData: FabricComponent = {
                       totalProcessLoss:0,
                       componentCost:0,
                       totalProcessRate: 0,
                       cad: 0,
                       key:''
                     };
         form.validateFields().then((res) => {
                    
           
                     formData.componentName = res.componentName;
                     formData.panelName = res.panelName;
                     formData.cad = parseFloat(res.cad);
                     formData.fabric = res.fabric;
                     formData.totalProcessLoss = processLoss;
                     formData.totalProcessRate = processRate;
                     formData.processList = [...res.processList]
                     formData.processList.forEach(e => 
                       {
                         formData.processTemplate += e.processName ? e.processName.toString().substring(0,2):''
                         formData.totalProcessRate += e.processRate ;
                         formData.totalProcessLoss += e.processLoss ;
                       })
                     
                     formData.componentCost  = formData.totalProcessRate * (formData.cad/1000)
                 
                     form.resetFields();
                     callBack(formData) ;
     })
     
    
 }
      }),[]);
         



    return (
    //   <Modal
    //     visible={visible}
    //     title={"Create Fabric Details"}
    //     okText="Save"
    //     cancelText="Close"
    //     centered
    //     onCancel={() => {
    //       if (onCancel) {
    //         onCancel();
    //         form.resetFields();
    //       }
    //     }}
    //     onOk={() => {
    //       form.validateFields().then((res) => {
    //         let formData: SampleCostingFormData = {
    //           totalProcessLoss: 0,
    //           totalProcessRate: 0,
    //           cad: 0,
    //           key:''
    //         };
  
    //         formData.componentName = res.component;
    //         formData.panelName = res.panelName;
    //         formData.cad = res.cad;
    //         formData.fabric = res.fabric;
    //         formData.totalProcessLoss = processLoss;
    //         formData.totalProcessRate = processRate;
    //         formData.process = [
    //           res.process.map((v: any) => ({
    //             processName: v.processName,
    //             loss: v.processLoss,
    //             rate: v.processRate,
    //           })),
    //         ];
    //         formData.processTemplate = processTemplate;
  
    //         onSave(formData);
    //         form.resetFields();
    //       });
    //     }}
    //   >
        <Form  layout="vertical" onValuesChange={valueChange} form={form}>
          <Row gutter={10}>
            <Col md={8}>
              <Form.Item  label="Component" name={"componentName"}>
                <Select>
                  <Select.Option value={"top"}>Top</Select.Option>
                  <Select.Option value={"pant"}>Pant</Select.Option>
                  <Select.Option value={"shorts"}>Shorts</Select.Option>
                  <Select.Option value={"headband"}>Head Band</Select.Option>
                  <Select.Option value={"eyepatch"}>Eye Patch</Select.Option>
                </Select>
              </Form.Item>
            </Col>
            <Col md={8}>
              <Form.Item label="Panel Name" name={"panelName"}>
                <Select>
                  <Select.Option value={"top"}>Top</Select.Option>
                  <Select.Option value={"pant"}>Pant</Select.Option>
                  <Select.Option value={"shorts"}>Shorts</Select.Option>
                  <Select.Option value={"headband"}>Head Band</Select.Option>
                  <Select.Option value={"eyepatch"}>Eye Patch</Select.Option>
                </Select>
              </Form.Item>
            </Col>
            <Col md={8}>
              <Form.Item label="Cad (GRM)" name={"cad"}>
                <Input />
              </Form.Item>
            </Col>
          </Row>
  
          <Row>
            <Col md={24}>
              <Form.Item label="Fabric" labelCol={{ span: 3 }} name={"fabric"}>
               <FabricInput onChange={() =>{}} value = ''></FabricInput>
               </Form.Item>            </Col>
          </Row>
  
          <Form.List name={"processList"}>
            {(fields, { add, remove }) => {
              return (
                <>
                  <Row>
                    <Col md={12}>
                      <Typography.Text strong>{processTemplate}</Typography.Text>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={12}>
                      <Typography.Text strong>Process</Typography.Text>
                    </Col>
                    <Col md={4}>
                      <Typography.Text strong>Loss (%)</Typography.Text>
                    </Col>
                    <Col md={4}>
                      <Typography.Text strong>Price/Kgs</Typography.Text>
                    </Col>
                    <Col md={4}>
                      {fields.length === 0 ? (
                        <Button type="link" onClick={() => add()}>
                          Add
                        </Button>
                      ) : (
                        ""
                      )}
                    </Col>
                  </Row>
  
                  {fields.map((field) => (
                    <Row>
                      <Col md={12}>
                        <Form.Item noStyle name={[field.name, "processName"]}>
                          <Select style={{ width: "100%" }}>
                            <Select.Option value={"yrn"}>Yarn</Select.Option>
                            <Select.Option value="y/d">Yarn Dyeing</Select.Option>
                            <Select.Option value="knt">Knitting</Select.Option>
                            <Select.Option value="h/s">HeatSetting</Select.Option>
                            <Select.Option value="dye">Dyeing</Select.Option>
                            <Select.Option value="prnt">Print</Select.Option>
                            <Select.Option value="o/w">Compacting</Select.Option>
                          </Select>
                        </Form.Item>
                      </Col>
                      <Col md={4}>
                        <Form.Item noStyle name={[field.name, "processLoss"]}>
                          <Input />
                        </Form.Item>
                      </Col>
                      <Col md={4}>
                        <Form.Item noStyle name={[field.name, "processRate"]}>
                          <Input />
                        </Form.Item>
                      </Col>
                      <Col md={2}>
                        <Button
                          type="text"
                          onClick={() => add({}, field.name + 1)}
                          icon={<PlusCircleOutlined />}
                        ></Button>
                      </Col>
                      <Col md={2}>
                        {fields.length > 1 ? (
                          <Button
                            type="text"
                            onClick={() => remove(field.name)}
                            icon={<MinusCircleOutlined />}
                          ></Button>
                        ) : (
                          ""
                        )}
                      </Col>
                    </Row>
                  ))}
  
                  {fields.length > 0 ? (
                    <Row>
                      <Col md={12}>
                        <Typography.Text strong>Total</Typography.Text>
                      </Col>
                      <Col
                        style={{ textAlign: "right", paddingRight: "5px" }}
                        md={3}
                      >
                        <Typography.Text strong>{processLoss}</Typography.Text>
                      </Col>
                      <Col
                        style={{ textAlign: "right", paddingRight: "5px" }}
                        md={3}
                      >
                        <Typography.Text strong>{processRate}</Typography.Text>
                      </Col>
                    </Row>
                  ) : (
                    ""
                  )}
                </>
              );
            }}
          </Form.List>
        </Form>
    //   </Modal>
    );
  }
  )


  type EditorChildRef<T> =
  {
    finish:(onFinish:(value:T) => void) => void
  } | undefined

  export const showFabricEditor = (props:ModalEditorProps<FabricComponent> )  =>
 {

  var childRef = React.createRef<EditorChildRef<FabricComponent>>();
  
    
   Modal.confirm(
    {
      visible:props.visible,
      centered:true,
      closable:true,
      icon:null,
      title:'Emplishment',
      width:"600px",
      onOk:() =>
      {
        console.log(childRef.current)
        if(childRef) { childRef.current?.finish(
          value =>
          {
            const data = value ;
            props.onSave(props.value,data) 
          }
         )
        }
      },
      content:<SampleCostingEditorModal ref = {childRef} 
      
     ></SampleCostingEditorModal>
    }
   )
 }

  async function fetchFabric (username:string) 
 {
   await setTimeout(() => {
    return  [
      {
        label:"name",
        value:1
      },
      {
        label:"name1",
        value:12
      },
      {
        label:"n2ame",
        value:13
      },
      {
        label:"n3ame",
        value:14
      },
      {
        label:"n4ame",
        value:15
      },
    ]
  },500) ;
    return []
 }