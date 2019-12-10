import React, { Component } from 'react'
import { Card } from 'semantic-ui-react'

export default class Home extends Component {
    constructor(props){
        super(props);
        this.state={
            
        }
    }
    render() {
        return (
            <React.Fragment>
            <h1 style={{textAlign:"center", color:"blue", marginTop:"100px"}}>WELCOME ADMIN</h1>
            <Card.Group>
                 <Card >
                    <Card.Content style={{backgroundColor:"blue"}} header='Orders Today' />
                    <Card.Content description="description" />
                </Card>
                <Card>
                    <Card.Content style={{backgroundColor:"blue"}} header='Finished Jobs' />
                    <Card.Content description="description" />
                </Card>
                <Card>
                    <Card.Content style={{backgroundColor:"blue"}} header='Total Sales' />
                    <Card.Content description="description" />
                </Card>
                </Card.Group>
                </React.Fragment>
        )
    }
}
