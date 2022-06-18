import { Button, Form, Select, Spin ,message} from 'antd'
import React, { useState } from 'react'

export default function StyleDescriptionComponent() {

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
       <Select
       labelInValue
       filterOption ={false}
       onSearch = {fetchDesignation}
       notFoundContent = { fetching ? <Spin size='small'></Spin>: <Button type='link' onClick={() => 
    {
        message.success("Created")
    }}>CreateNew Style Description</Button>}
        mode ='multiple'
        onChange={(e) => 
        {
            setValue(e)
        }
    
     
    }
       />
           
       
  )
}
