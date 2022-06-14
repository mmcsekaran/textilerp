import { MinusCircleFilled, MinusCircleOutlined, MinusSquareOutlined, PlusCircleFilled, RestFilled } from '@ant-design/icons'
import { Form, Input, Space, Switch, Typography ,Row, Col, Select, Button,Image} from 'antd'
import React, { Component, useState } from 'react'
import StyleEditor from './StyleEditor'

export default class Costing extends Component {
  render() {
    return (
      <div>
        <StyleEditor></StyleEditor>
        <Form>
          <div>
            <Row>
              <Col>
              <Row>
                <Col><Typography.Title level={5}>Buyer</Typography.Title></Col>
                <Col><Form.Item><Input></Input></Form.Item></Col>
                <Col><Typography.Title level={5}>Buyer</Typography.Title></Col>
                <Col><Form.Item><Input></Input></Form.Item></Col>
                <Col><Typography.Title level={5}>Buyer</Typography.Title></Col>
                <Col><Form.Item><Input></Input></Form.Item></Col>
                <Col><Typography.Title level={5}>Buyer</Typography.Title></Col>
                <Col><Form.Item><Input></Input></Form.Item></Col>
                
              </Row>
              <Row>
                <Col><Typography.Title level={5}>Buyer</Typography.Title></Col>
                <Col><Form.Item><Input></Input></Form.Item></Col>
                <Col><Typography.Title level={5}>Buyer</Typography.Title></Col>
                <Col><Form.Item><Input></Input></Form.Item></Col>
                <Col><Typography.Title level={5}>Buyer</Typography.Title></Col>
                <Col><Form.Item><Input></Input></Form.Item></Col>
                <Col><Typography.Title level={5}>Buyer</Typography.Title></Col>
                <Col><Form.Item><Input></Input></Form.Item></Col>
                
              </Row>
              <Row>
                <Col><Typography.Title level={5}>Buyer</Typography.Title></Col>
                <Col><Form.Item><Input></Input></Form.Item></Col>
                <Col><Typography.Title level={5}>Buyer</Typography.Title></Col>
                <Col><Form.Item><Input></Input></Form.Item></Col>
                <Col><Typography.Title level={5}>Buyer</Typography.Title></Col>
                <Col><Form.Item><Input></Input></Form.Item></Col>
                <Col><Typography.Title level={5}>Buyer</Typography.Title></Col>
                <Col><Form.Item><Input></Input></Form.Item></Col>
                
              </Row>
              <Row>
                <Col><Typography.Title level={5}>Buyer</Typography.Title></Col>
                <Col><Form.Item><Input></Input></Form.Item></Col>
                <Col><Typography.Title level={5}>Buyer</Typography.Title></Col>
                <Col><Form.Item><Input></Input></Form.Item></Col>
                <Col><Typography.Title level={5}>Buyer</Typography.Title></Col>
                <Col><Form.Item><Input></Input></Form.Item></Col>
                <Col><Typography.Title level={5}>Buyer</Typography.Title></Col>
                <Col><Form.Item><Input></Input></Form.Item></Col>
                
              </Row>
              <Row>
                <Col><Typography.Title level={5}>Buyer</Typography.Title></Col>
                <Col><Form.Item><Input></Input></Form.Item></Col>
                <Col><Typography.Title level={5}>Buyer</Typography.Title></Col>
                <Col><Form.Item><Input></Input></Form.Item></Col>
                <Col><Typography.Title level={5}>Buyer</Typography.Title></Col>
                <Col><Form.Item><Input></Input></Form.Item></Col>
                <Col><Typography.Title level={5}>Buyer</Typography.Title></Col>
                <Col><Form.Item><Input></Input></Form.Item></Col>
                
              </Row>
              </Col>
              <Col>
                <Image height={200} src='error' 
                fallback={"data:image/png;base64,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"}/>
              </Col>
            </Row>
          </div>
          
            
            <Form.List name={"panels"}>
              {
                (fields,{add,remove}) => 
                  (
                    <div>
                       <div><Button onClick={()=> add()} >Add</Button></div>
                        <Row>
                        {
                          (fields.map(field =>
                            (
                              <Col xs={24} sm = {24} md={12} lg ={12} xl ={12} >
                               <Form.Item noStyle >
                                <MeasureToCad/>
                              </Form.Item>
                              </Col>
                             
                              
                            )))
                        }
                        </Row>
                    </div>
                  )

                  
              }
            
            </Form.List>
          
         
        </Form>
      </div>
    )
  }
}



export  function MeasureToCad({value = {},onChange}) {
  const [calcMode,setCalcMode] = useState(false)
  const [form] = Form.useForm()
  const handleFieldChange = (_,fields) =>
  {
    console.log(fields)
    var cadweight = parseFloat(fields.cadWt);
    if(calcMode)
    {
     var total_length =0;
     var total_sl_length =0 ;
     var total_width = 0 ;
     var gsm = 0;
     var loss = 0

    if(fields.length && fields.len_allow ) total_length = parseFloat(fields.length)+ parseFloat (fields.len_allow)
    if(fields.sl_length && fields.sl_len_allow) total_sl_length = parseFloat(fields.sl_length)+ parseFloat (fields.sl_len_allow)
    if(fields.width && fields.width_allow) total_width = parseFloat(fields.width)+ parseFloat (fields.width_allow)
    if(fields.gsm) gsm = parseInt(fields.gsm)
    if(fields.loss) loss = parseFloat(fields.loss);

    var total_all_length = ((((total_length+total_sl_length)*total_width)*2)*gsm)/10000;

    cadweight = ((total_all_length +(total_all_length * loss)/100)/1000).toPrecision(3)

    form.setFieldsValue({total_sl_length:total_sl_length,total_length:total_length,total_width:total_width,cadWt:cadweight})
    }
    var cost = 0;

  
      const rowCopy = [...fields.process]
      var total_cost =0 ;

       var proloss = 0;

      fields.process.forEach((element,index) => {
        
        console.log(element,index)

        if(element)
        {
       
      
        if(element.processLoss ) proloss += parseFloat(element.processLoss)
        if(element.processRate )
        { total_cost = total_cost + ((parseFloat(cadweight) +((parseFloat(cadweight) * parseFloat(element.processLoss))/100)) * parseFloat(element.processRate));
      
        element.processCost = total_cost
        }
       
        
     rowCopy.splice(index,1,element)
     form.setFieldsValue({process:rowCopy,total_process_cost:total_cost,total_process_loss:proloss})
        //  rowCopy.slice(index,1,element);
        //  form.setFieldsValue({processes:rowCopy})
      }
      
    });

   // form.setFieldsValue(fields)
    
  }
const caltotal = data =>
{
  console.log(data)
}
  return (
    <div style={{padding:'10px'}}>
      <Form style={{padding:'20px',background:'skyblue'}}
      onValuesChange = {handleFieldChange}
      form = {form}
      name="ajdk"
      >

       
        
        {/* Length Calculation Row */}
        <Row>
        <Col span={6}><Typography.Title level={5}>Panel Name</Typography.Title></Col>
        <Col span={5}><Form.Item noStyle name={"panelName"}><Input placeholder='Panel Name'></Input></Form.Item></Col>
        <Col span={5}><Typography.Title level={5}>Panel Weight</Typography.Title></Col> 
        <Col span={5}><Form.Item noStyle name={"cadWt"}><Input placeholder='Cad'></Input></Form.Item></Col>  
        <Col span={3} ><Form.Item noStyle   ><Switch style={{float:'right'}} onChange={(status)=>
        {
          setCalcMode(status)
        }} unCheckedChildren={"Off"} checkedChildren={"On"} placeholder='Cad'></Switch></Form.Item></Col>  
        </Row>
        {calcMode ?<>
        <Row>
        <Col span={6}><Typography.Title level={5}>Name</Typography.Title></Col>
        <Col span={5}><Typography.Title level={5}>CMS</Typography.Title></Col>
        <Col span={5} ><Typography.Title level={5}>Allow</Typography.Title></Col> 
        <Col span={5} ><Typography.Title level={5}>Include. Allow</Typography.Title></Col> 
        </Row>
        <Row>
        <Col span={6}><Typography.Title level={5}>LENGTH</Typography.Title></Col>
        <Col span={5}><Form.Item noStyle name={"length"}><Input></Input></Form.Item></Col>
        <Col span={5}><Form.Item noStyle name={"len_allow"}><Input></Input></Form.Item></Col>  
        <Col span={5}><Form.Item noStyle name={"total_length"} ><Input></Input></Form.Item></Col>  
        </Row>
        <Row>
        <Col span={6}><Typography.Title level={5}>SL. LENGTH</Typography.Title></Col>
        <Col span={5}><Form.Item noStyle name={"sl_length"}><Input></Input></Form.Item></Col>
        <Col span={5}><Form.Item noStyle name={"sl_len_allow"}><Input></Input></Form.Item></Col>  
        <Col span={5}><Form.Item noStyle name={"total_sl_length"}><Input></Input></Form.Item></Col>  
        </Row>
        <Row>
        <Col span={6}><Typography.Title level={5}>WIDTH</Typography.Title></Col>
        <Col span={5}><Form.Item noStyle name={"width"}><Input></Input></Form.Item></Col>
        <Col span={5}><Form.Item noStyle name={"width_allow"}><Input></Input></Form.Item></Col>  
        <Col span={5}><Form.Item noStyle name={"total_width"}><Input></Input></Form.Item></Col>  
        </Row>
        <Row>
        <Col span={6}><Typography.Title level={5}>GSM</Typography.Title></Col>
        <Col span={5}><Form.Item noStyle name={"gsm"}><Input></Input></Form.Item></Col>
        <Col span={5}><Typography.Title level={5}>Loss (%)</Typography.Title></Col>
        <Col span={5}><Form.Item noStyle name={"loss"}><Input></Input></Form.Item></Col>  
        </Row></>
:''}
        <Form.List name="process"

        >

        {(fields,{add,remove}) =>
        
        <div>
        <Row>
        <Col span={6}><Typography.Title level={5}>Process Name</Typography.Title></Col>
        <Col span={5}><Typography.Title level={5}>Loss (%)</Typography.Title></Col>
        <Col span={5} ><Typography.Title level={5}>Rate (Kgs)</Typography.Title></Col> 
        <Col span={5} ><Typography.Title level={5}>Cost</Typography.Title></Col> 
        <Col span={3}><Form.Item noStyle ><Button type='text' onClick={()=> add()}  style={{color:'green'}} icon={<PlusCircleFilled color='green' ></PlusCircleFilled>}></Button></Form.Item></Col>  
        </Row>
          {fields.map( ({name,key,...restField}) =>
            (
            <Row key={key}>       
            <Col span={6}><Form.Item initialValue={null} {...restField}  name={[name,"processName"]} noStyle><Select notFoundContent={<><Button type='link'  >Create Process</Button></>} style={{width:'100%'}}></Select  ></Form.Item></Col>
            <Col span={5}><Form.Item initialValue={0} {...restField}  noStyle name={[name,"processLoss"]}><Input></Input></Form.Item></Col>
            <Col span={5}><Form.Item initialValue={0} {...restField}  noStyle name={[name,"processRate"]} ><Input></Input></Form.Item></Col>  
            <Col span={5}><Form.Item initialValue={0} {...restField}  noStyle  name={[name,"processCost"]} ><Input></Input></Form.Item></Col> 
           
            <Col span={3}>
              
              <Button  type='text' onClick={()=>
              {
              remove(name)
              }
              
              } style={{color:'red'}} icon={<MinusCircleFilled color='red' ></MinusCircleFilled>}></Button>
            <Button type='text' onClick={()=> add()}  style={{color:'green'}} icon={<PlusCircleFilled color='green' ></PlusCircleFilled>}></Button>
            </Col>  
          </Row>
            
            ))
  }
 
 
        </div>   

        }
        {/* Process Calculation Row */}
        
       
        
        </Form.List>
        <Row>
        <Col span={6}><Form.Item ><Input disabled className='disabled-input' value={"Total"}></Input></Form.Item></Col>
        <Col span={5}><Form.Item name={"total_process_loss"} ><Input disabled className='disabled-input' defaultValue={0 }></Input></Form.Item></Col>
        <Col span={5} ><Form.Item name={"total_process_rate"} ><Input  disabled className='disabled-input' ></Input></Form.Item></Col> 
        <Col span={5} ><Form.Item name ={"total_process_cost"} ><Input disabled className='disabled-input' defaultValue={0 }></Input></Form.Item></Col> 
        {/* <Col span={3}><Form.Item noStyle ><Button type='text' onClick={()=> add()}  style={{color:'green'}} icon={<PlusCircleFilled color='green' ></PlusCircleFilled>}></Button></Form.Item></Col>   */}
        </Row>
      </Form>
    </div>
  )
}




// import {
//   Button,
//   Col,
//   Divider,
//   Input,
//   message,
//   PageHeader,
//   Row,
//   Space,
//   Switch,
//   Table,
//   Tag,
//   Typography,
// } from "antd";
// import React, { Component, useState } from "react";
// import Document, { DocumentProps } from "./../../Common/Document";
// import { Form, DatePicker, Select } from "antd";
// import { withDocument } from "./../../Common/withDocument";
// import BuyerComponent from "../../Common/BuyerComponent";
// import { Card, Image } from "antd";
// import Designnation from "../../Common/Designnation";

// import DivisionComponent from "./../../Common/DivisionComponent";
// import StyleDescriptionComponent from "./../../Common/StyleDescriptionComponent";
// import ColorComponent from "./../../Common/ColorComponent";
// import SizeTemplateComponent from "./../../Common/SizeTemplateComponent";
// import FabricTypeComponent from "./../../Common/FabricTypeComponent";
// import FabricCompositionComponent from "../../Common/FabricComposition";
// import moment from "moment";
// import logo from "../../../assets/img/d2d.png";
// import {
//   CloseCircleOutlined,
//   MinusCircleOutlined,
//   PlusCircleOutlined,
// } from "@ant-design/icons";
// import CadCalculation from "./../../Common/CadCalculation";
// import { useForm } from "antd/lib/form/Form";
// import "../../Common/Component.css";
// import PortionComponent from "../../Common/PortionComponent";
// import FabricToCad from './FabricToCad';
// class SampleConsting extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       isFabricCal: false,
//     };
//   }

//   handleFieldChange = (data) => {
//     console.log(data);
//   };
//   handleValueChange = (_, values) => {
//     console.log(values);
//   };
//   onSave = (data) => {
//     this.props.onSave("hi");
//   };

//   formRef = React.createRef();

//   onFinish = (values) => {
//     console.log(values);
//   };

//   render() {
//     console.log(this.prop);
//     return (
//       <div>
//         <Card style={{ background: "lightgreen" }}>
//           <Document
//             AuthorizeTo={{
//               PagePermission: "COSTING_ENQUIRY1",
//               roles: ["admin1"],
//               users: ["CHANDRU"],
//             }}
//             documentTitle="Consting Enquiry"
//             status={"Unsaved"}
//             toolBar={["New", "Save"]}
//             form={this.form}
//             onSave={this.onSave}
//           >
//             <Form
//               labelCol={{ span: 9 }}
//               labelAlign="left"
//               name="myform"
//               ref={this.formRef}
//               layout="horizontal"
//               onFinish={this.onFinish}
//               onFieldsChange={this.handleFieldChange}
//               onValuesChange={this.handleValueChange}
//             >
//               <Row>
//                 <Col span={18}>
//                   <Row>
//                     <Col>
//                       <Form.Item name={"costno"} label="Costing No">
//                         <Input readOnly disabled type={"text"} />
//                       </Form.Item>
//                     </Col>
//                     <Col>
//                       <Form.Item label="Date">
//                         <DatePicker
//                           defaultValue={moment()}
//                           format="DD/MM/YYYY"
//                         />
//                       </Form.Item>
//                     </Col>
//                     <Col>
//                       <Form.Item label={"Buyer"}>
//                         <BuyerComponent />
//                       </Form.Item>
//                     </Col>
//                     <Row>
//                       <Col>
//                         <Form.Item label="Division">
//                           <DivisionComponent />
//                         </Form.Item>
//                       </Col>
//                       <Col>
//                         <Form.Item label="Style Description">
//                           <StyleDescriptionComponent />
//                         </Form.Item>
//                       </Col>
//                       <Col>
//                         <Form.Item label="Color">
//                           <ColorComponent />
//                         </Form.Item>
//                       </Col>
//                     </Row>
//                     <Col>
//                       <Form.Item label="Size Range">
//                         <SizeTemplateComponent />
//                       </Form.Item>
//                     </Col>
//                     <Col>
//                       <Form.Item label="Fabric">
//                         <FabricTypeComponent />
//                       </Form.Item>
//                     </Col>
//                     <Col>
//                       <Form.Item label="GSM" name={"gsm"}>
//                         <Input type={"number"} />
//                       </Form.Item>
//                     </Col>
//                     <Col>
//                       <Form.Item label="Fabric Composition">
//                         <FabricCompositionComponent />
//                       </Form.Item>
//                     </Col>
//                   </Row>
//                 </Col>
//                 <Col style={{ paddingLeft: "20px" }} span={6}>
//                   <Form.Item>
//                     <Image
//                       width={200}
//                       sizes="large"
//                       src="error"
//                       fallback="data:image/png;base64,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"
//                     ></Image>
//                   </Form.Item>
//                 </Col>
//               </Row>
//               <Form.List name="components">
//                 {(fields, { add, remove }) => (
//                   <>
//                     <>
//                       <Button onClick={() => add()}>Add Panel</Button>
//                     </>

                  
//                           <Form.List name={'process'}>
//                             {(fieldsPro,{add,remove}) =>
//                            (
//                              <>
//                              <><Button onClick={() => add()} >Add</Button></>
//                              {fieldsPro.map(process =>
//                               (
//                                     <>
//                              <Form.Item name={[process.name,"processname"]}>
//                                <Input/>
//                              </Form.Item>
//                              </>
//                               ))}
                         
//                              </>
//                            )
//                             }

//                           </Form.List>
                       
                   
//                     ))}
//                   </>
//                 )}
//               </Form.List>

//               <Form.Item>
//                 <Button htmlType="submit">Save</Button>
//               </Form.Item>
//               <FabToCadInput/>
//             </Form>
//           </Document>
//         </Card>
//       </div>
//     );
//   }
// }

// export default withDocument(SampleConsting, {});

// const FabToCadInput = ({ value = {}, onChange }) => {
//   const [form] = Form.useForm();

//   const [calc, setCalc] = useState(false);
//   const [comp1, setComb1] = useState({
//     name: "",
//     cms: 0,
//     allow: 0,
//     includeAllow: 0,
//   });
//   const [comp2, setComb2] = useState({
//     name: "",
//     cms: 0,
//     allow: 0,
//     includeAllow: 0,
//   });
//   const [comp3, setComb3] = useState({
//     name: "",
//     cms: 0,
//     allow: 0,
//     includeAllow: 0,
//   });
//   const [comp4, setComb4] = useState({
//     name: "",
//     cms: 0,
//     allow: 0,
//     includeAllow: 0,
//   });

//   const handleFieldChange = (_, values) => {
//     console.log("received field change", values);
//     // const rowcopy = [...values.cad];
//     // console.log(values);
//     // let cadweight = 0;
//     // values.cad.forEach((mcad, index) => {
//     //   if (mcad && mcad.cms && mcad.allow) {
//     //     mcad.incallow = parseFloat(mcad.cms) + parseFloat(mcad.allow);
//     //     rowcopy.slice(index, 1, mcad);
//     //     cadweight = cadweight + mcad.incallow;

//     //     form.setFieldsValue({ cad: rowcopy });
//     //   }
//     //   form.setFieldsValue({ cadWt: cadweight });
//     // });
//     if (calc) {
//       const len_incl_allow =
//         parseFloat(values.len_cms) + parseFloat(values.len_allow);
//       const slen_incl_allow =
//         parseFloat(values.slen_cms) + parseFloat(values.slen_allow);
//       const wid_incl_allow =
//         parseFloat(values.wid_cms) + parseFloat(values.wid_allow);
//       const tot_incl_allow =
//         ((len_incl_allow + slen_incl_allow) *
//           wid_incl_allow *
//           2 *
//           parseFloat(values.gsm)) /
//         10000;
//       const cadweight =
//         ((tot_incl_allow * parseFloat(values.loss)) / 100 + tot_incl_allow) /
//         1000;
//       form.setFieldsValue({
//         len_incl_allow: len_incl_allow,
//         slen_incl_allow: slen_incl_allow,
//         wid_incl_allow: wid_incl_allow,
//         cadWt: cadweight.toFixed(3),
//       });
//       console.log("received field change", form.getFieldsValue(true));
//     }
//   };

//   return (
//     <Form layout="horizontal" onValuesChange={handleFieldChange} form={form}>
    
//           <Row>
//             <Col>
//               <Form.Item noStyle>
//                 <Input
//                   disabled
//                   className="disabled-input"
//                   value={"Cad Weight"}
//                   placeholder="Cad Weight"
//                   type={"text"}
//                 />
//               </Form.Item>
//             </Col>
//             <Col >
//               <Form.Item noStyle name={"cadWt"}>
//                 <Input
//                   className={calc ? "disabled-input" : ""}
//                   disabled={calc}
//                   placeholder="Cad"
//                   type={"number"}
//                 />
//               </Form.Item>
//             </Col>
//             <Col ></Col>
//             <Col >
//               <Switch
//                 unCheckedChildren={"Calculation"}
//                 checkedChildren={"Cad Weight"}
//                 onChange={(e) => {
//                   setCalc(e);
//                 }}
//               ></Switch>
//             </Col>
//           </Row>
//           {calc ? (
//             <>
//               <Row>
//                 <Col xs={24} sm={24} lg={6}>
//                   <Form.Item noStyle>
//                     <Input
//                       className="disabled-input"
//                       disabled
//                       value={"LENGTH"}
//                       type={"text"}
//                     />
//                   </Form.Item>
//                 </Col>
//                 <Col xs={24} sm={12} lg={6}>
//                   <Form.Item noStyle name={"len_cms"}>
//                     <Input disabled={!calc} placeholder="CMS" type={"number"} />
//                   </Form.Item>
//                 </Col>
//                 <Col xs={24} sm={12} lg={6}>
//                   <Form.Item noStyle name={"len_allow"}>
//                     <Input
//                       disabled={!calc}
//                       placeholder="Allowance"
//                       type={"number"}
//                     />
//                   </Form.Item>
//                 </Col>
//                 <Col xs={24} sm={24} lg={6}>
//                   <Form.Item noStyle name={"len_incl_allow"}>
//                     <Input
//                       className="disabled-input"
//                       disabled
//                       placeholder="Inc. Allw"
//                       type={"number"}
//                     />
//                   </Form.Item>
//                 </Col>
//               </Row>
//               <Row>
//                 <Col>
//                   <Form.Item noStyle>
//                     <Input
//                       className="disabled-input"
//                       disabled
//                       value="SLV. LENGTH"
//                       type={"text"}
//                     />
//                   </Form.Item>
//                 </Col>
//                 <Col >
//                   <Form.Item noStyle name={"slen_cms"}>
//                     <Input disabled={!calc} placeholder="CMS" type={"number"} />
//                   </Form.Item>
//                 </Col>
//                 <Col>
//                   <Form.Item noStyle name={"slen_allow"}>
//                     <Input
//                       disabled={!calc}
//                       placeholder="Allowance"
//                       type={"number"}
//                     />
//                   </Form.Item>
//                 </Col>
//                 <Col>
//                   <Form.Item noStyle name={"slen_incl_allow"}>
//                     <Input
//                       className="disabled-input"
//                       disabled
//                       placeholder="Inc. Allw"
//                       type={"number"}
//                       readOnly
//                     />
//                   </Form.Item>
//                 </Col>
//               </Row>
//               <Row>
//                 <Col>
//                   <Form.Item noStyle>
//                     <Input
//                       className="disabled-input"
//                       disabled
//                       value="WIDTH"
//                       type={"text"}
//                     />
//                   </Form.Item>
//                 </Col>
//                 <Col>
//                   <Form.Item noStyle name={"wid_cms"}>
//                     <Input disabled={!calc} placeholder="CMS" type={"number"} />
//                   </Form.Item>
//                 </Col>
//                 <Col>
//                   <Form.Item noStyle name={"wid_allow"}>
//                     <Input
//                       disabled={!calc}
//                       placeholder="Allow"
//                       type={"number"}
//                     />
//                   </Form.Item>
//                 </Col>
//                 <Col >
//                   <Form.Item noStyle name={"wid_incl_allow"}>
//                     <Input
//                       className="disabled-input"
//                       disabled
//                       placeholder="Inc. Allw"
//                       type={"number"}
//                     />
//                   </Form.Item>
//                 </Col>
//               </Row>
//               <Row>
//                 <Col>
//                   <Form.Item noStyle>
//                     <Input
//                       className="disabled-input"
//                       disabled
//                       value="GSM"
//                       type={"text"}
//                     />
//                   </Form.Item>
//                 </Col>
//                 <Col >
//                   <Form.Item noStyle name={"gsm"}>
//                     <Input disabled={!calc} placeholder="GSM" type={"number"} />
//                   </Form.Item>
//                 </Col>
//                 <Col>
//                   <Form.Item noStyle>
//                     <Input
//                       className="disabled-input"
//                       value="LOSS %"
//                       type={"text"}
//                       disabled
//                     />
//                   </Form.Item>
//                 </Col>
//                 <Col>
//                   <Form.Item noStyle name={"loss"}>
//                     <Input
//                       disabled={!calc}
//                       placeholder="loss"
//                       type={"number"}
//                     />
//                   </Form.Item>
//                 </Col>
//               </Row>
//             </>
//           ) : (
//             ""
//           )}
      
//       <Row>
//         <Form.List name={"process"}>
//           {(fields, { add, remove }) => (
//             <>
//              <div style={{width:'100%'}}>
//               <div>
//                 <Button style={{float:'right'}} onClick={()=>add()} >Add Process</Button>
//               </div>
//                 {fields.map(({ key, name, ...restField }) => (
//                   <>
//                     <Row>
//                       <Space>
//                         <Row>
//                           <Col xs={24} lg={6}>
//                             <Form.Item noStyle name={[name, "processName"]}>
//                               <Select placeholder="Select Process">
//                                 <Select.Option value={1}>Yarn</Select.Option>
//                               </Select>
//                             </Form.Item>
//                           </Col>
//                           <Col xs={24} lg={6}>
//                             <Form.Item noStyle name={[name, "rate"]}>
//                               <Input defaultValue={0} />
//                             </Form.Item>
//                           </Col>
//                           <Col xs={24} lg={6}>
//                             <Form.Item noStyle name={[name, "processloss"]}>
//                               <Input defaultValue={0} />
//                             </Form.Item>
//                           </Col>
//                           <Col>
//                             <Form.Item noStyle>
//                               <Button
//                                 onClick={() => remove(name)}
//                                 icon={
//                                   <MinusCircleOutlined></MinusCircleOutlined>
//                                 }
//                               ></Button>
//                             </Form.Item>
//                           </Col>
//                           <Col>
//                             <Form.Item noStyle>
//                               <Button
//                                 onClick={() => add()}
//                                 icon={<PlusCircleOutlined></PlusCircleOutlined>}
//                               ></Button>
//                             </Form.Item>
//                           </Col>
//                         </Row>
//                       </Space>
//                     </Row>
//                   </>
//                 ))}
//               </div>
//             </>
//           )}
//         </Form.List>
//       </Row>
// <Row>
//       <Form.List name={"cad"}>
//         {(fields,{add,remove}) =>
        
//        (
//          <> 
//          <Row>
//         <Col>
//         <Form.Item
      
//         >
//           <Input />
//         </Form.Item>
//         </Col>
//         <Col>
//         <Form.Item  name={'cadWt'}>
//           <Input name="cadWt" />
//         </Form.Item>
//         </Col>
//         <Col> <Button onClick={()=>add()}>Add</Button>
//         </Col>
//       </Row>
        
//          <Row>
//            <Col span={3}>Dimension</Col>
//            <Col span={3}>CMS</Col>
//            <Col span={3}>Allowance</Col>
//            <Col span={3}>Incl Allow</Col>
//          </Row>
//           {fields.map(({key,name,...restField}) =>
//           (
            
//           <Row>
//             <Col>
//             <Form.Item
//             {...restField}
//             name={[name,'cms']}
//             noStyle
//             >
//               <Input name="cms" type={'text'}></Input>
//             </Form.Item></Col>
//             <Col >
//             <Form.Item
//             noStyle
//             {...restField}
//             name={[name,'allow']}
//             >
//               <Input name="allow" type={'text'}></Input>
//             </Form.Item></Col>
//            <Col> <Form.Item
//             noStyle
//             {...restField}
//             name={[name,'incallow']}
            
//             >
//               <Input disabled style={{background:'green',color:'white'}} color="white" name="incallow" type={'text'}></Input>
//             </Form.Item> </Col>
//             </Row>
           
        
//           ))
//           }
//          </>
//        )}
//       </Form.List>
//       </Row>
//     </Form>
//   );
// };
