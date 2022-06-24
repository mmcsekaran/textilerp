import {Button, PageHeader, Layout, Table, Checkbox, Modal, Form, Input, Switch, } from 'antd'
import { useForm } from 'antd/lib/form/Form';
import React, { Component } from 'react'

export default class Processgroup extends Component {

    constructor(props)
    {
        super(props) ;

        this.state = {
            
            visible: false ,
            showEditor:false,
            data:[],
            currentValue:undefined,
            mode:1
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
            <PageHeader title ="Process Group"
            extra = {[<Button type ='primary' onClick={() => {
                    this.setState({showEditor:true,currentValue:undefined,mode:1})
            } } >Add Process</Button>]}
            ></PageHeader>
            <Layout.Content>
                <Table
                columns={[
                    {
                        title: "S.No",
                       
                        render: (text, record, index) => index + 1,
                    },
                    {
                        title :'Proces Group',
                        dataIndex:'Process Group',
                        key:'Process Group'
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
        <CityMasterEditor  value={this.state.currentValue}  visible={this.state.showEditor} onCancel = {() => {
            this.setState({showEditor:false})
        }} onSave = 
        { (values,action)=>
            {
                console.log("City Is ",values) ;
                const data = [...this.state.data]
                if(action === 'add')
                {

                     data.push(values)
                }
                else if(action === 'update')
                {
const index = data.findIndex((v,i) => v.cityName === values.cityName) ;

console.log(index)

                    data.splice(index,1)
                    

                }
              
                   
                this.setState({showEditor:false,data:data})
            }

        } ></CityMasterEditor>
      </div>
      
    )
  }
}

const nameToHeager = (name) => name.replace(/([A-Z])/g, ' $1').trim() ;

const CityMasterEditor = ({value,visible,onSave,onCancel}) =>
{
    const [form] = useForm()
    
    return <Modal
    visible = {visible}
    onCancel={onCancel}
    closable = {false}
    title = "Process Group"
    okText = "Create"
    onOk = {
        () =>
        {
            form.validateFields().then(


                values => 
                {
                    //axios.post("http://localhost:3001/cityMaster",{id:null,cityName:values.cityName,active:true}).then
                    //(
                        //suc => {
                            const mode = value ? 'update' : "add"
                                onSave(values,mode)
                      //         }   
                  //  )
                   

                }
            )
        }
    }
    >
        <Form
        name='Process Group'
        onCancel = {onCancel}
        form = {form}
        initialValues = {value}
        >
            <Form.Item
            name={"Process Group"}
            label ={"Process Group"}
            >
            <Input placeholder='Process Group' />

            </Form.Item>
            <Form.Item
            name={"active"}
            initialValue ={true}
            >
            <Switch placeholder='Process Group' defaultChecked ={true}  checkedChildren ={"Enabled"} unCheckedChildren={"Disabled"}/>

            </Form.Item>
        </Form>
    </Modal>
}



    

