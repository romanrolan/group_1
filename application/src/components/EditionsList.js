import React, { Component } from 'react';
import FieldTypeEdition from './FieldTypeEdition';
import ButtonEdition from './ButtonEdition';
import ServerEdition from './ServerEdition';
import './EditionsList.css';

class EditionsList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='EditionsList'>
        <h3 className='title'>List of editions</h3>
        <ul>
          <FieldTypeEdition />
          <ButtonEdition />
          <ServerEdition />
        </ul>
      </div>
    );
  }
}

export default EditionsList;
