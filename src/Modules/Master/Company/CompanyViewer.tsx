import { Table } from 'antd'
import React, { Component } from 'react'
import '../../Component/Table.css'

export default class CompanyViewer extends React.Component {
  render() {
    return (
      <Table
  
      dataSource={
        [
          {
            data:"kndksn",
            data1:"kndksn",
            data2:"kndksn",
            data3:"kndksn",
            data4:"kndksn",
            data5:"kndksn",
            data6:"kndksn",
          },
          {
            data:"kndksn",
            data1:"kndksn",
            data2:"kndksn",
            data3:"kndksn",
            data4:"kndksn",
            data5:"kndksn",
            data6:"kndksn",
          }
        ]
      }
      bordered>
        <Table.Column className='table-cell' title="Column1" dataIndex="data1"></Table.Column>
        <Table.Column title="Column2"></Table.Column>
        <Table.Column title="Column3"></Table.Column>
        <Table.Column title="Column4"></Table.Column>
        <Table.Column title="Column5"></Table.Column>
        <Table.Column title="Column6"></Table.Column>
      </Table>
    )
  }
}

