import { Publisher } from './model';
import { EventEmitter } from './model';
import { Factory } from './model';
import { Store } from './model';

const eventEmitter = new EventEmitter();
const factory = new Factory(eventEmitter.trigger);
const store = new Store();
factory.subscribe(store.addAndDeleteUserToStore);

export {
  store,
  factory
}
