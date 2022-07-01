import React, { Component } from 'react'
import OrderEntry from './../OrderEntry';
import { Button, Form, Input } from 'antd';

type OrderEntryHeaderProps =
{
    value?:OrderEntryMasterData,
    onChange?:(value:OrderEntryMasterData) => void
    buyName:string
}
type OrderEntryMasterData =
{
 value:string
}

export default class OrderEntryHeader extends Component<OrderEntryHeaderProps,any> {
  render() {
    return (
      <div>
        <Form onValuesChange={(_:any,value:any) =>
        {
            if(this.props.onChange)
            {
                this.props.onChange(value)
                   
            }
        }}>
            <Form.Item name= 'value'>
                <Input></Input>
            </Form.Item>
        </Form>
      </div>
    )
  }
}
