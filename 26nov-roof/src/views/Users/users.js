import React from 'react';
import { Table, Menu, Icon, Button } from 'semantic-ui-react';
import { get } from 'axios';
import times from 'lodash.times';
import * as apiRoutes from "../constants/api_routes";
import { Link, Route } from 'react-router-dom';
// import Page from './Page';
import UserInfo from './UserInfo';

const TOTAL_PER_PAGE = 10;

class users extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      page: 0,
      totalPages: 0,
    };
  }

  componentDidMount() {
    this.getUsers();
  }

  componentWillReceiveProps({ location = {} }) {
    if (location.pathname === '/users' && location.pathname !== this.props.location.pathname) {
      this.getUsers();
    }
  }
  getUsers = async() => {
    get(`${apiRoutes.BASE_URL}`)
      .then(({ data }) => {
        let arr = [];
        arr = Object.keys(data.results).map(key =>
         this.setState({
          users: data.results[key]
        })
        )
        
        return arr;
      });
  }


  handleDelete = userId =>  {
    const { users } = this.state;
    
    this.setState({
      users: users.filter(u => u.id !== userId),
    });
  }

  render() {
    const { users } = this.state;
    console.log('this.state.users', this.state.users)
    return (
      // <Page title="Users">
      <div>
        {/* <Helmet> */}
          <title>CMS | Users</title>
        {/* </Helmet> */}

        <Table celled striped>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>Email</Table.HeaderCell>
              <Table.HeaderCell>Phone</Table.HeaderCell>
              <Table.HeaderCell>Address</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
              <Table.Row key={users.email}>
                <Table.Cell>
                <Link to={`/users/${users.email}`}>{users.email}</Link>
                </Table.Cell>
                <Table.Cell>{users.email}</Table.Cell>
                <Table.Cell>{users.email}</Table.Cell>
                <Table.Cell>{users.email}</Table.Cell>
              </Table.Row>
          </Table.Body>
          {/* <Table.Footer>
            <Table.Row>
              <Table.HeaderCell colSpan={6}>
                <Menu floated="right" pagination>
                  {page !== 0 && <Menu.Item as="a" icon onClick={this.decrementPage}>
                    <Icon name="left chevron" />
                  </Menu.Item>}
                  {times(totalPages, n =>
                    (<Menu.Item as="a" key={n} active={n === page} onClick={this.setPage(n)}>
                      {n + 1}
                    </Menu.Item>),
                  )}
                  {page !== (totalPages - 1) && <Menu.Item as="a" icon onClick={this.incrementPage}>
                    <Icon name="right chevron" />
                  </Menu.Item>}
                </Menu>
              </Table.HeaderCell>
            </Table.Row>
          </Table.Footer> */}
        </Table>
        <Link to="/users/new">
          <Button positive>New User</Button>
        </Link>
        <Route path="/users/:userId" component={UserInfo} />
      {/* </Page> */}
      </div>
    );
  }
}

export default users;
