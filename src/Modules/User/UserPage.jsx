import { Button, PageHeader } from 'antd'
import React, { Component } from 'react'
import DataTable from '../Common/Table'

import './index.css'
export default class UserPage extends Component {
  render() {
    return (
      <div>
          <div className='user-header'>
              <PageHeader title ={"Users"}></PageHeader>
              <div className='user-list-layout'>
                  <div className='user-list-toolbar'>
                      <Button type='primary'>New User</Button>
                  </div>
                  <div className='user-list-table'>
                    <DataTable></DataTable>
                  </div>
              </div>
          </div>
      </div>
    )
  }
}
