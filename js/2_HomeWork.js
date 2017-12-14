'use strict';

console.log('Задача 1 (while) \n' +
    'Задать количество тарелок и количество моющего средства. \n' +
    'Моющее средство расходуется из расчета 0,5 на одну тарелку. \n' +
    'В цикле выводить сколько моющего средства осталось после мытья каждой тарелки \n' +
    'В конце вывести, сколько тарелок осталось, когда моющее средство закончилось или наоборот.');
let iterationCount = 0;
let sredstvo = 5;
let tarelki = 25;
console.log('У нас есть', sredstvo,'литров средства','\nНужно вымыть', tarelki,'шт. тарелок','\n Моем');
// Цикл пока средства больше 0.5 он выполняется
while (sredstvo >= 0.5){
    if (tarelki <= 0) break;
    iterationCount++;
    sredstvo -= 0.5;
    tarelki -= 1;
    console.log('Остаток средства', sredstvo,'Тарелок вымыто',iterationCount,'\n Моем...',tarelki);
}
let message = tarelki < 2 * sredstvo ? "Все тарелки чистые, купите больше тарелок" : tarelki === 2 * sredstvo ? 'Посуда Вымыта, но на след раз средства больше нет' : "Средства больше нет, купите больше средства";
console.log('Результат помывки посуды:\n', message,);
if(message){
    console.log('Посуда вымыта','Остаток средства', sredstvo)
} else {
    console.log('Ещё нужно домыть', tarelki)
}

console.log('\nЗадача 2 \n' +
    'Создать таблицу соответствия между весом в фунтах и весом в килограммах для дначений от 1 до 10');
let kg = 1; //prompt('Введите количство кг');
let funt = 0.453 * kg;
let tableSize=10;
console.log(kg+'кг равно',funt+'фунтов');
while(tableSize>=2){
    tableSize--;
    kg++;
    console.log(kg+'Кг равно',kg*funt+' Фунтов');
}
console.log('\nЗадание 3'+'\nПосмотреть, как работают методы для работы с массивами: join, slice, indexOf/lastIndexOf, concat.\n' +
    'Разобрать по 1му примену на каждый из них. В субботу обсудим');
let arrayForMe = ['id','name','surname','age','gender'];
console.log('Задача 4'+'/nЕсть три вершины. Координаты вершин (x1, x2), (y1, y2), (z1, z2) заданы как целые числа. Нужно определить - является ли треугольник с заданными координатами прямоугольным.\n' +
    'В решении использовать только математические и логические операторы. Результат в консоль.\n' +
    'Обязательное условие: все вычисления производить только с целыми числами. Любой переход в дробные числа запрещен!');
let coorA = [3,0];
let coorB = [0,0];
let coorC = [0,5];
console.log('Координаты угла А',coorA[0]+'x', coorA[1]+'y');
console.log('Координаты угла B',coorB[0]+'x', coorB[1]+'y');
console.log('Координаты угда С',coorC[0]+'x', coorC[1]+'y');
let aSide = Math.pow(coorA[0] - coorB[0],2) + Math.pow(coorA[1]-coorB[1],2);
let bSide = Math.pow(coorB[0] - coorC[0],2) + Math.pow(coorB[1]-coorC[1],2);
let cSide = Math.pow(coorC[0] - coorA[0],2) + Math.pow(coorC[1]-coorA[1],2);
let array = [aSide,bSide,cSide];
console.log('Квадрат Длинны стороны AB', aSide);
console.log('Квадрат Длинны стороны BC', bSide);
console.log('Квадрат Длинны стороны CA', cSide);
console.log('Матрица сравнений', array);
function compareNumeric(a, b){
    if (a > b) return 1;
    if (a < b) return -1;
}
array.sort(compareNumeric);
array.reverse(); //Для удобства
console.log(typeof gipotinyza, typeof katet1, typeof katet2, typeof array[1]);
console.log('Гипотинуза, Катет-1, Катет-2', array);
if(array[0] === array[1] + array[2]){
    console.log('Прямоугольный')
} else {console.log('Не прямоугольный')};
//TODO: Надо узнать как расклеивать массив на строки и как перемножать массивные значения
//Пузырёк
let bubble = [1, 6, 10, 14, 19];
let counter = bubble.length-1;
for(var iter123 = 0; iter123 < counter;iter123++)
    for(let k = 0; k < counter-iter123; k++){
        if (bubble[k] > bubble[k+1]){
            let maximum = bubble[k];
            bubble[k] = bubble[k+1];
            bubble[k+1] = maximum;
        }
    };
console.log(bubble);

/*
if(aSide === bSide === cSide){
    console.log('Треугольник не прямоугольный, а равносторонний углы мужду сторонами 60 радусов');
} else if(aSide === bSide || bSide === cSide || cSide === aSide){
    console.log('Треугольник равносторонний');

} else if(aSide > bSide > cSide){

}
console.log('Для того чтобы не уйти в дроби сравниваем квадраты сторон, наша гипотинуза', gipotinyza);
let gipotinyza = aSide > bSide && aSide > cSide ? aSide : bSide > aSide && bSide > cSide ? bSide : aSide === bSide === cSide ? 'Треугольник равносторонний' : cSide;
*/



