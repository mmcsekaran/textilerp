import { Button, Checkbox, Layout, Menu, PageHeader,Table, Tag, Tree } from 'antd'
import React, { Component } from 'react'
import { ADMIN, USER, UserContext } from '../../../component/Security/AuthoticationContext'
import { PageProtection, ProtectComponent } from '../../../component/Security/ProtectPage'
import MSButton from '../../Component/Button'
import { COMPANYVIEW, COMPANY_PERMISSION, PAGE_COMPANY, PAGE_USERROLE } from '../../Constant'
import {GridComponent,ColumnDirective,ColumnsDirective} from '@syncfusion/ej2-react-grids'
import masterAPI from '../Data'
import api from '../Data'
import './company.css'
import Unautherize from '../../../Pages/ErrorPage/Unautherize'
import Permission from '../../../component/Security/Permission'
const COMPANY_CREATE = "MASTER.COMPANY.CREATE"
const COMPANY_DELETE = "MASTER.COMPANY.DELETE"
const COMPANY_UPDATE = "MASTER.COMPANY.UPATE"
const COMPANY_VIEW = "MASTER.COMPANY.VIEW"


 class CompanyView extends Component {
    
    static contextType = UserContext

    constructor(props)
    {
      super(props)

      this.state ={
        loading:false,
        error:null,
        status: null,
        data:[]
      }
     

    }

    componentDidMount()
    {
        this.setState({data:api.company.getCompany()})
    }

  render() {
      console.log(this.props)
    return (
      <ProtectComponent required requiredRole ={ADMIN} requiredPage ={PAGE_COMPANY}  status ={<Unautherize></Unautherize>}>
     <Layout >
       <PageHeader
       title ="Company"
       extra ={
         [
           <ProtectComponent required requiredPage = {PAGE_COMPANY} requiredPermission = {Permission.CREATE}> <Button type='primary'>Add Company</Button></ProtectComponent>
         ]
       }
       >

       </PageHeader>
      
       <Layout.Content>
        

   <Table 
   dataSource={[
     {
       name:"D2DINTERNATIONAL",
       status:"Enabled"
     }
   ]}

   pagination={false}
   >
     <Table.Column dataIndex={"name"} title="Name" align='left' width={200}></Table.Column>
     <Table.Column  dataIndex = {"status"}title="Status" align='left' render={item => <Tag >{item}</Tag>} width={180}></Table.Column>
     <Table.Column title="Name" align='left'></Table.Column>
   </Table>

       
       </Layout.Content>
     </Layout>
     </ProtectComponent>
    )
  }
}
export default CompanyView

const fetchCompany = () =>
{
  return [{
    id : '000129910290',
    name:'D2D INTERNATIONAL',
    
  }]
}