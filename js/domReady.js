// В своей сути, событие onDOMContentLoaded – простое, как пробка. Полностью создано DOM-дерево – и вот событие.
// Но с ним связан ряд существенных тонкостей.
(function () {
    function domReady() {
        console.log('DOM READY');
        alert('DOM READY but where my image?=((');
    }
    // function windowReady() {
    //     alert('Страница загружена полнотью');
    // }
    // window.addEventListener('onload', windowReady); не сработало
    document.addEventListener('DOMContentLoaded', domReady);
    window.onload = function() {
        alert('Страница загружена полнотью')
    };
    window.onbeforeunload = function () {
        return "не уходите пожалуйста"; // почитаю понял, что возвращает он только стандартное сообщение : Возможно, внесенные изменения не сохранятся.
    }
}());