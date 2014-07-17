//onescript.js
var webs = [];
var l = document.links;
var unwebs;
var scrollenght = 400;

function browse(){

	// cherche tout les liens et les mets dans un tableau
	for(var i=0; i<l.length; i++) {
	  webs.push(l[i].href);
	}

	//choisis un lien au pif dans le tableau
	unwebs = webs[Math.floor(Math.random()*webs.length)];

//// scroll machine // sacadé ne marche pas probléme avec le OnReady
//$('html, body').animate({scrollTop: '+='+scrollenght+'px'}, 800);

}


function clickLink(){

	//redirige vers ce lien
	window.location.href = unwebs ;

	console.debug(unwebs);
	 


}


$(document).ready(function(){

	browse();
	clickLink();
});
