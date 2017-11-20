import React from 'react';
import MessageBox from './MessageBox';
import './FieldTypeEdition.css';

const FieldTypeEdition = (props) =>
  <li className='FieldTypeEdition'>
    <h3 className='title'>First Edition</h3>
    <form>
      <input type='text' />
      <button type='button' name='field-news'>Add</button>
    </form>
    <MessageBox news={props.news}/>
    <button type='button' name='delete-edition' onClick={props.deleteObject}>delete edition</button>
  </li>

export default FieldTypeEdition;
