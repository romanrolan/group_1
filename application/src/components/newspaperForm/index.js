import React, { Component } from 'react';
import './style.css';

class NewspaperForm extends Component {
  constructor(props) {
    super(props);
  }

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
            <option>input field</option>
            <option>button</option>
          </select>
          <button
            name='newspaper-form-button'
            type='button'
            onClick={() => this.EditionFormHandler(this.props.createObject)}>Create</button>
        </form>
      </div>
    );
  }

  EditionFormHandler(createEditionMethod) {
    if (this.refs.name.value && this.refs.type.value) {
      const data = {
        type: 'edition',
        name: this.refs.name.value,
        editionType: this.refs.type.value
      }
      createEditionMethod(data);
      this.refs.name.value = '';
    } else {
      alert('Некорректные данные')
    }
  }
}

export default NewspaperForm;
