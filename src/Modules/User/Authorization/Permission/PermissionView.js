import { Checkbox, Input, Layout, PageHeader, Table } from 'antd'
import React, { Component } from 'react'
import { PageProtection, ProtectComponent } from '../../../../component/Security/ProtectPage'
import Unautherize from '../../../../Pages/ErrorPage/Unautherize'
import { PAGE_USERPAGES ,PAGE_USER} from '../../../Constant'

export class PermissionView extends Component {

  constructor(props)
  {
    super(props);
    this.state ={
      data : [
        {
          id:1000,
          name:"COMPANY MASTER",
           create:true,
           update:true,
           delete:false,
           approval:false,
           view :true
        }
      ]
    }
  }

  render() {
    return (
        <ProtectComponent required requiredPage ={PAGE_USERPAGES} status ={<Unautherize></Unautherize>}>
    <Layout>
      <PageHeader title ={"User Page Permission"}>

      </PageHeader>
      <Table
      
      dataSource={this.state.data}
      >
        <Table.Column title ="ID"  dataIndex={"id"} />
        <Table.Column title ="PAGE NAME" dataIndex={"name"} />
        <Table.Column align='center' dataIndex={"create"} title ="CREATE"  width={80} render={record => 
          <>
         <Checkbox defaultChecked={record} ></Checkbox>
         
          </>
        } />
        <Table.Column dataIndex={"update"} align='center' title ="UPDATE" width={80}  render={record => 
          <>
         <Checkbox defaultChecked ={record}></Checkbox>
         
          </>
        } />
        <Table.Column dataIndex={"delete"} title ="DELETE" width={80} align='center'  render={record => 
          <>
         <Checkbox defaultChecked ={record}></Checkbox>
         
          </>
        } />
        <Table.Column dataIndex={"view"} title ="VIEW" width={80} align='center'  render={record => 
          <>
         <Checkbox defaultChecked={record}></Checkbox>
         
          </>
        } />
        <Table.Column dataIndex={'approval'} title ="APPROVAL" width={80} align='center'  render={record => 
          <>
         <Checkbox defaultChecked={record} onChange = { e =>
        {
         this.setState({
           data:[
            {
              id:1000,
              name:"COMPANY MASTER",
               create:true,
               update:true,
               delete:true,
               approval:false,
               view :true
            }
          ]
         })
        }}></Checkbox>
         
          </>
        } />
      </Table>
    </Layout>
      </ProtectComponent>
    )
  }
}

export default PermissionView