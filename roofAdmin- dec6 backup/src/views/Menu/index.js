import React from 'react';
import PropTypes from 'prop-types';
import store from 'store';
import axios from 'axios';
import { Route, Link, Switch, Redirect } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import isLoggedIn from '../../components/helpers/is_logged_in';
import * as routes from '../../components/Constants/appRoutes';
import { fade, makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import AccountCircle from '@material-ui/icons/AccountCircle';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import PersonIcon from '@material-ui/icons/Person';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import AssessmentIcon from '@material-ui/icons/Assessment';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import SearchComp from '../Search'
import Home from '../Home';
import MenuList from '@material-ui/core/MenuList';
import Users from '../Users'
import Analytics from '../Analytics'
import Companies from '../Companies'

const drawerWidth = 240;
function ListItemLink(props) {
  const { icon, primary, to } = props;

  const renderLink = React.useMemo(
    () =>
      React.forwardRef((itemProps, ref) => (
      <Link to={to} {...itemProps} innerRef={ref} />
      )),
    [to],
  );

  return (
    <li>
      <ListItem button component={renderLink}>
        {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
        <ListItemText primary={primary} />
      </ListItem>
    </li>
  );
}

ListItemLink.propTypes = {
  icon: PropTypes.element,
  primary: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};
const styles = {
  list: {
    width: 250
  },
  fullList: {
    width: "auto"
  },
  paper: {
    background: "blue"
  }
};
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
 
  searchIcon: {
    width: theme.spacing(2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200,
    },
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  drawerPaper: {
    width: drawerWidth,
    background:"blue",
    color:"white"
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}));

const StyledMenuItem = withStyles(theme => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.secondary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);
const handleLogout = history => () => {
  store.remove('loggedIn');
  history.push(routes.LOGIN);
};
function MenuBar({history}) {
  
 
 
 
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const [openList, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!openList);
  };

  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
 
  if (!isLoggedIn()) {
    return <Redirect to={routes.LOGIN} />;
  }
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
        <div>
            {/* <div className={classes.searchIcon}>
              <SearchIcon />
            </div> */}
            <SearchComp />
            {/* <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
              value={state.value}
              onChange={e => onChangeHandler(e)}
            /> */}
          </div>
          <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle color="secondary" fontSize="large" />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem 
                 onClick={handleLogout(history)} >
                  logout</MenuItem>
              </Menu>
            </div>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <div className={classes.toolbar} />
     
        <MenuList autoFocusItem={open} id="menu-list-grow" >
   <MenuItem  component={Link} to={'/home'}>                         <ListItemIcon >
            <HomeIcon color="primary" />
          </ListItemIcon>
          Home</MenuItem>
          <MenuItem component={Link} to={'/analytics'}>                         <ListItemIcon>
            <AssessmentIcon color="primary" />
          </ListItemIcon>
          Analytics</MenuItem>
          <MenuItem button onClick={handleClick}>
        <ListItemIcon>
          <PersonIcon color="primary" />
        </ListItemIcon>
        <ListItemText primary="Profile" />
        {openList ? <ExpandLess /> : <ExpandMore />}
      </MenuItem>
      <Collapse in={openList} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
        {/* <StyledMenuItem> */}
          <MenuItem component={Link} to={'/users'} button className={classes.nested}>
          <ListItemIcon>
          <PersonIcon color="primary" />
        </ListItemIcon>
           Users
          </MenuItem>
          {/* </StyledMenuItem> */}
          {/* <StyledMenuItem> */}
          <MenuItem component={Link} to={'/companies'} button className={classes.nested}>
          <ListItemIcon>
          <PersonIcon color="primary" />
        </ListItemIcon>
           Companies
          </MenuItem>
          {/* </StyledMenuItem> */}
          {/* <StyledMenuItem> */}
          <MenuItem component={Link} to={'/users'} button className={classes.nested}>
          <ListItemIcon>
          <PersonIcon color="primary" />
        </ListItemIcon>
           Roof Admins
          </MenuItem>
          {/* </StyledMenuItem> */}
        </List>
      </Collapse>
          <MenuItem  component={Link} to={'/analytics'}>                        
           <ListItemIcon>
            <AssessmentIcon color="primary" />
          </ListItemIcon>
          Bookings</MenuItem>
                  </MenuList>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
       <Typography>
        <Switch>
        <Switch>
          <Route path={routes.HOME} component={Home} />
          <Route path={routes.USERS} component={Users} />
          <Route path="/companies" component={Companies} />
          <Route path="/analytics" component={Analytics} />
        </Switch>
        </Switch>
       </Typography>
      </main>
    </div>
  );
}
MenuBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MenuBar);