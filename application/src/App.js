import React, { Component } from 'react';
import FormsColumn from './components/FormsColumn';
import UsersColumn from './components/UsersColumn';
import { store, factory } from './model/model.config';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {...store.getData()}
  }

  render() {
    return (
      <div className='App'>
        <FormsColumn createObject={factory.createObject}/>
        <UsersColumn
          usersNews={this.state.usersNews}
          editionsNews={this.state.editionsNews}
          deleteObject={factory.deleteObject} />
      </div>
    );
  }

  update = (obj) => {
    this.setState({...obj});
  }

  componentDidMount() {
    store.subscribe(this.update)
  }
}

export default App;
