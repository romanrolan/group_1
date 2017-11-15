'use strict';

class Publisher {
  constructor(name, type){
    this.name = name;
    this.type = type;
    this.newsStore = [];
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
  }

  _randomVal(min, max){
    return Math.round(Math.random() *(max-min)) + min;
  }

  _randomString(){
    let string = "";
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
      this.newsStore.push(news);
      })
    .catch(reject => alert('Error'));
  }

  makeNewsRandom (fn){
    let rndTime = this._randomVal(this._set.timeMin, this._set.timeMax) * this._set.timeMul;
    let rndStr = `${this.type} ${this._randomString()}`;
    let rndStrAsync = new Promise((resolve) => {
      setTimeout(() => {
        resolve(rndStr);
        }, rndTime);
    });
    rndStrAsync.then(result => {
      fn(result, this.type);
      this.newsStore.push(result);
      });
  }

  makeNewsManual (fnIn, fnOut){
    let input = `${this.type} ${fnIn.call(null)}`;
    fnOut(input, this.type);
    this.newsStore.push(input);
  }

}

//example, tests only

class Emit {
  constructor(){
    this.arr = [];
    this.addNews = this.addNews.bind(this);
  }
  addNews(a, b){this.arr.push(a, b);}
}

let pub = new Publisher('publ','server');
let sub = new Emit();


