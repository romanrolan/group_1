import React from 'react';
import MessageBox from './MessageBox';
import './ServerEdition.css';

const ServerEdition = (props) =>
  <li className='ServerEdition'>
    <h3 className='title'>Server Edition</h3>
    <p>{props.name}</p>
    <button type='button' name='field-news' onClick={props.createNews}>Add</button>
    <MessageBox news={props.news} />
    <button type='button' name='delete-edition' onClick={props.deleteObject}>delete edition</button>
  </li>

export default ServerEdition;
