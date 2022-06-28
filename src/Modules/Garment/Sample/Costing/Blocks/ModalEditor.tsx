import { Modal } from 'antd'
import React, { Component, ReactNode } from 'react'

type ModalEditorProps =
{
  title?:string,
  children?:ReactNode | ReactNode[],
  show:boolean

}

export default class ModalEditor extends React.Component<ModalEditorProps> {
  render() {
    return (
     <Modal
        visible = {this.props.show}
        destroyOnClose
        title = {this.props.title}
     >
      {this.props.children}
     </Modal>
    )
  }
}



