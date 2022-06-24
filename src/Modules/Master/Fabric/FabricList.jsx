import { Button, PageHeader, Table } from 'antd'
import React, { Component } from 'react'

export default class FabricList extends Component {
  render() {
    return (
      <div>
        <PageHeader title ="Fabric List" extra ={[<Button>Add</Button>]}>

        </PageHeader>
        <Table>
            
        </Table>
      </div>
    )
  }
}
