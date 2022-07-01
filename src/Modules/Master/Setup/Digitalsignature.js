import { PlusOutlined } from '@ant-design/icons';
import { Modal, Upload, Form, Select, Row, Col, PageHeader, Card, Image, message } from 'antd';
import { useState } from 'react';

const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => resolve(reader.result);

    reader.onerror = (error) => reject(error);
  });

  const beforeUpload = (file) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  
    if (!isJpgOrPng) {
      message.error('You can only upload JPG/PNG file!');
    }
  
    const isLt2M = file.size / 1024 / 1024 < 2;
  
    if (!isLt2M) {
      message.error('Image must smaller than 2MB!');
    }
  
    return isJpgOrPng && isLt2M;
  };

export default function Digitalsignature () {

    const [previewVisible, setPreviewVisible] = useState(false);
    const [previewImage, setPreviewImage] = useState('');
    const [previewTitle, setPreviewTitle] = useState('');
    const [fileList, setFileList] = useState([

    ]);

  const handleCancel = () => setPreviewVisible(false);

  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }

    setPreviewImage(file.url || file.preview);
    setPreviewVisible(true);
    setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') === 1));
  };

  const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </div>
  );
  return (
    <div>
        <div>
          <PageHeader title='User Digital Signature'></PageHeader>
          <Row justify='center' align='middle'>
                <Col xs={24} md={16}>
                    <Card
                    >
                        <Form
                        labelCol={{
                            span:6,
                        }}
                        wrapperCol={{
                            span:12
                        }}
                        >
                            <Form.Item
                            name={'username'}
                            label='User Name'
                            >
                                <Select />
                            </Form.Item>
                            <Form.Item
                            name={'signature'}
                            label='Signature'
                            >
                                <Upload
                                fileList={fileList}
                                onPreview={handlePreview}
                                onChange={handleChange}
                                beforeUpload={beforeUpload}
                                >
                                    {fileList.length >= 1? null : uploadButton}
                                </Upload>
                                <Modal visible={previewVisible} title={previewTitle} footer={null} onCancel={handleCancel}>
                                    <Image
                                    alt="example"
                                    style={{
                                        width: '100%',
                                    }}
                                    src={previewImage}
                                    />
                                </Modal>
                            </Form.Item>
                            <Form.Item
                            name={'employee name'}
                            label='Employee Name'
                            >
                                <Select />
                            </Form.Item>                    
                        </Form>
                    </Card>
                </Col>
          </Row>
      </div>
    </div>
  )
}
