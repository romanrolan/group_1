import React, { Component } from 'react';
import './style.css';

class UserForm extends Component {
  constructor(props) {
    super(props);
  }

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
            onClick={() => this.userFormHandler(this.props.createObject)}>Create</button>
        </form>
      </div>
    );
  }

  userFormHandler(createUserMethod) {
    if (this.refs.name.value && this.refs.type.value) {
      const data = {
        type: 'user',
        name: this.refs.name.value,
        userType: this.refs.type.value
      }
      createUserMethod(data);
      this.refs.name.value = '';
    } else {
      alert('Некорректные данные')
    }
  }
}

export default UserForm;
