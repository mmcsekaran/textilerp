import { Button, Form, Select, Spin ,message} from 'antd'
import React, { useState } from 'react'

export default function FabricTypeComponent() {

    const [fetching, setFetching] = useState(false);
    const [value, setValue] = useState(null);

    const fetchData = (value:any) =>
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
       onSearch = {fetchData}
       notFoundContent = { fetching ? <Spin size='small'></Spin>: <Button type='link' onClick={() => 
    {
        message.success("Created")
    }}>Create New Fabric Type</Button>}
        mode ='multiple'
        onChange={(e) => 
        {
            setValue(e)
        }
    
     
    }
       />
           
       
  )
}
