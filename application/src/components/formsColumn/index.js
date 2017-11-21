import React from 'react';
import UserForm from '../userForm';
import NewspaperForm from '../newspaperForm';
import './style.css';

const FormsColumn = (props) =>
  <div className='FormsColumn'>
    <UserForm createObject={props.createObject}/>
    <NewspaperForm createObject={props.createObject}/>
  </div>

export default FormsColumn;
