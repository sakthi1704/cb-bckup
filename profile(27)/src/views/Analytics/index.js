import React, { Component } from 'react'
import { Dropdown, Grid } from 'semantic-ui-react'
import * as routes from '../constants/api_routes';

export default class  DropdownFilter extends Component {
    constructor(props){
        super(props);
        this.state = { user: ''};
    }

    render() {
        return (
            <React.Fragment>
                 <Grid columns='equal'>
                <Grid.Row>
                <Grid.Column width={10}>
                </Grid.Column>
                <Grid.Column>
      <Dropdown
                    placeholder='Select Country'
                    search
                    selection
                    // options={}
                /> <br /><br />
        <Dropdown
                    placeholder='Select Country'
                    search
                    selection
                    // options={}
                /><br /><br />
      <Dropdown
                    placeholder='Select Country'
                    search
                    selection
                    // options={}
                /> <br />
                <br />
        <Dropdown
                    placeholder='Select Country'
                    search
                    selection
                    // options={}
                />
      </Grid.Column>
    </Grid.Row>
  </Grid> 
              
            </React.Fragment>
        )
    }
}
