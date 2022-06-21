import React, { Component } from 'react'
import FabricPlan from './FabricPlan'
import { Button, Divider, Input } from 'antd';



export default class PortionEditor extends Component {

  renderComp = () =>
  {
    switch(this.props.type)
    {
      case 'yarn':
        return <div><Input></Input>This is Yarn</div>
      case 'fabric':
        return <div><Input></Input>This is Faric</div>
    
     default:
        return <div><Input></Input>This is unknown</div>
    }
  }

  render() {
    
       return (
        <>
         
         { 
          this.renderComp()
        } </>
    )
      }
   
}
