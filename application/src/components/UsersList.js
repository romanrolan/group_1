import React, { Component } from 'react';
import User from './User';
import './UsersList.css';

class UsersList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='UsersList'>
        <h3 className='title'>List of users</h3>
        {this.props.usersname ? this.props.usersname.map(username => <User username={username}/>) : 'There are no users'}
      </div>
    );
  }
}

export default UsersList;
