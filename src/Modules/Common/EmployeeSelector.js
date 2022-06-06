import { Form, Select, Spin } from 'antd'
import React, { Component } from 'react'
import { PAGE_USERROLE } from './../Constant/index';

export default class EmployeeSelector extends Component {

    constructor(props)
    {
        super(props)
        this.state =
        {
            fetching:false
        }
    }

    fetchEmpolyees = () =>
    {

    }
  render() {
    return (
      <Form.Item>
          <Select mode='multiple' labelInValue filterOption={false} onSearch = {this.fetchEmpolyees} 
          placeholder = "Select Employee ID"
          notFoundContent = {this.state.fetching ? <Spin size='small' ></Spin> : "Empolyee Not Found" }/>
      </Form.Item>
    )
  }
}
