import React from 'react';
import UserForm from './UserForm';
import './FormsColumn.css';

const FormsColumn = (props) =>
  <div className='FormsColumn'>
    <UserForm createUser={props.createUser}/>
  </div>

export default FormsColumn;
