import React, { Component } from 'react'
import Data from '../../Modules/Master/Data'

export default class AdminDashboard extends Component {

  componentDidMount()
  {
    console.log(Data.company.getCompany())
  }

  render() {

    
    return (
      <div>Admin</div>
    )
  }
}
