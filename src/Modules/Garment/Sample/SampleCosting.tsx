import { MinusCircleOutlined, PlusCircleOutlined } from "@ant-design/icons";
import { Button, Col, Form, Image, Input, Modal, Row, Select, Table, Typography ,message, Space} from "antd";
import React, { Component, useState } from "react";
import StyleCategory from "../../Common/StyleCategory";
import StyleEditor from "./StyleEditor";
export interface SampleCostingProps {
  costingNo: number;
  
}

interface SampleCostingData
{
  id?:string|number
  costingNo?:number|string
  buyerId?: number|string
  buyerCurrency?:string|number
  buyerPrice?:number
  styleCategory?:string
  styleNo?:string|number
  styleDescription?:string|number
  packs?:string|number
  noOfPcs?:number,
  imageSrc?:string
  combos?:Array<StyleCombo>
  exachangeRate?:number
  packFoc?:number


}

interface StyleCombo
{
  id?:number|string
  comboName?:string|number
  comboColor?:string|number
  components?:Array<StyleComponent>|StyleComponent
}
interface StyleComponent
{
  id?:number|string
  componentName?:string|number
  componentPanels?:Array<StyleComponentPanel>|StyleComponentPanel
  trims:Array<TrimsCosting>
  cmt:Array<CMTCosting>
}
interface StyleComponentPanel
{
  id?:number|string
  panelName:string|number
  isMainComponent:boolean
  fabric:string
  cad:number
  process?:Array<FabricProcess>
}
interface FabricProcess
{
  id?:number|string
  processName:string|number
  loss:number
  rate:number


}

interface TrimsCosting
{
  id?:number|string;
  trimName:string|number;
  unit:string|number
  price:number,
  consumption:number,
}
interface CMTCosting
{
  id?:number|string
  cmtName?:string|number;
  cmtRate?:number

}

interface SampleCostingState
{
  costingData?:SampleCostingData,
  showEditor?:boolean
}

interface CostingFabricData
{
  componentName:string
  panelName:string
  cad:number
  fabric:string
}

export default class SampleCosting extends React.Component<SampleCostingProps,SampleCostingState> {

  constructor(props:SampleCostingProps)
  {
    super(props);

    this.state =
    {
      showEditor:false
    }

  }

  render() {
    return (
      <div>
        <Form.Provider>
          <Form name='costmas'>
            <Row>
             
              <Col md={18} style={{padding:'20px'}}>
                <Row>
                  <Form.Item></Form.Item>
                </Row>
                <Row gutter={5}>
                  <Col md={8}>
                    <Form.Item
                    name={"styleCategory"}
                    label = {"Style Category"}
                    >
                      <StyleCategory/>
                    </Form.Item>
                  </Col>
                  <Col md={8}>
                    <Form.Item name={"styleNumber"}
                    label ={"Style Number"}
                    >
                      <Input placeholder="Style Number"/>
                    </Form.Item>
                  </Col>
                  <Col md={8}>
                    <Form.Item name={"styleNumber"}
                    label ={"Style Number"}
                    >
                      <Input placeholder="Style Number"/>
                    </Form.Item>
                  </Col>
                </Row>
                <Row gutter={5}>
                  <Col md={8}>
                    <Form.Item
                    name={"styleCategory"}
                    label = {"Style Category"}
                    >
                      <StyleCategory/>
                    </Form.Item>
                  </Col>
                  <Col md={8}>
                    <Form.Item name={"styleNumber"}
                    label ={"Style Number"}
                    >
                      <Input placeholder="Style Number"/>
                    </Form.Item>
                  </Col>
                  <Col md={8}>
                    <Form.Item name={"styleNumber"}
                    label ={"Style Number"}
                    >
                      <Input placeholder="Style Number"/>
                    </Form.Item>
                  </Col>
                </Row>
                <Row gutter={5}>
                  <Col md={8}>
                    <Form.Item
                    name={"styleCategory"}
                    label = {"Style Category"}
                    >
                      <StyleCategory/>
                    </Form.Item>
                  </Col>
                  <Col md={8}>
                    <Form.Item name={"styleNumber"}
                    label ={"Style Number"}
                    >
                      <Input placeholder="Style Number"/>
                    </Form.Item>
                  </Col>
                  <Col md={8}>
                    <Form.Item name={"styleNumber"}
                    label ={"Style Number"}
                    >
                      <Input placeholder="Style Number"/>
                    </Form.Item>
                  </Col>
                </Row>
               
              </Col>
              <Col md={6} style={{padding:'15px'}}>
                <div style={{width:'100%',height:'100%'}}>
                  <Image width={230} height ={250} src="error" style={{background:'green'}}>

                  </Image>
                </div>
              </Col>
            </Row>
            <Row>
              
            </Row>
            <Row>
              <Col md={24}>
                <div style={{padding:'10px', width:'100%',height:'50px'}}>
                
                </div>
                  <Table
                  title={()=><><Typography.Text strong style={{fontSize:'14pt'}} >Fabric Details</Typography.Text><Button onClick={()=> {this.setState({showEditor:true})}} type="primary" style ={{float:'right'}}>Add Fabric</Button></> }
                    columns={[
                      {
                        title : "S.No",
                        width:50,
                        align:'center'
                      },
                      {
                        title : "Panel Name",
                        align:'center',
                        width:150
                      },
                      {
                        title : "Fabric",
                        align:'center'
                      },
                      {
                        title : "Cad",
                        width:100,
                        align:'center'
                      },
                      {
                        title : "GSM",
                        width:100,
                        align:'center'
                      },
                      {
                        title : "Process Template",
                        align:'center',
                        width:150
                      },
                      {
                        title : "Fabric Consumption",
                        width:100,
                        align:'center'
                      },
                      {
                        title : "Fabric Cost (KGS)",
                        width:100,
                        align:'center'
                      },
                      {
                        title : "Fabric Cost",
                        width:100,
                        align:'center'
                      },
                    ]}
                   
                  ></Table>
              </Col>
            </Row>
          </Form>
          <SampleCostingEditorModal onCancel={() => {
            this.setState({showEditor:false})
          }} visible ={this.state.showEditor} onSave={(values)=>{
            
            
            
            }}></SampleCostingEditorModal>
          
        </Form.Provider>
      </div>
    );
  }
}

interface SampleCostingEditorProps
{
  visible?:boolean
  onSave:(values:StyleComponentPanel)=> void
  onCancel?:()=> void
  
}

interface SampleEditor 
{
  open(props:SampleCostingEditorProps): void
}

const SampleCostingEditorModal :React.FC<SampleCostingEditorProps> = ({visible,onSave,onCancel}) =>
{
  const [form] = Form.useForm();
  const [processLoss,setProcessLoss] = useState(0)
  const [processRate,setProcessRate] = useState(0)
  const valueChange = (_:any,values:any) =>
  {
     const process =  [...values.process];

     const cad = parseFloat(values.cad)|0
    console.log(values)
     if(process)
     {
      let totalCost =0;
      let totalLoss = 0
     process.forEach((pro,index) => 
      {
       
          let loss =   0 ;
          let price = 0 ;
          if(pro?.processLoss) loss = parseFloat(pro.processLoss) ;
          if(pro?.processRate) price = parseFloat(pro.processRate) ;
          totalCost += price // (totalCost+price)*loss/((100/100)-loss)
          totalLoss += loss // (totalCost+price)*loss/((100/100)-loss)
         // pro.cost = totalCost
         // process.splice(index,1,pro);
        
      })
  
      setProcessLoss(totalLoss);
      setProcessRate(totalCost)
    
     }
  }
  return (
    <Modal
    width={'70%'}
    visible = {visible}
    title = {"Create Fabric Details"}
    okText ="Add"
    cancelText ="Close"
    onCancel={onCancel}
    onOk = {() =>
    {
      form.validateFields().then(
        res => 
        {
          onSave({ panelName 

          })
        }
      )
    }}
    >
      <Form
      layout='vertical'
      onValuesChange={valueChange}
      form = {form}
      >
        <Row gutter={10}>
          <Col md={8}>
          <Form.Item
        label = "Component"
        name={"component"}
        >
          <Select>
            <Select.Option value = {"top"}>Top</Select.Option>
            <Select.Option value = {"pant"}>Pant</Select.Option>
            <Select.Option value = {"shorts"}>Shorts</Select.Option>
            <Select.Option value = {"headband"}>Head Band</Select.Option>
            <Select.Option value = {"eyepatch"}>Eye Patch</Select.Option>
          </Select>
        </Form.Item>
          </Col>
          <Col md={8}>
          <Form.Item
        label = "Panel Name"
        name={"panelName"}
        >
         <Select>
            <Select.Option value = {"top"}>Top</Select.Option>
            <Select.Option value = {"pant"}>Pant</Select.Option>
            <Select.Option value = {"shorts"}>Shorts</Select.Option>
            <Select.Option value = {"headband"}>Head Band</Select.Option>
            <Select.Option value = {"eyepatch"}>Eye Patch</Select.Option>
          </Select>
        </Form.Item>
          </Col>
          <Col md={8}>
          <Form.Item
        label = "Cad (GRM)"
        name={"cad"}
        >
        <Input />
        </Form.Item>
          </Col>
        </Row>
      
       <Row>
        <Col md ={16}>
        <Form.Item
        label = "Fabric"
        labelCol={{span:3}}
        name ={"fabric"}
        >
         <Select>
            <Select.Option value = {"top"}>Top</Select.Option>
            <Select.Option value = {"pant"}>Pant</Select.Option>
            <Select.Option value = {"shorts"}>Shorts</Select.Option>
            <Select.Option value = {"headband"}>Head Band</Select.Option>
            <Select.Option value = {"eyepatch"}>Eye Patch</Select.Option>
          </Select>
        </Form.Item>
        </Col>
       </Row>
       
    

        <Form.List name={"process"}>
          {(fields,{add,remove} ) =>
          {
           return( <>
           <Row>
            
           
           </Row>
           <Row>
            <Col  md={12}>
              <Typography.Text strong>Process</Typography.Text>
            </Col>
            <Col  md={3}>
              <Typography.Text strong>Loss (%)</Typography.Text>
            </Col>
            <Col  md={3}>
              <Typography.Text strong>Price/Kgs</Typography.Text>
            </Col>
            <Col  md={3}>
            <Button type="link" onClick={()=>add()}>Add</Button>
            </Col>
           
           </Row>
          
           {fields.map(field =>
            (
              <Row>
              <Col md={12}>
              <Form.Item noStyle name={[field.name,"processName"]}>
                <Select style={{width:'100%'}}>
                  <Select.Option>Yarn</Select.Option>
                  <Select.Option>Yarn Dyeing</Select.Option>
                  <Select.Option>Knitting</Select.Option>
                  <Select.Option>HeatSetting</Select.Option>
                  <Select.Option>Dyeing</Select.Option>
                  <Select.Option>Print</Select.Option>
                  <Select.Option>Compacting</Select.Option>
                </Select>
              </Form.Item>
              </Col>
              <Col md={3}>
              <Form.Item noStyle name={[field.name,"processLoss"]}>
                <Input/>
              </Form.Item>
              </Col>
              <Col md={3}>
              <Form.Item noStyle name={[field.name,"processRate"]}>
                <Input/>
              </Form.Item>
              </Col>
              {/* <Col md={2}> */}
              
               {/* <Button type='text'  icon ={<PlusCircleOutlined/>} ></Button> */}
               
              {/* </Col> */}
              {/* <Col md={2}> */}
              
              
               <Button type='text' onClick={()=> remove(field.name)}  icon ={<MinusCircleOutlined/>} ></Button>
              {/* </Col> */}
              
              
              </Row>
             
            ))}

      { fields.length > 0 ?  <Row >
            <Col  md={12}>
              <Typography.Text strong>Total</Typography.Text>
            </Col>
            <Col style={{textAlign:'right',paddingRight:'5px'}}  md={3}>
              <Typography.Text strong>{processLoss}</Typography.Text>
            </Col>
            <Col style={{textAlign:'right',paddingRight:'5px'}}  md={3}>
              <Typography.Text strong>{processRate}</Typography.Text>
            </Col>
           
           
           </Row>:''}
            </>)
          }}
        </Form.List>
      </Form>

    </Modal>
  )
}