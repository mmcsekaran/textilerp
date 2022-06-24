import { PlusCircleOutlined, MinusCircleOutlined } from '@ant-design/icons';
import { Button, Col, Form, Input, Modal, Row, Select, Typography } from 'antd';
import React, { useState } from 'react'
import TrimsPlan from '../../TrimsPlan';


interface ModalEditorProps 
{
    visible :boolean,
    onSave : (value:TrimsCostingFormData) => void;
    onCancel : () => void
}

 export interface TrimsCostingFormData
 {
    key?:React.Key
    comboName:string|number,
    componentName:string|number,
    trimsName:string|number,
    trim_uom:string|number,
    trimsCount:number,
    trimsPrice:number
    
 }

export const TrimsEditor: React.FC<ModalEditorProps> = ({
    visible,
    onSave,
    onCancel,
  }) => {
    const [form] = Form.useForm();
    const [processLoss, setProcessLoss] = useState(0);
    const [processRate, setProcessRate] = useState(0);
    const [processTemplate, setProcessTemplate] = useState("");
    const valueChange = (_: any, values: any) => {
    
      console.log(values);
        
      }

    return (
      <Modal
        visible={visible}
        title={"Trims Costing Editor"}
        okText="Save"
        cancelText="Close"
        centered
        onCancel={() => {
          if (onCancel) {
            onCancel();
            form.resetFields();
          }
        }}
        onOk={() => {
          form.validateFields().then((res) => {
            let formData: TrimsCostingFormData = {
              comboName:'',
              componentName:'',
              trimsName:'',
              trim_uom:'',
              trimsCount:0,
              trimsPrice:0,
              

            };
            
            formData.comboName = res.comboName ;
            formData.componentName = res.componentName;
            formData.trim_uom = res.trimsUom ;
            formData.trimsCount = res.trimsCount;
            formData.trimsPrice = res.trimsPrice
            formData.trimsName = res.trimsName
            formData.key = res.comboName+res.component+res.trimsName
    
            onSave(formData);
            form.resetFields();
          });
        }}
      >
        <Form layout="vertical" onValuesChange={valueChange} form={form}>
         
            <Row gutter={10} justify='space-between'>
                <Col md={12}>
                <Form.Item name={"comboName"} >
           <Select>
                        <Select.Option key={"black"}>Black</Select.Option>
                        <Select.Option key={"blue"}>Blue</Select.Option>
                        <Select.Option key={"red"}>Red</Select.Option>
           </Select>
          </Form.Item >
                </Col>
               <Col md={12}>
                 <Form.Item name={"componentName"}>
           <Select>
                        <Select.Option key={"top"}>Top</Select.Option>
                        <Select.Option key={"pant"}>Pant</Select.Option>
                        <Select.Option key={"short"}>Shorts</Select.Option>
           </Select>
          </Form.Item>
               </Col> 
        

            </Row>
         
             <Row>
                <Col md={24}>
                <Form.Item name={"trimsName"}>
                    <Select>

                        <Select.Option key={"sewtrd"}>Sewing Thread</Select.Option>
                        <Select.Option key={"foam"}>Foam</Select.Option>
                        <Select.Option key={"tag"}>Tag</Select.Option>
                    </Select>
                </Form.Item>
                </Col>
             </Row>
             <Row gutter={10} justify='space-between'>
                <Col md={8}>
                <Form.Item name={"trimsUom"}>
          <Input></Input>
          </Form.Item  >
                </Col>
               <Col md={8}>
                 <Form.Item name={"trimsPrice"} >
          <Input></Input>
          </Form.Item>
               </Col> 
               <Col md={8}>
                 <Form.Item  name={"trimsCount"}>
          <Input></Input>
          </Form.Item>
               </Col> 
        

            </Row>
                
                 
            
     
        </Form>
      </Modal>
    );
  };