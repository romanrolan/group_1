import { store, factory } from '../model/model.config';

class Controller {
  constructor(store, factory) {
    this.model = { store, factory };
  }

  createEditionHandler = (obj) => {
    this.model.factory.createEdition(obj);
  }

  createUserHandler = (obj) => {
    this.model.factory.createUser(obj);
  }

  deleteUserHandler = (obj) => {
    this.model.store.deleteUser(obj);
  }

  deleteEditionHandler = (name) => {
    this.model.store.deleteEdition(name);
  }

  addNewsHandler = (type, data) => {
    this.model.store.getData().editions[type].createNews(data);
  }

  subscribeNewsHandler = (obj) => {
    this.model.store.addSubscriptionToEdition(obj);
  }

  unSubscribeNewsHandler = (obj) => {
    this.model.store.deleteSubscriptionToEdition(obj);
  }
}

const controller = new Controller(store, factory);

export default controller;
