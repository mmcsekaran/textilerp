import { PlusCircleOutlined, MinusCircleOutlined } from '@ant-design/icons';
import { Button, Col, Form, Input, Modal, Row, Select, Typography } from 'antd';
import React, { useContext, useState } from 'react'
import TrimsPlan from '../../TrimsPlan';
import { ModalEditorProps } from '../interface/ModalEditorProps';
import { FormInstance, useForm } from 'antd/lib/form/Form';

import { FormContext } from 'antd/lib/form/context';
import { content } from '../../../../../../tailwind.config';
import ReactDOM from 'react-dom';
import { modalGlobalConfig } from 'antd/lib/modal/confirm';






 export interface EmplishmentCostingFormData
 {
    id:number
    key:string
    comboName:string|number,
    componentName:string|number,
    emplishment:string|number,
    portion:number|string
    empRate:number,

    
 }

 export const showEditor = (props:ModalEditorProps<EmplishmentCostingFormData> )  =>
 {
  var form:FormInstance<any>
   const getForm = (frm:FormInstance<any>)=>
   {
      form = frm ;
   } 
    
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
        form.validateFields().then(
          value =>
          {
           const  frmData:EmplishmentCostingFormData = props.value? props.value : defaultValue ;
            frmData.comboName = value.comboName ;
            frmData.componentName = value.componentName;
            frmData.emplishment = value.emplishment ;
            frmData.empRate = value.empRate;
            frmData.portion = value.portion
            
            frmData.key = value.comboName + value.componentName +value.portion + value.emplishment
            form.resetFields();
            props.onSave(props.value ? props.value : defaultValue,frmData);
            form.submit()
          }
        )
        
      },
      content:<EmplishmentCostingEditorv1 value={props.value} onChange={getForm}></EmplishmentCostingEditorv1>
    }
   )
 }

 export const EmplishmentCostingEditorv1: React.FC<{value?:EmplishmentCostingFormData,onChange?:(form:FormInstance<any>) => void}> = (props) => {

  const [myform] = Form.useForm();

  const onValuesChange = (_:any,values:any) =>
  {
    
  }
 if(props.onChange)
      props.onChange(myform);
  return (
      <Form  layout="vertical" onValuesChange={onValuesChange}
      initialValues = {props.value}

      form={myform}>
       
          <Row gutter={10} justify='space-between'>
              <Col md={8}>
              <Form.Item name={"comboName"}  >
         <Select disabled = {props.value && props.value.id > -1 ? true : false }>
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
  
  );
};

 const Editor:React.FC = () =>
 {
  return <>Hello</>
 }

 const defaultValue:EmplishmentCostingFormData =
 {
  id:-1,
  key:'',
  comboName:'',
  componentName:'',
  portion:'',
  emplishment:'',
  empRate:0
 }

export const EmplishmentCostingEditor: React.FC<ModalEditorProps<EmplishmentCostingFormData>> = ({
    visible,
    onSave,
    onCancel,
    value = defaultValue
   
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
        destroyOnClose
        onOk={() => {
         
          form.validateFields().then((res) => {
             form.submit()
            const formData: EmplishmentCostingFormData = defaultValue;
            
            formData.comboName = res.comboName ;
            formData.componentName = res.componentName;
            formData.emplishment = res.emplishment ;
            formData.empRate = res.empRate;
            formData.portion = res.portion
           
            formData.key = res.comboName+res.component+res.emplishment
            form.resetFields();
            onSave(value,formData);
            
          });
        }}
      >
        <Form  layout="vertical" onValuesChange={valueChange}
        //initialValues = {value}

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