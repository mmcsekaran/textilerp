
import { Form, Input, Typography } from 'antd'
import React, { ChangeEventHandler, Component } from 'react'
import Data from '../../../../Master/Data'




interface CostingSummaryProps {
    data?:CostingSummaryData | undefined  ,
    onChange?:(value:CostingSummaryData | undefined) => void | undefined
}
interface CostingSummaryData
{
    digitalPrint:number,
    embroidery:number,
    testing:number,
    accessories:number,
    cmt:number,
    transport:number,
    garment:number,
    gmtRejection:number,
    adminOH:{loss:number,cost:number}
    profit:{loss:number,cost:number}
    commission:{loss:number,cost:number}
    total: number 
}

interface CostingSummaryState
{
    data : CostingSummaryData | undefined
}

export default class CostingSummary extends Component<CostingSummaryProps,CostingSummaryState> {
    digitalPrintValueChange: ChangeEventHandler<HTMLInputElement> | undefined = (e) =>
    {
       const data = this.state.data ;
        
      
    }
    gmtRejectValueChange: ChangeEventHandler<HTMLInputElement> | undefined
    adminOHValueChange: ChangeEventHandler<HTMLInputElement> | undefined
    profitValueChange: ChangeEventHandler<HTMLInputElement> | undefined
    commissionValueChange: ChangeEventHandler<HTMLInputElement> | undefined

    calculateNewValue:()=> void = () =>
    {
        
    }
    onValueChange: ((changedValues: any, values: any) => void) | undefined = e =>
    {
        console.log(e)
    }

    constructor(props:CostingSummaryProps)
    {
        super(props);

        this.state ={
            data : this.props.data
        }
    }

  render() {
    return (
      <div>
        <div className="summary-costing">
            <Form onValuesChange={this.onValueChange}>
                  <table className="summary-costing">
                    <tr>
                      <th style={{ width: "80px" }}>Summary</th>
                      <th style={{ width: "80px" }}></th>
                      <th style={{ width: "120px" }}>Cost</th>
                    </tr>

                    <tr>
                      <th>Digital Print</th>
                      <td></td>
                      <td>
                        <Form.Item noStyle name='digitalPrint' initialValue = {this.state.data?.digitalPrint} >
                              <Input></Input>
                        </Form.Item>
                      
                      </td>
                    </tr>
                    <tr>
                      <th>Emproidery</th>
                      <td></td>
                      <td>
                      <Form.Item noStyle name='embroidery' initialValue = {this.state.data?.embroidery} >
                        <Input></Input>
                        </Form.Item>
                      </td>
                    </tr>
                    <tr>
                      <th>Testing</th>
                      <td></td>
                      <td>
                      <Form.Item noStyle name='testing' initialValue = {this.state.data?.testing} >
                        <Input></Input>
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
                        {this.state.data?.cmt}
                        </Typography.Text>
                      </td>
                    </tr>
                    <tr>
                      <th>Transport</th>
                      <td></td>
                      <td style={{ padding: "5px", textAlign: "right" }}>
                        <Typography.Text strong style={{ color: "white" }}>
                        {this.state.data?.transport}
                        </Typography.Text>
                      </td>
                    </tr>
                    <tr>
                      <th>Garment Cost</th>
                      <td>
                      <Form.Item noStyle name='gmtRejection' initialValue = {this.state.data?.gmtRejection} >
                        <Input></Input>
                        </Form.Item>
                      </td>
                      <td style={{ padding: "5px", textAlign: "right" }}>
                        <Typography.Text strong style={{ color: "white" }}>
                        {}
                        </Typography.Text>
                      </td>
                    </tr>
                    <tr>
                      <th>GMT Rejection</th>
                      <td>
                      <Form.Item noStyle name='gmtRejection' initialValue = {this.state.data?.gmtRejection} >
                        <Input></Input>
                        </Form.Item>
                      </td>
                      <td style={{ padding: "5px", textAlign: "right" }}>
                        <Typography.Text strong style={{ color: "white" }}>
                          0.00
                        </Typography.Text>
                      </td>
                    </tr>
                    <tr>
                      <th>Admin & OHS</th>{" "}
                      <td>
                      <Form.Item noStyle name='adminOH' initialValue = {this.state.data?.adminOH} >
                        <Input></Input>
                        </Form.Item>
                      </td>
                      <td style={{ padding: "5px", textAlign: "right" }}>
                        <Typography.Text strong style={{ color: "white" }}>
                          0.00
                        </Typography.Text>
                      </td>
                    </tr>
                    <tr>
                      <th>Profit</th>{" "}
                      <td>
                      <Form.Item noStyle name='profit' initialValue = {this.state.data?.profit} >
                        <Input></Input>
                        </Form.Item>
                      </td>
                      <td style={{ padding: "5px", textAlign: "right" }}>
                        <Typography.Text strong style={{ color: "white" }}>
                          0.00
                        </Typography.Text>
                      </td>
                    </tr>
                    <tr>
                      <th>Commission</th>{" "}
                      <td>
                      <Form.Item noStyle name='commission' initialValue = {this.state.data?.commission} >
                        <Input></Input>
                        </Form.Item>
                      </td>
                      <td style={{ padding: "5px", textAlign: "right" }}>
                        <Typography.Text strong style={{ color: "white" }}>
                          0.00
                        </Typography.Text>
                      </td>
                    </tr>

                    <tr>
                      <th>Total</th>
                      <td></td>
                      <td style={{ padding: "5px", textAlign: "right" }}>
                        <Typography.Text strong style={{ color: "white" }}>
                          0.00
                        </Typography.Text>
                      </td>
                    </tr>
                  </table>
                  </Form>
                </div>
      </div>
    )
  }
}
