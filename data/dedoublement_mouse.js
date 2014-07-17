//mouse.js
// duplication de la souris dans une fenetre et affichage d'une parralléle.
// ne fonctionne pas => pas de refresh a priori, reste sur 0,0.

//$(document).ready(function(){

//var tab=new Array("Pommes", "Poires", "Ananas", "Cerise");
var FposX = new Array(); // tableau de la position de la souris X
var FposY = new Array(); // tableau de la position de la souris X
var compteurPos = 0; // compteur de push
var Mposx;
var Mposy;

var windowW = $(window).width(); //retrieve current window width
var windowH = $(window).height(); //retrieve current window height

//chiffre en -100 et 100,
var randomNumberX = Math.floor(Math.random() * 201) - 100;
var randomNumberY = Math.floor(Math.random() * 201) - 100;


var cursorImage;
if (navigator.appVersion.indexOf("Win") != -1){ cursorImage = "https://raw.githubusercontent.com/jackshepherd/Fake-Mouse-Cursor/master/vista.png"}
else{ /*(navigator.appVersion.indexOf("Mac") != -1) */cursorImage = "https://raw.githubusercontent.com/jackshepherd/Fake-Mouse-Cursor/master/osx.png"}



$('body').prepend('<img id="cursor"/>')
$('#cursor').attr('src', cursorImage)
$('#cursor').css('position', 'absolute')
$('#cursor').css('z-index', '50')

$(document).bind('mousemove', function (e) {


//mirroir
   Mposx = windowW - e.pageX ;
   Mposy = windowH - e.pageY;

/*
    Mposx = e.pageX;
    Mposy = e.pageY;
*/
    FposX.push(Mposx);
    FposY.push(Mposy);

    // console.log(pos[pos.length - 1], pos.length);


    $('#cursor').css({
        left: FposX[FposX.length - 50],
        top: FposY[FposY.length - 20],
    });


});

//})