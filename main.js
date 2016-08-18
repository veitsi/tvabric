var pic = new Image();  // Создание нового объекта изображения
pic.src = 'https://hsto.org/storage/habrastock/i/nocopypast.png';
pic.src='yuliana-orig.png';


var canvas=document.getElementById("canvas");
var ctx  = canvas.getContext('2d');

pic.onload = function() {    // Событие onLoad, ждём момента пока загрузится изображение
    ctx.drawImage(pic, 0, 0);  // Рисуем изображение от точки с координатами 0, 0
    ctx.fillRect(200, 200, 80, 80);
};

