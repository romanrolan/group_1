import React from 'react';
import MessageBox from './MessageBox';
import './ButtonEdition.css';

const ButtonEdition = (props) =>
  <li className='ButtonEdition'>
    <h3 className='title'>Second Edition</h3>
    <button type='button' name='field-news' onClick={props.news}>Add</button>
    <MessageBox news={props.randomNews} />
  </li>

export default ButtonEdition;
