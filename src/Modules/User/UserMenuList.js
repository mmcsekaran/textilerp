import React, { Component } from 'react'

export default class UserMenuList extends Component {



  render() {
    return (
      <div>UserMenuList</div>
    )
  }
}

const getUserMenuList = (userId) =>
{
    return [
        {
            name :'master',
            title:"Master",
            type:"group",
        },
        {
            name :'master',
            title:"Master",
            type:"group",
            menu :[
                {
                    name :"company",
                    title:"Company",
                    type:"menu"
                }
            ]
        }
    ];
}