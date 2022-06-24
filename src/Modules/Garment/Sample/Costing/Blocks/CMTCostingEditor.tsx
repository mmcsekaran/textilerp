import { PlusCircleOutlined, MinusCircleOutlined } from '@ant-design/icons';
import { Button, Col, Form, FormInstance, Input, Modal, Row, Select, Typography } from 'antd';
import React, { useState } from 'react'
import TrimsPlan from '../../TrimsPlan';
import { ModalEditorProps } from '../interface/ModalEditorProps';




 export interface CMTCostingFormData
 {
    id:number
    key:React.Key
    comboName:string|number,
    componentName:string|number,
    cmtName:string|number,
    cmtRate:number,
 }

 const DEFAULT_VALUE  :CMTCostingFormData =
 {
    id:-1,
    key:'',
    comboName:'',
    componentName:'',
    cmtName:'',
    cmtRate:0

 }

 export const showCMTCostingEditor = ( props:ModalEditorProps<CMTCostingFormData>= {visible:true,onCancel:()=>{},onSave:()=>{},value:DEFAULT_VALUE})  =>
 {

    const {
      visible = true,
      value = DEFAULT_VALUE
    } = props
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
           const  frmData:CMTCostingFormData = props.value ? props.value : DEFAULT_VALUE ;
            frmData.comboName = value.comboName ;
            frmData.componentName = value.componentName;
            frmData.cmtName = value.cmtName ;
            frmData.cmtRate = value.cmtRate;
           
            
            frmData.key = value.comboName + value.componentName +value.cmtName 
            form.resetFields();
            props.onSave(props.value ? props.value : DEFAULT_VALUE,frmData);
            form.submit()
          }
        )
        
      },
      content:<CMTCostingEditor value={props.value} onChange={getForm}></CMTCostingEditor>
    }
   )
 }

 export const CMTCostingEditor: React.FC<{value?:CMTCostingFormData,onChange?:(form:FormInstance<any>) => void}> = (props) => {

  const [myform] = Form.useForm();

 if(props.onChange)
      props.onChange(myform);
  return (<Form layout="vertical" 

  form={myform}>
   
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
          <Form.Item name={"cmtName"}>
    <Input></Input>
    </Form.Item  >
          </Col>
         <Col md={8}>
           <Form.Item name={"cmtRate"} >
    <Input></Input>
    </Form.Item>
         </Col> 
        
  

      </Row>
          
           
      

  </Form>  );
};


