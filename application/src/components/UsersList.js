import React from 'react';
import User from './User';
import './UsersList.css';

const UsersList = (props) =>
  <div className='UsersList'>
    <h3 className='title'>List of users</h3>
    <ul className='users'>
      {
        Object.entries(props.usersNews).length ? Object.entries(props.usersNews).map((user,key) => {
          return <User key={key} name={user[0]} news={user[1]} deleteObject={props.deleteObject}/>
        }) : 'There are no users'
      }
    </ul>
  </div>

export default UsersList;
