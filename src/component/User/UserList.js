import React, { Component } from "react";
import {Button, Table} from 'antd'
import { Layout } from "antd";
import { PageHeader } from "antd";
import axios from "axios";
import ConnectServer from "../Security/ConnectServer";
import { UserContext, WeatherContext } from "../Security/AuthoticationContext";
import API from "../Security/ConnectServer";
 class UserList extends Component
{
    constructor(props)
    {
super(props);
console.log(props)

this.state = {
    data : []
}

    }
    componentDidMount()
    {
          this.props.apiInfo.test.getWeather().then(
              res => this.setState({data: res})
          )
              
    //    
    }
    render()
    {
        return   <Layout>
            <PageHeader
            title ="Users"
            extra ={[
                <Button type="primary">Add User</Button>
            ]}
            
            >

            </PageHeader>
            <Layout.Content>
                <Table
                dataSource={this.state.data}
                columns={[
                    {
                        dataIndex:"id",
                        key : "date",
                        title : "Id"

                    },
                    {
                        dataIndex:"email",
                        key : "temperatureC",
                        title : "Email"

                    },
                    {
                        dataIndex:"phone",
                        key : "temperatureF",
                        title : "Phone"

                    }
                ]}
                >
                
        </Table>
            </Layout.Content>
        </Layout>
      
    }
}
const fetchWeatherCoast = () =>
{
    
}
UserList.contextType = UserContext

export default  API(UserList);
