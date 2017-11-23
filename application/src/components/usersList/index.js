import React from 'react';
import User from '../user';
import './style.css';

const UsersList = (props) =>
  <div className='UsersList'>
    <h3 className='title'>List of users</h3>
    <ul className='users'>
      {
        Object.entries(props.users).length ? Object.entries(props.users).map((user,key) => {
          return <User
                      key={key}
                      name={user[0]}
                      news={user[1].news}
                      type={user[1].type}
                      editions={props.editions}
                      deleteUser={props.deleteUser}
                      subscribeNews={props.subscribeNews}
                      unSubscribeNews={props.unSubscribeNews} />
        }) : 'There are no users'
      }
    </ul>
  </div>

export default UsersList;
