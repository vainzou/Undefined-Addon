
var webs = [];
var unwebs;
var l = document.links;

  
  //redirige vers ce lien

for(var i=0; i<l.length; i++) {
    webs.push(l[i].href);
  }

unwebs = webs[Math.floor(Math.random()*webs.length)];



$( "a" ).click(function() {

//alert(unwebs);
//window.location.href = unwebs;
window.open(""+unwebs+"","_blank","toolbar=yes, scrollbars=yes, resizable=yes");

//penOneLinks();

});