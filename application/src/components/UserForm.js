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
          <label>Name</label>
          <input type='text'
                 className='user-form-name'
                 placeholder='Please, enter a name'
                 ref = 'name'/>
          <label>Type</label>
          <select ref='type'>
            <option>robot</option>
            <option>user</option>
          </select>
          <button
            name='user-form-button'
            type='button'
            onClick={this.userFormHandler.bind(this, this.props.createObject)}>Create</button>
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
      this.refs.type.value = '';
    } else {
      alert('Некорректные данные')
    }
  }
}

export default UserForm;
