import { Form } from 'antd'
import React, { Component } from 'react'
import OrderEntryHeader from './Blocks/OrderEntry.Header'

export default class OrderEntry extends Component {
  render() {
    return (
      <div>
        <Form onValuesChange={(_:any,value:any) =>
        {
            console.log(value)
        }} >
            <Form.Item name={"ordmaster"}  >
                <OrderEntryHeader buyName='' ></OrderEntryHeader>
            </Form.Item>
            <Form.Item name={"ordmaster"}  >
                <OrderEntryHeader buyName='euwiu' ></OrderEntryHeader>
            </Form.Item>
        </Form>
      </div>
    )
  }
}
