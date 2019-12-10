import React from 'react'
import { Form, Grid, Header, Message } from 'semantic-ui-react'
import store from 'store';
import { Redirect } from 'react-router-dom';
import * as routes from '../constants/appRoutes';
import isLoggedIn from '../helpers/is_logged_in';
import  './styles.css';

export default class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      error: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit(e) {
    e.preventDefault();

    const { username, password } = this.state;
    const { history } = this.props;

    this.setState({ error: false });

    if (!(username === '' && password === '')) {
      return this.setState({ error: true });
    }

    store.set('loggedIn', true);
    history.push(routes.HOME);
  }

  handleChange(e, { name, value }) {
    this.setState({ [name]: value });
  }
  render() {
    const { error } = this.state;

    if (isLoggedIn()) {
      return <Redirect to={routes.HOME} />;
    }
    return (

  <Grid textAlign='center' style={{ height: '100vh',backgroundColor:"blue" }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
    <Form className="login-form" error={error} onSubmit={this.onSubmit}>
      <Header as='h2' style={{color:"white"}} textAlign='center'>
       ROOF
      </Header>
      <h5 style={{color:"white"}} >Login using Phone number</h5>
      {error && <Message
              error={error}
              content="That username/password is incorrect. Try again!"
            />}

          <Form.Input
           name="username"
           fluid
           placeholder='E-mail' 
           onChange={this.handleChange}
 />
          <Form.Input
            fluid
            name="password"
            placeholder='Password'
            type='password'
            onChange={this.handleChange}

          />
            <Form.Button color="red" size="large" type="submit">Login</Form.Button>

      </Form>
    </Grid.Column>
  </Grid>
);
      }
    }
