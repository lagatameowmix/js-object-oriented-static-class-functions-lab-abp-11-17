'use strict';
//Define a Question class using the class syntax of Javascript.
class Question {
  constructor(question){
    this.question = question;
    return this._All;
  }
}
//Add a property, _All to the Question class and initialize its value to an empty Array.
Question._All = [];
//Define a class function with the static keyword, All()
//that returns the value of the class property _All.
class newClass{
  static All(){
  return this._All;
}
