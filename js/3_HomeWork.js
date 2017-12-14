'use strict';
function calculateIt(a,b,c) {
    if((typeof a === 'number' && typeof b === 'number' && typeof c === 'string')){
        switch (c) {
            case "+":
                return a + b;
            case "-":
                return a - b;
            case "*":
                return a * b;
            case "/":
                if(b !== 0){
                    return a/b;
                } else {
                    return "На ноль делить нельзя"
                }
        }
    }   else {return "Проверьте задали-ли Вы числа и поставили-ли Вы знак * / + -"}
}
console.log('значение',calculateIt(28,3,'*'));
//Рекурсия - рассмотрим на примере Факториалов в данном случае мы берем факториал от a, проверяем равен-ли он 0 или 1 т.к. они равны 1 или меньше 0, т.к. факториал от отрицательных величин не считается,
// мы-же факториал считаем=)))) если труе вернём 1, если фалсе возвращаем а*а-1, дальше опять проверка, и уже и т.д. пока а! не станет равынм 1
function factorials(a) {
    if((a === 0) || (a === 1) || (a < 0))
        return 1;
    else
        return (a*(factorials(a-1)));
}
console.log(factorials('5'));
//приступим к задаче она очень похожа на предыдущую=)

function sumOne(num) {
    if(num < 10) return  num;
    else
        return(num%10 + sumOne((num/10 - num%10/10)))
}
console.log(sumOne("11"));


//задача 3 Написать функцию, которая возвращает новую функцию, которая увеличивает/уменьшает переданное число на указанный при карировании шаг.

function platej(x) {
    return function mes9c(y) {
        return function getName(name) {
            console.log('Кредит на сумму',x*y+' БАКСОВ','для Вас уважаемый',name,'ОДОБРЕН')
        }
    }
}
platej('100')('11')('Глеб');

// function karruryem(nekariruem) {
//     array.prototype.slice.call(arguments,1);
//     return function () {
//         return nekariruem.apply(this,parametrs.concat(
//             array.prototype.slice.call(arguments,0)
//         ));
//     };
// };
// var kredit = function (what,how,rof,names,agree) {
//     console.log(what+how+rof+names+agree);
// };
// console.log(kredit('Куредит',
//     ,'Мужчина Ващ кредит на сумму','1400','Лох','Не подтверждён'))
