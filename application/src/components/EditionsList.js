import React from 'react';
import FieldTypeEdition from './FieldTypeEdition';
import ButtonEdition from './ButtonEdition';
import ServerEdition from './ServerEdition';
import './EditionsList.css';

const EditionsList = (props) =>
  <div className='EditionsList'>
    <h3 className='title'>List of editions</h3>
    <ul>
      <FieldTypeEdition fieldNews={props.fieldNews} />
      <ButtonEdition news={props.news} randomNews={props.randomNews} />
      <ServerEdition serverNews={props.serverNews} />
    </ul>
  </div>

export default EditionsList;
