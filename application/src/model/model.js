export class Observer {
  constructor() {
    this.subscribers = [];
  }

  subscribe = (fn) => {
    this.subscribers.push(fn);
  }

  unsubscribe = (fn) => {
    this.subscribers = this.subscribers.filter(subscriber => subscriber !== fn);
  }

  trigger = (data) => {
    this.subscribers.forEach(subscriber => subscriber(data));
  }
}


export class EventEmitter {
  constructor() {
    this.events = {};
  }

  subscribe = (eventName, fn) => {
    if( !this.events[eventName] ) {
       this.events[eventName] = [];
    }
    this.events[eventName].push(fn);
  }

  unsubscribe = (eventName, fn) => {
    this.events[eventName] = this.events[eventName].filter(eventFn => fn !== eventFn);
    if (this.events[eventName] === []) {
      delete this.events[eventName];
    }
  }

  trigger = (data, eventName) => {
    if(this.events[eventName]) {
      this.events[eventName].forEach(fn => fn(data));
    }
  }
}


export class Publisher extends Observer {
  constructor(name, type, transferData){
    super();
    this.name = name;   // имя газеты
    this.type = type;   // тип газеты
    this.news = [];  // хранилище новостей
    this._set = {  // различные настройки для серверных новостей и т.д.
      url: 'https://jsonplaceholder.typicode.com/posts/',
      urlMin: 1,
      urlMax: 100,
      firstChar: 61,
      lastChar: 74,
      strLength: 20,
      timeMin: 1,
      timeMax: 3,
      timeMul: 1000
    }
    this.makeNewsServ = this.makeNewsServ.bind(this, transferData);
    this.makeNewsRandom = this.makeNewsRandom.bind(this, transferData);
    this.makeNewsManual = this.makeNewsManual.bind(this, transferData);
  }

  _randomVal(min, max){  // генерация случайного числа
    return Math.round(Math.random() *(max-min)) + min;
  }

  _randomString(){   // генерация случайной строки
    let string = '';
    let char;
    for (let i=0; i<this._set.strLength; i++){
      char = this._randomVal(this._set.firstChar, this._set.lastChar);
      string += String.fromCharCode(char);
    }
    return string;
  }

  get settings (){  // получение значений текущих настроек
    return this._set;
  }

  set settings (newSettings){  // установка новых значений настроек
    this._set = newSettings;
  }

  makeNewsServ (fn){  // создание серверных новостей
    let id = this._randomVal(this._set.urlMin, this._set.urlMax);
    fetch(`${this._set.url}${id}`)
    .then(response => {
      if (response.status !== 200) {
        let error = new Error("not ok");
        return error.message;
      }
      else return response.json();
    })
    .then(user => {
      let news = `${this.type} ${user.body.slice(0, this._set.strLength)}`; // получение значений от сервера
      fn(news, this.type); // передача EventEmitterу новости и типа газеты
      this.news.push(news); // добавление новости к себе в хранилище
      this.trigger(this.news);
    })
    .catch(reject => alert('Error'));
  }

  makeNewsRandom(fn) { // создание случайной новости через время rndTime
    let rndTime = this._randomVal(this._set.timeMin, this._set.timeMax) * this._set.timeMul;
    let rndStr = `${this.type} ${this._randomString()}`;
    let rndStrAsync = new Promise((resolve) => {
      setTimeout(() => {
        resolve(rndStr);
      }, rndTime);
    });
    rndStrAsync.then(result => {
      fn(result, this.type); // передача EventEmitterу новости и типа газеты
      this.news.push(result); // добавление новости к себе в хранилище
      this.trigger(this.news);
      });
  }

  makeNewsManual (fnOut, fnIn){
    let input = `${this.type} ${fnIn}`;
    fnOut(input, this.type); // передача EventEmitterу новости и типа газеты
    this.news.push(input); // добавление новости к себе в хранилище
    this.trigger(this.news);
  }
}


export class User extends Observer {
  constructor(name, type) {
    super();
    this.news = [];
    this.name = name;
    this.type = type; // определение типа пользователя робот или юзер
  }

  update = (data) => {
    this.news.push(data);
    this.trigger(this.news);
  }
}


export class Robot extends User {
  constructor(name, type) {
    super(name, type);
    this.timer;
    this.showMessages();
  }

  showMessages = () => {
    this.timer = setInterval(() => {
      console.log(`My name is robot ${this.name} and I have ${this.news.length} posts at the moment`);
    }, 4000);
  }
}


export class Factory extends Observer { // класс фабрика теперь имеет только методы для создания и удаления объектов.
  constructor(transferData) { //transferData - метод eventEmitter.trigger, который передаётся третьим параметром при создании объекта газета
    super(transferData);
    this.createObject = this.createObject.bind(this, transferData);
  }

  createObject(transferData, dataObject) {
    if (dataObject.type === 'edition') { // создание объекта газета, параметр приходит с вьюхи
      const edition = new Publisher(dataObject.name, dataObject.editionType, transferData);
      this.trigger({method: 'create', type: dataObject.type, data: edition}); // оповещение Store о создании нового объекта
    } else if (dataObject.type === 'user') {// создание объекта юзер, параметр приходит с вьюхи
      let user;
      if (dataObject.userType === 'robot') {// создание объекта робот, параметр приходит с вьюхи
        user = new Robot(dataObject.name, dataObject.userType);
      } else if (dataObject.userType === 'user') {
        user = new User(dataObject.name, dataObject.userType);
      }
      this.trigger({method: 'create', type: dataObject.type, data: user}); // оповещение Store о создании нового объекта
    } else { return }
  }

  deleteObject = (params) => { // метод для удаления объекта, параметр приходит с вьюхи
    this.trigger(params);// оповещение Store, что надо удалить объект из хранилища
  }

}


export class Store extends Observer {
  constructor() {
    super();
    this.users = []; // объекты юзеров
    this.editions = [];// объекты изданий
  }

  addAndDeleteUserToStore = (obj) => { // метод для удаления и добавления объекта в хранилище, параметр приходит от Factory
    if (obj.method === 'create') { // создаём объект
      this[`${obj.type}s`].push(obj.data); // добавляем объект в соответствующее хранилище
      obj.data.subscribe(this.notificationView); // подписуемся, чтоб он оповещал когда появляются у него новости
      this.notificationView();// оповещаем вьюху
    } else if (obj.method === 'delete') { //удаление объекта
      this[`${obj.type}s`].forEach(object => {
        if (object.name === obj.name) {
          object.unsubscribe(this.notificationView); // отписуемся от него при удалении
          if (object.type === 'robot') {
            clearInterval(object.timer);// останавливаем вывод сообщения в консоль при удалении робота
          }
        }
      })
      this[`${obj.type}s`] = this[`${obj.type}s`].filter(objесt => obj.name !== objесt.name);
      this.notificationView(); // оповещаем вьюху об удалении объекта
    }
  }

  notificationView = () => { // оповещение вьюхи когда пришли новости
    this.trigger();
  }

  getData = () => { // метод для передачи распарсеных данных вьюхе
    let users = {} // нужные вьюхе данные по юзерам
    let editions = {}; // нужные вьюхе данные по изданиям
    if (this.users.length) {
      this.users.forEach(user => {
        users[user.name] = user.news;
      });
    }
    if (this.editions.length) {
      this.editions.forEach(edition => {
        switch (edition.type) {
          case 'server': editions[edition.type] = {
            name: edition.name,
            news: edition.news,
            createNews: edition.makeNewsServ
          };

          case 'input field': editions[edition.type] = {
            name: edition.name,
            news: edition.news,
            createNews: edition.makeNewsManual
          };

          case 'button': editions[edition.type] = {
            name: edition.name,
            news: edition.news,
            createNews: edition.makeNewsRandom
          };

        }
      });
    }
    return {users, editions}
  }

}
