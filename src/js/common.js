
$(window).resize(function (){
	$('.padding > h1').css('top', $(window).height() / 2);
	$('.padding > h1').css('left', $(window).width() / 2);
	$('.hello-scrolldown').css('top', $(window).height() - 120);
	$('.hello-scrolldown').css('left', $(window).width() / 2 -30);
	$('.preambule').css('top', $(window).height() / 2);
	$('.preambule').css('left', $(window).width() / 4);
});

$('.scrolltop').click(function(e) {
	e.preventDefault();
	$("html, body").animate({ scrollTop: 0 }, 4000);
	return false;
});

$(function() {  
    jQuery.scrollSpeed(75, 1000, );
});