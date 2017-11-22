import React, { Component } from 'react';
import FormsColumn from './components/formsColumn';
import UsersColumn from './components/usersColumn';
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
          deleteObject={this.props.deleteObject}
          addNews={this.props.addNews} />
      </div>
    );
  }

  update = () => {
    this.setState({});
  }

  componentDidMount() {
    this.props.store.subscribe(this.update)
  }
}

export default App;
