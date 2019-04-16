(function(){ 

  document.onreadystatechange = () => {

    if (document.readyState === 'complete') {
      
      let dot = document.querySelector('#dot');
      dot.style.transform = 'scale(1)';

        $('.padding > h1').css('top', $(window).height() / 2);
        $('.padding > h1').css('left', $(window).width() / 2);

        $('.preambule').css('top', $(window).height() / 2);
				$('.preambule').css('left', $(window).width() / 4);

				$('.navbar-toggle').addClass('puffIn');
				

				setTimeout(() => {
					$('.hello-part:nth-child(1) span:nth-child(1)').addClass('vanishIn');
				}, 700);
				setTimeout(() => {
					$('.hello-part:nth-child(1) span:nth-child(2)').addClass('vanishIn');

				}, 200);
				setTimeout(() => {
					$('.hello-part:nth-child(1) span:nth-child(3)').addClass('vanishIn');

				}, 500);
				setTimeout(() => {
					$('.hello-part:nth-child(2) span:nth-child(1)').addClass('vanishIn');
					
				}, 400);
				setTimeout(() => {
          $('.hello-part:nth-child(2) span:nth-child(2)').addClass('vanishIn');
					
				}, 600);
				setTimeout(() => {
          $('.hello-part:nth-child(2) span:nth-child(3)').addClass('vanishIn');					
				}, 300);

        setTimeout(function(){

					$('.page-color').css('width', '50%');
					$('.top-line').css('transform', 'scaleY(1)');
					$('.bottom-line').css('transform', 'scaleY(1)');
					$('.left-line').css('transform', 'scaleX(1)');
					$('.right-line').css('transform', 'scaleX(1)');

					$('.hello-scrolldown').css('top', $(window).height() - 120);
					$('.hello-scrolldown').css('left', $(window).width() / 2 -30);

        }, 300);
        
    }
  }

})();

$(function() {
	let eTop = $('body').offset().top; 
	$(document).scroll(function() { //when window is scrolled
	  	// console.log(eTop - $(window).scrollTop());
	  	if (eTop - $(window).scrollTop() < -200){
	  		$('.page-color').css('width', '100%');
	    	$('#hello-h1').css('left', '100%');

	    	$('.hello-scrolldown').css('opacity', '0');
	    	$('.hello-scrolldown').css('top', $(window).height());

	    	$('.scrolldown').css('opacity', '1');
	    	$('.scrolldown').css('top', $(window).height() - 120);

	    	$('.scrolltop').css('top', $(window).height() - 110);
        $('.scrolltop').css('left', $(window).width() - 200);
				$('.scrolltop').css('opacity', '0');

				$('.mskd').css('opacity', '1');

				$('.preambule p > strong').css('margin-bottom', '0');
				$('.preambule p > strong').css('opacity', '1');
				$('.preambule p > span').css('margin-bottom', '0');
				$('.preambule p > span').css('opacity', '1');
				$('.preambule span > i').css('width', '50px');
			
       	if(eTop - $(window).scrollTop() < -700){
					$('.scrolltop').css('opacity', '1');
	    		$('.scrolltop').css('top', $(window).height() - 200);
				}
	  	} else if(eTop - $(window).scrollTop() >= -400) {
	  		$('.page-color').css('width', '50%');
	  		$('#hello-h1').css('left', $(window).width() / 2);

	    	$('.hello-scrolldown').css('opacity', '1');
	    	$('.hello-scrolldown').css('top', $(window).height() - 120);

	    	$('.scrolldown').css('opacity', '0');
				$('.scrolldown').css('top', $(window).height());
				
				$('.mskd').css('opacity', '0');

				$('.preambule p > strong').css('margin-bottom', '-50px');
				$('.preambule p > strong').css('opacity', '0');
				$('.preambule p > span').css('margin-bottom', '-50px');
				$('.preambule p > span').css('opacity', '0');
				$('.preambule span > i').css('width', '0'); 
		}
		if((eTop - $(window).scrollTop() + $(window).height() * 1.75) < 0){
			$('#hello-h1, .preambule').css('display', 'none');
		}else if((eTop - $(window).scrollTop() + $(window).height() * 1.75) > 0){
			$('#hello-h1, .preambule').css('display', 'block');
		}
	});
});