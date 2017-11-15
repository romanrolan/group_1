import React, { Component } from 'react';
import FormsColumn from './components/FormsColumn';
import UsersColumn from './components/UsersColumn';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <FormsColumn />
        <UsersColumn />
      </div>
    );
  }
}

export default App;
