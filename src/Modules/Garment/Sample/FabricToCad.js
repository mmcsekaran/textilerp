import React from "react";
import { Button, Form } from "antd";
import { Input, Col, Row, Space,Card,Select,Typography } from "antd";
import PortionComponent from "./../../Common/PortionComponent";
import { PlusCircleOutlined } from '@ant-design/icons';
import { MinusCircleOutlined } from '@ant-design/icons';

export default function FabricToCad(value = {}, onChange) {
  return (
    <div>
      <Form>
        <Row>
          <Col>
            <Row>
              <Col>
                <Input className="disabled-input" value={"S.No"} />
              </Col>
              <Col>
                <Form.Item noStyle name={"sno"} initialValue={0}>
                  <Input defaultValue={0} readOnly />
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col>
                <Input className="disabled-input" value={"S.No"} />
              </Col>
              <Col>
                <Form.Item noStyle name={"sno"} initialValue={0}>
                  <Input defaultValue={0} readOnly />
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col>
                <Input className="disabled-input" value={"S.No"} />
              </Col>
              <Col>
                <Form.Item noStyle name={"sno"} initialValue={0}>
                  <Input defaultValue={0} readOnly />
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col>
                <Input className="disabled-input" value={"S.No"} />
              </Col>
              <Col>
                <Form.Item noStyle name={"sno"} initialValue={0}>
                  <Input defaultValue={0} readOnly />
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col>
                <Input className="disabled-input" value={"S.No"} />
              </Col>
              <Col>
                <Form.Item noStyle name={"sno"} initialValue={0}>
                  <Input defaultValue={0} readOnly />
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col>
                <Input className="disabled-input" value={"S.No"} />
              </Col>
              <Col>
                <Form.Item noStyle name={"sno"} initialValue={0}>
                  <Input defaultValue={0} readOnly />
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col>
                <Input className="disabled-input" value={"S.No"} />
              </Col>
              <Col>
                <Form.Item noStyle name={"sno"} initialValue={0}>
                  <Input defaultValue={0} readOnly />
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col>
                <Input className="disabled-input" value={"S.No"} />
              </Col>
              <Col>
                <Form.Item noStyle name={"sno"} initialValue={0}>
                  <Input defaultValue={0} readOnly />
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col>
                <Input className="disabled-input" value={"S.No"} />
              </Col>
              <Col>
                <Form.Item noStyle name={"sno"} initialValue={0}>
                  <Input defaultValue={0} readOnly />
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col>
                <Input className="disabled-input" value={"S.No"} />
              </Col>
              <Col>
                <Form.Item noStyle name={"sno"} initialValue={0}>
                  <Input defaultValue={0} readOnly />
                </Form.Item>
              </Col>
            </Row>
          </Col>
          <Col>
          <Form.List name={"process"}>
          {(fields, { add, remove }) => (
            <>
              <Card
                extra={[
                  <Button
                    onClick={() => add()}
                    icon={<PlusCircleOutlined></PlusCircleOutlined>}
                  ></Button>,
                ]}
                actions={[<Typography.Text>100</Typography.Text>]}
              >
                {fields.map(({ key, name, ...restField }) => (
                  <>
                    <Row>
                      <Space>
                        <Row>
                          <Col xs={24} lg={6}>
                            <Form.Item noStyle name={[name, "processName"]}>
                              <Select placeholder="Select Process">
                                <Select.Option value={1}>Yarn</Select.Option>
                              </Select>
                            </Form.Item>
                          </Col>
                          <Col xs={24} lg={6}>
                            <Form.Item noStyle name={[name, "rate"]}>
                              <Input defaultValue={0} />
                            </Form.Item>
                          </Col>
                          <Col xs={24} lg={6}>
                            <Form.Item noStyle name={[name, "processloss"]}>
                              <Input defaultValue={0} />
                            </Form.Item>
                          </Col>
                          <Col>
                            <Form.Item noStyle>
                              <Button
                                onClick={() => remove(name)}
                                icon={
                                  <MinusCircleOutlined></MinusCircleOutlined>
                                }
                              ></Button>
                            </Form.Item>
                          </Col>
                          <Col>
                            <Form.Item noStyle>
                              <Button
                                onClick={() => add()}
                                icon={<PlusCircleOutlined></PlusCircleOutlined>}
                              ></Button>
                            </Form.Item>
                          </Col>
                        </Row>
                      </Space>
                    </Row>
                  </>
                ))}
                <Card.Meta>
                  <></>
                </Card.Meta>
              </Card>
            </>
          )}
        </Form.List>
          </Col>
        </Row>

        <Row>
          <Row>
            <Col lg={1}>
              <Input className="disabled-input" value={"S.No"} />
            </Col>
            <Col lg={5} xxl={3}>
              <Input className="disabled-input" value={"Panel Name"} />
            </Col>
            <Col lg={2}>
              <Input className="disabled-input" value={"GSM"} />
            </Col>
            <Col lg={2}>
              <Input className="disabled-input" value={"Length"} />
            </Col>
            <Col lg={2}>
              <Input className="disabled-input" value={"Len. Allow"} />
            </Col>
            <Col lg={2}>
              <Input className="disabled-input" value={"Width"} />
            </Col>
            <Col lg={2}>
              <Input className="disabled-input" value={"Wid Allow"} />
            </Col>
            <Col lg={2}>
              <Input className="disabled-input" value={"No.Of Panel"} />
            </Col>
            <Col lg={2}>
              <Input className="disabled-input" value={"Loss %"} />
            </Col>
            <Col lg={2}>
              <Input className="disabled-input" value={"Panel Wt"} />
            </Col>
          </Row>
          <Row>
            <Space>
              <Row>
                <Col lg={1}>
                  <Form.Item noStyle name={"sno"} initialValue={0}>
                    <Input defaultValue={0} readOnly />
                  </Form.Item>
                </Col>
                <Col lg={5} xxl={3}>
                  <Form.Item noStyle name={"panelName"}>
                    <PortionComponent />
                  </Form.Item>
                </Col>

                <Col lg={2}>
                  <Form.Item name={"panelName"} noStyle>
                    <Input />
                  </Form.Item>
                </Col>
                <Col lg={2}>
                  <Form.Item name={"panelName"} noStyle>
                    <Input />
                  </Form.Item>
                </Col>
                <Col lg={2}>
                  <Form.Item name={"panelName"} noStyle>
                    <Input />
                  </Form.Item>
                </Col>
                <Col lg={2}>
                  <Form.Item name={"panelName"} noStyle>
                    <Input />
                  </Form.Item>
                </Col>
                <Col lg={2}>
                  <Form.Item name={"panelName"} noStyle>
                    <Input />
                  </Form.Item>
                </Col>
                <Col lg={2}>
                  <Form.Item name={"panelName"} noStyle>
                    <Input />
                  </Form.Item>
                </Col>
                <Col lg={2}>
                  <Form.Item name={"panelName"} noStyle>
                    <Input />
                  </Form.Item>
                </Col>
                <Col lg={2}>
                  <Form.Item name={"panelName"} noStyle>
                    <Input />
                  </Form.Item>
                </Col>
                <Col lg={2}>
                  <Form.Item noStyle>
                    <Button type="link">Details</Button>
                  </Form.Item>
                </Col>
              </Row>
            </Space>
          </Row>
        </Row>
      </Form>
    </div>
  );
}
