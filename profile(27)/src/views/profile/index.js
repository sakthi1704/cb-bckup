import React, { Component } from 'react'
import {Image, Icon, Grid} from 'semantic-ui-react'
import {Link} from 'react-router-dom';
import './index.css'

export default class Profile extends Component {
    render() {
        return (
            <Grid>
            <Grid.Column floated='left' width={4}>
              <Image src='https://react.semantic-ui.com/images/wireframe/square-image.png' size='small' circular  />
              <Icon className="edit-icon-align" name="edit" />
              <label className="username-align">Yousif</label><br />
              <label className="designation-align">super admin</label>
              <div className="divider-class"></div>  
            </Grid.Column>
            <Grid.Column floated='right' width={12}>
            <Link to={'/users/'}>Change password</Link> <br /> <br />
            <Link to={'/users/'}>Change Email Address</Link> <br /> <br />
            <Link to={'/users/'}>Add user</Link><br /> <br />
            <Link to={'/users/'}>Change role</Link>
            </Grid.Column>
          </Grid>
        )
    }
}
