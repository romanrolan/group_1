import React from 'react';
import EditionsList from './EditionsList';
import UsersList from './UsersList';
import './UsersColumn.css';

const UsersColumn = (props) =>
  <div className='UsersColumn'>
    <EditionsList
      serverNews={props.serverNews}
      randomNews={props.randomNews}
      fieldNews={props.fieldNews}
      news={props.news} />
    <UsersList users={props.users}/>
  </div>

export default UsersColumn;
