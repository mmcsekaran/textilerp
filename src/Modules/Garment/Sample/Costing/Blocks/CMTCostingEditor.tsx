import { PlusCircleOutlined, MinusCircleOutlined } from '@ant-design/icons';
import { Button, Col, Form, FormInstance, Input, Modal, Row, Select, Typography } from 'antd';
import React, { Component, ReactElement, useState } from 'react'
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

 export const ModalEditor:{open:(props:EditorProps<CMTCostingFormData>)=> void} =
 {
  open :() => 
  {
    
  },

 }

 ModalEditor.open = (props:EditorProps<CMTCostingFormData>)  =>
{
  var form:FormInstance<any> 
  var visible:boolean  = true;
  const setForm:(value:FormInstance<any>) => void =(value:FormInstance<any>) =>
  {
    form = value
  }
 const onSubmit = (value:any) =>
  {
    console.log(value)
    modal.destroy();
  }
 const modal = Modal.confirm(
        {
          centered:true,
          closable:true,
          icon:null,
          title:'CMT Details',
          width:"600px",
          onOk:() =>
          {
            if(form)
            {
            form.validateFields().then
            (
              value => 
              {
                if(props.onOk)  props.onOk(value) 
                console.log(value)
              }
            )
           
            
          }
        },
          content:React.cloneElement(props.content,{getForm:setForm,onSubmit:onSubmit}),
          okButtonProps:{htmlType:'submit'}
        }
        ,
        
       )
     }



//  showCMTCostingEditor.open = ( props:ModalEditorProps<CMTCostingFormData>= {visible:true,onCancel:()=>{},onSave:()=>{},value:DEFAULT_VALUE})  =>
//  {


//     const {
//       visible = true,
//       value = DEFAULT_VALUE
//     } = props
//     var form:FormInstance<any>
//    const getForm = (frm:FormInstance<any>)=>
//    {
//       form = frm ;
//    } 
    
//    Modal.confirm(
//     {
//       visible:props.visible,
//       centered:true,
//       closable:true,
//       icon:null,
//       title:'CMT Details',
//       width:"600px",
//       onOk:() =>
//       {
//         form.validateFields().then(
//           value =>
//           {
//            const  frmData:CMTCostingFormData = props.value ? props.value : DEFAULT_VALUE ;
//             frmData.comboName = value.comboName ;
//             frmData.componentName = value.componentName;
//             frmData.cmtName = value.cmtName ;
//             frmData.cmtRate = value.cmtRate;
           
            
//             frmData.key = value.comboName + value.componentName +value.cmtName 
//             form.resetFields();
//             props.onSave(props.value ? props.value : DEFAULT_VALUE,frmData);
//             form.submit()
//           }
//         )
        
//       },
//       content:<CMTCostingEditorComponent value={props.value} onChange={getForm}></CMTCostingEditorComponent>
//     }
//    )
//  }

 export const CMTCostingEditorComponent: React.FC<{value?:CMTCostingFormData,getForm?:(form:FormInstance<any>) => void,onSubmit?:(value:any) => void}> = (props) => {

  const [myform] = Form.useForm();

 if(props.getForm)
      props.getForm(myform);
  return (<Form layout="vertical" 
    onFinish={(value) =>
    {
      console.log(value)
      if(props.onSubmit) props.onSubmit(value)
    }}
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
          
           
      <Button style={{float:'right'}} htmlType='submit' >Submit</Button>

  </Form>  );
};


interface EditorProps<T>
{
  defaultValue?:T
  onOk?:(value:T) => void,
  onCancel?: (value:T) => void,
  content:ReactElement
}

// class CMTCostingEditorClass<T>
// {
//   open =(props:ModalEditorProps<T>) =>
//   {
      
//   }

//   onValueChange = (value:T) =>
//   {

//   }
//   private renderModal()
//   {
//     return (React.cloneElement(this.props.))
//   }

// }

