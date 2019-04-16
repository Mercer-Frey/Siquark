  $(function() {
  $(window).scroll(function(){
    let st = $(this).scrollTop();
    $('.video-container > img').css({ 
      "transform": "scale(1.2) translate(0%, "+ (-30 + (st/60)) + "%)"
    });
    $('.project-visual > img').css({ 
      "transform": "translate(0%, "+ (-130 + (st/50)) + "%)"
    });
    $('.skills-container').css({ 
      "transform": "translate(0%, "+ (35 + -(st/80)) + "%)"
    });
    $('.visuel-container').css({ 
      "transform": "translate(0%, "+ (-35 + (st/90)) + "%)"
    });
    $('.visuel-container > .animated > img').css({ 
      "transform": "translate(0%, "+ (-90 + (st/80)) + "%)"
    });
    $('.h2-wrapper-crearivity').css({ 
      "transform": "translate(0%, "+ (-50 + (st/40)) + "%)"
    });
    $('.h2-wrapper-digital').css({ 
      "transform": "translate(0%, "+ (-50 + (st/40)) + "%)"
    });
    $('.h2-wrapper-ideas').css({ 
      "transform": "translate(0%, "+ (-198 + (st/20)) + "%)"
    });
  });
});
