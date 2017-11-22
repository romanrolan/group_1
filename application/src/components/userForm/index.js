import React, { Component } from 'react';
import './style.css';

class UserForm extends Component {

  render() {
    return (
      <div className='UserForm'>
        <h3 className='title'>Form for creating a user</h3>
        <form className='form'>
          <label>Name</label>
          <input type='text'
                 className='user-form-name'
                 placeholder='Please, enter a name'
                 ref = 'name'/>
          <label>Type</label>
          <select ref='type'>
            <option>user</option>
            <option>robot</option>
          </select>
          <button
            name='user-form-button'
            type='button'
            onClick={() => this.userFormHandler(this.props.createUser)}>Create</button>
        </form>
      </div>
    );
  }

  userFormHandler(createUser) {
    if (this.refs.name.value && this.refs.type.value) {
      const data = {
        name: this.refs.name.value,
        userType: this.refs.type.value
      }
      createUser(data);
      this.refs.name.value = '';
    } else {
      alert('Некорректные данные')
    }
  }
}

export default UserForm;
