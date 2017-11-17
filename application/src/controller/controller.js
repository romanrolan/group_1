export class Controller {
  constructor(trigger) {
    this.createNewUser = this.createNewUser.bind(null,trigger)
  }

  createNewUser = (trigger, type, data) => {
    trigger(type, data);
  }
}
