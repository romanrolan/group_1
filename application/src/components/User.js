import React from 'react';
import MessageBox from './MessageBox';
import avatar from '../images/avatar.png';
import './User.css';

const User = (props) =>
  <li className='User'>
    <img src={avatar} alt='User avatar'/>
    <p>{props.name}</p>
    <button
      type='button'
      name='delete-user'
      onClick={props.deleteObject.bind(null, {
        method: 'delete',
        type: 'user',
        name: props.name})}>Delete User</button>
    <MessageBox news={props.news}/>
  </li>

export default User;
