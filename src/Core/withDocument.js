import React from 'react'

export default function withDocument(Child,pageId) {
  return props => {
        const data = 
        {
            pageId:'',
            fields:[]
        }
      return <Child {...props} doc = {data} />
  }
   
  
}
