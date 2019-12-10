import React, { Component } from 'react'
import { Menu, Input, Grid } from 'semantic-ui-react';
import SearchModal from '../Search/index'
import axios from 'axios'
import suggestions from '../Search/suggestions'

 export default class TopMenu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchResult:'',
      error: false,
      query: '',
      results: []
    };
  }
  getInfo = () => {
    axios.get('https://reqres.in/api/users?page=2')
      .then(({ data }) => {
        this.setState({
          results: data.data // MusicGraph returns an object named data, 
                             // as does axios. So... data.data                             
        })
      })
  }

  handleInputChange = () => {
    this.setState({
      query: this.search.value
    }, () => {
      if (this.state.query && this.state.query.length > 1) {
        if (this.state.query.length % 2 === 0) {
          this.getInfo()
        }
      } 
    })
  }

  render() {
    console.log('this.state.results', this.state.results)
    return (
      <Grid>
          <Grid.Column width={6} />
          <Grid.Column width={6}>
          <Menu.Item   style={{textAlign:"center"}}>
            <Input fluid icon='search' placeholder='Search for company, employee, jobs...' 
            ref={Input => this.search = Input}
            onChange={this.handleInputChange} />
            </Menu.Item>  <br /><br />
            {
              this.searchResult ===  '' ? <SearchModal />  : null
            }
            </Grid.Column>
        </Grid>



    )
  }
}
