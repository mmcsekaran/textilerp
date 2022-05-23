import { Result, Typography } from 'antd'
import React from 'react'

export default function Unautherize() {
  return (
    <Result title={<Typography.Title level={2} copyable={false} style={{color:'red'}}>Access Denied</Typography.Title>} status='403'></Result>
  )
}
