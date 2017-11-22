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
    this.name = name;
    this.type = type;
    this.news = [];
    this._set = {
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

  _randomVal(min, max){
    return Math.round(Math.random() *(max-min)) + min;
  }

  _randomString(){
    let string = '';
    let char;
    for (let i=0; i<this._set.strLength; i++){
      char = this._randomVal(this._set.firstChar, this._set.lastChar);
      string += String.fromCharCode(char);
    }
    return string;
  }

  get settings (){
    return this._set;
  }

  set settings (newSettings){
    this._set = newSettings;
  }

  makeNewsServ (fn){
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
      let news = `${this.type} ${user.body.slice(0, this._set.strLength)}`;
      fn(news, this.type);
      this.news.push(news);
      this.trigger(this.news);
    })
    .catch(reject => alert('Error'));
  }

  makeNewsRandom(fn) {
    let rndTime = this._randomVal(this._set.timeMin, this._set.timeMax) * this._set.timeMul;
    let rndStr = `${this.type} ${this._randomString()}`;
    let rndStrAsync = new Promise((resolve) => {
      setTimeout(() => {
        resolve(rndStr);
      }, rndTime);
    });
    rndStrAsync.then(result => {
      fn(result, this.type);
      this.news.push(result);
      this.trigger(this.news);
      });
  }

  makeNewsManual (fnOut, fnIn){
    let input = `${this.type} ${fnIn}`;
    fnOut(input, this.type);
    this.news.push(input);
    this.trigger(this.news);
  }
}


export class User {
  constructor(name, type) {
    this.news = [];
    this.name = name;
    this.type = type;
    this.signedEditions = [];
  }

  update = (data) => {
    this.news.push(data);
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

export class Factory extends Observer {
  constructor(transferData) {
    super(transferData);
    this.createEdition = this.createEdition.bind(this, transferData);
  }

  createEdition = (transferData, params) => {
    const edition = new Publisher(params.name, params.type, transferData);
    this.trigger({type: 'edition', data: edition});
  }

  createUser = (params) => {
    let object;
    if (params.userType === 'robot') {
      object = new Robot(params.name, params.userType);
    } else if (params.userType === 'user') {
      object = new User(params.name, params.userType);
    } else { return }
    this.trigger({type: 'user', data: object});
  }
}


export class Store extends Observer {
  constructor() {
    super();
    this.users = [];
    this.editions = [];
  }

  addNewObject = (params) => {
    this[`${params.type}s`].push(params.data);
    this.notificationSubscribers();
  }

  deleteUser = (params) => {
    if (params.userType === 'user') {
      this.users = this.users.filter(user => user.name !== params.name);
    } else if (params.userType === 'robot') {
      this.users.forEach(robot => {
        if (params.name === robot.name) {
          clearInterval(robot.timer);
        }
      });
      this.users = this.users.filter(robot => robot.name !== params.name);
    } else { return }
    this.notificationSubscribers();
  }

  deleteEdition = (name) => {
    this.editions = this.editions.filter(edition => edition.name !== name);
    this.notificationSubscribers();
  }

  addSubscriptionToEdition = (params) => {
    this.users.forEach(user => {
      if (user.name === params.userName) {
        user.signedEditions.push(params.editionName);
      }
    })
  }

  deleteSubscriptionToEdition = (params) => {
    this.users.forEach(user => {
      if (user.name === params.userName) {
        user.signedEditions = user.signedEditions.filter(name => params.editionName !== name);
      }
    })
  }

  distributeNews = (params) => {
    this.users.forEach(user => {
      if (user.signedEditions.includes(params.editionName)) {
        user.news.push(params.data);
        this.notificationSubscribers();
      }
    })
  }

  notificationSubscribers = () => {
    this.trigger();
  }

  getData = () => {
    let users = {}
    let editions = {};

    if (this.users.length) {
      this.users.forEach(user => {
        users[user.name] = user.news;
      });
    }

    if (this.editions.length) {
      this.editions.forEach(edition => {

        editions[edition.type] = {
          name: edition.name,
          news: edition.news
        };

        switch (edition.type) {
          case 'server': editions[edition.type].createNews = edition.makeNewsServ;
          break;

          case 'input field': editions[edition.type].createNews = edition.makeNewsManual;
          break;

          case 'button': editions[edition.type].createNews = edition.makeNewsRandom;
        }
      });
    }
    return {users, editions}
  }
}
