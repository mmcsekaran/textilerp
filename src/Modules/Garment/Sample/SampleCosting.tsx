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
import SampleCostingMaster, { SampleCostingMasterType } from "./Costing/Blocks/SampleCostingMaster";
import FabricCosting, { FabricComponent } from "./Costing/Blocks/FabricCosting";

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
  components: Array<FabricComponent>;
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
        <Form name="costmas" onValuesChange={(_,value:any) =>
        {
          console.log(value)
        }}>
            <Row>
              <Form.Item name ="master" >
                  <SampleCostingMaster />
              </Form.Item>
            
            </Row>
            {/* Summary Pages */}
            <Row gutter={10}>
              <Col md={8}>
                <Form.Item name={'costingSummary'}>
                    <CostingSummary accessories={this.state.trimsCosting?.total} cmt = {this.state.cmtCosting?.total} emplishment = {this.state.empCosting.total} transport ={10}></CostingSummary>
                </Form.Item>
              
              </Col>

             
              <Col md={16}>
                <Form.Item name={"profitSummary"}>
                   <ProfitSummary costingSummary={this.state.costingSummary} />
                </Form.Item>
              
              </Col>
            </Row>
            <Row>
              <Col md={24}>
                <div
                  style={{ padding: "10px", width: "100%", height: "50px" }}
                ></div>
                <Form.Item name={"fabric"}>
                    <FabricCosting />
                </Form.Item>
              
              </Col>
            </Row>
            <Row gutter={10}>
              <Col md={24}>
                <div
                  style={{ padding: "10px", width: "100%", height: "50px" }}
                ></div>
                <TrimsCosting data={this.state.trimsCosting?.trimsData} onChange={this.onChangeTrims} />
              </Col>
            </Row>
            <Row gutter={10}>
              <Col md={12}>
                <div
                  style={{ padding: "10px", width: "100%", height: "50px" }}
                ></div>
                <CMTCosting data = {this.state.cmtCosting?.cmtData} onChange ={this.onChangeCMT} ></CMTCosting>
              </Col>
              <Col md={12}>
                <div
                  style={{ padding: "10px", width: "100%", height: "50px" }}
                ></div>
                  <Emplishment onChange={this.onUpdateEmplishment} />
              </Col>
            </Row>
            <Row gutter={10} style={{ marginTop: "10px" }}>
              <Col md={12}>
                <div>
                  <PortionEditor />
                </div>
              </Col>
              <Col md={12}>
                <PortionEditor type="fabric" />
              </Col>
            </Row>
          </Form>
          {/* <SampleCostingEditorModal
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
          ></SampleCostingEditorModal> */}

         
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



interface SampleCostingEditorProps {
  visible?: boolean;
  onSave: (values: FabricComponent) => void;
  onCancel?: () => void;
}

interface SampleEditor {
  open(props: SampleCostingEditorProps): void;
}



function deleteTrims(
  datasource: Array<TrimsCostingFormData>,
  key: React.Key | undefined
) {
  throw new Error("Function not implemented.");
}
