<div>
                    <Row justify="center" align="middle">
                       <Col xs={24} sm={16} md={16} xl={16}>
                           
                                <Card>
                                
                                    <Form 
                                    size="small"
                                    layout="horizontal"
                                    labelCol={{
                                        span:7,
                                    }}
                                    >
                                        <Form.Item>
                                        <Button type="primery"   htmlType="submit"
                                        >Save</Button>
                                        </Form.Item>
                                        <Row >
                                            <Col span={22}>
                                                <Form.Item
                                                name={'party master*'}
                                                label='Party Master*'
                                                rules={[
                                                    {
                                                    required: true,
                                                    message:'party name is required'
                                                    },
                                                ]}
                                                >
                                                <Input />
                                                </Form.Item>
                                                </Col>
                                                <Col span={11}>
                                                <Form.Item
                                                name={'party ledger*'}
                                                label='Party Ledger*'
                                                rules={[
                                                    {
                                                    required: true,
                                                    message:'party ledger is required'
                                                    },
                                                ]}
                                                >
                                                    <Input />
                                                </Form.Item>
                                            
                                            
                                                <Form.Item
                                                name={'unit name'}
                                                label='Unit Name'
                                                >
                                                    <Select>
                                                        <Select.Option value="D2D INTERNATIONAL">D2D INTERNATIONAL</Select.Option>
                                                    </Select>
                                                </Form.Item>
                                                
                                                <Form.Item
                                                name={'address'}
                                                label='Address'
                                                rules={[
                                                    {
                                                    required: true,
                                                    message:'address is required'
                                                    },
                                                ]}
                                                >
                                                    <TextArea />
                                                </Form.Item>

                                                <Form.Item
                                                name={'city'}
                                                label='City'
                                                rules={[
                                                    {
                                                    required: true,
                                                    message:'city is required'
                                                    },
                                                ]}
                                                >
                                                <Select>
                                                        <Select.Option value="TIRUPUR">TIRUPUR</Select.Option>
                                                    </Select>
                                                </Form.Item>

                                                <Form.Item
                                                name={'pincode'}
                                                label='Pincode'
                                                >
                                                    <Input />
                                                </Form.Item>

                                                <Form.Item
                                                name={'state'}
                                                label='State'
                                                >
                                                    <Select />
                                                </Form.Item>

                                                <Form.Item
                                                name={'country'}
                                                label='County'
                                                >
                                                    <Select />
                                                </Form.Item>

                                                <Form.Item
                                                name={'phone'}
                                                label='Phone'
                                                >
                                                    <Input />
                                                </Form.Item>

                                                <Form.Item
                                                name={'mobile'}
                                                label='Mobile'
                                                >
                                                    <Input />
                                                </Form.Item>

                                                <Form.Item
                                                name={'email'}
                                                label='Email'
                                                >
                                                    <Input />
                                                </Form.Item>

                                                <Form.Item
                                                name={'contact person'}
                                                label='Contact person'
                                                >
                                                    <Input />
                                                </Form.Item>

                                                <Form.Item
                                                name={'bank name'}
                                                label='Bank name'
                                                >
                                                    <Select />
                                                </Form.Item>

                                                <Form.Item
                                                name={'account name'}
                                                label='Account name'
                                                >
                                                    <Input />
                                                </Form.Item>

                                                <Form.Item
                                                name={'branch'}
                                                label='Branch'
                                                >
                                                    <Input />
                                                </Form.Item>

                                                <Form.Item
                                                name={'Bank address'}
                                                label='Bank Address'
                                                >
                                                    <TextArea />
                                                </Form.Item>

                                                <Form.Item
                                                name={'code'}
                                                label='Code'
                                                >
                                                    <Input />
                                                </Form.Item>

                                                <Form.Item
                                                name={'cin no'}
                                                label='CIN NO'
                                                >
                                                    <Input />
                                                </Form.Item>
                                                <Form.Item
                                                name={'pledger1'}
                                                label='Pledger1'
                                                >
                                                    <Input />
                                                </Form.Item>
                                                </Col>
                                                
                                                <Col span={11}>
                                                <Form.Item
                                                name={'short name'}
                                                label='Short Name'
                                                >
                                                    <Input />
                                                </Form.Item>

                                                <Form.Item
                                                name={'gst no'}
                                                label='GST NO*'
                                                rules={[
                                                    {
                                                    required: true,
                                                    message:'GST NO is required'
                                                    },
                                                ]}
                                                >
                                                    <Input />
                                                </Form.Item>

                                                <Form.Item
                                                name={'cst no'}
                                                label='CST No'
                                                >
                                                    <Input />
                                                </Form.Item>

                                                <Form.Item
                                                name={'cst date'}
                                                label='CST Date'
                                                >
                                                    <DatePicker />
                                                </Form.Item>

                                                <Form.Item
                                                name={'tin no'}
                                                label='TIN NO'
                                                >
                                                    <Input />
                                                </Form.Item>

                                                <Form.Item
                                                name={'pan no'}
                                                label='PAN NO'
                                                rules={[
                                                    {
                                                    required: true,
                                                    message:'PAN No is required'
                                                    },
                                                ]}
                                                >
                                                    <Input />
                                                </Form.Item>

                                                <Form.Item
                                                name={'fax'}
                                                label='Fax'
                                                >
                                                    <Input />
                                                </Form.Item>

                                                <Form.Item
                                                name={'tax type'}
                                                label='TAX Type'
                                                rules={[
                                                    {
                                                    required: true,
                                                    message:'Tax is required'
                                                    },
                                                ]}
                                                >
                                                    <Select>
                                                        <Select.Option value="GST">GST</Select.Option>
                                                    </Select>
                                                </Form.Item>

                                                <Form.Item
                                                name={'currency'}
                                                label='Currency'
                                                >
                                                    <Select />
                                                </Form.Item>

                                                <Form.Item
                                                name={'company'}
                                                label='Company'
                                                >
                                                    <Select/>
                                                </Form.Item>

                                                <Form.Item
                                                name={'email'}
                                                label='Email'
                                                >
                                                    <Input />
                                                </Form.Item>

                                                <Form.Item
                                                name={'branch'}
                                                label='Branch'
                                                >
                                                    <Select />
                                                </Form.Item>

                                                <Form.Item
                                                name={'ac/no'}
                                                label='Ac/NO'
                                                >
                                                    <Input />
                                                </Form.Item>

                                                <Form.Item
                                                name={'ifsc code'}
                                                label='IFSC CODE'
                                                >
                                                    <Input />
                                                </Form.Item>

                                                <Form.Item
                                                name={'swift code'}
                                                label='Swift Code'
                                                >
                                                    <Input />
                                                </Form.Item>

                                                <Form.Item
                                                name={'iban'}
                                                label='IBAN'
                                                >
                                                    <Input />
                                                </Form.Item>

                                                <Form.Item
                                                name={'neft'}
                                                label='NEFT'
                                                >
                                                    <Input />
                                                </Form.Item>

                                                <Form.Item
                                                name={'inter Bank'}
                                                label='Inter Bank'
                                                >
                                                    <Input />
                                                </Form.Item>

                                                <Form.Item
                                                name={'inter swift'}
                                                label='Inter Swift'
                                                >
                                                    <Input />
                                                </Form.Item>

                                                <Form.Item
                                                name={'job'}
                                                label='Job'
                                                >
                                                    <Select />
                                                </Form.Item>
                                                </Col>
                                        </Row>
                                        <Row>
                                            
                                                <Col span={12}>
                                                <Table>
                                                    <Table.Column title={'S.NO'}/>
                                                    <Table.Column title={'Type'}/>
                                                </Table>
                                                </Col>

                                               <Col span={12}>
                                                <Table>
                                                   <Table.Column title={'S.NO'} />
                                                   <Table.Column title={'Exporter'} />
                                                   <Table.Column title={'Party Account'} />
                                                </Table>
                                            </Col>
                                            
                                            
                                        </Row> 
                                    </Form>
                                
                                
                            </Card>
                        </Col>
                    </Row>
                </div>