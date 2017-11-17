import React from 'react';
import MessageBox from './MessageBox';
import './ServerEdition.css';

const ServerEdition = (props) =>
  <li className='ServerEdition'>
    <h3 className='title'>Server Edition</h3>
    <MessageBox news={props.serverNews} />
  </li>

export default ServerEdition;
