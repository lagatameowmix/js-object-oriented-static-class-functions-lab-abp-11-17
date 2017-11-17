'use strict';
class Question {
  static All(){
  return this._All;
  }

//Build a static class function that can return the question by Id. 
// function should allow you to reference the Id of the question, not its index within the _All array
//If there are 3 questions in _All, Find(2) should return the second one, not the 3 one.
static (Id){
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
