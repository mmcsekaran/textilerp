import { PageHeader,Card, Form, Input, Checkbox, Col, Row } from "antd";
import { Component } from "react";

export default class extends Component{
    render(){
        return(
            <div>
                <PageHeader title='Fabric Name Master'></PageHeader>
                <div style={{paddingleft:'5px'}}>
                    <Row justify='center' align='middle'>
                        <Col xs={24} sm={16} md={16} xl={16}>
                            <Card 
                            hoverable>
                                          
                            </Card>
                        </Col>               
                    </Row>
                </div>
            </div>
        )
    }
}