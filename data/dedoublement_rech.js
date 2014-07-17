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
$.getJSON("http://api.wordnik.com/v4/word.json/"+newq+"/relatedWords?useCanonical=true&relationshipTypes=antonym&limitPerRelationshipType=1&api_key=df3777fee4629cc6110090f884908229adfa98f2bc6ed6b08", function(data) {

  //alert(data[0].words); // use data as a generic object 
  var MonMot = data[0].words;

window.open("https://www.google.fr/#q="+ MonMot +"","double fenetre de recherche","menubar=yes, status=yes, scrollbars=yes, menubar=yes");

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

