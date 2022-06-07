import { Button, Input, message, PageHeader, Tag } from 'antd'
import React, { Component } from 'react'
import Document, { DocumentProps } from './../../Common/Document';
import { Form } from 'antd';
import { withDocument } from './../../Common/withDocument';

 class SampleConsting


 extends Component {

    onSave = (data) =>
    {
        
       console.log(this.formRef)
    }

     formRef = React.createRef();

  render() {
    
    return (
      <div>
          <Document
          AuthorizeTo={
           {
             PagePermission:'COSTING_ENQUIRY1',
             roles:["admin1"],
             users:['CHANDRU']
           }
          }
          documentTitle = "Consting"
          status={"Unsaved"}
          toolBar =
          {
            [
              'New',
              'Save'
            ]
          }
         form = { this.form}
          onSave = {this.onSave}
          >
            <Form
            name='myform'
            ref={this.formRef}
            >
              <Input></Input>
            </Form>
          </Document>

        
      </div>
    )
  }
}

export default withDocument(SampleConsting,{
  documentTitle:'Costing Page'
})