import React, { Component } from 'react'
import StyleEditor from './StyleEditor';
export interface SampleCostingProps
{
    costingNo:number;
}
export default class SampleCosting extends React.Component<SampleCostingProps> {



  render() {
    return (
      <div><StyleEditor></StyleEditor></div>
    )
  }
}
