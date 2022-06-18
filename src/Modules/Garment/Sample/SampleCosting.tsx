import { Form, Input } from 'antd';
import React, { Component } from 'react'
export interface SampleCostingProps
{
    costingNo:number;
    data?:SampleCostingData

}
export interface SampleCostingData
{
    costingNo:number;
    buyer?:any;
    styleImage:string;

}
export default class SampleCosting extends React.Component<SampleCostingProps> {



  render() {
    return (
      <div>
          <Form>
           <Form.Item
           name={"style_category"}
           label ="Style Category"
           >
            <Input></Input>
           </Form.Item>
           <Form.Item>
            <Input></Input>
           </Form.Item>
          </Form>
      </div>
    )
  }
}
