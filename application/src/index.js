import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App';
import { store } from './model/model.config';
import controller from './controller';

render(<App
          store={store}
          createObject={controller.createEditionAndUserHandler}
          deleteObject={controller.deleteObjectHandler}
          addNews={controller.addNewsHandler} />, document.getElementById('root'));
