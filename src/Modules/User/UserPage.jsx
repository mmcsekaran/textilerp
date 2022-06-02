import { TwitterOutlined, YoutubeOutlined, FacebookOutlined, LinkedinOutlined, CheckCircleOutlined, CheckOutlined, CheckSquareOutlined } from '@ant-design/icons'
import { Button, Card, Col, Form, Input, PageHeader, Row, Table, Tag, Typography, Select } from 'antd'
import React, { Component } from 'react'
import ComingSoon from '../../Pages/ErrorPage/ComingSoon'
import { withRouter } from '../Common/withRouter'

import './index.css'
import Designnation, { desingationSelector } from './../Common/Designnation';
class UserPage extends Component {
  constructor(props) {
    super(props);

    this.state =
    {
      isEdit: false,
      isNew: true,
      showEditor: false
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
                        name: 'Chandru',
                        title: 'Erp Incharge',
                        email: 'erp@d2dinternational.com',
                        role: "Super Admin"
                      },
                    ]}
                  >
                    <Table.Column render={(record) => <Typography.Text strong>{record}</Typography.Text>} dataIndex={"sno"} title="#" />
                    <Table.Column render={(record) => <Typography.Text strong>{record}</Typography.Text>} dataIndex={"name"} title="Name" />
                    <Table.Column render={(record) => <Typography.Text strong>{record}</Typography.Text>} dataIndex={"title"} title="Title" />
                    <Table.Column render={value => { return <a>{value}</a> }} dataIndex={"email"} title="Email" />
                    <Table.Column render={(record) => <Typography.Text strong>{record}</Typography.Text>} dataIndex={"role"} title="Roles" />
                    <Table.Column render={(record) => <><Tag color={'#56ab2f'} icon={<CheckOutlined />} >Enabled</Tag> </>} dataIndex={"role"} title="Status" />
                    <Table.Column render={prop => {
                      return <a onClick={(e) =>
                        this.setState({ showEditor: true, isEdit: true, isNew: false })
                      }>Edit</a>
                    }} title=" " />
                  </Table>
                </div>
              </div>
            </div> :
            // User Editor
            <div >
              <div style={{ paddingLeft: '10px' }} >
                <Row justify='center' align='middle'>
                  <Col xs={24} sm={16} md={16} xl={16}>
                    <Card>
                      <Form
                        layout='vertical'
                      >
                        <Form.Item
                          name={"username"}
                          label="User Name"
                        >
                          {<Input disabled={this.state.isEdit} placeholder='' type={'text'} value="Chandru" />}
                        </Form.Item>
                        <Form.Item
                          name={"Title"}
                        >
                          {<Input disabled={this.state.isEdit} placeholder='User Name' type={'text'} value="Chandru" />}
                        </Form.Item>
                        <Designnation></Designnation>
                      </Form>
                    </Card>
                  </Col>
                </Row>

              </div>
            </div>
          }
        </div>

      </div>
    )
  }
}
export default withRouter(UserPage)