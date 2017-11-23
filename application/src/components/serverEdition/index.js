import React from 'react';
import MessageBox from '../messageBox';
import './style.css';

const ServerEdition = (props) =>
  <li className='ServerEdition'>
    <h3 className='title'>Server Edition</h3>
    <p>{`Edition name is ${props.name}`}</p>
    <button type='button' name='field-news' onClick={() => props.createNews('server')}>Add news</button>
    <MessageBox news={props.news} />
    <button type='button' name='delete-edition' onClick={() => props.deleteEdition(props.name)}>delete edition</button>
  </li>

export default ServerEdition;
