import React, { Component } from 'react';
import EditionsList from './EditionsList';
import UsersList from './UsersList';
import './UsersColumn.css';

class UsersColumn extends Component {

  render() {
    return (
      <div className='UsersColumn'>
        <EditionsList />
        <UsersList />
      </div>
    );
  }
}

export default UsersColumn;
