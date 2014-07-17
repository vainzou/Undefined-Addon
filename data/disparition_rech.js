///


//

var count = Math.floor(Math.random() * 10) + 5;

var attente = 1000;

var iS = 1;                     //  set your counter to 1

function myLoop () {           //  create a loop function
   setTimeout(function () {  
     //  call a 3s setTimeout when the loop is called
		$.getJSON("http://api.wordnik.com:80/v4/words.json/randomWord?hasDictionaryDef=true&minCorpusCount=0&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=3&maxLength=-1&api_key=df3777fee4629cc6110090f884908229adfa98f2bc6ed6b08", function(data) {


		  //alert(data.word);
		 var MonMot = data.word;

		 window.open("https://www.google.fr/#q="+ MonMot +"","double fenetre de recherche","menubar=yes, status=yes, scrollbars=yes, menubar=yes");

		});
	//attente = Math.floor(Math.random() * 5000) + 100 ;

      iS++;                     //  increment the counter
      if (iS < count) {            //  if the counter < 10, call the loop function
         myLoop();             //  ..  again which will trigger another 
      }                        //  ..  setTimeout()
   }, attente)
}

myLoop();                      //  start the loop