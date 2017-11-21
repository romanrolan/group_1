import React from 'react';
import EditionsList from '../editionsList';
import UsersList from '../usersList';
import './style.css';

const UsersColumn = (props) =>
  <div className='UsersColumn'>
    <EditionsList editions={props.editions} deleteObject={props.deleteObject} addNews={props.addNews} />
    <UsersList users={props.users} deleteObject={props.deleteObject} editions={Object.keys(props.editions)} />
  </div>

export default UsersColumn;
