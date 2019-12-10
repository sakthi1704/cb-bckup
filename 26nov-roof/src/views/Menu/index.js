
import React from 'react';
import {  Menu, Icon } from 'semantic-ui-react';
import store from 'store';
import { Route, Link, Switch, Redirect } from 'react-router-dom';
import isLoggedIn from '../helpers/is_logged_in';
import * as routes from '../constants/appRoutes';
import * as appRoutes from '../constants/appRoutes';
import TopMenu from './TopMenu.js';
import styles from './styles.css';
import Home from '../Home/';
import Users from '../Users/users';


const handleLogout = history => () => {
  store.remove('loggedIn');
  history.push(routes.LOGIN);
};

const MenuBar = ({ history }) => {
  if (!isLoggedIn()) {
    return <Redirect to={appRoutes.LOGIN} />;
  }

  return (
    <div>
      {/* <TopMenu /> */}
      <Menu borderless style={{ height: '100vh',backgroundColor:"blue" }}  pointing vertical  icon="labeled">
      <Menu.Item name="" >
            {/* <Icon name="dashboard" /> */}
            
          </Menu.Item>
          <Menu.Item name="">
            {/* <Icon name="dashboard" /> */}
            
          </Menu.Item>
      <Link to="/home">
          <Menu.Item name="home">
            {/* <Icon name="dashboard" /> */}
            Home
          </Menu.Item>
        </Link>
        <Link to="/users">
          <Menu.Item name="users">
            {/* <Icon name="users" /> */}
            Users
          </Menu.Item>
        </Link>
        <Route
          path="/users"
          render={() => (
            <Link to="/users/new">
              <Menu.Item name="new-user">
                {/* <Icon name="plus" /> */}
                Add a User
              </Menu.Item>
            </Link>
          )}
        />
        <Menu.Item name="logout" onClick={handleLogout(history)}>
          {/* <Icon name="power" /> */}
          Logout
        </Menu.Item>
      </Menu>
      <div className={styles.mainBody}>
        <Switch>
          {/* <Route path="/users/:userId/edit" component={UserEdit} />
          <Route path="/users/new" component={UserAdd} /> */}
          <Route path={routes.HOME} component={Home} />
          <Route path={routes.USERS} component={Users} />
          {/* <Route component={FourOhFour} /> */}
        </Switch>
      </div>
    </div>
  );
};


export default MenuBar;
