import { DeleteOutlined } from '@ant-design/icons';
import { Table, Typography, Button, message, Modal, Form, Input } from 'antd';
import React, { Component } from 'react'
import { CMTCostingEditorComponent, CMTCostingFormData, ModalEditor } from './CMTCostingEditor';
import TrimsCostingEditor, { TrimsCostingFormData } from './TrimsCostingEditor';


export interface CMTCost {
  cmtData: Array<CMTCostingFormData>,
  total: number,
  profit:number
  subTotal:number
}


export type actionType = 'add' | 'update' | 'delete'
type trimData = TrimsCostingFormData | undefined
interface CMTCostProps {
  data?: Array<CMTCostingFormData>,
  onChange?: (value?: CMTCost) => void
}
export default class CMTCosting extends React.Component<CMTCostProps, CMTCost>  {

   //#region function 
  calculateNewValue = (costing: CMTCost) => {

    
    var subtotal:number = 0 ;
   costing.cmtData.forEach(element => {

      subtotal = parseFloat(subtotal.toString()) + parseFloat(element.cmtRate.toString());

    });
    costing.subTotal = subtotal ;
    costing.total = subtotal + (subtotal * (costing.profit/100));
    
    this.triggerChanges(costing)
  }


  constructor(props: CMTCostProps) {
    super(props)

    this.state = {
      cmtData: this.props.data ? this.props.data : [],
      total: 0,
      subTotal:0,
      profit:0
    }
  }

  addCmt = (value:CMTCostingFormData) => {
    const cmtData = [...this.state.cmtData];

    console.log(value)

    console.log(cmtData);
    let val: CMTCostingFormData = {
      id: -1,
      key: "",
      comboName: "",
      componentName: "",
      cmtName: "",
      cmtRate: 0,
    };
    value.key = value.comboName.toString()+value.componentName.toString()+value.cmtName.toString() ;
    Object.assign(val, value);
    const dupKey = this.state.cmtData.findIndex(
      (p) => p.key === val.key && val.id === -1
    );

    console.log(dupKey);

    if (dupKey > -1) {
      message.error("Error");
    } else {
      if (val.id === -1) {
        val.id = cmtData.length;
        cmtData.push(val);
      } else {
        cmtData.splice(val.id, 1, val);
      }
    }
    console.log(cmtData)
    this.calculateNewValue({...this.state,cmtData:cmtData}) ;

  };

  triggerChanges = (value: CMTCost) => {

      console.log(value)
    this.setState({ ...this.state, ...value })
    if (this.props.onChange) this.props.onChange(value);


  }

  deleteCmts = (key: React.Key) => {
    Modal.confirm({
      title: "Delete CMT - ",
      centered: true,
      onOk: () => {
        const cmtData = this.state.cmtData.filter((d) => d.key != key);

        this.calculateNewValue({...this.state,cmtData})
      },
    });
  };
//#endregion
  

  render() {
    return (
    <div>
         <Table
                  pagination={false}
                  title={() => (
                    <>
                      <Typography.Text strong style={{ fontSize: "14pt" }}>
                        CMT Details
                      </Typography.Text>
                      <Button
                        onClick={() => {
                            ModalEditor.open(
                                {
                                    onOk:(value) => {
                                      console.log(value)
                                      this.addCmt(value)
                                    },
                                    content:<CMTCostingEditorComponent></CMTCostingEditorComponent>,
                                    
                                }
                            )
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
                      title: "CMT",
                      align: "left",
                      dataIndex: "cmtName",
                    },
                    {
                      title: "Rate",
                      width: 80,
                      align: "right",
                      dataIndex: "cmtRate",
                    },
                    {
                      title: "",
                      width: 80,
                      align: "left",
                      dataIndex: "action",
                      render: (value, record, index) => {
                        return (
                          <>
                            <Button
                              type="text"
                              onClick={() => {
                                this.deleteCmts(record.key);
                              }}
                              block
                              icon={<DeleteOutlined />}
                            ></Button>
                          </>
                        );
                      },
                    },
                  ]}
                  dataSource={this.state.cmtData}
                  footer={()=>  <Input onChange={(e) => this.calculateNewValue({...this.state,profit:parseFloat(e.target.value)})} type='number'></Input>}
                ></Table>
             
    </div>
    )
  }
}


