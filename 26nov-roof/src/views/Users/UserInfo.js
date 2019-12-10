import React from 'react';
import { Button, Image, Modal } from 'semantic-ui-react';
import axios, {get} from 'axios';
import { Link } from 'react-router-dom';
import * as apiRoutes from "../constants/api_routes";

class UserInfo extends React.Component {
  constructor(props) {
    super(props);

    this.state = { user: { name: '' } };

    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    const { match: { params } } = this.props;
    axios.get(`/users/${params.userId}`)
      .then(({ data: user }) => {
        this.setState({ user });
      });
  }
  
 

  handleDelete() {
    const { match: { params }, history } = this.props;

    axios.delete(`/api/users/${params.userId}`)
      .then(() => {
        history.push('/users');
      });
  }

  render() {
    const { user } = this.state;

    return (
      <Modal open dimmer="blurring">

        <Modal.Header>{user.email}</Modal.Header>
        <Modal.Content image>
          <Image wrapped size="small" src={`https://api.adorable.io/avatars/250/${user.email}`} />
          <Modal.Description>
            <p>Email: {user.email}</p>
            <p>Phone: {user.email}</p>
            <p>Address: {user.email}</p>
            <p>City: {user.email}</p>
            <p>Zip: {user.email}</p>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Link to={`/users/${user.id}/edit`}>
            <Button positive>Edit</Button>
          </Link>
          <Button negative onClick={this.handleDelete}>Delete</Button>
          <Link to="/users">
            <Button>Close</Button>
          </Link>
        </Modal.Actions>
      </Modal>
    );
  }
}

export default UserInfo;
