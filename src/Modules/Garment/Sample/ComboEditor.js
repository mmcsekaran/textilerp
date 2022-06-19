import { CloseOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Form, Select, Tabs } from 'antd'

import React, { Component } from 'react'
import { act } from 'react-dom/test-utils';
import ComponentEditor from './ComponentEditor'
import { Input } from 'antd';
import { message } from 'antd';

Array.prototype.remove = function() {
    var what, a = arguments, L = a.length, ax;
     console.log('execute remove function')
    while (L && this.length) {
        what = a[--L];
        while ((ax = this.indexOf(what)) !== -1) {
            this.splice(ax, 1);
           
        }
    }
    return this;
};
Array.prototype.removeAt = function() {
    var what, a = arguments, L = a.length, ax;
     console.log('execute remove function')
        this.splice(what,1)
    return this;
};

export default class ComboEditor extends Component {
    form  = React.createRef();
comboNewIndex = React.createRef(-1);

combos  = [];
constructor(props)
{
    super(props);
    this.state ={
        activeComboKey :0,
        newComboName:undefined

    }
}

    addCombo = (data) =>
    {
      var components = this.form.current.getFieldsValue(true).components //?this.form.current.getFieldsValue(true).components :[] ;

     
    const key = components?.push({
        compName:data
    })
     console.log(components)
    this.form.current.setFieldsValue({components:components})

     //   this.combos.push()
        this.setState({activeComboKey:key})

       

    }

   removeCombo = (index) =>
   {
    var components = this.form.current.getFieldsValue(true).components //?this.form.current.getFieldsValue(true).components :[] ;

     
    const key = components?.splice(index,1)
     console.log(components)
    this.form.current.setFieldsValue({components:components})

    this.setState({activeComboKey:key})

   }

    onEdit = (targetKey,action) =>
    {
        console.log(targetKey)
    }
    onFieldsChange = (_,data) =>
    {
        console.log(data)
    }

  render() {
    return (
      <div>
      
        <Form
      
        ref={this.form}
        onValuesChange = {this.onFieldsChange}
        >
          

            <Form.List name={"components"} initialValue ={[]} >
                {

                (components,{add,remove}) =>
                {
                    console.log(components);
                   return (<>
                   <div>
                    <Input onChange = {(e)=> this.setState({newComboName:e.target.value})}></Input>
                   <Button style={{float:'right'}} onClick={()=>
                    { 
                        if(!this.state.newComboName)
                        {
                            message.info("Combo Name Required")
                            return
                        }
                        this.addCombo(this.state.newComboName);
                    
                    }} >Add Component</Button>
                   </div>
                   <Tabs
                  
                   type='editable-card'
                   
               
                    
                    onChange ={key => this.setState({activeComboKey:key})}

                  // addIcon = {<Button style={{margin:'0px'}} onClick={()=> add()} type='text' block icon ={<PlusOutlined></PlusOutlined>} ></Button>}
                    
                   onEdit ={(targetKey,action) =>
                {
                    console.log(targetKey)

                    if(action === 'add')
                    {
                        add({},this.state.activeComboKey+1) ;
                        this.setState({activeComboKey:this.state.activeComboKey+1})
                    }
                    else 
                    {
                       remove(targetKey)
                       this.setState({activeComboKey:targetKey-1})
                    }
                }}
                   >
                            {components.map(component =>
                                {
                                    return(
                                        <Tabs.TabPane    tab={this.form.current.getFieldValue("components")[component.name]?.compName||'New Combo'} key={component.name} closable
                                        closeIcon ={<a style={{margin:'0px'}}  type='text' block onClick={()=> this.removeCombo(component.name)} ><CloseOutlined></CloseOutlined></a>}
                                        >
                                          <ComponentEditor name ={[component.name,"compName"]}></ComponentEditor>
                                        </Tabs.TabPane>
                                    )
                                })}
                    </Tabs></>)
                }
                }
            </Form.List>
            
            <Form.Item>
               
            </Form.Item>
            <Form.Item>
           
            </Form.Item>
        </Form>

     
       
      </div>
    )
  }
}
