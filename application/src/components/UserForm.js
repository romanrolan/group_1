import React, { Component } from 'react';
import './UserForm.css';

class UserForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='UserForm'>
        <h3 className='title'>Form for creating a user</h3>
        <form className='form'>
          <input type='text'
                 className='user-form-input'
                 placeholder='Please, enter a name'
                 ref = 'input'/>
          <button name='user-form-button' type='button'>Create</button>
        </form>
      </div>
    );
  }
}

export default UserForm;
