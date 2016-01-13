
'use strict';

//index.js

function* greet() {
  yield "generator";
  yield "works";
  yield "fine!";
}

let greeter = greet();
console.log(greeter.next().value);
console.log(greeter.next().value);
console.log(greeter.next().value);

class Hoge {
  fuga() {
    return "piyo";
  }
}

let hoge = new Hoge();
console.log(hoge.fuga());//piyo