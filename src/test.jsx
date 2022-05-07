import React, { Component } from "react";


export default class Test extends Component
{
    render()
    {
        return <div>
            Test 1
            {this.props.children}
        </div>
    }
}