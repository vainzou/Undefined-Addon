//

///////////////////WORDNIK///////////

$.getJSON("http://api.wordnik.com:80/v4/words.json/randomWord?hasDictionaryDef=true&minCorpusCount=0&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=3&maxLength=-1&api_key=df3777fee4629cc6110090f884908229adfa98f2bc6ed6b08", function(data) {


  //alert(data.word);
 var MonMot = data.word;

 window.open("https://www.google.fr/#q="+ MonMot +"","double fenetre de recherche","menubar=yes, status=yes, scrollbars=yes, menubar=yes");

});


