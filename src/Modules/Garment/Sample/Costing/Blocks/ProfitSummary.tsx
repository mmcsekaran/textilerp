import { Form, Input, Typography } from 'antd'
import React, { Component } from 'react'
import { Button } from 'antd';
import {CostingSummaryData} from './CostingSummary';



export type profitSummaryProps =
{
    costingSummary:CostingSummaryData
}

export type profitSummaryType = {
exchangeRate:number,
rateOfPcsUSD:number,
noofpcs:number,
rateOfPackUSD:number,
buyerTarget:profitPercentData,
percentages:Array<profitPercentData>,
costingSummary:CostingSummaryData
}

export type profitPercentData =
{
    percentage:number,
    marginPerPCS:number,
    pcsRateINR:number,
    pcsRateFC:number,
    packRateINR:number,
    packRateFC:number
    isTarget?:boolean
}



export default class ProfitSummary extends Component<profitSummaryProps,profitSummaryType>{

    constructor(props:profitSummaryProps)
    {
        super(props);

        this.state = 
        {
            exchangeRate:0,
            rateOfPackUSD:0,
            noofpcs:0,
            rateOfPcsUSD:0,
            buyerTarget:{
              percentage:5,
              marginPerPCS:0,
              pcsRateFC:0,
              pcsRateINR:0,
              packRateFC:0,
              packRateINR:0,
              isTarget:false
          },
            costingSummary:this.props.costingSummary,
            
            percentages:[
                {
                    percentage:5,
                    marginPerPCS:0,
                    pcsRateFC:0,
                    pcsRateINR:0,
                    packRateFC:0,
                    packRateINR:0,
                    isTarget:false
                },
                {
                    percentage:10,
                    marginPerPCS:0,
                    pcsRateFC:0,
                    pcsRateINR:0,
                    packRateFC:0,
                    packRateINR:0,
                    isTarget:false
                },
                {
                    percentage:15,
                    marginPerPCS:0,
                    pcsRateFC:0,
                    pcsRateINR:0,
                    packRateFC:0,
                    packRateINR:0,
                    isTarget:false
                },
                {
                    percentage:20,
                    marginPerPCS:0,
                    pcsRateFC:0,
                    pcsRateINR:0,
                    packRateFC:0,
                    packRateINR:0,
                    isTarget:false
                },
                {
                    percentage:25,
                    marginPerPCS:0,
                    pcsRateFC:0,
                    pcsRateINR:0,
                    packRateFC:0,
                    packRateINR:0,
                    isTarget:false
                },
                {
                    percentage:30,
                    marginPerPCS:0,
                    pcsRateFC:0,
                    pcsRateINR:0,
                    packRateFC:0,
                    packRateINR:0,
                    isTarget:false
                },
                {
                    percentage:35,
                    marginPerPCS:0,
                    pcsRateFC:0,
                    pcsRateINR:0,
                    packRateFC:0,
                    packRateINR:0,
                    isTarget:false
                },
            ]
            
        }

    }



  onValuesChanges = (_:any,values:any) =>
  {
    console.log(values)
    const data = {...this.state} ;

    data.exchangeRate = parseFloat(values.exchangeRate);
    data.noofpcs = parseFloat(values.noofpcs);
    data.rateOfPcsUSD = data.costingSummary.total / data.exchangeRate ;
    data.rateOfPackUSD = data.rateOfPcsUSD * data.noofpcs ;
    const percentages = [...data.percentages]
    const garmentCost =(data.costingSummary.garmentCost+data.costingSummary.gmtRejection+data.costingSummary.adminOH);
    data.percentages.forEach((percent,index) =>
        {
            
            percent.marginPerPCS = garmentCost * ( percent.percentage * (1/100));
            percent.pcsRateINR = garmentCost + percent.marginPerPCS ;
            percent.pcsRateFC = percent.pcsRateINR / data.exchangeRate;
            percent.packRateFC = percent.pcsRateFC * data.noofpcs
            percent.packRateINR = percent.pcsRateINR * data.noofpcs
  
            percentages.splice(index,1,percent);

        })

        data.percentages = percentages ;
        console.log(data)
        this.setState({...this.state,...data});

  }
  render() {
    return (
      <div>
        <Form onValuesChange = {this.onValuesChanges} >
        <div className="profit-summary">
            
                  <table className="profit-summary">
                    <thead>
                      <tr>
                        <th colSpan={2}>Exchange Rate</th>
                        <th colSpan={2}>Per PCS</th>
                        <th>PCS/PK</th>
                        <th colSpan={2}>Pack</th>
                      </tr>{" "}
                    </thead>
                    <tbody>
                      <tr>
                        <td colSpan={2}>
                            <Form.Item initialValue={1} name={'exchangeRate'} noStyle>
                                 <Input></Input>
                            </Form.Item>
                         
                        </td>
                        <td colSpan={2}>
                        <Typography.Text strong style={{ color: "white" }}>
                            {this.state.rateOfPcsUSD.toFixed(2)}
                        </Typography.Text>
                        </td>
                        <td>
                            <Form.Item initialValue={1} noStyle name={"noofpcs"} >
                                <Input></Input>
                            </Form.Item>
                         
                        </td>
                        <td colSpan={2}>
                        <Typography.Text strong style={{ color: "white" }}>
                            {this.state.rateOfPackUSD.toFixed(2)}
                        </Typography.Text>
                        </td>
                      </tr>
                      <tr>
                        <th rowSpan={2} colSpan={2}>
                          Buyer Quote
                        </th>
                        <th colSpan={2}>Offered</th>
                        <th colSpan={2}>Target</th>
                        <th colSpan={2}>Differece</th>
                      </tr>
                      <tr>
                        <th colSpan={2}>
                        <Typography.Text strong style={{ color: "white" }}>
                            {(this.state.costingSummary.total/this.state.exchangeRate).toFixed(2)}
                        </Typography.Text>
                        </th>
                        <th colSpan={2}>
                        <Typography.Text strong style={{ color: "white" }}>
                            {this.state.buyerTarget.packRateFC.toFixed(2)}
                        </Typography.Text>
                        </th>
                        <th colSpan={2}>
                        <Typography.Text strong style={{ color: "white" }}>
                            {(this.state.costingSummary.total - this.state.buyerTarget.packRateFC).toFixed(2)}
                        </Typography.Text>
                        </th>
                      </tr>
                      <tr>
                        <th colSpan={2}>Percentage</th>
                        <th>Margin/PC</th>
                        <th>INR/PC</th>
                        <th>USD/PC</th>
                        <th colSpan={2}>USD/Pack</th>
                      </tr>
                      {
                        this.state.percentages.map
                        (
                            percent =>
                            {
                                return (
                                    <tr>
                                    <th colSpan={2}>{`${percent.percentage} %`}</th>
                                    <th>{percent.marginPerPCS.toFixed(2)}</th>
                                    <th>{percent.pcsRateINR.toFixed(2)}</th>
                                    <th>{percent.pcsRateFC.toFixed(2)}</th>
                                    <th colSpan={2}>{percent.packRateFC.toFixed(2)}</th>
                                    <th><a style={{color :'gold'}} onClick ={()=>
                                    {
                                      this.setBuyerTarget(percent);
                                    }} >Set Target</a></th>
                                  </tr>
                                )
                            }
                        )
                      }
                     
                     
                    </tbody>
                  </table>
                </div>
        </Form>
        
      </div>
    )
  }
  setBuyerTarget = (percent: profitPercentData) => {
    
      this.setState({buyerTarget:percent})
  }

  public static getDerivedStateFromProps(nextProps:profitSummaryProps, prevState:profitSummaryType)
  {
    console.log(nextProps)
      
        return ({
          ...prevState,
            costingSummary:nextProps.costingSummary
          
        })
      

      
  }
}
