import { Select } from 'antd'
import React from 'react'

export default function FabricInput({value,onChange}) {



  return (
    
    <Select  onSelect={onChange}>
        <Select.Option value = 'A'>A</Select.Option>
        <Select.Option value = 'B'>B</Select.Option>
        <Select.Option value = 'C'>C</Select.Option>
        <Select.Option value = 'D'>D</Select.Option>
    </Select>
  )
}
