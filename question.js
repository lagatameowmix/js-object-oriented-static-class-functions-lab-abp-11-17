'use strict';
class Question {
  static All(){
  return this._All;
  }

static Find(Id){
  return this.All()[Id-1]
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
