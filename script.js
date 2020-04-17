'use strict';

let money = prompt("Ваш бюджет на месяц?", "0"),
    time = prompt("Введите дату в формате YYYY-MM-DD", "YYYY-MM-DD");


let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

appData.expenses[prompt("Введите обязательную статью расходов в этом месяце", "")] =
    prompt("Во сколько обойдется?", "");

console.log(appData);
alert(appData.budget / 30);