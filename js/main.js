'use strict';

// task1
var money;
money = 1000;
var income;
income = 'deposit';
var addExpenses;
addExpenses = 'taxi , courses , restourant';
var deposit;
deposit = true;
var mission;
mission = 1000000;
var period;
period = 12;

var budgetMounth = 1000;
var budgetDay = budgetMounth / 30;
console.log('budgetDay: ', budgetDay);

// task2-1
console.log(typeof (money));
console.log(typeof (income));
console.log(typeof (deposit));

// task2-2
console.log(addExpenses.length);

// task2-3
console.log('Период равен ' + period + ' месяцев');
console.log('Цель заработать ' + mission + ' гривен');

// task2-4
console.log(addExpenses.toLowerCase().split(','));

// task2-5
console.log(Math.round(budgetDay));

// task3-2
var money = prompt('Ваш месячный доход?');
console.log(money);

// // task3-3
var addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
console.log(addExpenses);

// // task3-4
var deposit = confirm('Есть ли у вас депозит в банке?');
console.log(typeof(deposit));

if (deposit) {
  console.log('true');
} else {
  console.log('false');
}

// task3-5
var expenses1 = prompt('Введите обязательную статью расходов?');
console.log('expenses1: ', expenses1);

var amount1 = prompt('Во сколько это обойдется?');
console.log('amount1: ', amount1);

var expenses2 = prompt('Введите обязательную статью расходов?');
console.log('expenses2: ', expenses2);

var amount2 = prompt('Во сколько это обойдется?');
console.log('amount2: ', amount2);

// task3-6
var budgetMonth = +amount1 + (+amount2);
console.log('budgetMonth: ', budgetMonth);

// task3-7
var period = Math.ceil(mission / budgetMonth);
console.log('period: ', period);

// task3-8
var budgetDay = Math.floor(budgetMonth / 30);
console.log('budgetDay: ', budgetDay);

// task3-8
if (budgetDay > 1200) {
  console.log('У вас высокий уровень дохода');
} else if (1200 > budgetDay && budgetDay > 600) {
  console.log('У вас средний уровень дохода');
} else if (budgetDay < 600 && budgetDay > 0) {
  console.log('К сожалению у вас уровень дохода ниже среднего');
} else if (budgetDay < 0) {
  console.log('Что то пошло не так');
}
