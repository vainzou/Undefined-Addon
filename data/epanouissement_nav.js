//popup.js
// ouvre tout els liens d'une fenetre.


var webs = [];
var largMax = window.screen.availWidth;
var hautMax = window.screen.availHeight; 
//
var quad = 3; // grille
var NbreWindows = 20;
var l = document.links;

var tabSit = document.URL;	//get current website

var i = 0;	// compteur
var posx;	//
var posy;	//
var widx = 0;	//
var heiy = 0;	//	
//



  for(var i=0; i<l.length; i++) {
    webs.push(l[i].href);
  }
/*

function OpenAllLinks(){

    for(var i=0; i<webs.length; i++) {

    	var attente = Math.floor(Math.random() * 3) + 1;

        window.open(webs[i], '_blank');
    }
  //redirige vers ce lien

}

OpenAllLinks();

*/
var attente;

var iS = 1;                     //  set your counter to 1

function myLoop () {           //  create a loop function
   setTimeout(function () {    //  call a 3s setTimeout when the loop is called



    window.open(webs[iS], '_blank');       //  your code here

	attente = Math.floor(Math.random() * 5000) + 100 ;



      iS++;                     //  increment the counter
      if (iS < webs.length) {            //  if the counter < 10, call the loop function
         myLoop();             //  ..  again which will trigger another 
      }                        //  ..  setTimeout()
   }, attente)
}

myLoop();                      //  start the loop