import { Button, Checkbox, Form, Input, Layout, Modal, PageHeader, Table } from 'antd'
import React, { Component } from 'react'
import { useForm } from 'antd/lib/form/Form';
import { Switch } from 'antd';


const generateColumns = (data) =>
{
  const names =   Object.keys(data).map(key =>
    ({
        title :nameToHeager(key),
        dataIndex:key,
        key:key
    })  );

  console.log(names)
    return names
}

export default class Sizemaster extends Component {

    constructor(props)
    {
        super(props) ;

        this.state = {
            showEditor:false,
            data:[],
            currentValue:undefined,
            mode:1
        }
    }

    
  render() {
    
    return (
      <div>
        <Layout>
            <PageHeader title ="Size"
            extra = {[<Button type ='primary' onClick={() => {
                    this.setState({showEditor:true,currentValue:undefined,mode:1})
            } } >Add Size</Button>]}
            ></PageHeader>
            <Layout.Content>
                <Table
                bordered
                columns={[
                    {
                        title:'S.No',
                        
                        render: (text, record, index) => index + 1,
                    },
                    {
                        title :'Sizes ',
                        dataIndex:'Size',
                        key:'Size'
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
                ]
                }
                dataSource = {this.state.data}
                >
                      
                </Table>
            </Layout.Content>
        </Layout>
        <SizeMasterEditor  value={this.state.currentValue}  visible={this.state.showEditor} onCancel = {() => {
            this.setState({showEditor:false})
        }} onSave = 
        { (values,action)=>
            {
                console.log("Size Is ",values) ;
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

        } ></SizeMasterEditor>
      </div>
    )
  }
}

const nameToHeager = (name) => name.replace(/([A-Z])/g, ' $1').trim() ;

const SizeMasterEditor = ({value,visible,onSave,onCancel}) =>
{
    const [form] = useForm()
    
    return <Modal
    visible = {visible}
    onCancel={onCancel}
    closable = {false}
    title = "Size"
    okText = "Create"
    onOk = {
        () =>
        {
            form.validateFields().then(
                values => 
                {
                    const mode = value ? 'update' : "add"
                    onSave(values,mode)                    
                }
            )
        }
    }
    >
        <Form
        name='Sizemaster'
        onCancel = {onCancel}
        form = {form}
        initialValues = {value}
        >
            <Form.Item
            name={"Size"}
            label ={"Size"}
            >
            <Input placeholder='Size' />

            </Form.Item>
            <Form.Item
            name={"active"}
            initialValue ={true}
            >
            <Switch placeholder='Size' defaultChecked ={true}  checkedChildren ={"Enabled"} unCheckedChildren={"Disabled"}/>

            </Form.Item>
        </Form>
    </Modal>
}

