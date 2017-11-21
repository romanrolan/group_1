import React from 'react';
import EditionsList from './EditionsList';
import UsersList from './UsersList';
import './UsersColumn.css';

const UsersColumn = (props) =>
  <div className='UsersColumn'>
    <EditionsList editions={props.editions} deleteObject={props.deleteObject} />
    <UsersList users={props.users} deleteObject={props.deleteObject} />
  </div>

export default UsersColumn;
