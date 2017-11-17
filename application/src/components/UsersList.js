import React from 'react';
import User from './User';
import './UsersList.css';

const UsersList = (props) =>
  <div className='UsersList'>
    <h3 className='title'>List of users</h3>
    {
      props.users.length ? props.users.map((user,key) =>
        <User key={key} name={user.name} news={user.news} />) : 'There are no users'
    }
  </div>

export default UsersList;
