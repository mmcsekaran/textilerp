
import { ModalEditorProps } from './../interface/ModalEditorProps';
import { Modal } from 'antd';


export const ModalEditor:any =
{
    open :()=>{} ,
    title:'Editor'
}



 ModalEditor.open = function openfn(content:any) 
{
    return Modal.confirm(
    
    {
        icon:null,
        title : ModalEditor.title,
        visible:true,
        content:content
    }) ;
}