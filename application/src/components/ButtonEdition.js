import React, { Component } from 'react';
import MessageBox from './MessageBox';
import './ButtonEdition.css';

class ButtonEdition extends Component {
  render() {
    return (
      <li className='ButtonEdition'>
        <h3 className='title'>Second Edition</h3>
        <button type='button' name='field-news'>Add</button>
        <MessageBox />
      </li>
    );
  }
}

export default ButtonEdition;
