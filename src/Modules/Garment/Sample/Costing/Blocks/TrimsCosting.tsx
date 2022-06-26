import { DeleteOutlined } from '@ant-design/icons';
import { Table, Typography, Button, message, Modal } from 'antd';
import React, { Component } from 'react'
import { CMTCostingFormData } from './CMTCostingEditor';
import TrimsCostingEditor, { TrimsCostingFormData } from './TrimsCostingEditor';


export interface TrimsCost
{
   trimsData : Array<TrimsCostingFormData>,
   total:number
}


export type actionType = 'add'|'update'|'delete'
type trimData  = TrimsCostingFormData | undefined
interface  TrimsCostProps
{
    data?:Array<TrimsCostingFormData>,
    onChange?:(value?:TrimsCost) => void
}
export default class TrimsCosting extends React.Component<TrimsCostProps,TrimsCost>  {
  

    constructor(props:TrimsCostProps)
    {
        super(props)
       
        this.state = { 
            trimsData : this.props.data? this.props.data : [],
            total:0
        }
    }

addTrims = (prevValue:TrimsCostingFormData,value: TrimsCostingFormData) => 
  {
    const cmtData = [...this.state.trimsData]
    console.log(cmtData)
    let val:TrimsCostingFormData = 
    {
      id:-1,
      trimsCount:0,
      trimsPrice:0,
      trimCost:0
     }
 ;
     Object.assign(val,value) ;
    const dupKey = this.state.trimsData.findIndex( p => p.key === val.key && val.id ===  -1 ) ;

  console.log(dupKey)

  if(dupKey > -1)
  {
    message.error("Error")

  }
  else
  {
    if(val.id === -1)
    {

      val.id = cmtData.length;
      cmtData.push(val);
      this.calculateValue(cmtData)
    }
    else
    {
     
     cmtData.splice(val.id,1,val)
    

    }

   
  }
  var total:number = 0;

  cmtData.forEach(element => {
    
      total = total + element.trimCost;
     
  });
  
  this.triggerChanges({total:total,trimsData:cmtData})

  }
  
  triggerChanges = (value:TrimsCost)  =>
  {

    this.setState({...this.state,...value})
    if(this.props.onChange) this.props.onChange(this.state);
  
  }

  

  deleteTrims = (key:any) =>
  {
    Modal.confirm({
      title:'Delete Trim - ',
      centered:true,
      onOk :() =>
      {
        const data = this.state.trimsData.find( val => val.key === key) ;
        const trimsData = this.state.trimsData.filter(d => d.key != key);
        this.calculateValue(trimsData)
      }
    })
  

  }

  
  render() {
    return (
      <div>
         <Table
                  pagination={false}
                  title={() => (
                    <>
                      <Typography.Text strong style={{ fontSize: "14pt" }}>
                        Trims Details
                      </Typography.Text>
                      <Button
                        onClick={() => {
                          
                          TrimsCostingEditor.setConfig(
                            {
                              onCancel:() => {},
                              visible:true,
                              onSave:this.addTrims
                            }
                          )
                          TrimsCostingEditor.open();

                          
                        }}
                        type="primary"
                        style={{ float: "right" }}
                      >
                        Add
                      </Button>
                    </>
                  )}
                  columns={[
                    {
                      title: "S.No",
                      width: 50,
                      align: "center",
                      render(value, record, index) {
                        return <>{index + 1}</>;
                      },
                    },
                    {
                      title: "Combo",
                      width: 120,
                      align: "left",
                      dataIndex: "comboName",
                    },
                    {
                      title: "Component",
                      width: 120,
                      align: "left",
                      dataIndex: "componentName",
                    },
                    {
                      title: "Trims",
                      align: "left",
                      dataIndex: "trimsName",
                    },
                    {
                      title: "UOM",
                      width: 80,
                      align: "left",
                      dataIndex: "trimsUom",
                    },
                    {
                      title: "Price",
                      align: "center",
                      width: 150,
                      dataIndex: "trimsPrice",
                    },
                    {
                      title: "CNT/GMT",
                      width: 100,
                      align: "center",
                      dataIndex: "trimsCount",
                    },
                    {
                      title: "Trims Cost",
                      width: 100,
                      align: "center",
                      dataIndex: "trimsCost",
                      render(value, record, index) {
                        return <>{record.trimsPrice * record.trimsCount}</>
                      },
                    },
                    {
                      title: "#",
                      width: 100,
                      align: "center",
                      dataIndex: "",
                      render:(value, record, index)  => 
                         (<>
                       
                        <Button onClick={() => {this.deleteTrims(record.key)}} type="text" block icon ={<DeleteOutlined/>} />
                        </>)
                      
                    },
                  ]}
                  dataSource={this.state.trimsData}
                  footer={() => <>Name</>}
                ></Table>
      </div>
    )
  }
}
