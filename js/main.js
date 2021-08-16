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


let start = function () {


  do {
    money = prompt('Ваш месячный доход?', 10000);
  }
  while (isNaN(money) || money.trim() === '' || money === null);

  // while (!isNumber(money)) {
  //   money = prompt('Ваш месячный доход?');
  // }
  //  проверяем введенные  пользоваьелем данные если не число то повторно  запрашиваю ответ
  // while(isNaN(money) || money.trim() === '' || money === null) {
  //    money = prompt('Ваш месячный доход?');
  // }

  // второй ваниант проверяем введенные  пользоваьелем данные если не число то повторно  запрашиваю ответ
  // while (isNaN(parseFloat(money))) {
  //   money = prompt('Ваш месячный доход?');
  // }
};

// Expenses расходов
//  Amount  количество

start();

let showTypeof = function (item) {
  console.log(typeof item);
};

showTypeof(money);
showTypeof(income);
showTypeof(deposit);

let expenses = [];


// 4.1 // Объявить функцию getExpensesMonth.Функция возвращает сумму всех обязательных расходов за месяц
let getExpensesMonth = function () {
  let sum = 0;

  for (let i = 0; i < 3; i++) {
    expenses[i] = prompt('Введите обязательную статью расходов?', "Садик Государственный");

    do {
      sum += +prompt('Во сколько это обойдется?');
    }
    while (!isNumber(sum));

    // do {
    //   money = prompt('Ваш месячный доход?');
    // }
    // while (isNaN(money) || money.trim() === '' || money === null);

    // sum += +prompt('Во сколько это обойдется?');
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
  return mission / accumulatedMonth
};

let budgetDay = accumulatedMonth / 30;

console.log('Цель будет достигнута за ' + Math.ceil(getTargetMounth()) + ' месяца');

// task3-8

let getStatusIncome = function () {

  if (budgetDay > 1200) {
    console.log('У вас высокий уровень дохода');
  } else if (1200 > budgetDay && budgetDay > 600) {
    console.log('У вас средний уровень дохода');
  } else if (budgetDay < 600 && budgetDay > 0) {
    console.log('К сожалению у вас уровень дохода ниже среднего');
  } else if (budgetDay < 0) {
    console.log('Что то пошло не так');
  }
};

console.log(getStatusIncome);