import { Select,Button,Spin,message, Form, Modal, Input } from 'antd'
import React, { Component,useState } from 'react'
import { useForm } from 'antd/lib/form/Form';
import Buyer from "./Data/Buyer"
import axios  from 'axios';

export default function BuyerComponent() {

    const [modalVisible,setModalVisible] = useState(false)
    const [fetching, setFetching] = useState(false);
    const [value, setValue] = useState(null);
    const [buyers, setBuyers] = useState([]);

    const fetchData = (value) =>
    {   
        setFetching( true);
       
        //const bys = Buyer.filter(v => v.buyerName === value)
        if(value)
        {
        axios.get(`https://jsonplaceholder.typicode.com/users/`).then
        (
          suc => 
          {
           setBuyers(suc.data)
          }
        )
        }

       
        setFetching(false);
        
    }

    const options = buyers.map(buy => {
      console.log(buy)
      return (<Select.Option key={buy.name} value ={buy.id} >{buy.name}</Select.Option>)})

  return (
        <>
          <Select

        showSearch

        style={{width:'100px'}}
       labelInValue
       filterOption ={false}
       onSearch = {fetchData}
       notFoundContent = { fetching ? <Spin size='small'></Spin>:  <Button type='link' onClick={() => 
      {
      setModalVisible(true)
      }}>CreateNew Color</Button>}
     
       onChange = {(value => 
        {
          setValue(value)

        })}
       >
     {options}
     
       </Select>
      <Button type='link' onClick={() => 
     {
        setModalVisible(true)
     }}>CreateNew Color</Button>
      <BuyerComponentEditorModal visible = {modalVisible} onCancel = {() => {
        setModalVisible(false)
      }} onCreate = {(values)=> 
      {
        const _buyers = [...buyers] ;

        
        
        setBuyers([...buyers,values])
        setModalVisible(false)
        console.log(_buyers)
      }}/>

      
     </>
           
       
  )
}




const BuyerComponentEditorModal = (
  {
    visible ,
    onCreate ,
    onCancel  
  }
) =>
{
  const [form] = useForm();

  return (
    <Modal
    visible = {visible}
    title = "New Buyer"
    okText = "Create"
    cancelText ="Cancel"

    onOk={() =>
    {
      form.validateFields().then(
        values => {
          form.resetFields();
          onCreate(values)
        }
      )
    }}
    onCancel = {onCancel}
    >
      <Form
      form={form}
      >
       <Form.Item
       label ="Buyer Code"
       name={"buyerCode"}
       >
        <Input></Input>
       </Form.Item>
       <Form.Item
       label ="Buyer"
       name={"buyer"}
       >
        <Input></Input>
       </Form.Item>
      </Form>
    </Modal>
  )
}