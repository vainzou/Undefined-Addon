//

var currentUrl = document.URL;
var p = getUrlVars(currentUrl);
var q = p.q;

var objectif = "antonym";

// antonym/random/random list/ synonymesList / minimiser/ Duperie/Ponctualité/

//alert(p);
//alert(q);

var newq = q.substr(0, q.length-3); 
//alert(newq);


   ///////////////////WORDNIK///////////
$.getJSON("http://api.wordnik.com:80/v4/word.json/"+newq+"/relatedWords?useCanonical=false&relationshipTypes=synonym&limitPerRelationshipType=10&api_key=df3777fee4629cc6110090f884908229adfa98f2bc6ed6b08", function(data) {
    

    var syno = data[0].words;
    var synostr=syno.toString();
    var synoArray = synostr.split(",");
    //alert(synoArray.length);

/*
  for (var i = 0; i < synoArray.length; i++) {
  
      //alert(synoArray[i]); // use data as a generic object 
    window.open("https://www.google.fr/#q="+ synoArray[i] +"","double fenetre de recherche","menubar=yes, status=yes, scrollbars=yes, menubar=yes");

  };
*/

  

var attente;

var iS = 1;                     //  set your counter to 1

function myLoop () {           //  create a loop function
   setTimeout(function () {    //  call a 3s setTimeout when the loop is called

    window.open("https://www.google.fr/#q="+synoArray[iS] +"", '_blank');       //  your code here

  attente = Math.floor(Math.random() * 5000) + 100 ;



      iS++;                     //  increment the counter
      if (iS < synoArray.length) {            //  if the counter < 10, call the loop function
         myLoop();             //  ..  again which will trigger another 
      }                        //  ..  setTimeout()
   }, attente)
}

myLoop();     

});


   //////////////////WORDNIK/////////////

function getUrlVars(href)
{
    var vars = [], hash;
    var hashes = href.slice(href.indexOf('?') + 1).split('?'); // marche pas pour tout les URL

    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}

