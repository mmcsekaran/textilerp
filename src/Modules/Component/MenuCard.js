import { Card,Descriptions,Image, Typography,Row, Col } from 'antd'
import Avatar from 'antd/lib/avatar/avatar'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../logo.svg'
import './Component.css'
export default class MenuCard extends Component {
  render() {
    return (< div className ='menu-card-container'>


      <Link to ={this.props.link?this.props.link:""}>
      <div  className='menu-card'
          >
            <Row className='menu-card-image-container'   align ='middle' justify='center'>
            <Image className='menu-card-image'  src={this.props.image} preview={false}></Image>
            </Row>

            <Row >
              <Col>
              <Row style={{height:'100%',paddingLeft:'5px'}} align='middle' >

              <Typography.Text strong className='menu-card-title'  level={3}>{this.props.title}</Typography.Text>
              </Row>
               </Col>
            </Row>
     
       
        </div>
        </Link>
      </ div>
    )
  }
}
