import React, { Component } from 'react'

export default class CostingPrint extends Component {
  render() {
    console.log(this.props)
    return (
      <div id='costingPrint' style={{height:'290mm',width:'210mm',background:'white'}}>CostingPrint</div>
    )
  }
}
