'use strict';

let money = +prompt('Ваш бюджет на месяц?', '');
let time = prompt("Введите дату в формате YYYY-MM-DD", '');

let appData = {
    budget: money,
    timeData: time,
    expenses : {},
    optionalExpenses: {},
    income: [],
    savings: false
};

for (let i = 0; i < 2; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце", '');
    let b = prompt("Во сколько обойдётся?", '');

    if ( (typeof(a))=== 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
        console.log('Work!');
        appData.expenses[a] = b;
    } else {
        console.log('bad result');
        i--;
    }
}
appData.moneyPerDay = appData.budget / 30;
    
alert('Ежедненвый бюджет: ' + appData.moneyPerDay);

if(appData.moneyPerDay < 100) {
    console.log('Прожиточный минимум');
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log('Средний класс');
} else if (appData.moneyPerDay > 2000) {
    console.log('Высокий уровень достатка');
} else {
    console.log('Произошла ошибка');
    
}
