import { Form, Input, Space } from 'antd'
import React, { Component, RefObject } from 'react'
import ComboEditor from './ComboEditor'
import { Row, FormInstance } from 'antd';
import { Select } from 'antd';
import BuyerComponent from './../../Common/BuyerComponent';

export interface StyleEditorProps
{

}



export default class StyleEditor extends Component {

  form: RefObject<FormInstance<any>> = React.createRef<FormInstance<any>>(); 
  onStyleCategoryChange = (data:any):void =>
  {
        
  }

  onValuesChanged = (_:any,allData:any):void =>
  {
    
    allData.no_of_pcs = allData.pack_uom;
        this.form.current?.setFieldsValue(allData);
    console.log(allData)
    
  }
  render() {
    return (
      <div>
        
        <Form name='styleEditor'
        onValuesChange={this.onValuesChanged}
        ref = {this.form}
        >
          <Row>
            <Space>
            <Form.Item noStyle name={"buyer"}>
            <BuyerComponent/>
            </Form.Item>
            <Form.Item noStyle>
            <Input placeholder='Style Category' onChange={this.onStyleCategoryChange}></Input>
            </Form.Item>
            <Form.Item noStyle>
              <Input placeholder='Style No' readOnly ></Input>
            </Form.Item>
            <Form.Item noStyle>
              <Input placeholder='Style Description' readOnly ></Input>
            </Form.Item>
            <Form.Item noStyle name={"pack_uom"}>
              <Select style={{width:'100px'}} placeholder='Select Pack' defaultValue={1}  >
                <Select.Option value = {1} key = {1}>Pcs</Select.Option>
                <Select.Option value = {2} key = {2}>Set</Select.Option>
                <Select.Option value = {3} key = {3}>Pack (3)</Select.Option>
                <Select.Option value = {4} key = {4}>Pack (4)</Select.Option>
                <Select.Option value = {5} key = {5}>Pack (5)</Select.Option>            
              </Select>
            </Form.Item>
            <Form.Item noStyle name={"no_of_pcs"}>
            <Input placeholder='No Of Pieces' readOnly ></Input>
            </Form.Item>
            </Space>
           
          </Row>
         
        </Form>
      </div>
    )
  }
}
