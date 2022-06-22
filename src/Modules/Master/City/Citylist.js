import { Button, Checkbox, Form, Input, Layout, Modal, PageHeader, Table } from 'antd'
import React, { Component } from 'react'
import { useForm } from 'antd/lib/form/Form';
import { OutliningSpanKind } from 'typescript';
import { Select, Switch } from 'antd';
import axios from 'axios';


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

export default class Citylist extends Component {

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

    fetchCity = () =>
    {
        axios.get("http://localhost:3001/cityMaster").then
        (
            suc =>
            {
                this.setState({data:suc.data})
            }
        )
    }

    componentDidMount()
    {
        this.fetchCity();
    }

  render() {
    
    return (
      <div>
        <Layout>
            <PageHeader title ="City"
            extra = {[<Button type ='primary' onClick={() => {
                    this.setState({showEditor:true,currentValue:undefined,mode:1})
            } } >Add City</Button>]}
            ></PageHeader>
            <Layout.Content>
                <Table
                columns={[
                    {
                        title :'City Name',
                        dataIndex:'cityName',
                        key:'cityName'
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
    title = "City Master"
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
        name='cityMas'
        onCancel = {onCancel}
        form = {form}
        initialValues = {value}
        >
            <Form.Item
            name={"cityName"}
            label ={"City Name"}
            >
            <Input placeholder='City Name' />

            </Form.Item>
            <Form.Item
            name={"active"}
            initialValue ={true}
            >
            <Switch placeholder='City Name' defaultChecked ={true}  checkedChildren ={"Enabled"} unCheckedChildren={"Disabled"}/>

            </Form.Item>
        </Form>
    </Modal>
}

export function CitySelect () 
{
 return <Select>

 </Select>
}