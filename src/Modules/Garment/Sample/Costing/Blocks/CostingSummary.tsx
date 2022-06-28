import { Form, Input, Typography } from "antd";
import React, { ChangeEventHandler, Component } from "react";
import Data from "../../../../Master/Data";

interface CostingSummaryProps {
  defaultValue?: CostingSummaryData ;
  accessories?:number,
  cmt?:number,
  transport:number,
  emplishment?:number
  onChange?: (value: CostingSummaryData ) => void | undefined;
}
export interface CostingSummaryData {
  
  emplishment: number;
  testing: number;
  accessories: number;
  cmt: number;
  transport: number;
  garmentCost: number;
  gmtRejection: number;
  adminOH: number;
  profit: number;
  commission: number;
  gmtRejectionPercent: number;
  adminOHPercent: number;
  profitPercent: number;
  commissionPercent: number;
  total: number;
}

interface SampleCostingSummaryState {
  data: CostingSummaryData;
}

export default class CostingSummary extends Component<
  CostingSummaryProps,
  SampleCostingSummaryState
> {

  onValueChange: ((changedValues: any, values: any) => void)  = (
    e , v
  ) => {
   
   

     const data = this.state.data ;
        
     data.testing = parseFloat(v.testing);
     data.garmentCost = data.emplishment + data.testing + data.accessories+data.transport
     data.gmtRejectionPercent = parseFloat(v.gmtRejectionPercent);
     data.gmtRejection = data.garmentCost * (data.gmtRejectionPercent *(1/100))
     data.adminOHPercent = parseFloat(v.adminOHPercent);
     data.adminOH = (data.garmentCost+data.gmtRejection) * (data.adminOHPercent*(1/100));
     data.profitPercent = parseFloat(v.profitPercent);
     data.profit = (data.garmentCost+data.gmtRejection+data.adminOH) * (data.profitPercent * (1/100));
     data.commissionPercent = parseFloat(v.commissionPercent);
     data.commission = (data.garmentCost+data.gmtRejection+data.adminOH+data.profit) * (data.commissionPercent * (1/100));
     data.total = (data.garmentCost+data.gmtRejection+data.adminOH+data.profit+data.commission);

      console.log(data)
     
    this.setState({ ...this.state,data:{...data}}); 

    if(this.props.onChange) this.props.onChange(this.state.data)

    
  };

  public static defaultProps = {
    data: {
      digitalPrint: 0,
      embroidery: 0,
      testing: 0,
      accessories: 0,
      cmt: 0,
      transport: 0,
      garmentCost: 0,
      gmtRejection: 0,
      adminOH: 0,
      profit: 0,
      commission: 0,
      gmtRejectionPercent: 0,
      adminOHPercent: 0,
      profitPercent: 0,
      commissionPercent: 0,
      total: 0,
    },
  }

  constructor(
    props: CostingSummaryProps 
  ) {
    super(props);

   
      this.state = { data:{
        
        emplishment: props.emplishment ? props.emplishment :0 ,
        testing: 0,
        accessories: this.props.accessories ? this.props.accessories : 0,
        cmt: this.props.cmt ? this.props.cmt : 0,
        transport: this.props.transport ? this.props.transport : 0,
        garmentCost: 0,
        gmtRejection: 0,
        adminOH: 0,
        profit: 0,
        commission: 0,
        gmtRejectionPercent: 0,
        adminOHPercent: 0,
        profitPercent: 0,
        commissionPercent: 0,
        total: 0
      }  };
    
      console.log(this.state)
  }

  public static getDerivedStateFromProps(nextProps:CostingSummaryProps, prevState:SampleCostingSummaryState)
  {
    console.log(nextProps)
      
        return ({
          ...prevState,
            data:{...prevState.data,
            accessories:nextProps.accessories,
            cmt:nextProps.cmt,
            transport:nextProps.transport,
            emplishment:nextProps.emplishment
            }
        })
      

      
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <div className='summary-costing'>
          <Form onValuesChange={this.onValueChange}
          name={"sammary"}
          >
            <table className='summary-costing'>
              <tr>
                <th style={{ width: "80px" }}>Summary</th>
                <th style={{ width: "80px" }}></th>
                <th style={{ width: "120px" }}>Cost</th>
              </tr>

             
              <tr>
                <th>Emplishement</th>
                <td></td>
                <td style={{ padding: "5px", textAlign: "right" }}>
                <Typography.Text strong style={{ color: "white" }}>
                    {this.state.data?.emplishment.toFixed(2)}
                  </Typography.Text>
                </td>
              </tr>
              <tr>
                <th>Testing</th>
                <td></td>
                <td>
                  <Form.Item
                    noStyle
                    name='testing'
                    initialValue={this.state.data?.testing}>
                    <Input type={'number'}></Input>
                  </Form.Item>
                </td>
              </tr>
              <tr>
                <th>Accessories</th>
                <td></td>
                <td style={{ padding: "5px", textAlign: "right" }}>
                  <Typography.Text strong style={{ color: "white" }}>
                    {this.state.data?.accessories.toFixed(2)}
                  </Typography.Text>
                </td>
              </tr>
              <tr>
                <th>CMT</th>
                <td></td>
                <td style={{ padding: "5px", textAlign: "right" }}>
                  <Typography.Text strong style={{ color: "white" }}>
                    {this.state.data?.cmt?.toFixed(2)}
                  </Typography.Text>
                </td>
              </tr>
              <tr>
                <th>Transport</th>
                <td></td>
                <td style={{ padding: "5px", textAlign: "right" }}>
                  <Typography.Text strong style={{ color: "white" }}>
                    {
                      this.state.data?.transport?.toFixed(2)
                    }
                  </Typography.Text>
                </td>
              </tr>
              <tr>
                <th>Garment Cost</th>
                <td>
                
                </td>
                <td style={{ padding: "5px", textAlign: "right" }}>
                  <Typography.Text strong style={{ color: "white" }}>
                    {this.state.data.garmentCost?.toFixed(2) }
                  </Typography.Text>
                </td>
              </tr>
              <tr>
                <th>GMT Rejection</th>
                <td>
                  <Form.Item
                    noStyle
                    name='gmtRejectionPercent'
                    initialValue={this.state.data?.gmtRejectionPercent}>
                    <Input></Input>
                  </Form.Item>
                </td>
                <td style={{ padding: "5px", textAlign: "right" }}>
                  <Typography.Text strong style={{ color: "white" }}>
                    {this.state.data.gmtRejection?.toFixed(2)}
                  </Typography.Text>
                </td>
              </tr>
              <tr>
                <th>Admin & OHS</th>{" "}
                <td>
                  <Form.Item
                    noStyle
                    name='adminOHPercent'
                    initialValue={this.state.data?.adminOH}>
                    <Input></Input>
                  </Form.Item>
                </td>
                <td style={{ padding: "5px", textAlign: "right" }}>
                  <Typography.Text strong style={{ color: "white" }}>
                    {this.state.data.adminOH?.toFixed(2)}
                  </Typography.Text>
                </td>
              </tr>
              <tr>
                <th>Profit</th>{" "}
                <td>
                  <Form.Item
                    noStyle
                    name='profitPercent'
                    initialValue={this.state.data?.profitPercent}>
                    <Input></Input>
                  </Form.Item>
                </td>
                <td style={{ padding: "5px", textAlign: "right" }}>
                  <Typography.Text strong style={{ color: "white" }}>
                    {this.state.data.profit?.toFixed(2)}
                  </Typography.Text>
                </td>
              </tr>
              <tr>
                <th>Commission</th>{" "}
                <td>
                  <Form.Item
                    noStyle
                    name='commissionPercent'
                    initialValue={this.state.data?.commissionPercent}>
                    <Input></Input>
                  </Form.Item>
                </td>
                <td style={{ padding: "5px", textAlign: "right" }}>
                  <Typography.Text strong style={{ color: "white" }}>
                    {this.state.data.commission?.toFixed(2)}
                  </Typography.Text>
                </td>
              </tr>

              <tr>
                <th>Total</th>
                <td></td>
                <td style={{ padding: "5px", textAlign: "right" }}>
                  <Typography.Text strong style={{ color: "white" }}>
                    {this.state.data.total?.toFixed(2)}
                  </Typography.Text>
                </td>
              </tr>
            </table>
          </Form>
        </div>
      </div>
    );
  }
}
