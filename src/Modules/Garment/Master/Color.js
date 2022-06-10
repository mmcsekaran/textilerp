import { Button, Form, Input, Steps } from 'antd'
import React, { Component } from 'react'

export default class Color extends Component {

  constructor(props)
  {
    super(props)
    this.state ={
      step:0
    }
  }

  steps = [
    {
      title:"Basic Details",
      content:<>
      <Button>Gdjsg</Button>
      </>

    },
    {
      title:"Basic Details",
      content:<>
      <Button>gee</Button>
      </>

    }
  ]

  render() {
    return (<>
      <Steps current = {this.state.step}>
        {this.steps.map(step =>
          
            <Steps.Step key={step.title} title = {step.title} />
          )}
      </Steps>
    
    
      <>{this.steps[this.state.step].content}</>
    
      

      <Button onClick={() => this.setState({step:this.state.step+1})}  >Next</Button>
      </>
    )
  }
}
