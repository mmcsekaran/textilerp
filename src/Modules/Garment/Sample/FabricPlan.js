import { Form, Input } from 'antd'
import React, { Component } from 'react'
import ProcessPlan from './ProcessPlan'

export default class FabricPlan extends Component {
  render() {
    return (
      <div>
        <Form>
          <Form.Item noStyle name={"fabricName"}>
            <Input></Input>
          </Form.Item>
          <Form.Item noStyle name={"fabricGsm"}>
            <Input></Input>
          </Form.Item>
          
        </Form>
        
      </div>
    )
  }
}
