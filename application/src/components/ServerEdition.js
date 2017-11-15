import React, { Component } from 'react';
import MessageBox from './MessageBox';
import './ServerEdition.css';

class ServerEdition extends Component {
  render() {
    return (
      <li className='ServerEdition'>
        <h3 className='title'>Server Edition</h3>
        <MessageBox />
      </li>
    );
  }
}

export default ServerEdition;
