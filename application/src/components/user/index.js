import React, { Component } from 'react';
import MessageBox from '../messageBox';
import avatar from '../../images/avatar.png';
import './style.css';

class User extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.state);
    return (
      <li className='User'>
        <img src={avatar} alt='User avatar'/>
        <p>{this.props.name}</p>
        <MessageBox news={this.props.news}/>
        <button
          type='button'
          name='delete-user'
          onClick={this.props.deleteObject.bind(null, {
            method: 'delete',
            type: 'user',
            name: this.props.name})}>Delete User</button>
      </li>
    )
  }
}

export default User;
