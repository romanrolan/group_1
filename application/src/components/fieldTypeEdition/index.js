import React, { Component } from 'react';
import MessageBox from '../messageBox';
import './style.css';

class FieldTypeEdition extends Component {
  render() {
    return (
      <li className='FieldTypeEdition'>
        <h3 className='title'>First Edition</h3>
        <p>{this.props.name}</p>
        <form>
          <input type='text' ref='news' />
          <button type='button' name='field-news' onClick={this.buttonHandler}>Add</button>
        </form>
        <MessageBox news={this.props.news}/>
        <button type='button' name='delete-edition' onClick={this.props.deleteObject}>delete edition</button>
      </li>
    )
  }

  buttonHandler = () => {
    if (this.refs.news.value) {
      this.props.createNews('input field', this.refs.news.value);
      this.refs.news.value = '';
    }
  }
}

export default FieldTypeEdition;
