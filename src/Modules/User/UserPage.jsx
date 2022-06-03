import { TwitterOutlined, YoutubeOutlined, FacebookOutlined, LinkedinOutlined, CheckCircleOutlined, CheckOutlined, CheckSquareOutlined } from '@ant-design/icons'
import { Button, Card, Col, Form, Input, PageHeader, Row, Table, Tag, Typography, Select } from 'antd'
import React, { Component } from 'react'
import ComingSoon from '../../Pages/ErrorPage/ComingSoon'
import { withRouter } from '../Common/withRouter'

import './index.css'
import Designnation, { desingationSelector } from './../Common/Designnation';
import EmployeeSelector from '../Common/EmployeeSelector'
class UserPage extends Component {
  constructor(props) {
    super(props);

    this.state =
    {
      isEdit: false,
      isNew: true,
      showEditor: false,
      currentData:undefined
    }

  }
  render() {
    return (
      <div>
        <div className='user-header'>
          <PageHeader title={"Users"}></PageHeader>
          {this.state.showEditor === false ?
            <div className='user-list-layout' >
              <div className='user-list-toolbar'>
                <Button type='primary'>New User</Button>
              </div>
              <div className='user-list-table'>
                <div className='table-container'>
                  <Table
                    dataSource={[
                      {
                        sno: 1,
                        name: 'Chandru',
                        title: 'Erp Incharge',
                        email: 'erp@d2dinternational.com',
                        role: "Super Admin"
                      },
                      {
                        sno: 2,
                        name: 'Chandru',
                        title: 'Erp Incharge',
                        email: 'erp@d2dinternational.com',
                        role: "Super Admin"
                      },
                      {
                        sno: 3,
                        name: 'Chandru',
                        title: 'Erp Incharge',
                        email: 'erp@d2dinternational.com',
                        role: "Super Admin"
                      },
                      {
                        sno: 4,
                        name: 'Chandru',
                        title: 'Erp Incharge',
                        email: 'erp@d2dinternational.com',
                        role: "Super Admin"
                      },
                      {
                        sno: 5,
                        name: 'Chandru',
                        title: 'Erp Incharge',
                        email: 'erp@d2dinternational.com',
                        role: "Super Admin"
                      },
                      {
                        sno: 6,
                        name: 'Chandru',
                        title: 'Erp Incharge',
                        email: 'erp@d2dinternational.com',
                        role: "Super Admin"
                      },
                      {
                        sno: 7,
                        name: 'Chandrasekar',
                        title: 'Erp Incharge',
                        email: 'erp@d2dinternational.com',
                        role: "Super Admin"
                      },
                    ]}
                  >
                    <Table.Column key={"sno"} render={(record) => <Typography.Text strong>{record}</Typography.Text>} dataIndex={"sno"} title="#" />
                    <Table.Column  key={"name"} render={(record) => <Typography.Text strong>{record}</Typography.Text>} dataIndex={"name"} title="Name" />
                    <Table.Column  key={"title"} render={(record) => <Typography.Text strong>{record}</Typography.Text>} dataIndex={"title"} title="Title" />
                    <Table.Column  key={"email"} render={value => { return <a>{value}</a> }} dataIndex={"email"} title="Email" />
                    <Table.Column  key={"role"} render={(record) => <Typography.Text strong>{record}</Typography.Text>} dataIndex={"role"} title="Roles" />
                    <Table.Column  key={"status"} render={(record) => <><Tag color={'#56ab2f'} icon={<CheckOutlined />} >Enabled</Tag> </>} dataIndex={"role"} title="Status" />
                    <Table.Column  key={"edit"} render={(_,prop,index) => {

                    

                      return <a onClick={(e) =>{

                        this.setState({ showEditor: true, isEdit: true, isNew: false,currentData:prop })
                        
                      }
                      }>Edit</a>
                    }} title=" " dataIndex={"action"} />
                  </Table>
                </div>
              </div>
            </div> :
            this.state.currentData ?
            // User Editor
            <div >
              <div style={{ paddingLeft: '10px' }} >
                <Row >
                  <Col xs={24} sm={16} md={16} xl={16}>
                   
                      <Form
                        layout='vertical'
                      >
                        
                        <Form.Item
                          name={"username"}
                          label="User Name"
                          initialValue={this.state.currentData.name}
                        >
                          {<Input disabled={this.state.isEdit} placeholder='' type={'text'}  />}
                        </Form.Item>
                        <EmployeeSelector></EmployeeSelector>
                        <Form.Item
                          name={"Title"}
                        >
                          {<Input disabled={this.state.isEdit} placeholder='User Name' type={'text'} value="Chandru" />}
                        </Form.Item>
                        <Designnation></Designnation>
                      </Form>
               
                  </Col>
                </Row>

              </div>
            </div>
            :""
          }
        </div>

      </div>
    )
  }
}
export default withRouter(UserPage)