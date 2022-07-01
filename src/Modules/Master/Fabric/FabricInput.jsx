import { Select } from 'antd'
import React, { useState } from 'react'
import  axios  from 'axios';
import { SearchSelect } from '../../Common/SearchSelect';

export default function FabricInput({value,onChange}) {

  const [searchValue,setSearchValue] = useState("");
  const [searching,setSearching] = useState(false);

  const fetchFabric = (value) =>
  {
      axios.get('https://jsonplaceholder.typicode.com/users').then(
        res => 
        {
           const data = res.data ;
          return data.map(e => ({label:e.name,value:e,key:e.id}))
        }
      )
  }

  return (
    
      <SearchSelect
      fetchOptions={fetchFabric}
      placeholder ="Select Fabric"
    
      >

      </SearchSelect>
  )
}
