
var longueur = history.length;

var randHis =  Math.floor((Math.random() * longueur) + 1); 

//alert(randHis);

window.history.go(-randHis)
//window.open(""+jevaisyaller+"","_blank","toolbar=yes, scrollbars=yes, resizable=yes");

