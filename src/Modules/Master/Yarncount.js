import { Card, Col, Form, Input, PageHeader, Row, Select,Checkbox, Button, Modal,InputNumber, Avatar, Typography, } from "antd";
import { SmileOutlined, UserOutlined } from '@ant-design/icons';
import { Component, useEffect, useRef, useState} from "react";

const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };
  const tailLayout = {
    wrapperCol: {
      offset: 8,
      span: 16,
    },
  };

const useResetFormOnCloseModal = ({ form, visible }) => {
    const prevVisibleRef = useRef();
    useEffect(() => {
      prevVisibleRef.current = visible;
    }, [visible]);
    const prevVisible = prevVisibleRef.current;
    useEffect(() => {
      if (!visible && prevVisible) {
        form.resetFields();
      }
    }, [form, prevVisible, visible]);
  };
  
  const ModalForm = ({ visible, onCancel }) => {
    const [form] = Form.useForm();
    useResetFormOnCloseModal({
      form,
      visible,
    });
  
    const onOk = () => {
      form.submit();
    };
  
    return (
      <Modal title="Yarn Type" visible={visible} onOk={onOk} onCancel={onCancel}>
        <Form form={form} layout="vertical" name="userForm">
            <Form.Item 
            name= 'name'
            label='Yarn Type'
            >
                <Input />
            </Form.Item>
            <Form.Item
            name='checkbox'
            >
                <Checkbox>Active</Checkbox>
            </Form.Item>
        </Form>
      </Modal>
    );
  };

  const App = () => {
    const [visible, setVisible] = useState(false);
  
    const showUserModal = () => {
      setVisible(true);
    };
  
    const hideUserModal = () => {
      setVisible(false);
    };
  
    const onFinish = (values) => {
      console.log('Finish:', values);
    };
  
    return (
        <div style={{ paddingLeft: '15px' }}>
            <Row justify="center" align="middle">
        <Card>
      <Form.Provider
        onFormFinish={(name, { values, forms }) => {
          if (name === 'userForm') {
            const { basicForm } = forms;
            const users = basicForm.getFieldValue('users') || [];
            basicForm.setFieldsValue({
              users: [...users, values],
            });
            setVisible(false);
          }
        }}
      >
        <Form {...layout} name="basicForm" onFinish={onFinish}>
          <Form.Item
            name="group"
            label="Group Name"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Yarn Type"
            shouldUpdate={(prevValues, curValues) => prevValues.users !== curValues.users}
          >
            {({ getFieldValue }) => {
              const users = getFieldValue('users') || [];
              return users.length ? (
                <ul>
                  {users.map((user, index) => (
                    <li key={index} className="user">
                      
                      {user.name}   
                    </li>
                  ))}
                </ul>
              ) : (
                <Typography.Text className="ant-form-text" type="secondary">
                  ( <SmileOutlined /> No user yet. )
                </Typography.Text>
              );
            }}
          </Form.Item>
          <Form.Item {...tailLayout}>
            <Button htmlType="submit" type="primary">
              Submit
            </Button>
            <Button
              htmlType="button"
              style={{
                margin: '0 8px',
              }}
              onClick={showUserModal}
            >
              Yarn Type
            </Button>
          </Form.Item>
        </Form>
  
        <ModalForm visible={visible} onCancel={hideUserModal} />
      </Form.Provider>
      </Card>
      </Row>
      </div>
    );
  };

  export default App;
  
  

/*export default class
 extends Component {
     

    /*state = { visible: false }
    showModal = () => {
        this.setState({
        visible: true,
        });
    }
    handleOk = (e) => {
        console.log(e);
        this.setState({
        visible: false,
        });
    }
    handleCancel = (e) => {
        console.log(e);
        this.setState({
        visible: false,
        });
    }

    render() {
        return (
            <div>
                <PageHeader title='Yarn Count Master'></PageHeader>
                <div>
                    <div className='user-list-toolbar'>
                        <Button type="primary" onClick={this.showModal}>Yarn Type</Button>
                    </div>      
                    <Modal
                    title="Yarn Type"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    width={800}
                    style={{bottom:20,}}
                    >  
                        <Row justify='center' align='middle'>          
                            <Col span={15}>
                                <Form 
                                layout='vertical'
                                >
                                    <Form.Item 
                                    name={'yarn type'}
                                    label='Yarn Type'
                                    >
                                        <Input />
                                    </Form.Item>
                                    <Form.Item>
                                    <Checkbox>Active</Checkbox>
                                    </Form.Item>
                                </Form>
                            </Col>                            
                        </Row>           
                    </Modal>       
                </div>
                <div style={{ paddingLeft: '10px' }}>       
                    <Row justify="center" align="middle">
                        <Col xs={24} sm={16} md={16} xl={16}>   
                            <div className="yarn-card">
                                <Card 
                                 hoverable
                                >
                                    <Form 
                                    layout='vertical'                                    
                                   >
                                        <Row >
                                            <Col span ={12}>
                                                <Form.Item
                                                    name={'Counts*'}
                                                    label='Counts*'
                                                    >
                                                    <Select>
                                                        
                                                    </Select>
                                                </Form.Item>
                                            </Col>
                                            <Col span ={12}>
                                                <Form.Item
                                                    name={'Yarn Type*'}
                                                    label='Yarn Type*'
                                                    >
                                                    <Select>
                                                        
                                                    </Select>
                                                </Form.Item>
                                            </Col>
                                        </Row>
                                        <Form.Item
                                            name={'Composition*'}
                                            label='Composition*'
                                            >
                                            <Select>
                                                
                                            </Select>
                                        </Form.Item>
                                        <Form.Item
                                            name={'Yarn Counts'}
                                            label='Yarn Counts'
                                            >
                                                <Input size="medium" />
                                        </Form.Item>
                                        <Col span ={12}>
                                            <Form.Item
                                            name={'Tax Group*'}
                                            label='Tax Group*'
                                            >
                                                <Select />
                                            </Form.Item>
                                        </Col>                                        
                                        <Checkbox>Active</Checkbox>
                                    </Form>
                                </Card>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>            
        )
    }
}*/