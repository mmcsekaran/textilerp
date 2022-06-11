import { Select } from 'antd'
import React, { Component } from 'react'
import { Button ,Spin} from 'antd';
import { useState } from 'react';
import { message } from 'antd';

export default function PortionComponent() {

    const [fetching, setFetching] = useState(false);
    const [value, setValue] = useState(null);

    const fetchData = (value) =>
    {   
        setFetching( true);
        setInterval(() => {
            setFetching(false)
        }, 5000);
    }

    return (
        <Select
        style={{width:'100%'}}
        labelInValue
        filterOption ={false}
        onSearch = {fetchData}
        notFoundContent = { fetching ? <Spin size='small'></Spin>: <Button type='link' onClick={() => 
     {
         message.success("Created")
     }}>Create New Portion</Button>}
         mode ='multiple'
         onChange={(e) => 
         {
             setValue(e)
         }
     
      
     }
        />
            
    )
  }

