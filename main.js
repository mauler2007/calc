'use strict';

let isNumber = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

let money,
  income = 'Фриланс',
  addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', ['Топливо', 'Обучение']),
  deposit = confirm('Есть ли у вас депозит в банке?'),
  mission = 1000000,
  period = 3;
  appData = {};


let start = function () {


  do {
    money = prompt('Ваш месячный доход?', 10000);
  }

  while (isNaN(money) || money.trim() === '' || money === null);

  return Number(money);
};

appData.budget = money;

console.log(appData);
start();

let expenses = [];



let isEmpty = function (str) {
  return (!str || 0 === str.length);
};

let getExpensesMonth = function () {
  let sum = 0;

  for (let i = 0; i < 2; i++) {
    expenses[i] = prompt('Введите обязательную статью расходов?', "Садик Государственный");

    sum += +prompt('Во сколько это обойдется?');

    while (!isNumber(sum)) {
      sum = +prompt('Во сколько это обойдется?');
    }
  }

  console.log(expenses);
  return sum;
};

let expensesAmount = getExpensesMonth();

console.log('расходы за месяц: ' + expensesAmount);


let getAccumulatedMounth = function () {
  return money - expensesAmount;
};

let accumulatedMonth = getAccumulatedMounth();

let getTargetMounth = function () {
  if (accumulatedMonth <= 0) {
    console.log('Цель HE будет достигнута');
  } else {
    return mission / accumulatedMonth;
  }
};

if (getTargetMounth <= 0) {
  console.log('Цель не будет достигнута');
} else {
  console.log('getTargetMounth: ' + typeof getTargetMounth());
}

console.log('Цель будет достигнута за ' + Math.ceil(getTargetMounth()) + ' месяца');

let budgetDay = getAccumulatedMounth() / 30;

let getStatusIncome = function () {

  if (budgetDay > 1200) {
    console.log('У вас высокий уровень дохода');
  } else if (1200 > budgetDay && budgetDay > 600) {
    console.log('У вас средний уровень дохода');
  } else if (budgetDay < 600 && budgetDay > 0) {
    console.log('К сожалению у вас уровень дохода ниже среднего');
  } else if (budgetDay <= 0) {
    console.log('budgetDay: ' + 'Что то пошло не так');
  }
};

console.log(getStatusIncome());

















// let array = ['apple', 'orange', 'banana','strawberry'];

// let car = {
//   model: 'mazda',
//   year: 2006,
//   specifiction: [],
//   style: {
//     color: 'blue'
//   }
// };

// for (let key in car) {
//   console.log('Ключ: ' + key + ' Значение ' + car[key]);
// }

// // quantiti of keys
// console.log(Object.keys(car).length);








// array.push('kivi');
// array.unshift('papaya');
// console.log(array);



// array.shift();

// array.pop();


// console.log(array);
// console.log(array.pop());
// console.log(array.shift());
// console.log(array);
// console.log(array.sort());
// console.log(array.slice(1, 3));
// console.log(array.slice(-2));


// console.log(array);
// console.log(array.splice(1, 2, 'avocado', 'arbuz'));
// console.log(array);

// console.log(array.join());
// console.log(array.join(' - '));
// console.log(array.reverse());

// console.log(array.concat(['carrot', 'mango', 'cherry'] , 'berry'));


// let car = {
//   model: 'mazda',
//   year: 2006,
//   turbocharging: true,
//   specifications: [],
//   style: {
//     color: 'blue'
//   }
// };

// car.ride = function (speed) {
//   console.log('Машина едет со скоростью :' + speed + ' км/час');
// }

// car.ride(60);
// console.log(car);


// let car = {
//   model: 'mazda',
//   year: 2006
// };

// let obj = new Object();

// car.turbocharging = true;
// car.transmission = 'manual';

// console.log(car);
// console.log(car.model);
// console.log(car.transmission);


// obj.color = 'black';
// obj.wheel = 4;

// car.style = obj;
// console.log(car.style === obj);