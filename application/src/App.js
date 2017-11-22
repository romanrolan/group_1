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
        <FormsColumn
                    createEdition={this.props.createEdition}
                    createUser={this.props.createUser} />
        <UsersColumn
                    users={this.props.store.getData().users}
                    editions={this.props.store.getData().editions}
                    deleteUser={this.props.deleteUser}
                    deleteEdition={this.props.deleteEdition}
                    addNews={this.props.addNews}
                    subscribeNews={this.props.subscribeNews}
                    unSubscribeNews={this.props.unSubscribeNews} />
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
