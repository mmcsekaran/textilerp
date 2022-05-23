import React, { Component } from 'react'
import { PageProtection, ProtectComponent } from '../../../../component/Security/ProtectPage'
import Unautherize from '../../../../Pages/ErrorPage/Unautherize'
import { PAGE_USERROLE } from '../../../Constant'

export class RoleView extends Component {
  render() {
    return (
      <ProtectComponent required requiredPage = {PAGE_USERROLE} status ={<Unautherize></Unautherize>}>
 <div>RoleView</div>
      </ProtectComponent>
     
    )
  }
}

export default RoleView