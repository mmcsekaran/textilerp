import { CloseOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Form, Select, Tabs } from 'antd'

import React, { Component } from 'react'
import ComponentEditor from './ComponentEditor'

export default class ComboEditor extends Component {
    form  = React.createRef();
comboNewIndex = React.createRef(-1);

constructor(props)
{
    super(props);
    this.state ={
        activeCombo :-1
    }
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
            <Form.Item noStyle
            name={"combo"}
            >
                <Select style={{width:'100%'}}>
                    <Select.Option value ={12}>Blue</Select.Option>
                    <Select.Option value ={13}>Sky Blue</Select.Option>
                    <Select.Option value ={14}>Navy Blue</Select.Option>
                </Select>
            </Form.Item>
            

            <Form.List name={"components"} >
                {

                (components,{add,remove}) =>
                {
                    console.log(components);
                   return (<>
                   <div>
                   <Button style={{float:'right'}} onClick={()=> add()} >Add Component</Button>
                   </div>
                   <Tabs
                   ref = {this.comboTabs}
                   type='editable-card'
                   
activeKey={this.state.activeCombo}
                    
                    onChange ={key => this.setState({activeCombo:key})}
                    onEdit={(targetKey,action) =>
                    {
                        
                        if(action === 'add')
                        {
                           
                           add();
                             this.setState({activeCombo:this.comboNewIndex.current++})
                        }
                        else
                        {
                            remove(targetKey)
                        }
                    }}
                   >
                            {components.map(component =>
                                {
                                    return(
                                        <Tabs.TabPane  tab={this.form.current.getFieldValue("components")[component.name]?.compName||'New Combo'} key={component.name} closable >
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
        </Form>
       
      </div>
    )
  }
}
