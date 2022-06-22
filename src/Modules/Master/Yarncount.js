import { Col, Input, Select, Typography, Form, Row, Card, Checkbox, PageHeader, Button, Modal, Space} from 'antd';
import { useState } from 'react';

const { Option } = Select;


export default function Yarncount() {

  const [ModalVisible, setModalVisible] = useState(false);
  const [items, setItems] = useState([ ]);
  const [name, setName] = useState([ ]);
  

  const showModal = () => {
    setModalVisible(true);
  };

  const handleOk = () => {
    setModalVisible(false);
  };

  const handleCancel = () => {
    setModalVisible(false);
  };


  const onNameChange = (e) => {
    setName(e.target.value);
  };

  const addItem = (e) => {
    e.preventDefault();
    setItems([...items, name ]);
    setName('');
  };

  return (
    <div>
      <PageHeader title='Yarn Count Master'></PageHeader>
      <div className='user-list-toolbar'>
        <Button type='primary' onClick={showModal}>Yarn Type</Button>
      </div>
      <Modal title="Yarn Type" visible={ModalVisible} onOk={handleOk} okText='create' onCancel={handleCancel}>
        <Row justify='center' align='middle'>          
          <Col span={15}>
            <Form            
            layout='vertical'
            >
              <Form.Item 
              name={'yarn type'}
              
              ><Space>
                <Input placeholder="Please enter item" value={name} onChange={onNameChange} />
                <Button
                  onClick={addItem}
                  style={{
                    whiteSpace: 'nowrap',
                  }}
                >
                  Add item
                </Button>  
                </Space>              
              </Form.Item>
              <Form.Item>
                <Checkbox>Active</Checkbox>
              </Form.Item>
            </Form>
          </Col>                            
        </Row>           
      </Modal>
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
                        <Select />
                      </Form.Item>
                    </Col>
                    <Col span={12}>
                    <Form.Item
                    name={'Yarn Type*'}
                    label='Yarn Type*'
                    >
                      <Select
                      showSearch
                      style={{
                        width: '100%',
                      }}
                      >                      
                        {items.map((item) => (
                          <Option key={item}>{item}</Option>
                        ))} 
                      </Select>
                    </Form.Item>
                    </Col>
                  </Row>
                  <Form.Item
                  name={'Composition*'}
                  label='Composition*'
                  >
                    <Select />
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
};

