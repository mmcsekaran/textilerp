import { DeleteFilled, MinusCircleOutlined, PlusCircleOutlined } from "@ant-design/icons";
import {
  Button,
  Col,
  Form,
  Image,
  Input,
  Modal,
  Row,
  Select,
  Table,
  Typography,
  message,
  Space,
  Upload,
} from "antd";
import React, { Component, useState } from "react";
import StyleCategory from "../../Common/StyleCategory";
import PortionEditor from "./PortionEditor";
import StyleEditor from "./StyleEditor";

export interface SampleCostingProps {
  costingNo: number;
}

interface SampleCostingData {
  id?: string | number;
  costingNo?: number | string;
  buyerId?: number | string;
  buyerCurrency?: string | number;
  buyerPrice?: number;
  styleCategory?: string;
  styleNo?: string | number;
  styleDescription?: string | number;
  packs?: string | number;
  noOfPcs?: number;
  imageSrc?: string;
  components: Array<SampleCostingFormData>;
  exachangeRate?: number;
  packFoc?: number;
  packLocal?: number;
  cmtCosting?: Array<CMTCosting>;
  trimsCosting?: Array<TrimsCosting>;
}

const defaultCostingData: SampleCostingData = {
  id: 0,
  costingNo: 0,
  buyerId: 0,
  buyerCurrency: undefined,
  buyerPrice: 0,
  styleCategory: "General",
  styleNo: 0,
  components: [],
};

interface StyleCombo {
  id?: number | string;
  comboName?: string | number;
  comboColor?: string | number;
  components?: Array<StyleComponent> | StyleComponent;
}
interface StyleComponent {
  id?: number | string;
  componentName?: string | number;
  componentPanels?: Array<StyleComponentPanel> | StyleComponentPanel;
  trims: Array<TrimsCosting>;
  cmt: Array<CMTCosting>;
}
interface StyleComponentPanel {
  id?: number | string;
  panelName: string | number;
  isMainComponent: boolean;
  fabric: string;
  cad: number;
  process?: Array<FabricProcess>;
}
interface FabricProcess {
  id?: number | string;
  processName: string | number;
  loss: number;
  rate: number;
}

interface TrimsCosting {
  id?: number | string;
  compoName: string;
  component: string;
  trimName: string | number;
  unit: string | number;
  price: number;
  consumption: number;
}
interface CMTCosting {
  id?: number | string;
  comboName: string;
  componentName: string | "All";
  cmtName?: string | number;
  cmtRate?: number;
}

interface SampleCostingState {
  costingData: SampleCostingData;
  showEditor?: boolean;
}

interface CostingFabricData {
  componentName: string;
  panelName: string;
  cad: number;
  fabric: string;
}

export default class SampleCosting extends React.Component<
  SampleCostingProps,
  SampleCostingState
> {
  constructor(props: SampleCostingProps) {
    super(props);

    this.state = {
      costingData: defaultCostingData,
      showEditor: false,
    };
  }

  render() {
    return (
      <div>
        <Form.Provider>
          <Form name="costmas">
            <Row >
            <Col md={4} style={{ padding: "15px" }}>
                <div style={{ width: "100%", height: "100%"}}>
                  <Image
                    width={230}
                    height={250}
                    src="error"
                  
                  
                  >
                  <Upload   >

                  </Upload>
                  </Image>
                </div>
              </Col>
              <Col md={18} >
                <Row>
                  <Form.Item>
                    
                  </Form.Item>
                </Row>
                <Row gutter={5}>
                  <Col md={8}>
                    <Form.Item name={"styleCategory"} label={"Style Category"}>
                      <StyleCategory />
                    </Form.Item>
                  </Col>
                  <Col md={8}>
                    <Form.Item name={"styleNumber"} label={"Style Number"}>
                      <Input placeholder="Style Number" />
                    </Form.Item>
                  </Col>
                  <Col md={8}>
                    <Form.Item name={"styleNumber"} label={"Style Number"}>
                      <Input placeholder="Style Number" />
                    </Form.Item>
                  </Col>
                </Row>
                <Row gutter={5}>
                  <Col md={8}>
                    <Form.Item name={"styleCategory"} label={"Style Category"}>
                      <StyleCategory />
                    </Form.Item>
                  </Col>
                  <Col md={8}>
                    <Form.Item name={"styleNumber"} label={"Style Number"}>
                      <Input placeholder="Style Number" />
                    </Form.Item>
                  </Col>
                  <Col md={8}>
                    <Form.Item name={"styleNumber"} label={"Style Number"}>
                      <Input placeholder="Style Number" />
                    </Form.Item>
                  </Col>
                </Row>
                <Row gutter={5}>
                  <Col md={8}>
                    <Form.Item name={"styleCategory"} label={"Style Category"}>
                      <StyleCategory />
                    </Form.Item>
                  </Col>
                  <Col md={8}>
                    <Form.Item name={"styleNumber"} label={"Style Number"}>
                      <Input placeholder="Style Number" />
                    </Form.Item>
                  </Col>
                  <Col md={8}>
                    <Form.Item name={"styleNumber"} label={"Style Number"}>
                      <Input placeholder="Style Number" />
                    </Form.Item>
                  </Col>
                </Row>
              </Col>
             
            </Row>
            {/* Summary Pages */}
            <Row gutter={10}>
            

           
              <Col md={6}>
                <div className="summary-costing">

              
                  <table className="summary-costing">
                  
                      <tr>
                        <th style={{width:'150px'}}>Summary</th>
                        <th style={{width:'80px'}}></th>
                        <th style={{width:'120px'}} >Cost</th>
                      </tr>
                   
                    
                      <tr>
                        <td >Digital Print</td>
                        <td></td>
                        <td><Input></Input></td>
                      </tr>
                      <tr>
                        <td>Emproidery</td><td></td>
                        <td><Input></Input></td>
                      </tr>
                      <tr>
                        <td>Testing</td><td></td>
                        <td><Input></Input></td>
                      </tr>
                      <tr>
                        <td>Accessories</td><td></td>
                        <td><Input></Input></td>
                      </tr>
                      <tr>
                        <td>CMT</td><td></td>
                        <td><Input></Input></td>
                      </tr>
                      <tr>
                        <td>Transport</td><td></td>
                        <td><Input></Input></td>
                      </tr>
                      <tr>
                        <td>Garment Cost</td>
                        <td><Input></Input></td>
                        <td><Input></Input></td>
                      </tr>
                      <tr>
                        <td>GMT Rejection</td>
                        <td><Input></Input></td>
                        <td><Input></Input></td>
                      </tr>
                      <tr>
                        <td>Admin & OHS</td>  <td><Input></Input></td>
                        <td><Input></Input></td>
                      </tr>
                      <tr>
                        <td>Profit</td>  <td><Input></Input></td>
                        <td><Input></Input></td>
                      </tr>
                      <tr>
                        <td>Commission</td>  <td><Input></Input></td>
                        <td><Input></Input></td>
                      </tr>
                     
                    
                    <tr>
                        <td>Total</td><td></td>
                        <td>0.0</td>
                      </tr>
                   
                  </table>
                  </div>
              </Col>
              <Col md={12}>
              <div className="profit-summary">
                <table className ="profit-summary">
                  <thead>
                   
                    <tr>
                      <th colSpan={2}>Exchange Rate</th>
                      <th colSpan={2}>Per PCS</th>
                      <th>PCS/PK</th>
                      <th colSpan={2}>Pack</th>
                     
                    </tr> </thead>
                    <tbody>
                      <tr>
                        <td colSpan={2}><Input></Input></td>
                        <td colSpan={2}><Input></Input></td>
                        <td ><Input></Input></td>
                        <td colSpan={2}><Input></Input></td>       
                      </tr>
                      <tr>
                        <th rowSpan={2 } colSpan={2}>Buyer Quote</th>
                        <th colSpan={2}>Offered</th>
                        <th colSpan={2}>Target</th>
                        <th colSpan={2}>Differece</th>         
                      </tr>
                      <tr>
                        
                        <th colSpan={2}><Input></Input></th>
                        <th colSpan={2}><Input></Input></th>
                        <th colSpan={2}><Input></Input></th>         
                      </tr>
                      <tr>
                      <th  colSpan={2}>Percentage</th>
                        <th >Margin/PC</th>
                        <th >INR/PC</th>
                        <th >USD/PC</th>
                        <th colSpan={2}>USD/Pack</th>             
                      </tr>
                      <tr>
                        <th  colSpan={2}>5%</th>
                        <th >0</th>
                        <th >0</th>
                        <th >0</th>
                        <th colSpan={2}>0</th>       
                      </tr>
                      <tr>
                        <th  colSpan={2}>10%</th>
                        <th >0</th>
                        <th >0</th>
                        <th >0</th>
                        <th colSpan={2}>0</th>       
                      </tr>
                      <tr>
                        <th  colSpan={2}>15%</th>
                        <th >0</th>
                        <th >0</th>
                        <th >0</th>
                        <th colSpan={2}>0</th>       
                      </tr>
                      <tr>
                        <th  colSpan={2}>20%</th>
                        <th >0</th>
                        <th >0</th>
                        <th >0</th>
                        <th colSpan={2}>0</th>       
                      </tr>
                      <tr>
                        <th  colSpan={2}>25%</th>
                        <th >0</th>
                        <th >0</th>
                        <th >0</th>
                        <th colSpan={2}>0</th>       
                      </tr>
                      <tr>
                        <th  colSpan={2}>30%</th>
                        <th >0</th>
                        <th >0</th>
                        <th >0</th>
                        <th colSpan={2}>0</th>       
                      </tr>
                      <tr>
                        <th  colSpan={2}>35%</th>
                        <th >0</th>
                        <th >0</th>
                        <th >0</th>
                        <th colSpan={2}>0</th>       
                      </tr>
                    </tbody>
                 
                </table>
                </div>
              </Col>
            </Row>
            <Row>
              <Col md={24}>
                <div
                  style={{ padding: "10px", width: "100%", height: "50px" }}
                ></div>
                <Table
                  pagination={false}
                  title={() => (
                    <>
                      <Typography.Text strong style={{ fontSize: "14pt" }}>
                        Fabric Details
                      </Typography.Text>
                      <Button
                        onClick={() => {
                          this.setState({ showEditor: true });
                        }}
                        type="primary"
                        style={{ float: "right" }}
                      >
                        Add Fabric
                      </Button>
                    </>
                  )}
                  columns={[
                    {
                      title: "S.No",
                      width: 50,
                      align: "center",
                      render(value, record, index) {
                        return <>{index + 1}</>;
                      },
                    },
                    {
                      title: "Combo",
                      width: 120,
                      align: "left",
                      dataIndex: "comboName",
                    },
                    {
                      title: "Component",
                      width: 120,
                      align: "left",
                      dataIndex: "componentName",
                    },
                    {
                      title: "Panel Name",
                      align: "left",
                      width: 120,
                      dataIndex: "panelName",
                      render(value, record, index) {
                        return <a>{value}</a>
                      },
                    },
                    {
                      title: "Fabric",
                      align: "left",
                      dataIndex: "fabric",
                    },
                    {
                      title: "Cad",
                      width: 80,
                      align: "left",
                      dataIndex: "cad",
                    },
                    {
                      title: "Process Template",
                      align: "center",
                      width: 150,
                      dataIndex: "processTemplate",
                    },
                    {
                      title: "Fabric Cost (KGS)",
                      width: 100,
                      align: "center",
                      dataIndex: "totalProcessRate",
                    },
                    {
                      title: "Fabric Cost",
                      width: 100,
                      align: "center",
                      render: (_, record) => {
                        return (
                          <>{record.totalProcessRate * (record.cad / 1000)}</>
                        );
                      }
                    },
                    {
                      title: "",
                      width: 100,
                      align: "center",
                      render: (_, record) => {
                        return (
                          <><Button type="text" icon={<DeleteFilled></DeleteFilled>}></Button></>
                        );
                      },
                    },
                  ]}
                  dataSource={this.state.costingData.components}
                ></Table>
              </Col>
            </Row>
            <Row gutter={10}>
              <Col md={24}>
                <div
                  style={{ padding: "10px", width: "100%", height: "50px" }}
                ></div>
                <Table
                  pagination={false}
                  title={() => (
                    <>
                      <Typography.Text strong style={{ fontSize: "14pt" }}>
                        Trims Details
                      </Typography.Text>
                      <Button
                        onClick={() => {
                          this.setState({ showEditor: true });
                        }}
                        type="primary"
                        style={{ float: "right" }}
                      >
                        Add Fabric
                      </Button>
                    </>
                  )}
                  columns={[
                    {
                      title: "S.No",
                      width: 50,
                      align: "center",
                      render(value, record, index) {
                        return <>{index + 1}</>;
                      },
                    },
                    {
                      title: "Combo",
                      width: 120,
                      align: "left",
                      dataIndex: "comboName",
                    },
                    {
                      title: "Component",
                      width: 120,
                      align: "left",
                      dataIndex: "componentName",
                    },
                    {
                      title: "Trims",
                      align: "left",
                      dataIndex: "fabric",
                    },
                    {
                      title: "UOM",
                      width: 80,
                      align: "left",
                      dataIndex: "cad",
                    },
                    {
                      title: "Price",
                      align: "center",
                      width: 150,
                      dataIndex: "processTemplate",
                    },
                    {
                      title: "CNT/GMT",
                      width: 100,
                      align: "center",
                      dataIndex: "totalProcessRate",
                    },
                    {
                      title: "Trims Cost",
                      width: 100,
                      align: "center",
                      dataIndex: "totalProcessRate",
                    },
                    {
                      title: "#",
                      width: 100,
                      align: "center",
                      dataIndex: "",
                      render(value, record, index) {
                        return <>
                        <Button type="link">Edit</Button>
                        <Button type="link">Delete</Button>
                        </>
                      },
                    },
                  ]}
                  dataSource={this.state.costingData.components}
                  footer={() => <>Name</>}
                ></Table>
              </Col>
             
            </Row>
            <Row gutter={10}>
              <Col md={12}>
                <div
                  style={{ padding: "10px", width: "100%", height: "50px" }}
                ></div>
                <Table
                  pagination={false}
                  title={() => (
                    <>
                      <Typography.Text strong style={{ fontSize: "14pt" }}>
                        CMT Details
                      </Typography.Text>
                      <Button
                        onClick={() => {
                          this.setState({ showEditor: true });
                        }}
                        type="primary"
                        style={{ float: "right" }}
                      >
                        Add
                      </Button>
                    </>
                  )}
                  columns={[
                    {
                      title: "S.No",
                      width: 50,
                      align: "center",
                      render(value, record, index) {
                        return <>{index + 1}</>;
                      },
                    },
                    {
                      title: "Combo",
                      width: 120,
                      align: "left",
                      dataIndex: "comboName",
                    },
                    {
                      title: "Component",
                      width: 120,
                      align: "left",
                      dataIndex: "componentName",
                    },
                    {
                      title: "CMT",
                      align: "left",
                      dataIndex: "fabric",
                    },
                    {
                      title: "Rate",
                      width: 80,
                      align: "left",
                      dataIndex: "cad",
                    },
                  ]}
                  dataSource={this.state.costingData.components}
                  footer={() => <>Name</>}
                ></Table>
              </Col>
              <Col md={12}>
                <div
                  style={{ padding: "10px", width: "100%", height: "50px" }}
                ></div>
                <Table
                  pagination={false}
                  title={() => (
                    <>
                      <Typography.Text strong style={{ fontSize: "14pt" }}>
                        Emplishments
                      </Typography.Text>
                      <Button
                        onClick={() => {
                          this.setState({ showEditor: true });
                        }}
                        type="primary"
                        style={{ float: "right" }}
                      >
                        Add
                      </Button>
                    </>
                  )}
                  columns={[
                    {
                      title: "S.No",
                      width: 50,
                      align: "center",
                      render(value, record, index) {
                        return <>{index + 1}</>;
                      },
                    },
                    {
                      title: "Combo",
                      width: 120,
                      align: "left",
                      dataIndex: "comboName",
                    },
                    {
                      title: "Component",
                      width: 120,
                      align: "left",
                      dataIndex: "componentName",
                    },
                    {
                      title: "Emplishments",
                      align: "left",
                      dataIndex: "fabric",
                    },
                    {
                      title: "Rate",
                      width: 80,
                      align: "left",
                      dataIndex: "cad",
                    },
                  ]}
                  dataSource={this.state.costingData.components}
                  footer={() => <>Name</>}
                ></Table>
              </Col>
            </Row>
            <Row gutter={10} style={{marginTop:'10px'}}>
              <Col md={12}>
                <div>
                  <PortionEditor />
                </div>
              </Col>
              <Col md={12}>
              <PortionEditor type ='fabric' />
              </Col>
            </Row>
          </Form>
          <SampleCostingEditorModal
            onCancel={() => {
              this.setState({ showEditor: false });
            }}
            visible={this.state.showEditor}
            onSave={(values) => {
              const costData = this.state.costingData;

              const component = [...this.state.costingData.components];

              component.push(values);

              costData.components = [
                ...this.state.costingData.components,
                values,
              ];

              this.setState({ showEditor: false, costingData: costData });
              console.log(this.state);
            }}
          ></SampleCostingEditorModal>
        </Form.Provider>
      </div>
    );
  }
}

interface SampleCostingFormData {
  comboName?: string;
  componentName?: string;
  panelName?: string;
  color?: string;
  cad: number;
  fabric?: string;
  process?: Array<FabricProcess>;
  totalProcessLoss: number;
  totalProcessRate: number;
  processTemplate?: string;
}

interface SampleCostingEditorProps {
  visible?: boolean;
  onSave: (values: SampleCostingFormData) => void;
  onCancel?: () => void;
}

interface SampleEditor {
  open(props: SampleCostingEditorProps): void;
}

const SampleCostingEditorModal: React.FC<SampleCostingEditorProps> = ({
  visible,
  onSave,
  onCancel,
}) => {
  const [form] = Form.useForm();
  const [processLoss, setProcessLoss] = useState(0);
  const [processRate, setProcessRate] = useState(0);
  const [processTemplate, setProcessTemplate] = useState("");
  const valueChange = (_: any, values: any) => {
    const cad = parseFloat(values.cad) | 0;
    console.log(values);
    if (values.process) {
      const process = [...values.process];
      let totalCost = 0;
      let totalLoss = 0;
      let proTemplate = "";
      process.forEach((pro, index) => {
        let loss = 0;
        let price = 0;

        proTemplate =
          proTemplate +
          (pro?.processName ? pro.processName : "") +
          (index < process.length - 1 ? "+" : "");

        if (pro?.processLoss) loss = parseFloat(pro.processLoss);
        if (pro?.processRate) price = parseFloat(pro.processRate);
        totalCost += price; // (totalCost+price)*loss/((100/100)-loss)
        totalLoss += loss; // (totalCost+price)*loss/((100/100)-loss)
        // pro.cost = totalCost
        // process.splice(index,1,pro);
        //form.setFieldsValue({processTemplate:proTemplate})
      });

      setProcessLoss(totalLoss);
      setProcessRate(totalCost);
      setProcessTemplate(proTemplate);
    }
  };
  return (
    <Modal
      visible={visible}
      title={"Create Fabric Details"}
      okText="Save"
      cancelText="Close"
      centered
      onCancel={() => {
        if (onCancel) {
          onCancel();
          form.resetFields();
        }
      }}
      onOk={() => {
        form.validateFields().then((res) => {
          let formData: SampleCostingFormData = {
            totalProcessLoss: 0,
            totalProcessRate: 0,
            cad: 0,
          };

          formData.componentName = res.component;
          formData.panelName = res.panelName;
          formData.cad = res.cad;
          formData.fabric = res.fabric;
          formData.totalProcessLoss = processLoss;
          formData.totalProcessRate = processRate;
          formData.process = [
            res.process.map((v: any) => ({
              processName: v.processName,
              loss: v.processLoss,
              rate: v.processRate,
            })),
          ];
          formData.processTemplate = processTemplate;

          onSave(formData);
          form.resetFields();
        });
      }}
    >
      <Form layout="vertical" onValuesChange={valueChange} form={form}>
        <Row gutter={10}>
          <Col md={8}>
            <Form.Item label="Component" name={"component"}>
              <Select>
                <Select.Option value={"top"}>Top</Select.Option>
                <Select.Option value={"pant"}>Pant</Select.Option>
                <Select.Option value={"shorts"}>Shorts</Select.Option>
                <Select.Option value={"headband"}>Head Band</Select.Option>
                <Select.Option value={"eyepatch"}>Eye Patch</Select.Option>
              </Select>
            </Form.Item>
          </Col>
          <Col md={8}>
            <Form.Item label="Panel Name" name={"panelName"}>
              <Select>
                <Select.Option value={"top"}>Top</Select.Option>
                <Select.Option value={"pant"}>Pant</Select.Option>
                <Select.Option value={"shorts"}>Shorts</Select.Option>
                <Select.Option value={"headband"}>Head Band</Select.Option>
                <Select.Option value={"eyepatch"}>Eye Patch</Select.Option>
              </Select>
            </Form.Item>
          </Col>
          <Col md={8}>
            <Form.Item label="Cad (GRM)" name={"cad"}>
              <Input />
            </Form.Item>
          </Col>
        </Row>

        <Row>
          <Col md={24}>
            <Form.Item label="Fabric" labelCol={{ span: 3 }} name={"fabric"}>
              <Select>
                <Select.Option value={"top"}>Top</Select.Option>
                <Select.Option value={"pant"}>Pant</Select.Option>
                <Select.Option value={"shorts"}>Shorts</Select.Option>
                <Select.Option value={"headband"}>Head Band</Select.Option>
                <Select.Option value={"eyepatch"}>Eye Patch</Select.Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>

        <Form.List name={"process"}>
          {(fields, { add, remove }) => {
            return (
              <>
                <Row>
                  <Col md={12}>
                    <Typography.Text strong>{processTemplate}</Typography.Text>
                  </Col>
                </Row>
                <Row>
                  <Col md={12}>
                    <Typography.Text strong>Process</Typography.Text>
                  </Col>
                  <Col md={4}>
                    <Typography.Text strong>Loss (%)</Typography.Text>
                  </Col>
                  <Col md={4}>
                    <Typography.Text strong>Price/Kgs</Typography.Text>
                  </Col>
                  <Col md={4}>
                    {fields.length === 0 ? (
                      <Button type="link" onClick={() => add()}>
                        Add
                      </Button>
                    ) : (
                      ""
                    )}
                  </Col>
                </Row>

                {fields.map((field) => (
                  <Row>
                    <Col md={12}>
                      <Form.Item noStyle name={[field.name, "processName"]}>
                        <Select style={{ width: "100%" }}>
                          <Select.Option value={"yrn"}>Yarn</Select.Option>
                          <Select.Option value="y/d">Yarn Dyeing</Select.Option>
                          <Select.Option value="knt">Knitting</Select.Option>
                          <Select.Option value="h/s">HeatSetting</Select.Option>
                          <Select.Option value="dye">Dyeing</Select.Option>
                          <Select.Option value="prnt">Print</Select.Option>
                          <Select.Option value="o/w">Compacting</Select.Option>
                        </Select>
                      </Form.Item>
                    </Col>
                    <Col md={4}>
                      <Form.Item noStyle name={[field.name, "processLoss"]}>
                        <Input />
                      </Form.Item>
                    </Col>
                    <Col md={4}>
                      <Form.Item noStyle name={[field.name, "processRate"]}>
                        <Input />
                      </Form.Item>
                    </Col>
                    <Col md={2}>
                      <Button
                        type="text"
                        onClick={() => add({}, field.name + 1)}
                        icon={<PlusCircleOutlined />}
                      ></Button>
                    </Col>
                    <Col md={2}>
                      {fields.length > 1 ? (
                        <Button
                          type="text"
                          onClick={() => remove(field.name)}
                          icon={<MinusCircleOutlined />}
                        ></Button>
                      ) : (
                        ""
                      )}
                    </Col>
                  </Row>
                ))}

                {fields.length > 0 ? (
                  <Row>
                    <Col md={12}>
                      <Typography.Text strong>Total</Typography.Text>
                    </Col>
                    <Col
                      style={{ textAlign: "right", paddingRight: "5px" }}
                      md={3}
                    >
                      <Typography.Text strong>{processLoss}</Typography.Text>
                    </Col>
                    <Col
                      style={{ textAlign: "right", paddingRight: "5px" }}
                      md={3}
                    >
                      <Typography.Text strong>{processRate}</Typography.Text>
                    </Col>
                  </Row>
                ) : (
                  ""
                )}
              </>
            );
          }}
        </Form.List>
      </Form>
    </Modal>
  );
};

const TrimsEditor: React.FC<SampleCostingEditorProps> = ({
  visible,
  onSave,
  onCancel,
}) => {
  const [form] = Form.useForm();
  const [processLoss, setProcessLoss] = useState(0);
  const [processRate, setProcessRate] = useState(0);
  const [processTemplate, setProcessTemplate] = useState("");
  const valueChange = (_: any, values: any) => {
    const cad = parseFloat(values.cad) | 0;
    console.log(values);
    if (values.process) {
      const process = [...values.process];
      let totalCost = 0;
      let totalLoss = 0;
      let proTemplate = "";
      process.forEach((pro, index) => {
        let loss = 0;
        let price = 0;

        proTemplate =
          proTemplate +
          (pro?.processName ? pro.processName : "") +
          (index < process.length - 1 ? "+" : "");

        if (pro?.processLoss) loss = parseFloat(pro.processLoss);
        if (pro?.processRate) price = parseFloat(pro.processRate);
        totalCost += price; // (totalCost+price)*loss/((100/100)-loss)
        totalLoss += loss; // (totalCost+price)*loss/((100/100)-loss)
        // pro.cost = totalCost
        // process.splice(index,1,pro);
        //form.setFieldsValue({processTemplate:proTemplate})
      });

      setProcessLoss(totalLoss);
      setProcessRate(totalCost);
      setProcessTemplate(proTemplate);
    }
  };
  return (
    <Modal
      visible={visible}
      title={"Create Fabric Details"}
      okText="Save"
      cancelText="Close"
      centered
      onCancel={() => {
        if (onCancel) {
          onCancel();
          form.resetFields();
        }
      }}
      onOk={() => {
        form.validateFields().then((res) => {
          let formData: SampleCostingFormData = {
            totalProcessLoss: 0,
            totalProcessRate: 0,
            cad: 0,
          };

          formData.componentName = res.component;
          formData.panelName = res.panelName;
          formData.cad = res.cad;
          formData.fabric = res.fabric;
          formData.totalProcessLoss = processLoss;
          formData.totalProcessRate = processRate;
          formData.process = [
            res.process.map((v: any) => ({
              processName: v.processName,
              loss: v.processLoss,
              rate: v.processRate,
            })),
          ];
          formData.processTemplate = processTemplate;

          onSave(formData);
          form.resetFields();
        });
      }}
    >
      <Form layout="vertical" onValuesChange={valueChange} form={form}>
        <Form.List name={"process"}>
          {(fields, { add, remove }) => {
            return (
              <>
                <Row>
                  <Col md={12}>
                    <Typography.Text strong>{processTemplate}</Typography.Text>
                  </Col>
                </Row>
                <Row>
                  <Col md={12}>
                    <Typography.Text strong>Process</Typography.Text>
                  </Col>
                  <Col md={4}>
                    <Typography.Text strong>Loss (%)</Typography.Text>
                  </Col>
                  <Col md={4}>
                    <Typography.Text strong>Price/Kgs</Typography.Text>
                  </Col>
                  <Col md={4}>
                    {fields.length === 0 ? (
                      <Button type="link" onClick={() => add()}>
                        Add
                      </Button>
                    ) : (
                      ""
                    )}
                  </Col>
                </Row>

                {fields.map((field) => (
                  <Row>
                    <Col md={12}>
                      <Form.Item noStyle name={[field.name, "processName"]}>
                        <Select style={{ width: "100%" }}>
                          <Select.Option value={"yrn"}>Yarn</Select.Option>
                          <Select.Option value="y/d">Yarn Dyeing</Select.Option>
                          <Select.Option value="knt">Knitting</Select.Option>
                          <Select.Option value="h/s">HeatSetting</Select.Option>
                          <Select.Option value="dye">Dyeing</Select.Option>
                          <Select.Option value="prnt">Print</Select.Option>
                          <Select.Option value="o/w">Compacting</Select.Option>
                        </Select>
                      </Form.Item>
                    </Col>
                    <Col md={4}>
                      <Form.Item noStyle name={[field.name, "processLoss"]}>
                        <Input />
                      </Form.Item>
                    </Col>
                    <Col md={4}>
                      <Form.Item noStyle name={[field.name, "processRate"]}>
                        <Input />
                      </Form.Item>
                    </Col>
                    <Col md={2}>
                      <Button
                        type="text"
                        onClick={() => add({}, field.name + 1)}
                        icon={<PlusCircleOutlined />}
                      ></Button>
                    </Col>
                    <Col md={2}>
                      {fields.length > 1 ? (
                        <Button
                          type="text"
                          onClick={() => remove(field.name)}
                          icon={<MinusCircleOutlined />}
                        ></Button>
                      ) : (
                        ""
                      )}
                    </Col>
                  </Row>
                ))}

                {fields.length > 0 ? (
                  <Row>
                    <Col md={12}>
                      <Typography.Text strong>Total</Typography.Text>
                    </Col>
                    <Col
                      style={{ textAlign: "right", paddingRight: "5px" }}
                      md={3}
                    >
                      <Typography.Text strong>{processLoss}</Typography.Text>
                    </Col>
                    <Col
                      style={{ textAlign: "right", paddingRight: "5px" }}
                      md={3}
                    >
                      <Typography.Text strong>{processRate}</Typography.Text>
                    </Col>
                  </Row>
                ) : (
                  ""
                )}
              </>
            );
          }}
        </Form.List>
      </Form>
    </Modal>
  );
};
