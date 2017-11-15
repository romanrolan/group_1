import React, { Component } from 'react';
import MessageBox from './MessageBox';
import './FieldTypeEdition.css';

class FieldTypeEdition extends Component {
  render() {
    return (
      <li className='FieldTypeEdition'>
        <h3 className='title'>First Edition</h3>
        <form>
          <input type='text' />
          <button type='button' name='field-news'>Add</button>
        </form>
        <MessageBox />
      </li>
    );
  }
}

export default FieldTypeEdition;
