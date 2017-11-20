import React from 'react';
import UserForm from './UserForm';
import NewspaperForm from './NewspaperForm';
import './FormsColumn.css';

const FormsColumn = (props) =>
  <div className='FormsColumn'>
    <UserForm createObject={props.createObject}/>
    <NewspaperForm createObject={props.createObject}/>
  </div>

export default FormsColumn;
