'use strict';

// task1
let income = 'deposit';
let mission = 1000000;
let money = +prompt('Ваш месячный доход?', [10000]);
// let budgetMounth = 1000;
let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', ['Топливо', 'Обучение']);
let deposit = confirm('Есть ли у вас депозит в банке?');

let expenses1 = prompt('Введите обязательную статью расходов?', ['Еда']);

let amount1 = +prompt('Во сколько это обойдется?', [1000]);

let expenses2 = prompt('Введите обязательную статью расходов?', ['Вода']);

let amount2 = +prompt('Во сколько это обойдется?', [2000]);

let listOfExpenses = [expenses1, expenses2];
console.log('listOfExpenses: ', listOfExpenses);

let showTypeOf = function (data) {
  console.log(data, typeof (data));
};

// 4.1 // Объявить функцию getExpensesMonth.Функция возвращает сумму всех обязательных расходов за месяц
const sumAllExpenses = function getExpensesMonth(x, y) {
  return x + y;
};

console.log('sumAllExpenses: ', sumAllExpenses(amount1, amount2));

// 4.2 , 4.3  Объявить функцию getAccumulatedMonth.Функция возвращает Накопления за месяц(Доходы минус расходы)
const accumulatedMonth = function getAccumulatedMonth(a, b, c) {
  return a - b - c;
};

// task 4.4 Объявить функцию getTargetMonth.Подсчитывает за какой период будет достигнута цель, зная результат месячного накопления и возвращает результат

const daysToGoalAchive = function getTargetMonth(a, b) {
  return a / b;
};

// task 4.6 budgetDay высчитываем исходя из значения месячного накопления(accumulatedMonth)
let balance = accumulatedMonth(money, amount1, amount2);

let budgetDay = Math.floor(balance / 30);

// // task3-3
console.log('addExpenses: ', addExpenses);

// // task3-4
console.log('deposit :', typeof (deposit));

if (deposit) {
  console.log('deposit: ', 'true');
} else {
  console.log('deposit: ', 'false');
}

// task3-7
let period = Math.ceil(mission / balance);

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

// task4-2
// task4-3
console.log('balance: ', balance);
// task4-4
console.log('daysToGoalAchive: ', Math.ceil(daysToGoalAchive(mission, balance)));
// task4-6
console.log('budgetDay: ', budgetDay);


