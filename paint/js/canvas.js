(function() {
	'use strict';
	var canvas = document.getElementsByTagName('canvas')[0];
	var eraseBtn = document.getElementById('paint_eraser');
	var handlers = {
		startDraw: function() {
			console.log('Рисуем белым');
			this.isDrawing = true;
		},
		endDraw: function() {
            console.log('Заканчиваем рисовать белым');
            this.isDrawing = false;
		},
		drawing: function(event) {
		    if (this.isDrawing) {
		        console.log('Рисуем');
                var ctx = canvas.getContext('2d');
		        ctx.beginPath();
		        ctx.fillStyle = document.getElementById('paint_brush_color').value;
		        ctx.arc(event.offsetX,event.offsetY,document.getElementById('paint_brush_size').value,0,Math.PI*2, false);
		        ctx.fill();
		    } else {

		    }
		}
	};
	eraseBtn.onclick = function(){
        console.log('Стираем');
        document.getElementById('paint_brush_color').value = '#ffffff';
    };
	canvas.addEventListener('mousedown', handlers.startDraw);
	canvas.addEventListener('mouseup', handlers.endDraw);
    canvas.addEventListener('mousemove', handlers.drawing);
	canvas.addEventListener('mouseout', handlers.endDraw);
}());

// if(this.isDrawing){}
// var context2 = canvas.getContext('2d');
// ctx.beginPath();
// ctx.fillStyle = 'rgb(255,255,255)';
// console.log('рисуем белым');
// ctx.arc(event2.offsetX,event2.offsetY,document.getElementById('paint_brush_size').value,0,Math.PI*2, false);
// ctx.fill();

//console.log('Цвет рисования теперь белый');
//document.getElementById('paint_brush_color').value = "rgb(255,255,255)";