import { Button } from "antd";
import { useRef } from "react";
import ReactToPrint from "react-to-print"
import CostingPrint from "../Blocks/CostingPrint";
export const PrintCosting = (data) =>
{
  const componentRef = useRef();

  return(
    <div >
      <ReactToPrint
      trigger={() => <Button>Print</Button>}
      content ={() => componentRef.current}

      ></ReactToPrint>
       <div style={{display:'none'}}> <CostingPrint data ={data}  ref={componentRef}></CostingPrint></div>
     
    </div>
  )
}