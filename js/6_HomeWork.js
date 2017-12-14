(function () {
    'use strict';
    var inputZone = document.getElementById('input_text');
    // var inputValue = inputZone.value;
    console.log(inputZone);
    inputZone.onfocus = function () {
      inputZone.value = "";
    };
    var inputInfo = document.getElementById('text_area');
    inputZone.addEventListener('keyup',showInfo);
    function showInfo(e) {
        inputInfo.value = inputZone.value;
    }
}());
