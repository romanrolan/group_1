import React, { Component } from 'react';
import './style.css';

class NewspaperForm extends Component {

  render() {
    return (
      <div className='NewspaperForm'>
        <h3 className='title'>Form for creating a newspaper</h3>
        <form className='form'>
          <label>Edition name</label>
          <input type='text'
                 className='edition-form-name'
                 placeholder='Please, enter a name'
                 ref = 'name'/>
          <label>Type</label>
          <select ref='type'>
            <option>server</option>
            <option>input</option>
            <option>button</option>
          </select>
          <button
            name='newspaper-form-button'
            type='button'
            onClick={() => this.editionFormHandler(this.props.createEdition)}>Create</button>
        </form>
      </div>
    );
  }

  editionFormHandler(createEdition) {
    if (this.refs.name.value && this.refs.type.value) {
      const data = {
        name: this.refs.name.value,
        type: this.refs.type.value
      }
      createEdition(data);
      this.refs.name.value = '';
    } else {
      alert('Некорректные данные')
    }
  }
}

export default NewspaperForm;
