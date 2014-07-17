//mouse.js




var cursorImage;
if (navigator.appVersion.indexOf("Win") != -1){ cursorImage = "https://raw.githubusercontent.com/jackshepherd/Fake-Mouse-Cursor/master/vista.png"}
else{ /*(navigator.appVersion.indexOf("Mac") != -1) */cursorImage = "https://raw.githubusercontent.com/jackshepherd/Fake-Mouse-Cursor/master/osx.png"}



$('body').prepend('<img class="a"/>')
$('body').prepend('<img class="b"/>')
$('body').prepend('<img class="c"/>')
$('body').prepend('<img class="d"/>')
$('body').prepend('<img class="e"/>')

$('body').prepend('<img class="a1"/>')
$('body').prepend('<img class="b1"/>')
$('body').prepend('<img class="c1"/>')
$('body').prepend('<img class="d1"/>')
$('body').prepend('<img class="e1"/>')

$('body').prepend('<div class="foutre"></div>')


$('.a').attr('src', cursorImage)
$('.a').css('position', 'absolute')
$('.a').css('z-index', '50')

$('.b').attr('src', cursorImage)
$('.b').css('position', 'absolute')
$('.b').css('z-index', '50')

$('.c').attr('src', cursorImage)
$('.c').css('position', 'absolute')
$('.c').css('z-index', '50')

$('.d').attr('src', cursorImage)
$('.d').css('position', 'absolute')
$('.d').css('z-index', '50')

$('.e').attr('src', cursorImage)
$('.e').css('position', 'absolute')
$('.e').css('z-index', '50')

$('.a1').attr('src', cursorImage)
$('.a1').css('position', 'absolute')
$('.a1').css('z-index', '50')

$('.b1').attr('src', cursorImage)
$('.b1').css('position', 'absolute')
$('.b1').css('z-index', '50')

$('.c1').attr('src', cursorImage)
$('.c1').css('position', 'absolute')
$('.c1').css('z-index', '50')

$('.d1').attr('src', cursorImage)
$('.d1').css('position', 'absolute')
$('.d1').css('z-index', '50')

$('.e1').attr('src', cursorImage)
$('.e1').css('position', 'absolute')
$('.e1').css('z-index', '50')

$('.foutre').css('position', 'absolute')
$('.foutre').css('z-index', '50')



$(document).ready(function() {
    animateDiv($('.a'));
 animateDiv($('.b'));
  animateDiv($('.c'));
   animateDiv($('.d'));
    animateDiv($('.e'));

        animateDiv($('.a1'));
 animateDiv($('.b1'));
  animateDiv($('.c1'));
   animateDiv($('.d1'));
    animateDiv($('.e1'));
});

function makeNewPosition($body) {

    // Get viewport dimensions (remove the dimension of the div)
    var h = $body.height() - 50;
    var w = $body.width() - 50;

    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);

    return [nh, nw];

}

function animateDiv($target) {
    var newq = makeNewPosition($target.parent());
    var oldq = $target.offset();
    var speed = calcSpeed([oldq.top, oldq.left], newq);

    $target.animate({
        top: newq[0],
        left: newq[1]
    }, speed, function() {
        animateDiv($target);
    });

};

function calcSpeed(prev, next) {

    var x = Math.abs(prev[1] - next[1]);
    var y = Math.abs(prev[0] - next[0]);

    var greatest = x > y ? x : y;

    var speedModifier = 0.1;

    var speed = Math.ceil(greatest / speedModifier);

    return speed;

}