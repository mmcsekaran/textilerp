import { Button } from 'antd'
import React, { Component } from 'react'

export default class ToolBar extends Component {
  render() {
    return (
      <div>
          <Button onClick={(e) =>
          {
            if(this.props.onSave)
            this.props.onSave(e)} } >Save</Button>
          <Button  >Save</Button>
          <Button  >Save</Button>
          <Button  >Save</Button>
          <Button >Save</Button>
      </div>
    )
  }
}
