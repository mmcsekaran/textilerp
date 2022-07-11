import { Form } from 'antd'
import React, { Component } from 'react'
import OrderEntryHeader from './Blocks/OrderEntry.Header'
import OrderEntryFooter from './OrderEntry.Footer';
import { OrderEntryDetailsComponent } from './Blocks/OrderEntry.Details';

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
                <OrderEntryDetailsComponent></OrderEntryDetailsComponent>
            </Form.Item>
            <Form.Item name={"ordmaster"}  >
                <OrderEntryFooter></OrderEntryFooter>
            </Form.Item>
        </Form>
      </div>
    )
  }
}
