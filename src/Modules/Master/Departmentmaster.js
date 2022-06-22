import {Button, PageHeader, Layout, Table, Checkbox, Modal, Form, Input, Switch} from 'antd'
import React, { Component } from 'react'

export default class Processgroup extends Component {

    constructor(props)
    {
        super(props);
        this.state = {
            visible:false,
        }
        }

   
      showModal = () => {
        this.setState({
        visible: true,
        });
      }
      handleOk = (e) => {
          console.log(e);
          this.setState({
          visible: false,
          });
      }
      handleCancel = (e) => {
          console.log(e);
          this.setState({
          visible: false,
          });
      } 
    
  render() {
    return (
        <div>
        <Layout>
            <PageHeader title ="Department Master"
            extra = {[ <Button type="primary" onClick={this.showModal}>Add Dep</Button>]}
            ></PageHeader>
            <Modal
            visible={this.state.visible}
            okText = "Create"
            onOk={this.handleOk}
            onCancel={this.handleCancel}
            title = "Process Group"
            >
        <Form
        name='Department'
         >
            <Form.Item
            name={"Department"}
            label ={"Department"}
            >
            <Input placeholder='Department' />

            </Form.Item>
            <Form.Item
            name={"active"}
            initialValue ={true}
            >
            <Switch placeholder='Department' defaultChecked ={true}  checkedChildren ={"Enabled"} unCheckedChildren={"Disabled"}/>

            </Form.Item>
        </Form>
    </Modal>
            <Layout.Content>
                <Table
                columns={[
                   
                    {
                        title :'Department',
                        dataIndex:'Department',
                        key:'Department'
                    },
                    {
                        title :'Active',
                        dataIndex:'active',
                        key:'active',
                        render : (record) =>
                        {
                            return <Checkbox defaultChecked = {record}  ></Checkbox>
                        }
                    },
                    {
                        title :'',
                        dataIndex:'action',
                        key:'action',
                        render : (_,record) =>
                        {
                            console.log(record)
                            return <Button type='link' onClick={()=>
                            {
                                this.setState({showEditor:true,currentValue:record,mode:2})
                            }} >Edit</Button>
                        }
                    }]
                }
                dataSource = {this.state.data}
                >
                      
                </Table>
            </Layout.Content>
        </Layout>
        </div>
    )
}
}
       



    

