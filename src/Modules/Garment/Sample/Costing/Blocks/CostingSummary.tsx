import { Form, Input, Typography } from "antd";
import React, { ChangeEventHandler, Component } from "react";
import Data from "../../../../Master/Data";

interface CostingSummaryProps {
  defaultValue?: CostingSummaryData ;
  accessories?:number,
  cmt?:number,
  transport?:number
  onChange?: (value: CostingSummaryData ) => void | undefined;
}
interface CostingSummaryData {
  digitalPrint: number;
  embroidery: number;
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
   
   
    
      const digitalPrint = v.digitalPrint ? parseFloat(v.digitalPrint) : 0;
      const embroidery = v.embroidery ? parseFloat(v.embroidery) : 0;
      const testing = v.testing ? parseFloat(v.testing) : 0;
      const acc =  this.state.data.accessories ? this.state.data.accessories : 0 ;
      const cmt = this.state.data.cmt ? this.state.data.cmt : 0 ;
      const transport = this.state.data.transport ? this.state.data.transport : 0 ;
     const garmentCost  = (digitalPrint+embroidery+testing+acc+cmt+transport);
     const gmtRejPer = v.gmtRejectionPercent ? parseFloat(v.gmtRejectionPercent) : 0 ;
     const adminPer = v.adminOHPercent ? parseFloat(v.adminOHPercent) : 0 ;
     const profitPer= v.profitPercent ?  parseFloat(v.profitPercent): 0 ;
     const commissionPer = v.commissionPercent ?  parseFloat(v.commissionPercent) :0 ;

      const gmtRejection = (garmentCost * (gmtRejPer/100));
      const adminOH = ((garmentCost+gmtRejection)*(adminPer/100));
      const profit  = ((garmentCost+gmtRejection+adminOH) * (profitPer/100));
      const commission  = ((garmentCost+gmtRejection+adminOH+profit) * (commissionPer/100));
      const total  = (garmentCost+gmtRejection+adminOH+profit+commission) ;
    

     
    this.setState({ ...this.state, data: 
    {
      digitalPrint:digitalPrint,
      embroidery:embroidery,
      testing:testing,
      garmentCost:garmentCost,
      gmtRejectionPercent:gmtRejPer,
      gmtRejection:gmtRejection,
      adminOHPercent:adminPer,
      adminOH:adminOH,
      profitPercent:profitPer,
      profit:profit,
      commissionPercent:commission,
      commission:commission,
      total:total,
      accessories:acc,
      cmt:cmt,
      transport:transport
    } }); 

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
        digitalPrint: 0,
        embroidery: 0,
        testing: 0,
        accessories: this.props.accessories ? this.props.accessories : 0,
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
      }  };
    
  }

  public static getDerivedStateFromProps(nextProps:CostingSummaryProps, prevState:SampleCostingSummaryState)
  {
    console.log(nextProps)
      
        return ({
          data:{...prevState,
            accessories:nextProps.accessories,
            cmt:nextProps.cmt,
            trasnport:nextProps.transport
          }
        })
      

      
  }

  render() {
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
                <th>Digital Print</th>
                <td></td>
                <td>
                  <Form.Item
                    noStyle
                    name='digitalPrint'
                    initialValue={this.state.data.digitalPrint}
                   >
                    <Input></Input>
                  </Form.Item>
                </td>
              </tr>
              <tr>
                <th>Emproidery</th>
                <td></td>
                <td>
                  <Form.Item
                    noStyle
                    name='embroidery'
                    initialValue={this.state.data?.embroidery}>
                    <Input></Input>
                  </Form.Item>
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
                    {this.state.data?.accessories}
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
                    {this.state.data?.transport?.toFixed(2)}
                  </Typography.Text>
                </td>
              </tr>
              <tr>
                <th>Garment Cost</th>
                <td>
                  <Form.Item
                    noStyle
                    name='garmentCost'
                    initialValue={this.state.data?.gmtRejection}>
                    <Input></Input>
                  </Form.Item>
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
                    initialValue={this.state.data?.gmtRejection}>
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
                    initialValue={this.state.data?.profit}>
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
                    initialValue={this.state.data?.commission}>
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
