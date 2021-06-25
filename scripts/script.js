'use strict';

const money = prompt(' Ваш месячный доход? ');
console.log('money: ', typeof Number(money));

const addExpenses = prompt(' Перечислите возможные расходы за рассчитываемый период через запятую ', 'Квартплата, проездной, кредит');
console.log('addExpenses: ', typeof addExpenses);

const deposit = confirm('Есть ли у вас депозит в банке?');
console.log('deposit: ', typeof deposit);

const expenses1 = prompt(' Введите обязательную статью расходов?');
console.log('expenses1: ', expenses1);
const amount1 = prompt(' Во сколько это обойдется?');
console.log('amount1: ', amount1);
const expenses2 = prompt(' Введите обязательную статью расходов?');
console.log('expenses2: ', expenses2);
const amount2 = prompt(' Во сколько это обойдется?');
console.log('amount2: ', amount2);