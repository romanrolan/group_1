import React, { Component } from 'react';
import './NewspaperForm.css';

class NewspaperForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='NewspaperForm'>
        <h3 className='title'>Form for creating a newspaper</h3>
        <form className='form'>
          <select>
            <option>Server</option>
            <option>Input Field</option>
            <option>Button</option>
          </select>
          <button name='newspaper-form-button' type='button'>Create</button>
        </form>
      </div>
    );
  }
}

export default NewspaperForm;
