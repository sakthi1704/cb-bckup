import React from 'react';
import { Switch, Route } from 'react-router-dom';
import * as routes from "../../components/Constants/appRoutes";
import MenuBar from '../Menu';
import Login from '../Auth/login';

const AppRoutes = () => (
  <React.Fragment>
    <Switch>
      <Route path={routes.LOGIN} component={Login} />
      <Route path={routes.MENUBAR} component={MenuBar} />
    </Switch>
  </React.Fragment>
);

export default AppRoutes;
