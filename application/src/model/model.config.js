import { EventEmitter } from './model';
import { Factory } from './model';
import { Store } from './model';

const eventEmitter = new EventEmitter();
const factory = new Factory(eventEmitter.trigger);
const store = new Store();
factory.subscribe(store.addNewObject);
eventEmitter.subscribe('server', store.distributeNews);
eventEmitter.subscribe('input', store.distributeNews);
eventEmitter.subscribe('button', store.distributeNews);

export {
  store,
  factory
}
