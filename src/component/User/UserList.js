import React, { Component } from "react";
import {Button, Table} from 'antd'
import { Layout } from "antd";
import { PageHeader } from "antd";
import axios from "axios";
import ConnectServer from "../Security/ConnectServer";
import { UserContext, WeatherContext } from "../Security/AuthoticationContext";
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
         console.log(this.context)
         this.context.weather.getWeather().then(
             success => this.setState({data:success})
         );
       
    //    this.setState({data: res})
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
                        dataIndex:"date",
                        key : "date",
                        title : "Name"

                    },
                    {
                        dataIndex:"temperatureC",
                        key : "temperatureC",
                        title : "Email"

                    },
                    {
                        dataIndex:"temperatureF",
                        key : "temperatureF",
                        title : "Status"

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

export default UserList;
