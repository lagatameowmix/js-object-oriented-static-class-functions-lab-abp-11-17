'use strict';
class Question {
  static All(){
  return this._All;
  }

save(){
  this.constructor._All.push(this)
  }
}

constructor(content){
  this.content = content;
  this.save()
}

Question._All = [];
