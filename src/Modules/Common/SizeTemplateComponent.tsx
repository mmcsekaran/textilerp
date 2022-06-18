import { Button, Form, Select, Spin ,message} from 'antd'
import React, { useState } from 'react'

export default function SizeTemplateComponent() {

    const [fetching, setFetching] = useState(false);
    const [value, setValue] = useState(null);

    const fetchData = (value:string) =>
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
    }}>CreateNew Size Template</Button>}
        mode ='multiple'
        onChange={(e) => 
        {
            setValue(e)
        }
    
     
    }
       />
           
       
  )
}
