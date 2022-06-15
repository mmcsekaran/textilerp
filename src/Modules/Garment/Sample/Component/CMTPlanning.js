import React, { Component } from 'react'

export default class CMTPlanning extends Component {

    handleChange = (data) =>
    {
        this.props.onChange(data)
    }

  render() {
    return (
      <div>CMTPlanning</div>
    )
  }
}
