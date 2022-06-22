import { PlusCircleOutlined, MinusCircleOutlined } from '@ant-design/icons';
import { Button, Col, Form, Input, Modal, Row, Select, Typography } from 'antd';
import React, { useState } from 'react'
import TrimsPlan from '../../TrimsPlan';
import { ModalEditorProps } from '../interface/ModalEditorProps';




 export interface EmplishmentCostingFormData
 {
    key:React.Key
    comboName:string|number,
    componentName:string|number,
    emplishment:string|number,
    empRate:number,
   
    
 }

export const CMTCostingEditor: React.FC<ModalEditorProps<EmplishmentCostingFormData>> = ({
    visible,
    onSave,
    onCancel,
  }) => {
    const [form] = Form.useForm();
    
    const valueChange = (_: any, values: any) => {
    
      console.log(values);
        
      }

    return (
      <Modal
        visible={visible}
        title={"CMT Costing Editor"}
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
            let formData: EmplishmentCostingFormData = {
              comboName:'',
              componentName:'',
              emplishment:'',
              empRate:0,
              key:''
            
              

            };
            
            formData.comboName = res.comboName ;
            formData.componentName = res.componentName;
            formData.emplishment = res.empName ;
            formData.empRate = res.empRate;
           
            formData.key = res.comboName+res.component+res.empName
    
            onSave(formData);
            form.resetFields();
          });
        }}
      >
        <Form layout="vertical" onValuesChange={valueChange}

        form={form}>
         
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
         
            
             <Row gutter={10} justify='space-between'>
                <Col md={16}>
                <Form.Item name={"empName"}>
          <Input></Input>
          </Form.Item  >
                </Col>
               <Col md={8}>
                 <Form.Item name={"empRate"} >
          <Input></Input>
          </Form.Item>
               </Col> 
              
        

            </Row>
                
                 
            
     
        </Form>
      </Modal>
    );
  };