import { Select } from 'antd'
import React, { useState } from 'react'
import  axios  from 'axios';
import { SearchSelect } from '../../Common/SearchSelect';

export default function FabricInput({value,onChange}) {

  const [searchValue,setSearchValue] = useState("");
  const [searching,setSearching] = useState(false);

  const fetchFabric= async (value) =>
  {

    return  axios.get('https://jsonplaceholder.typicode.com/users',
    {
      
    }).then(
        res =>  res.data.map(v => ({label:v.name,value:v.id,key:v.id}))
      ,
        rej => []
        
      )

  
  }

  return (
    
      <SearchSelect
      showSearch
      mode='multiple'
      fetchOptions={fetchFabric}
      placeholder ="Select Fabric"
      timeOut={800}
      onChange = {(value,options) =>
      {
        if(onChange)
        {
       onChange(options)
        }
      }}
      onSelect = {(value,values) =>
      {
        console.log(value)
      }}
      value = {value
      }
      >
      </SearchSelect>
  )
}


