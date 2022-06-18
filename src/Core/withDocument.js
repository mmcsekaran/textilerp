import React from 'react'
import Register from './../Modules/User/User.Register';

export default function withDocument(Child,pageId) {

  const registered =  registerDocument(pageId);



  return props => {
        const data = 
        {
            pageId:'',
            fields:[]
        }
      return <Child {...props} doc = {data} />
  }
   
  
}

const registerDocument = page =>
{
  
}
