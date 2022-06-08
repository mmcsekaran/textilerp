import { Select } from 'antd'
import React, { Component } from 'react'

export default class BuyerComponent extends Component {
  render() {
    return (
      <Select>
          <Select.Option value = {1} key={1}>Splash</Select.Option>
          <Select.Option key={2}>Name1</Select.Option>
      </Select>
    )
  }
}
