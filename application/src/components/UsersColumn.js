import React from 'react';
import EditionsList from './EditionsList';
import UsersList from './UsersList';
import './UsersColumn.css';

const UsersColumn = (props) =>
  <div className='UsersColumn'>
    <EditionsList editionsNews={props.editionsNews} deleteObject={props.deleteObject} />
    <UsersList usersNews={props.usersNews} deleteObject={props.deleteObject} />
  </div>

export default UsersColumn;
