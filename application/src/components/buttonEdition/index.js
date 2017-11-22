import React from 'react';
import MessageBox from '../messageBox';
import './style.css';

const ButtonEdition = (props) =>
  <li className='ButtonEdition'>
    <h3 className='title'>Button Edition</h3>
    <p>{`Edition name is ${props.name}`}</p>
    <button type='button' name='field-news' onClick={() => props.createNews('button')}>Add</button>
    <MessageBox news={props.news} />
    <button type='button' name='delete-edition' onClick={() => props.deleteEdition(props.name)}>delete edition</button>
  </li>

export default ButtonEdition;
