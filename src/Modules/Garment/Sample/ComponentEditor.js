import { Form, Input, Tabs } from 'antd'
import React, { Component } from 'react'
import { Tab } from 'react-bootstrap'
import CMTPlan from './CMTPlan'
import PortionEditor from './PortionEditor'
import TrimsPlan from './TrimsPlan'

export default class ComponentEditor extends Component {
  render() {
    return (
 
       
      <Form.Item name={this.props.name}>
        <Input readOnly value={this.props.name}  ></Input>
      </Form.Item>
       

    )
  }
}
