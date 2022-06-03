import { Form, Select, Spin } from 'antd'
import React, { useState } from 'react'

export default function Designnation() {

    const [fetching, setFetching] = useState(false);
    const [value, setValue] = useState(null);

    const fetchDesignation = () =>
    {
        setFetching( true);
        setInterval(() => {
            setFetching(false)
        }, 5000);
    }

  return (
   <Form.Item>
       <Select
       labelInValue
       filterOption ={false}
       onSearch = {fetchDesignation}
       notFoundContent = { fetching ? <Spin size='small'></Spin>: 'No Result'}
        mode ='multiple'
        onChange={(e) => 
        {
            setValue(e)
        }
    
     
    }
       />
           
       
   </Form.Item>
  )
}
