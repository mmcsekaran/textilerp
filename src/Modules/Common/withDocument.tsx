
import { DocumentProps } from "./Document"
import  React  from 'react';
import { render } from '@testing-library/react';
import { Button, message, PageHeader } from "antd";

export interface DocumentState
{
    onSave?(Data:any):void
}

export function withDocument<T extends DocumentProps>(WrapperComponent:React.ComponentType<T>,props:DocumentProps)
{
    
    return  class  extends React.Component<DocumentProps,DocumentState>
    {

        state: Readonly<DocumentState> =
        {
            onSave : this.onSave
        }

         onSave(data:any):void {
            message.success(data)
        }

        render()
        {
           
           return  (
           <PageHeader
          title ={props.documentTitle}
          
           >
                 <WrapperComponent {...this.state} {...this.props as T}></WrapperComponent>
           </PageHeader>
           )
        }
    }
}