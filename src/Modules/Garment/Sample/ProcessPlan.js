import { Button, Col, Form, Input, message, Row, Select, Space, Table, Typography } from 'antd'
import React, { Component } from 'react'

export default class ProcessPlan extends Component {

  form = React.createRef();

  constructor(props)
  {
    super(props);

    this.state = {
      processes:[]
    }
  }


  addProcess = (process) =>
  {
    const processes = [...this.state.processes] ;

    if(process && process.proname && process.prorate && process.proloss)
    {

    
    if(processes.some(e => e.proname === process?.proname))
    {
      message.error(`${process?.proname} already exists`)
      return
    }
    processes.push(process);

    this.setState({processes:processes})
  }
  
    
  }

  componentDidUpdate(prevState,prevProps)
  {
    console.log(prevProps,prevState)
  }

  componentWillReceiveProps(nextProps)
  {
    
  }
  render() {
    return (
      <div>
       
        <Table
        title={() =>
          <>
          <Typography.Title level={5}>Process</Typography.Title>
          <Form
           onFinish={ this.addProcess}
           ref = {this.form}
         

          >
          
              <Row gutter={12}>
                <Col span={6}>
                <Form.Item name={'proname'} >
              <Select style={{width:'100%'}}>
                <Select.Option key={"yarn"}>Yarn</Select.Option>
                <Select.Option key={"fabric"} >Fabric</Select.Option>
                <Select.Option key={"Dyeing"}>Dyeing</Select.Option>
                <Select.Option key={"print"}>Print</Select.Option>
                <Select.Option key={"compacting"}>Compacting</Select.Option>
              </Select>
            </Form.Item>
                </Col>
                <Col>
                <Form.Item name = {'proloss'}>
              <Input></Input>
            </Form.Item>
                </Col>
                <Col>
                <Form.Item  name={'prorate'}>
              <Input></Input>
            </Form.Item>
                </Col>
                <Col>
                <Button type='primary' htmlType='submit'>Add Process</Button>
                </Col>
              </Row>

            
            
            
          </Form>
          </>
        }

        dataSource ={this.state.processes}
        columns = {[
          {
            title :'Process',
            dataIndex:'proname',
            key:'proname'          },
          {
            title :'Loss',
            dataIndex:'proloss',
            key:'proloss'          },
          {
            title :'Rate',
            dataIndex:'prorate',
            key:'prorate'          }
        ]}
        >
         
        </Table>
      </div>
    )
  }
}
