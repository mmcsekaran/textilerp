import { Col, Input, Select, Form, Row, Card, Checkbox, PageHeader, Button, Modal, Space} from 'antd';
import { useState } from 'react';

const { Option } = Select;


export default function Yarncount() {

  const [YarntypeVisible, setYarntypeVisible] = useState(false);
  const [ModalVisible1,setModalVisible1] = useState(false);
  const [yarn, setYarn] = useState([ ]);
  const [name, setName] = useState([ ]);
  

  const showModal = () => {
    setYarntypeVisible(true);
  };

  const showModal1 = () => {
    setModalVisible1(true);
  };

  const handleOk = (e) => {
    e.preventDefault();
    setYarn([...yarn, name ]);
    setName('');
    setYarntypeVisible(false);
    setModalVisible1(false);
  };

  const handleCancel = () => {
    setYarntypeVisible(false);
    setModalVisible1(false);
  };


  const onNameChange = (e) => {
    setName(e.target.value);
  };

  const arr = [ ];

  const str = '';

  if (arr.indexOf(str) === -1) {
    arr.push(str);
  }

  console.log(arr);

 /* const addItem = (e) => {
    e.preventDefault();
    setItems([...items, name ]);
    setName('');
  };*/


  return (
    <div>
      <PageHeader title='Yarn Count Master'
       extra={[<Button key={1} type='primary' onClick={showModal}>Yarn Type</Button>,
       <Button key={2} type='primary' onClick={showModal1}>Countmaster</Button>,
       ]}></PageHeader>

       <Modal title="Yarn Type" centered visible={YarntypeVisible} onOk={handleOk} okText='create' onCancel={handleCancel}>
        <Row justify='center' align='middle'>          
          <Col span={15}>
            <Form            
            layout='vertical'
            >
              <Form.Item 
              name={'yarn type'}
              >
                <Input placeholder="Please enter item" value={name} onChange={onNameChange}/>
                                           
              </Form.Item>
              <Form.Item>
                <Checkbox>Active</Checkbox>
              </Form.Item>
            </Form>
          </Col>                            
        </Row>           
      </Modal>
      <Modal title="count master" centered visible={ModalVisible1} onOk={handleOk} okText='create' onCancel={handleCancel} width={800}>
        <Row justify="center" align="middle">
          <Col xs={24} sm={16} md={16} xl={16}>
            <div className="count-card">
                <Form 
                layout="vertical"
                >
                  <Form.Item
                  name={'counts'}
                  label='Counts'
                  >
                    <Input />
                  </Form.Item>
                  <Row>
                    <Col span={12}>
                      <Form.Item
                      name={'Description'}
                      label='Description'>
                          <Input />

                      </Form.Item>
                    </Col>
                    <Col span={12}>
                      <Form.Item
                      name={'Type'}
                      label='Type'
                      >
                        <Select>
                            
                        </Select>
                      </Form.Item>
                    </Col>
                  </Row>                    
                  <Form.Item
                  name={'Count Type'}
                  label='Count Type'
                  >
                    <Input />
                  </Form.Item>
                    <Checkbox>Active</Checkbox>
                </Form>
            </div>
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
                      >                      
                        {yarn.map((yarn) => (
                          <Option key={yarn}>{yarn}</Option>
                        ))} 
                      </Select>
                    </Form.Item>
                    </Col>
                  </Row>
                  <Form.Item
                  name={'Composition*'}
                  label='Composition*'
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item
                  name={'Yarn Counts'}
                  label='Yarn Counts'
                  >
                    <Input />
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

