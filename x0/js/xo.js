'use strict';
class TheGame{
    constructor(){
        this.start = true; //пока тру - приступаем к созданию игры иначе выдаём сообщение, false принемает сразу после первого хода
        this.round = true; //пока тру - будет проходить проверка поля
        this.end = false; //когда становится true выдаётся сообщение о статусе
        //Метод взаимодействия с playerOfGame status в зависимоти от this.end
    }
    [Symbol.iterator](){}
}
class PlayerOfGame{ // Конструктор игроков
    constructor(player_count,player_status){
        this.playerCounts = player_count; // количество игроков 0,1,2 0-играют 2 компа,1-комп vs player, 2 - player vs player
        this.playerName = null; // пусто для имени
        this.status = player_status; // 0 - его ход, 1 - ход опонента, -1 он проиграл
        this.mark = null; // -1 - он крестик, 1 - он нолик
    }
        //Метод 1 задать имя
        setName(){
        this.playerName = prompt('Введите имя','somename');
            return this.playerName;
        }
        //Метод 2 узнать состояние (строка 11)
        setStatus(){

        }
        //Метод 3 Назначить крестик или нолик
}
class GameTable{ //Игровой стол
    constructor(table_id,table_cell_id,how_many){
        this.table = table_id; //id куда будем вставлять ячейки
        this.cells = table_cell_id; //id что будем вставлять
        this.many = how_many * how_many; // масштабируем игру к 2х2, 3х3, 4х4 и т.д.
        this.tableArray = [[0,0,0],[0,0,0],[0,0,0]]; //для удобства
    }
    //Метод 1 разворачиваем поле
    //Метод 2 пресуем поле в массив 3 x 3 со значениями 0 , дальше значения будут -1 - крестик 1 - нолик
}
class AI{ //ИИ
    constructor(x){
    this.inject = x;// если true вводит в игру ИИ
    }
}

// let player1 = new PlayerOfGame();
// player1.setName();
// console.log(player1.toString());
// let player2 = new PlayerOfGame();
// player2.setName();
// console.log('players', player1);
// console.log('players', player2);