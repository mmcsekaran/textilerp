import { Input, Select,Form, Card} from 'antd'
import TextArea from "antd/lib/input/TextArea";
import React, { Component } from 'react'

export default class Addresscomponent extends Component {
  render() {
    return (<>
    
      <Form
       >

          <Form.Item
          label={'Address'}
          >
              <TextArea />
          </Form.Item>
          <Form.Item
          label={'City'}
          >
              <Select />
          </Form.Item>
          <Form.Item
          label={'State'}
          >
              <Select />
          </Form.Item>
          <Form.Item
          label={'PinCode'}
          >
              <Input />
          </Form.Item>

          <Form.Item
          label={'Country'}
          >
              <Select />
          </Form.Item>
      </Form>
      
      </>
    )
  }
}
