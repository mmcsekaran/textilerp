import { Button, Form } from 'antd'
import { Input } from 'antd'
import { Modal } from 'antd'
import React, { Component } from 'react'

export default class UserRegistrationForm extends Component {
  render() {
    return (
      <div>
          <Modal
          visible = {true}
          centered
          title ="User Registration"
          footer ={[]}
          >
              <Form
              layout='vertical'
              
              >
                  <Form.Item
                  label ="UserName"
                  >
                      <Input type='text'></Input>
                  </Form.Item>
                  <Form.Item
                  label ="Pawword"
                  >
                      <Input type='text'></Input>
                  </Form.Item>
                  <Form.Item
                  label ="Confirm Password"
                  >
                      <Input type='text' ></Input>
                  </Form.Item>
                    <Button type='submit' style={{float:'right'}}>
                        Register
                    </Button>
              </Form>

          </Modal>
      </div>
    )
  }
}
