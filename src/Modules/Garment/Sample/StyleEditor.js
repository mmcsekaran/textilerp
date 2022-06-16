import { Button, Form } from 'antd'
import React, { Component } from 'react'
import ComboEditor from './ComboEditor'
import ProcessPlan from './ProcessPlan'

export default class StyleEditor extends Component {

   constructor(props)
   {
    super(props);
    this.state = {
      data :null
    }
   }
  
  render() {
    return (
      <div>
        <Button onClick={()=>{
          this.setState({data:100})
        }}>Add</Button>
        <ProcessPlan data = {this.state.data} ></ProcessPlan>
      </div>
    )
  }
}
