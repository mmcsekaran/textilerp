import { Select } from 'antd'
import React, { useState } from 'react'

export default function FabricInput({value,onChange}) {

  const [searchValue,setSearchValue] = useState("");
  const [searching,setSearching] = useState(false);

  const fetchFabric = (value) =>
  {
    
  }

  return (
    
    <Select  
    showSearch
    onSearch={value =>
    {
        this.setSearchValue(value);
    }}
    placeholder ="Select Fabric"

    notFoundContent =""
    >
        <Select.Option value = 'A'>A</Select.Option>
        <Select.Option value = 'B'>B</Select.Option>
        <Select.Option value = 'C'>C</Select.Option>
        <Select.Option value = 'D'>D</Select.Option>
    </Select>
  )
}
