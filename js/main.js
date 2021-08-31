'use strict';
// по 7 уроку надо просто идти по заданию и все делать как там требуется, тогда все будет хорошо, вот тоже смотри чуть(😉) доделал то, что прислал, ты просто иди по заданию и смотри как там написано и что в коде добавил я.Если не поймешь, то созвонимся тогда
const isNumber = function (n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

let money;

let start = function () {
    money = prompt('Ваш месячный доход?');

    while (!isNumber(money)) {
        money = prompt('Ваш месячный доход?');
    }
}

start();

let appData = {
    income: {},
    addIncome: [],
    expenses: {},
    addExpenses: [],
    deposit: false,
    mission: 50000,
    period: 3,
    budget: money,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    asking: function () {
        let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
        appData.addExpenses = addExpenses.toLowerCase().split(',');
        appData.deposit = confirm('Есть ли у вас депозит в банке?');
        for (let i = 0; i < 2; i++) {
            let a = prompt('Введите обязательную статью расходов?');
            appData.expenses[a] = +prompt('Во сколько это обойдется?');
        }
    },
    getExpensesMonth: function () {
        let sum = 0;
        for (let key in appData.expenses) {
            sum += appData.expenses[key];
        }
        appData.expensesaAmount = sum;
        return console.log('Сумма всех расходов за месяц ', appData.expensesaAmount);
    },
    getBudget: function () { 
        appData.budgetMonth = appData.budget - appData.expensesaAmount;
        appData.budgetDay = Math.floor(appData.budgetMonth / 30);
        return appData.budgetMonth;
    },
    getTargetMonth: function () {
        return appData.period=Math.ceil(appData.mission / appData.getBudget());
    },
    getStatusIncome: function () {
        if (appData.budgetMonth > 0) {
            console.log('Цель будет достигнута за : ', appData.period, ' месяцев');
            if (Math.floor(appData.budgetMonth / 30) <= 600 && Math.floor(appData.budgetMonth / 30) >= 0) {
                return console.log('К сожалению у вас уровень дохода ниже среднего');
            } else if (Math.floor(appData.budgetMonth / 30) && Math.floor(appData.budgetMonth / 30)) {
                return console.log('У вас средний уровень дохода');
            } else if (Math.floor(appData.budgetMonth / 30) > 1200) {
                return console.log('У вас высокий уровень дохода');
            } else {
                return console.log('Что то пошло не так');
            }
        }
        else {
            console.log('Нет средств для достижения цели');
        }
    }
}

appData.asking();
appData.getExpensesMonth();
appData.getBudget();
appData.getTargetMonth();
appData.getStatusIncome();

console.log('Наша программа включает в себя данные:');
for (let key in appData) {
    console.log( 'Ключ: ' + key + ' значение: ' + appData[key] );
  }