'use strict';
class GameTable{ //Игровой стол
    constructor(size,player_name){
        // this.table = null; //id куда будем вставлять ячейки
        // this.cells = null; //id что будем вставлять
        this.size = size; // масштабируем игру к 2х2, 3х3, 4х4 и т.д. document.getElementById('table_size').value
        this.tableArray = [[0,0,0],[0,0,0],[0,0,0]]; //для удобства
        this.data = [];
        this.playersName1 = player_name;
        this.playersName2 = null;
        this.start = false;
    }
    //Метод 0 собираем инфу
    static activateGame(){
        window.addEventListener('load', function () {
            console.log('Object Game Created');
            const newGame = new GameTable();
            console.log(newGame.data);
            console.log('Current Setting',newGame);
            newGame.activateElement();
        });
    }
    activateElement(){
        let start = document.getElementById('start');
        start.addEventListener('click',this.collectGameSetting.bind(this));
        console.log('Elements Activated');
    }
    collectGameSetting(){
        let gameSetting = document.getElementById("game_settings");
        console.log(typeof gameSetting);
        console.log(gameSetting);
        let gameSet = gameSetting.getElementsByTagName("*");
        for(let i = 0; i < 4;i++){
            this.data.push(gameSet[i].value);
        }
        let size = this.data[3];
        let player_name = this.data[0];
        jQuery(gameSet).slideUp(1000,this.buildTable(size));
    }
    //Метод 1 разворачиваем поле
    distributeData(){
        // this.data.split('');
        console.log(this.data);
        console.log(typeof this.data.value);
    }
    buildTable(size){
        // for(let i = 0; i < size*size; i++){
        //     let table = document.getElementById('game_table');
        //     let cell = document.createElement('div');
        //     cell.setAttribute('value', '0');
        //     cell.classList.add('table-cell');
        //     table.appendChild(cell);
        // }
        console.log(this.data);
        switch(size){
            case '3':
                for(let i = 0; i < size*size; i++){
                    let table = document.getElementById('game_table');
                    let cell = document.createElement('div');
                    cell.setAttribute('value', '0');
                    cell.classList.add('table-cell');
                    table.appendChild(cell);
                    } break;
            case '5':
                for(let i = 0; i < size*size; i++){
                    let table = document.getElementById('game_table');
                    let cell = document.createElement('div');
                    cell.setAttribute('value', '0');
                    cell.classList.add('table-cell-5');
                    table.appendChild(cell);
                } break;
            case '10':
                for(let i = 0; i < size*size; i++){
                    let table = document.getElementById('game_table');
                    let cell = document.createElement('div');
                    cell.setAttribute('value', '0');
                    cell.classList.add('table-cell-10');
                    table.appendChild(cell);
                } break;
        }
        this.openConsole(true);
    }
    //Метод 2 пресуем поле в массив 3 x 3 со значениями 0 , дальше значения будут -1 - крестик 1 - нолик
    openConsole(x){
        if(x === true){
            let console = document.getElementById('status');
            let time = Date.now();
            console.value = time + " : " + 'Здравствуйте \n' + this.data[0];
        }
    }
}
GameTable.activateGame();
console.log(window.self);
// let contR = new GameTable();
// contR.activateElement();
// window.onload = contR.collectGameSetting();
// contR.buildTable('10');
// console.log(contR);
// console.log(contR.data);