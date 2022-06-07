import { Button, FormInstance, PageHeader, Tag } from 'antd'
import React, { Component,ReactElement,ReactNode } from 'react'
import { textChangeRangeIsUnchanged } from 'typescript'
import Unautherize from '../../Pages/ErrorPage/Unautherize'
import withDocument from './../../Core/withDocument';
import { withRouter } from './withRouter';

 interface DocumentPermission
{
    users?:string[],
    roles?:[],
    PagePermission?:string

}

export interface DocumentProps 
{
  documentTitle?:ReactNode
  status?:any,
  toolBar:ReactElement,
  onSave(data:any):void,
  children :  ReactElement[],
  onNew():void
  onUpdate(data:any):void
  documentName?:string,
  protection?:boolean,
  AuthorizeTo?:DocumentPermission,
  form:FormInstance
}


  class Document  extends Component<DocumentProps> {

    generateToolbar = ():ReactNode[]|undefined =>
    {
      
     if(Array.isArray(this.props.toolBar))
     {
      return this.props.toolBar.map(tool => 
        {
          if (typeof tool  === 'string')
          {
            switch(tool)
            {
              case 'New':
               return <Button onClick={this.props.onSave}>{tool}</Button>
               default:
                 return <Button>{tool}</Button>
            }
           
          }
        })
     }
  
     return undefined ;
  
    }
  
    passPropToChild = ():ReactNode[] =>
    {
        return React.Children.map(this.props.children,p => 
          {
           
            if (React.isValidElement(p))
            {
             return React.cloneElement(p,this.state)
            }
  
            return undefined;
          })
    }
  
    render() {
      this.generateToolbar()
  
      if(this.props.AuthorizeTo && (this.props.AuthorizeTo.PagePermission === 'COSTING_ENQUIRY' || this.props.AuthorizeTo.users?.some(val => val === 'CHANDRU') || this.props.AuthorizeTo.roles?.some(role => role === 'admin')))
      {
       
  
      return (
        <PageHeader
        title = {this.props.documentTitle}
        extra = {this.generateToolbar()}
        subTitle = {<Tag color={'red'}>{this.props.status}</Tag>}
        >
          {this.props.children}
        </PageHeader>
      )
      }
      else
      {
        return <Unautherize></Unautherize>
      }
    }
  }
  



export default  Document