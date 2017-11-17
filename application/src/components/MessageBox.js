import React from 'react';
import './MessageBox.css';

const MessageBox = (props) =>
  <ul className='MessageBox'>
    {
      props.news ? props.news.map((message,key) => <li key={key}>{message}</li>) : 'There are no messages'
    }
  </ul>

export default MessageBox;
