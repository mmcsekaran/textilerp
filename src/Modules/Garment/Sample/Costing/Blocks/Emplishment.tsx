import { DeleteOutlined } from '@ant-design/icons'
import { Button, message, Modal, Table, Typography } from 'antd'
import React, { Component } from 'react'
import { EmplishmentCostingFormData, showEditor } from './EmplishmentEditor'

type EmplishmentProps =
{
  data?:Array<EmplishmentCostingFormData> | []
  onChange?:(value:EmplishmentType) => void
}
export type EmplishmentType =
{
  data:Array<EmplishmentCostingFormData>,
  total:number

}

export default class Emplishment extends Component<EmplishmentProps,EmplishmentType> {

  //#region finction
  addEmplishment = (
    oldvalue: EmplishmentCostingFormData,
    value: EmplishmentCostingFormData
  ) => {
    const empData = [...this.state.data];
    console.log(empData);
    let val: EmplishmentCostingFormData = {
      id: -1,
      key: "",
      comboName: "",
      componentName: "",
      portion: "",
      emplishment: "",
      empRate: 0,
    };
    Object.assign(val, value);
    const dupKey = this.state.data.findIndex(
      (p) => p.key === val.key && val.id === -1
    );
    
    
    console.log(dupKey);

    if (dupKey > -1) {
      message.error("Error");
    } else {
      if (val.id === -1) {
        val.id = empData.length;
        empData.push(val);
      } else {
        empData.splice(val.id, 1, val);
      }
     
    }
    this.updateValue({...this.state,data:empData})
  };
  removeEmplishment = (key: React.Key) => {
    Modal.confirm({
      title: "Delete Emplishment",
      centered: true,
      onOk: () => {
        const cmtData = this.state.data.filter((d) => d.key != key);

        this.updateValue({...this.state,data:cmtData})
      },
    });
  };

  updateValue = (value:EmplishmentType) =>
  {
    const data = [...value.data] ;

    var total = 0 ;
    data.forEach(e =>
      {
        total = total + parseFloat(e.empRate.toString()) ;
      })

      const _value = {...value,total:total}

      this.setState(_value)
     if(this.props.onChange) this.props.onChange(_value);
  } 

  //#endregion


    constructor(props:EmplishmentProps)
    {
        super(props)
        this.state = 
        {
          data : [],
          total:0
        }

    }

    
    render() {
    return (
      <div>

<Table
                  pagination={false}
                  title={() => (
                    <>
                      <Typography.Text strong style={{ fontSize: "14pt" }}>
                        Emplishments
                      </Typography.Text>
                      <Button
                        onClick={() => {
                          // this.setState({showEmpEditor:{visible:true,value:undefined}})

                          showEditor({
                            visible: true,
                            onCancel: () => {},
                            onSave: this.addEmplishment,
                          });
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
                      title: "Portion",
                      width: 120,
                      align: "left",
                      dataIndex: "portion",
                    },
                    {
                      title: "Emplishments",
                      align: "left",
                      dataIndex: "emplishment",
                      render: (value, record, index) => {
                        return (
                          <Button
                            type="link"
                            onClick={() => {
                              showEditor({
                                visible: true,
                                onCancel: () => {},
                                onSave: this.addEmplishment,
                                value: record,
                              });
                            }}
                          >
                            {value}
                          </Button>
                        );
                      },
                    },
                    {
                      title: "Rate",
                      width: 80,
                      align: "left",
                      dataIndex: "empRate",
                    },
                    {
                      title: "",
                      width: 80,
                      align: "center",
                      dataIndex: "action",
                      render: (value, record, index) => {
                        return (
                          <>
                            <Button
                              onClick={() => {
                                this.removeEmplishment(record.key);
                              }}
                              type="text"
                              block
                              icon={<DeleteOutlined />}
                            ></Button>
                          </>
                        );
                      },
                    },
                  ]}
                  dataSource={this.state.data}
                  footer={() => <>Name</>}
                ></Table>
      </div>
    )
  }
 
}
