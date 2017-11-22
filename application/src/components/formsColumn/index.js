import React from 'react';
import UserForm from '../userForm';
import NewspaperForm from '../newspaperForm';
import './style.css';

const FormsColumn = (props) =>
  <div className='FormsColumn'>
    <UserForm createUser={props.createUser} />
    <NewspaperForm createEdition={props.createEdition} />
  </div>

export default FormsColumn;
