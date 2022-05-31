import { Result, Typography } from 'antd'
import React from 'react'
import { Button } from 'antd';
import WithRouter from './../LoginPage';
import {useHistory} from 'react-router-dom'
import { useLocation, Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

 function Unautherize() {
   const history = useLocation();
   const navigate = useNavigate()
  return (
    <div style={{height:"100%"}}>
<Result  title={<Typography.Title level={2} copyable={false} style={{color:'red'}}>Restricted Area </Typography.Title>} status='403' subTitle = {<Button
    type='primary'
    onClick={() =>
    {
      
      window.history.back();
    }}
    >Go Back</Button>}>
     
    </Result>

    </div>
    
  )
}
export default Unautherize