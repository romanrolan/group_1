import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App';
import { store, factory } from './model/model.config';

render(<App
          store={store}
          createObject={factory.createObject}
          deleteObject={factory.deleteObject} />, document.getElementById('root'));
