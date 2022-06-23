import { PlusCircleOutlined, MinusCircleOutlined } from '@ant-design/icons';
import { Button, Col, Form, Input, Modal, Row, Select, Typography } from 'antd';
import React, { useState } from 'react'
import TrimsPlan from '../../TrimsPlan';
import { ModalEditorProps } from '../interface/ModalEditorProps';
import { useForm } from 'antd/lib/form/Form';
import { render } from '@testing-library/react';






 export interface EmplishmentCostingFormData
 {
    key:React.Key
    comboName:string|number,
    componentName:string|number,
    emplishment:string|number,
    portion:number|string
    empRate:number,

    
 }

 

export const EmplishmentCostingEditor: React.FC<ModalEditorProps<EmplishmentCostingFormData>> = ({
    visible,
    onSave,
    onCancel,
    value
  }) => {
    const [form] = Form.useForm();
    
    const valueChange = (_: any, values: any) => {
    
      console.log(values);
        
      }

    return (
      <Modal
        visible={visible}
        title={"Emplishment Costing Editor"}
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
              portion:'',
              emplishment:'',
              empRate:0,
              key:''
            
              

            };
            
            formData.comboName = res.comboName ;
            formData.componentName = res.componentName;
            formData.emplishment = res.emplishment ;
            formData.empRate = res.empRate;
            formData.portion = res.portion
           
            formData.key = res.comboName+res.component+res.emplishment
    
            onSave(formData);
            form.resetFields();
          });
        }}
      >
        <Form layout="vertical" onValuesChange={valueChange}
          
        form={form}>
         
            <Row gutter={10} justify='space-between'>
                <Col md={8}>
                <Form.Item name={"comboName"} initialValue = {value?.comboName} >
           <Select>
                        <Select.Option key={"black"}>Black</Select.Option>
                        <Select.Option key={"blue"}>Blue</Select.Option>
                        <Select.Option key={"red"}>Red</Select.Option>
           </Select>
          </Form.Item
          
           >
                </Col>
               <Col md={8}>
                 <Form.Item name={"componentName"}>
           <Select>
                        <Select.Option key={"top"}>Top</Select.Option>
                        <Select.Option key={"pant"}>Pant</Select.Option>
                        <Select.Option key={"short"}>Shorts</Select.Option>
           </Select>
          </Form.Item>
               </Col> 
               <Col md={8}>
                 <Form.Item name={"portion"}>
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
                <Form.Item name={"emplishment"}>
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