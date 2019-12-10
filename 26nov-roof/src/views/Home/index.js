import React, { Component } from 'react'
import { Card, Icon, Grid } from 'semantic-ui-react'

export default class Home extends Component {
    constructor(props){
        super(props);
        this.state={
            
        }
    }
    render() {
        return (
            <div>
                <Grid.Column width={6} />
                <Grid.Column width={4}>
                 <Card>
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
                </Grid.Column>
            </div>
        )
    }
}
