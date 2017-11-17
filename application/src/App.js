import React, { Component } from 'react';
import FormsColumn from './components/FormsColumn';
import UsersColumn from './components/UsersColumn';
import { userStore, serverEdition, randomEdition, inputEdition } from './model/model.config';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      users: userStore.users,
      serverNews: serverEdition.newsStore,
      randomNews: randomEdition.newsStore,
      fieldNews: inputEdition.newsStore
    }
  }

  render() {
    return (
      <div className='App'>
        <FormsColumn
          createUser={userStore.createUser}/>
        <UsersColumn
          users={this.state.users}
          serverNews={this.state.serverNews}
          randomNews={this.state.randomNews}
          fieldNews={this.state.fieldNews}
          news={this.news.bind(null, randomEdition.makeNewsRandom)}/>
      </div>
    );
  }

  update(obj) {
    return () => {this.setState(obj)}
  }

  news(method) {
    method();
  }

  componentDidMount() {
    userStore.subscribe(this.update({ users: userStore.users }));
    serverEdition.subscribe(this.update({ serverNews: serverEdition.newsStore }));
    randomEdition.subscribe(this.update({ randomNews: randomEdition.newsStore }));
    inputEdition.subscribe(this.update({ fieldNews: inputEdition.newsStore }));
  }
}

export default App;

// userFormHandler(createUserMethod, input, select) {
//   console.log(arguments);
//   if (input.value && select.value) {
//     const data = {
//       name: input.value,
//       type: select.value
//     }
//     createUserMethod(data);
//     input.value = '';
//     select.value = '';
//   } else {
//     alert('Некорректные данные')
//   }
// }

//
//
//
//

//
// import React, { Component } from 'react';
// import FormsColumn from './components/FormsColumn';
// import UsersColumn from './components/UsersColumn';
// import { userStore } from './model/model.config';
// import { addUser } from './model/model.config';
// import './App.css';
//
// class App extends Component {
//   constructor(props){
//     super(props);
//     this.state = {
//       users: userStore.users
//     }
//   }
//
//   render() {
//     return (
//       <div className='App'>
//         <FormsColumn addUser={addUser} update={this.update}/>
//         <UsersColumn users={this.state.users} />
//       </div>
//     );
//   }
//
//   update = () => {
//     this.setState({
//       users: userStore.users
//     })
//   }
// }
//
// export default App;
