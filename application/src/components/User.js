import React from 'react';
import MessageBox from './MessageBox';
import avatar from '../images/avatar.png';
import './User.css';

const User = (props) =>
  <div className='User'>
    <img src={avatar} alt='User avatar'/>
    <p>{props.name}</p>
    <button type='button' name='delete-user'>Delete User</button>
    <MessageBox news={props.news}/>
  </div>

export default User;
