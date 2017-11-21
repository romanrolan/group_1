import { methodsObject } from '../model/model.config';

class Controller {
  constructor(methodsObject) {
    this.methodsObject = methodsObject;
    this.addNewsHandler = this.addNewsHandler.bind(this, methodsObject.store);
  }

  createEditionAndUserHandler = (obj) => {
    this.methodsObject.createObject(obj);
  }

  deleteObjectHandler = (obj) => {
    this.methodsObject.deleteObject(obj);
  }

  addNewsHandler = (store, type, data) => {
    store.getData().editions[type].createNews(data);
  }

  subscribeUnsubscribeHandler = () => {

  }
}

const controller = new Controller(methodsObject);

export default controller;
