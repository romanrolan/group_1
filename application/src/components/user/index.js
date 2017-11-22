import React, { Component } from 'react';
import MessageBox from '../messageBox';
import avatar from '../../images/images.png';
import './style.css';

class User extends Component {

  render() {
    const buttons = this.props.editions.length ? this.props.editions.map((name, key) =>
      <div key={key}>
        <button
                type='button'
                name='status'
                onClick={() => this.props.subscribeNews({
                  userName: this.props.name,
                  editionName: name
                })}>{`Subscribe ${name}`}</button>
        <button
                type='button'
                name='status'
                onClick={() => this.props.unSubscribeNews({
                  userName: this.props.name,
                  editionName: name
                })}>{`Unsubscribe ${name}`}</button>
      </div>
    ) : null;

    return (
      <li className='User'>
        <img src={avatar} alt='User avatar'/>
        <p>{`My type ${this.props.type} and name ${this.props.name}`}</p>
        {buttons}
        <MessageBox news={this.props.news}/>
        <button
          type='button'
          name='delete-user'
          onClick={() => this.props.deleteUser({name:this.props.name, userType: this.props.type})}>Delete User</button>
      </li>
    )
  }
}

export default User;
