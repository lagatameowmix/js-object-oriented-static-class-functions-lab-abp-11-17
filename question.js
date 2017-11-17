'use strict';
class Question {
  static All(){
  return this._All;
  }
}
Question._All = [];
//Define a save() instance function that can add the instance to the _All class property.
save(){
  this.constructor._All.push(this)
}
