import { Button } from 'antd'
import React, { useContext } from 'react'
import { UserContext } from '../../component/Security/AuthoticationContext'

export default function MSButton( props) {
  const  user = useContext(UserContext);
  return (
  <Button {...props}>{props.children}</Button>
  )
}
