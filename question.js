'use strict';
class Question {
  static All(){
  return this._All;
  }

  constructor(content){
    this.content = content;
    this.save()
  }
  
save(){
  this.constructor._All.push(this)
  }
}



Question._All = [];
