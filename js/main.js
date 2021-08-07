'use strict';

// task1
var money = 10000;
var income = 'deposit';
var addExpenses = 'taxi , courses , restourant';
var deposit = true;
var mission = 1000000;
var period = 12;

// var budgetMounth = 1000;
var budgetDay = Number(balance / 30);
var money = +prompt('Ваш месячный доход?', [10000]);
var addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', ['Топливо', 'Обучение']);
var deposit = confirm('Есть ли у вас депозит в банке?');

var expenses1 = prompt('Введите обязательную статью расходов?', ['pivo']);

var amount1 = +prompt('Во сколько это обойдется?', [1000]);
console.log('amount1: ', typeof amount1);

var expenses2 = prompt('Введите обязательную статью расходов?', ['voda']);

var amount2 = +prompt('Во сколько это обойдется?', [2000]);

var expenses = [expenses1, expenses2];
console.log('expenses: ', expenses);

var showTypeOf = function (data) {
  console.log(data, typeof (data));
};

const sum = function getExpensesMonth(x, y) {
  return x + y;
};
var expensesMonth = sum(amount1, amount2);
const accumulatedMonth = function getAccumulatedMonth(a, b, c) {
  return a - b - c;
};
var balance = accumulatedMonth(money, amount1, amount2);
const goalAchive = function getTargetMonth(a, b) {
  return a / b;
};
var result = Math.ceil(goalAchive(mission, balance));
var budgetDay = Math.floor(balance / 30);

// task2-5
// console.log(Math.round(budgetDay));

// task3-2
// console.log(typeof +money);

// // task3-3
console.log('addExpenses: ', addExpenses);

// // task3-4
console.log(typeof (deposit));

if (deposit) {
  console.log('deposit: ', 'true');
} else {
  console.log('deposit: ', 'false');
}

// task3-5
// console.log('amount2: ', typeof amount2);

// task3-6  deleted. 
// var budgetMonth = +amount1 + (+amount2);
// console.log('budgetMonth: ', budgetMonth);

// task3-7
var period = Math.ceil(mission / balance);
console.log('period: ', period);

// task3-8  deleted. I count it differently in // task4-6
// var budgetDay = Math.floor(budgetMonth / 30);
// console.log('budgetDay: ', budgetDay);

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

// task4-1
console.log('res: ', expensesMonth);

// task4-2
// task4-3
console.log('balance: ', balance);
// task4-4
console.log('result: ', result);
// task4-6
console.log('budgetDay: ', budgetDay);

showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);