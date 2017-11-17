import { Publisher } from './model';
import { EventEmitter } from './model';
import { UserStore } from './model';

const eventEmitter = new EventEmitter();
const userStore = new UserStore();
const serverEdition = new Publisher('edition1', 'serverNews', eventEmitter.trigger);
const randomEdition = new Publisher('edition2', 'randomNews', eventEmitter.trigger);
const inputEdition = new Publisher('edition3', 'inputNews', eventEmitter.trigger);


// userStore.createUser({type:'robot', name:'Vasya'});
// userStore.users[0].news[0]='news';

export {
  userStore,
  serverEdition,
  randomEdition,
  inputEdition
 }


// import { EventEmitter } from './model';
// import { UserStore } from './model';
// import { Controller } from '../controller/controller';
// import { Publisher } from './model'
//
// const eventEmitter = new EventEmitter();
// const userStore = new UserStore();
// const controller = new Controller(eventEmitter.trigger);
// const serverEdition = new Publisher('edition1', 'serverNews');
// const randomEdition = new Publisher('edition2', 'randomNews');
// const inputEdition = new Publisher('edition3', 'inputNews');
// const addUser = controller.createNewUser;
//
//
// eventEmitter.subscribe('createUser', userStore.createUser);
// eventEmitter.subscribe('deleteUser', userStore.deleteUser);
//
// export { userStore, addUser }
