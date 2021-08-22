'use strict';
// let a = prompt('hello');

// console.log(a);





let askNumber = function () {

  let question = prompt('Угадай число от 1 до 100', [1]);

  let answer = 5;

  // let n = null;

  let compare = function () {

    if (question === null) {
      alert('Игра окончена');

    } else if (question > 5 || question === Number) {
      alert('Загаданное число меньше');

      askNumber();
    } else if (question < 5 || question === Number) {

      alert('Загаданное число больше ' + question);
      console.log(typeof question);

      askNumber();
    } else if (question === answer) {

      alert('Поздравляю, Вы угадали!!!');

    } else {

      alert('Введи число!');

      askNumber();
    }
  };

  compare();

};

askNumber();