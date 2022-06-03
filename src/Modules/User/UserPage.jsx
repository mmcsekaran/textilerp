import { Button, PageHeader } from 'antd'
import React, { Component } from 'react'
import DataTable from '../Common/Table'

import './index.css'
export default class UserPage extends Component {
  render() {
    return (
      <div>
          <div className='user-header'>
              <PageHeader title ={"Users"}  extra={[ <Button type='primary'>New User</Button>]} 
footer ={[<button>dyhwvdhj</button>]}
              ></PageHeader>
              <div className='user-list-layout'>
                  <div className='user-list-toolbar'>
                     
                  </div>
                  <div className='table-container'>
                  <table className='table'>
      <thead className='header'>
       <tr className='row '>
         <th className='cell'>Name</th>
         <th className='cell' >Title</th>
         <th className='cell'>Email</th>
         <th className='cell'>Role</th>
         <th className='cell'></th>
       </tr>
      </thead>
      <tbody>
        <tr className='row'>
          <td className='cell'>Chandrasekar</td>
          <td>Chandrasekar</td>
          <td>Chandrasekar</td>
          <td>Chandrasekar</td>
          <td><a>Edit</a></td>
        </tr>
      </tbody>
    </table>
                  </div>
              </div>
          </div>
      </div>
    )
  }
}

const renderUserTable = () =>
{
 
}