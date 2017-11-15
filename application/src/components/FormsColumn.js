import React, { Component } from 'react';
import UserForm from './UserForm';
import './FormsColumn.css';

class FormsColumn extends Component {
  render() {
    return (
      <div className='FormsColumn'>
        <UserForm />
      </div>
    );
  }
}

export default FormsColumn;
