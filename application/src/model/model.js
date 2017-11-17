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
    console.log('На Emitter подписались');
  }

  unsubscribe = (eventName, fn) => {
    this.events[eventName] = this.events[eventName].filter(eventFn => fn !== eventFn);
    if (this.events[eventName] === []) {
      delete this.events[eventName];
    }
  }

  trigger = (data, eventName) => {
    console.log('Я trigger', data, eventName);
    if(this.events[eventName]) {
      this.events[eventName].forEach(fn => fn(data));
      console.log('Trigger передал данные');
    }
  }
}


export class Publisher extends Observer {
  constructor(name, type, transferData){
    super();
    this.name = name;   // имя газеты
    this.type = type;   // тип газеты
    this.newsStore = [];  // хранилище новостей
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
      this.newsStore.push(news); // добавление новости к себе в хранилище
      this.trigger(this.newsStore);
    })
    .catch(reject => alert('Error'));
  }

  makeNewsRandom(fn) { // создание случайной новости через время rndTime
    console.log('fn',fn);
    let rndTime = this._randomVal(this._set.timeMin, this._set.timeMax) * this._set.timeMul;
    let rndStr = `${this.type} ${this._randomString()}`;
    let rndStrAsync = new Promise((resolve) => {
      setTimeout(() => {
        resolve(rndStr);
      }, rndTime);
    });
    rndStrAsync.then(result => {
      console.log('Данные в Emitter', result, this.type);
      fn(result, this.type); // передача EventEmitterу новости и типа газеты
      console.log('Отдал emittery данные');
      this.newsStore.push(result); // добавление новости к себе в хранилище
      this.trigger(this.newsStore);
      });
  }

  makeNewsManual (fnIn, fnOut){
    let input = `${this.type} ${fnIn.call(null)}`;
    fnOut(input, this.type); // передача EventEmitterу новости и типа газеты
    this.newsStore.push(input); // добавление новости к себе в хранилище
    this.trigger(this.newsStore);
  }
}


export class User extends Observer {
  constructor(name) {
    super();
    this.news = [];
    this.name = name;
  }

  update = (data) => {
    this.news.push(data);
    this.trigger(this.news);
    console.log(`User ${this.name}`,this.news);
  }
}


export class Robot extends User {
  constructor(name) {
    super(name);
    this.timer;
    this.showMessages();
  }

  showMessages = () => {
    this.timer = setInterval(() => {
      console.log(`My name is robot ${this.name} and I have ${this.news.length} posts at the moment`);
    }, 4000);
  }
}


export class UserStore extends Observer {
  constructor() {
    super();
    this.users = [];
  }

  createUser = (dataObject) => {
    let user;
    if (dataObject.type === 'robot') {
      user = new Robot(dataObject.name);
    } else if (dataObject.type === 'user') {
      user = new User(dataObject.name);
    } else { return }

    this.users.push(user);
    this.trigger(this.users);
    console.log('created user');
  }

  deleteUser = (name) => {
    this.users = this.users.filter(user => user.name !== name);
    this.trigger(this.users);
  }

  getUsers = () => this.users
}





//
// export class Publisher {
//   constructor(name, type){
//     this.name = name;   // имя газеты
//     this.type = type;   // тип газеты
//     this.newsStore = [];  // хранилище новостей
//     this._set = {  // различные настройки для серверных новостей и т.д.
//       url: 'https://jsonplaceholder.typicode.com/posts/',
//       urlMin: 1,
//       urlMax: 100,
//       firstChar: 61,
//       lastChar: 74,
//       strLength: 20,
//       timeMin: 1,
//       timeMax: 3,
//       timeMul: 1000
//     }
//   }
//
//   _randomVal(min, max){  // генерация случайного числа
//     return Math.round(Math.random() *(max-min)) + min;
//   }
//
//   _randomString(){   // генерация случайной строки
//     let string = '';
//     let char;
//     for (let i=0; i<this._set.strLength; i++){
//       char = this._randomVal(this._set.firstChar, this._set.lastChar);
//       string += String.fromCharCode(char);
//     }
//     return string;
//   }
//
//   get settings (){  // получение значений текущих настроек
//     return this._set;
//   }
//
//   set settings (newSettings){  // установка новых значений настроек
//     this._set = newSettings;
//   }
//
//   makeNewsServ (fn){  // создание серверных новостей
//     let id = this._randomVal(this._set.urlMin, this._set.urlMax);
//     fetch(`${this._set.url}${id}`)
//     .then(response => {
//       if (response.status !== 200) {
//         let error = new Error("not ok");
//         return error.message;
//       }
//       else return response.json();
//     })
//     .then(user => {
//       let news = `${this.type} ${user.body.slice(0, this._set.strLength)}`; // получение значений от сервера
//       fn(news, this.type); // передача EventEmitterу новости и типа газеты
//       this.newsStore.push(news); // добавление новости к себе в хранилище
//     })
//     .catch(reject => alert('Error'));
//   }
//
//   makeNewsRandom (fn){ // создание случайной новости через время rndTime
//     let rndTime = this._randomVal(this._set.timeMin, this._set.timeMax) * this._set.timeMul;
//     let rndStr = `${this.type} ${this._randomString()}`;
//     let rndStrAsync = new Promise((resolve) => {
//       setTimeout(() => {
//         resolve(rndStr);
//         }, rndTime);
//     });
//     rndStrAsync.then(result => {
//       fn(result, this.type); // передача EventEmitterу новости и типа газеты
//       this.newsStore.push(result); // добавление новости к себе в хранилище
//       });
//   }
//
//   makeNewsManual (fnIn, fnOut){
//     let input = `${this.type} ${fnIn.call(null)}`;
//     fnOut(input, this.type); // передача EventEmitterу новости и типа газеты
//     this.newsStore.push(input); // добавление новости к себе в хранилище
//   }
//
// }
//
//
//
//
// //-------------------------------------------------------------------------------
//
// export class EventEmitter {
//   constructor() {
//     this.events = {};
//   }
//
//   subscribe = (eventName, fn) => {
//     if( !this.events[eventName] ) {
//        this.events[eventName] = [];
//     }
//     this.events[eventName].push(fn);
//   }
//
//   unsubscribe = (eventName, fn) => {
//     this.events[eventName] = this.events[eventName].filter(eventFn => fn !== eventFn);
//     if (this.events[eventName] === []) {
//       delete this.events[eventName];
//     }
//   }
//
//   trigger = (eventName, data) => {
//     if(this.events[eventName]) {
//       this.events[eventName].forEach(fn => fn(data));
//     }
//   }
// }
//
// export class Observer {
//   constructor() {
//     this.subscribers = [];
//     this.subscribe = this.subscribe.bind(this);
//     this.unsubscribe = this.unsubscribe.bind(this);
//     this.trigger = this.trigger.bind(this);
//   }
//
//   subscribe(fn) {
//     this.subscribers.push(fn);
//   }
//
//   unsubscribe(fn) {
//     this.subscribers = this.subscribers.filter(subscriber => subscriber !== fn);
//   }
//
//   trigger(data) {
//     this.subscribers.forEach(subscriber => subscriber(data));
//   }
// }
//
// export class User {
//   constructor(name) {
//     this.news = [];
//     this.name = name;
//   }
//
//   update = (data) => {
//     this.news.push(data);
//   }
// }
//
// export class Robot {
//   constructor(name) {
//     this.news = [];
//     this.name = name;
//     this.timer;
//     this.showMessages();
//   }
//
//   update = (data) => {
//     this.news.push(data);
//   }
//
//   showMessages = () => {
//     this.timer = setInterval(() => {
//       console.log(`My name is robot ${this.name} and I have ${this.news.length} posts at the moment`);
//     }, 4000);
//   }
// }
//
// export class UserStore {
//   constructor() {
//     this.users = [];
//   }
//
//   createUser = (dataObject) => {
//     let user;
//     if (dataObject.type === 'robot') {
//       user = new Robot(dataObject.name);
//     } else if (dataObject.type === 'user') {
//       user = new User(dataObject.name);
//     } else { return }
//
//     this.users.push(user);
//   }
//
//   deleteUser = (name) => {
//     this.users = this.users.filter(user => user.name !== name);
//   }
//
//   getUsers = () => this.users
// }
