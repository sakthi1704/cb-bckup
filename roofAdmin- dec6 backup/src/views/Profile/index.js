import React, { Component } from 'react'
import Avatar from '@material-ui/core/Avatar';
import EditIcon from '@material-ui/icons/Edit';
import {Link} from 'react-router-dom';
// import './index.css'
import Grid from '@material-ui/core/Grid';

export default class Profile extends Component {
    render() {
        return (
            <Grid>
            <Grid floated='left' width={4}>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            <EditIcon />
              {/* <Icon className="edit-icon-align" name="edit" /> */}
              <label className="username-align">Yousif</label><br />
              <label className="designation-align">super admin</label>
              <div className="divider-class"></div>  
            </Grid>
            {/* <Grid.Column floated='right' width={12}>
            <Link to={'/users/'}>Change password</Link> <br /> <br />
            <Link to={'/users/'}>Change Email Address</Link> <br /> <br />
            <Link to={'/users/'}>Add user</Link><br /> <br />
            <Link to={'/users/'}>Change role</Link>
            </Grid.Column> */}
          </Grid>
        )
    }
}
