import { Layout, PageHeader } from 'antd'
import React, { Component } from 'react'
import {  ProtectComponent } from '../../../../component/Security/ProtectPage'
import Unautherize from '../../../../Pages/ErrorPage/Unautherize'
import { PAGE_USER, PAGE_USERPAGES, PAGE_USERROLE } from '../../../Constant'

export class PermissionEditor extends Component {
  render() {
    return (
      <ProtectComponent required requiredPage ={PAGE_USER} status ={<Unautherize></Unautherize>}>
          <Layout>
            <PageHeader title ={"Permission"}>

            </PageHeader>
          </Layout>
      </ProtectComponent>
      
    )
  }
}

export default PageProtection (PermissionEditor,PAGE_USERPAGES)