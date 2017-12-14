'use strict';
let now = new Date();
let minutes = now.getMinutes();
let color = minutes%5 >= 0 && minutes%5 < 3 ? "green" : minutes%5 === 3 ? "yellow" : "red";
console.log("ВАШ ЦВЕТ В ЧАСЕ:",color);
/*
Задача 1
Задать высоту, длину и ширину прямоугольного параллелепипеда и найти его площадь.
    Узнайте, что больше: ширина или высота и выведите информацию об этом в консоль.
*/

let sm = "см";
let aSide = 3;
let bSide = 5;
let cHight = 6;
console.log('Задача 1');
console.log('Ширина:', aSide+sm,'Длинна:', bSide+sm,'Высота', cHight+sm);
let area = 2 * (aSide * bSide + cHight * aSide + bSide * cHight);
let del = aSide > cHight ? "Да" : "Нет";
console.log('Ширина больше высоты?',del,'Площадь поверхности фигуры', 2 * area+sm);

/* Задача 2
    На садовом участке площадью 10 соток , разбили грядки 15 на 25 метров. Сколько м2 осталось незанято?
 */
/* В данном случае можно прямо в консоль вывести значиение areaSize%beds вместо дельта */
let areaSize = 1000;
let beds = 15 * 25;
let delta = areaSize%beds;
console.log('Задача 2 \nНа садовом участке площадью 10 соток , разбили грядки 15 на 25 метров. Сколько м2 осталось незанято?','\nОстаток в метрах', delta, '\nРазмер одной грядки', beds);


/* Задача 3
Задача 3
Найдите площадь овального кольца, полученного из овала площадью 15 дм2 вырезанием овала площадью 600 см2.
*/
let circleSize = 1500;
let circleCutter = 600;
console.log('Задача 3 \nНайдите площадь овального кольца, полученного из овала площадью 15 дм2 вырезанием овала площадью 600 см2.','\nПлощадь вырезки', circleSize - circleCutter);
/* Задача 4
 Задать 2 целочисленные переменные,
    если остаток от деления меньше или равен 4 ->
    вывести в консоль их сумму,
    иначе вывести разницу.
 */
let integerA = 2;
let integerB = 3;
let deltaA = integerA%integerB <= 4 ? integerA + integerB : integerA - integerB;
let deltaB = integerB%integerA <= 4 ? integerB + integerA : integerB - integerA;
    console.log('Задача 4 \nЗадать 2 целочисленные переменные, если остаток от деления меньше или равен 4 -> вывести в консоль их сумму, иначе вывести разницу',
        '\nСлучай Деления А на B',deltaA,
        '\nСлучай Деления B на А',deltaB,
        'При делении меньшего на большее, остатком является меньшее',
        '\nCумма или разность модулей', integerA%integerB <= 4 && integerB%integerA <= 4 ? integerA%integerB + integerB%integerA : integerA%integerB - integerB%integerA);