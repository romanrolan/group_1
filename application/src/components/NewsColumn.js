import React, { Component } from 'react';
import AllNews from './AllNews';
import './NewsColumn.css';

class NewsColumn extends Component {

  render() {
    return (
      <div className='NewsColumn'>
        <AllNews />
      </div>
    );
  }
}

export default NewsColumn;
