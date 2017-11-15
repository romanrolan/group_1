import React, { Component } from 'react';
import MessageBox from './MessageBox';
import avatar from '../images/avatar.png';
import './User.css';

class User extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='User'>
        <img src={avatar} alt='User avatar'/>
        <button type='button' name='delete-user'>Delete User</button>

        <MessageBox />
      </div>
    );
  }
}

export default User;
