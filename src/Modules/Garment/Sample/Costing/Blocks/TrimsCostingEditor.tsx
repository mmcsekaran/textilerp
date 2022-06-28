import { PlusCircleOutlined, MinusCircleOutlined } from '@ant-design/icons';
import { Button, Col, Form, FormInstance, Input, Modal, Row, Select, Typography } from 'antd';
import React, { useState } from 'react'
import TrimsPlan from '../../TrimsPlan';
import TrimsCosting from './TrimsCosting';
import { ModalEditorProps } from './../interface/ModalEditorProps';

function round(value:number) 
{
  return Math.round((value+Number.EPSILON)*100)/100
}


 export interface TrimsCostingFormData
 {
    id:number
    key?:React.Key
    comboName?:string|number,
    componentName?:string|number,
    trimsName?:string|number,
    trimsUom?:string|number,
    trimsCount:number,
    trimsPrice:number
    trimCost:number
    
 }

 class TrimsCostingEditor
 {

  constructor()
  {
  this.#congigData = {visible:true,onCancel:()=>{},onSave:()=>{},value: 
  {
    id : -1,
    trimsCount: 0,
    trimsPrice:0,
    trimCost:0
  }
  }
  }

  #congigData:ModalEditorProps<TrimsCostingFormData>

  open = ():void =>
  {
    this.showCMTCostingEditor()
  }
  
setConfig = (props:ModalEditorProps<TrimsCostingFormData>) =>
{
  this.#congigData = props ;
}

 private showCMTCostingEditor = ( )  =>
 {

    var form:FormInstance<any>
   const getForm = (frm:FormInstance<any>)=>
   {
      form = frm ;
   } 
    
   Modal.confirm(
    {
      visible:this.#congigData.visible,
      centered:true,
      closable:true,
      icon:null,
      title:'Trims Costing',
      width:"600px",
      onOk:() =>
      {
        form.validateFields().then(
          value =>
          {
           const  frmData:TrimsCostingFormData = {...this.#congigData.value,...value}  ;
           
            frmData.key = value.comboName + value.componentName +value.cmtName 
            frmData.trimCost = round(frmData.trimsPrice/frmData.trimsCount)
            form.resetFields();
            this.#congigData.onSave(!this.#congigData.value ? {id:-1,trimsCount:0,trimsPrice:0,trimCost:0}:this.#congigData.value,frmData);
            form.submit()
          }
        )
        
      },
      content:<TrimsCostingEditorComponent value={this.#congigData.value} onChange={getForm}></TrimsCostingEditorComponent>
    }
   )
 }

 }

export const TrimsCostingEditorComponent: React.FC<{value?:TrimsCostingFormData,onChange:(form:FormInstance<any>) => void}> = (props) => {
    const [form] = Form.useForm();
   
    if(props.onChange) props.onChange(form) ;

    return (
        <Form layout="vertical"  form={form} >
         
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
    );
  };


  export default   new TrimsCostingEditor() ;