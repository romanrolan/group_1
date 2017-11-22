import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App';
import { store } from './model/model.config';
import controller from './controller';

render(<App
          store={store}
          createEdition={controller.createEditionHandler}
          createUser={controller.createUserHandler}
          deleteUser={controller.deleteUserHandler}
          deleteEdition={controller.deleteEditionHandler}
          addNews={controller.addNewsHandler}
          subscribeNews={controller.subscribeNewsHandler}
          unSubscribeNews={controller.unSubscribeNewsHandler} />, document.getElementById('root'));
