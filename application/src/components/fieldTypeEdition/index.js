import React, { Component } from 'react';
import MessageBox from '../messageBox';
import './style.css';

class FieldTypeEdition extends Component {
  render() {
    return (
      <li className='FieldTypeEdition'>
        <h3 className='title'>Input Edition</h3>
        <p>{`Edition name is ${this.props.name}`}</p>
        <form>
          <input type='text' ref='news' />
          <button type='button' name='field-news' onClick={this.buttonHandler}>Add</button>
        </form>
        <MessageBox news={this.props.news}/>
        <button type='button' name='delete-edition' onClick={() => this.props.deleteEdition(this.props.name)}>delete edition</button>
      </li>
    )
  }

  buttonHandler = () => {
    if (this.refs.news.value) {
      this.props.createNews('input', this.refs.news.value);
      this.refs.news.value = '';
    }
  }
}

export default FieldTypeEdition;
