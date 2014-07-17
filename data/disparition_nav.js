///

var site = "http://google.com, http://facebook.com, http://youtube.com, http://yahoo.com, http://baidu.com, http://wikipedia.org, http://qq.com, http://live.com, http://taobao.com, http://linkedin.com, http://sina.com.cn, http://twitter.com, http://amazon.com, http://hao123.com, http://google.co.in, http://blogspot.com, http://weibo.com, http://163.com, http://wordpress.com, http://yahoo.co.jp, http://bing.com, http://tmall.com, http://360.cn, http://yandex.ru, http://vk.com, http://ebay.com, http://google.de, http://babylon.com, http://msn.com, http://google.co.uk, http://soso.com, http://google.fr, http://tumblr.com, http://googleusercontent.com, http://mail.ru, http://pinterest.com, http://google.co.jp, http://apple.com, http://google.com.br, http://microsoft.com, http://PayPal.com, http://google.ru, http://google.es, http://google.it, http://xhamster.com, http://fc2.com, http://blogger.com, http://imdb.com, http://craigslist.org, http://xvideos.com, http://ask.com, http://sohu.com, http://conduit.com, http://bbc.co.uk, http://go.com, http://amazon.co.jp, http://google.com.mx, http://odnoklassniki.ru, http://google.ca, http://youku.com, http://livejasmin.com, http://amazon.de, http://adobe.com, http://flickr.com, http://avg.com, http://ifeng.com, http://t.co, http://pornhub.com, http://aol.com, http://rakuten.co.jp, http://cnn.com, http://thepiratebay.se, http://mywebsearch.com, http://ebay.de, http://amazon.co.uk, http://adf.ly, http://alibaba.com, http://espn.go.com, http://blogspot.in, http://google.com.tr, http://redtube.com, http://google.co.id, http://instagram.com, http://huffingtonpost.com, http://alipay.com, http://about.com, http://stackoverflow.com, http://sogou.com, http://google.com.au, http://livedoor.com, http://360buy.com, http://ebay.co.uk, http://netflix.com, http://dailymotion.com, http://imgur.com, http://zedo.com, http://google.pl, http://uol.com.br";

var siteArray = site.split(",");

//alert(randSite);

var count = Math.floor(Math.random() * 10) + 5;


var attente;

var iS = 1;                     //  set your counter to 1

function myLoop () {           //  create a loop function
   setTimeout(function () {    //  call a 3s setTimeout when the loop is called

	var randSite = siteArray[Math.floor(Math.random() * siteArray.length)];
	window.open(randSite,'_blank');
	attente = Math.floor(Math.random() * 5000) + 100 ;

      iS++;                     //  increment the counter
      if (iS < count) {            //  if the counter < 10, call the loop function
         myLoop();             //  ..  again which will trigger another 
      }                        //  ..  setTimeout()
   }, attente)
}

myLoop();                      //  start the loop