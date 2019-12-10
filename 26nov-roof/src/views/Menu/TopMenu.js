import React, { Component } from 'react'
import { Menu, Input, Grid } from 'semantic-ui-react'
import {actionCreators as sideAction} from "../store/SideMenu";
import {bindActionCreators} from "redux";
import { connect } from 'react-redux';

 export default class TopMenu extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Grid>
      <Grid.Column width={6} />
      <Grid.Column width={4}>
         <Menu.Item pos style={{textAlign:"center"}}>
        <Input icon='search' placeholder='Search...' />
        </Menu.Item>
        </Grid.Column>
        </Grid>
    )
  }
}
// export default connect(
//   state => state.sideMenu,
//    dispatch => {
//       return {
//           actions: bindActionCreators(Object.assign({}, sideAction), dispatch)
//       }}
// )(TopMenu);