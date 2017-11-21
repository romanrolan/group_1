import React, { Component } from 'react';
import MessageBox from '../messageBox';
import avatar from '../../images/avatar.png';
import './style.css';

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
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

  componentWillMount() {
    if (this.props.editions.length) {
      let stateProps = {};
      this.props.editions.forEach(name => { stateProps[name] = false })
      this.setState(stateProps);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.editions.length !== this.props.editions.length) {
      let changedProps;

    }

  }
}

export default User;
