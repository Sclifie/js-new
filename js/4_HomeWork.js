(function () {
    'use strict';
    var cityI = {};
    cityI.name = "SanPt";
    cityI.populations = 232130;
    cityI.mayor = "Sclif";
    console.log(cityI.populations);
    var cityII = {
        cityname: "SanAntonio",
        populations: 1244430,
        mayor: "SclifiE"
    };
    console.log(cityII.populations);
    cityI.changePop = function(){   //одну десятую часть
        var delta = this.populations/10;
        this.populations +=delta;
        cityII.populations -=delta;
    };
    cityI.changePop(213);
    console.log(cityII.populations, cityI.populations);

    function takeMeMayorOf(x) {
            console.log(x.mayor);
    }
    takeMeMayorOf(cityII);
    var president = {};
    president.newMayor = function(cityname) {
        cityname.mayor = "newMayor";
    };
    president.newMayor(cityI);
    console.log(cityI.mayor);

    // var string = 'ПриветПриветПривет';
    // var stringOf = string.indexOf('Привет');
    //
    function searchPosition(string,stringOf) {
        for(var position = 0;position < string.length; position++){
            var found = string.indexOf(stringOf,position);
            console.log(found); // как избавится он -1?
        }
    }
    searchPosition("ololollololool","ol");
        })();
