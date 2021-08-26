'use strict';

let isNumber = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

let money;

let start = function () {

  do {
    money = prompt('Ваш месячный доход?', 10000);
  }

  while (isNaN(money) || money.trim() === '' || money === null);

};

start();

let appData = {
  budget: money,
  income: {},
  addIcome: [],
  expenses: {},
  addExpenses: [],
  deposit: false,
  mission: 50000,
  period: 3,
  asking: function () {
    let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', ['Топливо', 'Обучение']);
        appData.addExpenses = addExpenses.toLowerCase().split(' , ');
        appData.deposit = confirm('Есть ли у вас депозит в банке?');
  },
  budgetDay: 0,
  budgetMonth: 0,
  expensesMonth: 0,
  getExpensesMonth: function () {
    let sum = 0;

    for (let i = 0; i < 2; i++) {
      appData.expenses[i] = prompt('Введите обязательную статью расходов?', "Садик Государственный");

      sum += +prompt('Во сколько это обойдется?');

      while (!isNumber(sum)) {
        sum = +prompt('Во сколько это обойдется?');
      }
    }

    console.log(appData.expenses);

    return sum;
  },

  getAccumulatedMonth: function () {
    return money - expensesAmount;
  },

  getTargetMonth: function() {
    if (appData.getAccumulatedMonth <= 0) {
      console.log('Цель HE будет достигнута');
    } else {
      return appData.mission / appData.getAccumulatedMonth;
    }
  },

  getStatusIncome: function() {
    if (appData.budgetDay > 1200) {
      console.log('У вас высокий уровень дохода');
    } else if (1200 > appData.budgetDay && appData.budgetDay > 600) {
      console.log('У вас средний уровень дохода');
    } else if (appData.budgetDay < 600 && appData.budgetDay > 0) {
      console.log('К сожалению у вас уровень дохода ниже среднего');
    } else if (appData.budgetDay <= 0) {
      console.log('budgetDay: ' + 'Что то пошло не так');
    }
  }
};

  console.log('budget : ' + appData['budget']);

let expenses = [];

let isEmpty = function (str) {
  return (!str || 0 === str.length);
};

let expensesAmount = appData.getExpensesMonth();

console.log('расходы за месяц: ' + expensesAmount);



let accumulatedMonth = appData.getAccumulatedMounth;

// let getTargetMounth = function () {
//   // if (accumulatedMonth <= 0) {
//   //   console.log('Цель HE будет достигнута');
//   // } else {
//   //   return appData.mission / accumulatedMonth;
//   // }
// };

if (appData.getTargetMounth <= 0) {
  console.log('Цель не будет достигнута');
} else {
  console.log('getTargetMounth: ' + appData.getTargetMounth);
}

console.log('Цель будет достигнута за ' + Math.ceil(appData.getTargetMounth) + ' месяца');

let budgetDay = appData.getAccumulatedMounth / 30;

console.log(appData.getStatusIncome);