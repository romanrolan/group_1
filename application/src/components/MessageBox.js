import React from 'react';
import './MessageBox.css';

const MessageBox = (props) =>
  <ul className='MessageBox'>
    {
      props.messages ? props.messages.map(message => <li>{message}</li>) : 'There are no messages'
    }
  </ul>

export default MessageBox;
