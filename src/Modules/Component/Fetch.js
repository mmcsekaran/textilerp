import React, { Component } from 'react'
import { APIContext } from '../../component/API/APIProvider'

export default class Fetch extends Component {
    static contextType = APIContext



  render() {
    return (
      this.props.render && this.props.render(this.state)
    )
  }
}


