import React, { Component } from 'react';
import FormsColumn from './components/FormsColumn';
import UsersColumn from './components/UsersColumn';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div className='App'>
        <FormsColumn createObject={this.props.createObject}/>
        <UsersColumn
          users={this.props.store.getData().users}
          editions={this.props.store.getData().editions}
          deleteObject={this.props.deleteObject} />
      </div>
    );
  }

  update = () => {
    this.setState({});
  }

  componentWillMount() {
    this.props.store.subscribe(this.update)
  }
}

export default App;
