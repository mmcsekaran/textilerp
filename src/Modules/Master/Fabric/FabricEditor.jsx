import { Form, Select } from 'antd'
import React, { Component, useState } from 'react'

export default class FabricEditorCompoent extends Component {
  render() {
    return (
      <div><Form>
        </Form></div>
    )
  }
}




const FabricEditorCompoent = (props) =>
{

  const [searchValue,setSearchValue] = useState("");

  return (
    <div>
      <Select
      onSearch={(value =>
        {
          setSearchValue(value)
        })}

        options

      >

      </Select>
    </div>
  )

}