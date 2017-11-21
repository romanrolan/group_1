import React from 'react';
import MessageBox from '../messageBox';
import './style.css';

const ButtonEdition = (props) =>
  <li className='ButtonEdition'>
    <h3 className='title'>Second Edition</h3>
    <p>{props.name}</p>
    <button type='button' name='field-news' onClick={() => props.createNews('button')}>Add</button>
    <MessageBox news={props.news} />
    <button type='button' name='delete-edition' onClick={props.deleteObject}>delete edition</button>
  </li>

export default ButtonEdition;