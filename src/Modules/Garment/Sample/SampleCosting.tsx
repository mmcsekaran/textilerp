import {
  DeleteColumnOutlined,
  DeleteFilled,
  DeleteOutlined,
  LoadingOutlined,
  MinusCircleOutlined,
  PlusCircleOutlined,
  PlusOutlined,
} from "@ant-design/icons";
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
  PageHeader,
  notification,
} from "antd";
import { RcFile, UploadFile, UploadType } from "antd/lib/upload/interface";
import React, {
  Component,
  ReactElement,
  ReactInstance,
  RefObject,
  useRef,
  useState,
} from "react";
import StyleCategory from "../../Common/StyleCategory";
import PortionEditor from "./PortionEditor";
import StyleEditor from "./StyleEditor";
import  {
  TrimsCostingFormData,
} from "./Costing/Blocks/TrimsCostingEditor";
import { PrintCosting } from "./Costing/component/PrintCosting";
import {
  EmplishmentCostingEditor,
  EmplishmentCostingFormData,
  showEditor,
} from "./Costing/Blocks/EmplishmentEditor";
import { ModalEditor } from "./Costing/component/Editor";
import TrimsCosting, { actionType, TrimsCost } from "./Costing/Blocks/TrimsCosting";
import CostingSummary, { CostingSummaryData } from "./Costing/Blocks/CostingSummary";
import CMTCosting, { CMTCost } from "./Costing/Blocks/CMTCosting";
import Emplishment, { EmplishmentType } from "./Costing/Blocks/Emplishment";
import ProfitSummary from "./Costing/Blocks/ProfitSummary";

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
  imageSrc: undefined,
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

// interface TrimsCosting {
//   id?: number | string;
//   compoName: string;
//   component: string;
//   trimName: string | number;
//   unit: string | number;
//   price: number;
//   consumption: number;
// }
// interface CMTCosting {
//   id?: number | string;
//   comboName: string;
//   componentName: string | "All";
//   cmtName?: string | number;
//   cmtRate?: number;
// }

interface SampleCostingState {
  costingData: SampleCostingData;
  showEditor?: boolean;
  imageLoading: boolean;
  trimsCosting: TrimsCost | undefined;
  showTrimsEditor: boolean;
  showCmtEditor: boolean;
  cmtCosting: CMTCost | undefined;
  showEmpEditor: { visible: boolean; value?: EmplishmentCostingFormData };
  empCosting: EmplishmentType ;
  costingSummary:CostingSummaryData
}

interface CostingFabricData {
  componentName: string;
  panelName: string;
  cad: number;
  fabric: string;
}



interface summaryCosting {
  cadSummary: { combo: string; component: string; cost: number };
}

export default class SampleCosting extends React.Component<
  SampleCostingProps,
  SampleCostingState
> {
 
  private printCosting: React.RefObject<ReactElement>;
 
  onChangeTrims = ( value?: TrimsCost | undefined) => 
  {
    console.log(value)
    this.setState({...this.state,trimsCosting:value})
  }
  onChangeCMT = (value?: CMTCost | undefined) =>
  {
    console.log("CMT Changer = ",value)
    this.setState({...this.state,cmtCosting:value})
  }
  onUpdateEmplishment = (value: EmplishmentType) =>
  {
    this.setState({...this.state,empCosting:value})
  }

  constructor(props: SampleCostingProps) {
    super(props);
    this.printCosting = React.createRef();
    this.state = {
      costingSummary:
      {
        emplishment: 0,
        testing: 0,
        accessories: 0,
        cmt: 0,
        transport: 0,
        garmentCost: 0,
        gmtRejection: 0,
        adminOH: 0,
        profit: 0,
        commission: 0,
        gmtRejectionPercent: 0,
        adminOHPercent: 0,
        profitPercent: 0,
        commissionPercent: 0,
        total: 0,
      },
      costingData: defaultCostingData,
      showEditor: false,
      imageLoading: false,
      trimsCosting: {total:0,trimsData:[]},
      showTrimsEditor: false,
      showCmtEditor: false,
      cmtCosting: {subTotal:0,total:0,profit:0,cmtData:[]},
      showEmpEditor: { visible: false },
      empCosting: {total:0,data:[]},
    };
  }

  

  showCmtEditor = (visible: boolean) => {
    this.setState({ showCmtEditor: visible });
  };
  showTrimsEditor = (visible: boolean) => {
    this.setState({ showTrimsEditor: visible });
  };

  render() {
    return (
      <div>
        <PageHeader
          title={"Sample Costing"}
          extra={[<PrintCosting data={this.state.cmtCosting} />]}
        />
        <Form.Provider>
         
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
  showEmpEditor = (
    visible: boolean,
    value?: EmplishmentCostingFormData
  ): void => {
    this.setState({ showEmpEditor: { visible: visible, value: value } });
  };
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

function deleteTrims(
  datasource: Array<TrimsCostingFormData>,
  key: React.Key | undefined
) {
  throw new Error("Function not implemented.");
}
