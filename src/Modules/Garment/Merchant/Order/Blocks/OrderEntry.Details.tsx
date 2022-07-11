import { Form, Input } from 'antd'
import React from 'react'


export type OrderEntryDetailsProps =
{
    onChange?: (value:OrderEntryDetails) => void,
    value?:OrderEntryDetails
}

export interface OrderEntryDetails
{
    OrderNumber :number
}

export  const OrderEntryDetailsComponent:React.FC<OrderEntryDetailsProps> = (props)  => {

  return (
    <>
    
    </>
  )
}
