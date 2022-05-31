import { Row, Typography } from 'antd'
import React, { Component } from 'react'
import './Component.css'

export default class MenuGroup extends Component {
  render() {
    return (
        <div className='menu-group-container'>
            <Row className='menu-group-title-container'>
              <Typography.Title className='menu-group-title' level={3}>{this.props.title}</Typography.Title>
            </Row>
            <Row>
            {this.props.children}
            </Row>
        </div>
    
      
    )
  }
}
