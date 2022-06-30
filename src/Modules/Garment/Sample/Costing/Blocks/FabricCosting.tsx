import { DeleteFilled } from "@ant-design/icons";
import { Table, Typography, Button } from "antd";
import React, { Component } from "react";
import { SampleCostingFormData, showFabricEditor } from "./FabricCostingEditor";

type FabricCostingType = {
  fabricComponent: Array<FabricComponent>;
  totalCost: number;
};
type StyleCombo = {
  comboName: string;
  components: Array<FabricComponent>;
  comboCost: number;
};
export type FabricComponent = {
  key: string;
  comboName?: string;
  componentName?: string;
  panelName?: string;
  color?: string;
  cad: number;
  fabric?: string;
  processList?: Array<FabricProcess>;
  totalProcessLoss: number;
  totalProcessRate: number;
  processTemplate?: string;
  componentCost: number;
};
export interface FabricProcess {
  id?: number | string;
  processName: string | number;
  processLoss: number;
  processRate: number;
}
type FabricCostingTypeState = {
  data: FabricCostingType;
};
type FabricCostingTypeProps = {
  value?: FabricCostingType;
  onChange?: (value: FabricCostingType) => void;
};

export default class FabricCosting extends Component<
  FabricCostingTypeProps,
  FabricCostingTypeState
> {
  constructor(props: FabricCostingTypeProps) {
    super(props);

    this.state = {
      data: {
        totalCost: 0,
        fabricComponent: [],
      },
    };
  }

  addFabricComponent = (
    prevValue?: FabricComponent | undefined,
    newValue?: FabricComponent | undefined
  ) => {
    const data = { ...this.state.data };

    console.log(data);
    const components = [...data.fabricComponent];

    if (newValue) {
      components.push(newValue);
    }

    this.calculateValue(components);
  };

  deleteComponent = (record: FabricComponent) => {
    const components = this.state.data.fabricComponent.filter(
      (e) => e.key !== record.key
    );
    this.calculateValue(components);
  };

  calculateValue = (costing: Array<FabricComponent>) => {
    const data = this.state.data;

    costing.forEach((cm) => {
      data.totalCost = data.totalCost + cm.totalProcessRate;
    });

    data.fabricComponent = [...costing];

    this.setState({ ...this.state, data: data }, () => {
      if (this.props.onChange) {
        this.props.onChange(data);
      }
    });
  };

  shouldComponentUpdate(_: any, nextstate: any) {
    if (this.state !== nextstate) return true;
    return false;
  }

  render() {
    console.log("Render", this.state.data);
    return (
      <div>
        {this.state.data.fabricComponent.map((e) => (
          <>{e.cad}</>
        ))}
        <Table<FabricComponent>
          pagination={false}
          title={() => (
            <>
              <Typography.Text strong style={{ fontSize: "14pt" }}>
                {this.state.data.fabricComponent.length}
              </Typography.Text>
              <Button
                onClick={() => {
                  showFabricEditor({
                    onSave: this.addFabricComponent,
                    visible: false,
                    onCancel: function (): void {
                      throw new Error("Function not implemented.");
                    },
                  });
                }}
                type='primary'
                style={{ float: "right" }}>
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
                return <a>{value}</a>;
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
                return <>{record.totalProcessRate * (record.cad / 1000)}</>;
              },
            },
            {
              title: "",
              width: 100,
              align: "center",
              render: (_, record) => {
                return (
                  <>
                    <Button
                      type='text'
                      icon={<DeleteFilled></DeleteFilled>}></Button>
                  </>
                );
              },
            },
          ]}
          dataSource={this.state.data.fabricComponent}></Table>
      </div>
    );
  }
}
