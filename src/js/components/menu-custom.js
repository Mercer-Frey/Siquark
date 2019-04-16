$(function() {
  $('#menu').mouseover(function(){
    $('#left-line').css('width', '124px');
  });
  $('#menu').mouseout(function(){
    $('#left-line').css('width', '62px');
  });

  $('#menu').click(function(e) {
    e.preventDefault();
    $('body').toggleClass('show-Menu');
    $('#menu > .txt').toggle('');

    $('.icon').addClass('menu-cross');
    $('.left-line').addClass('left-active');
    $('body').addClass('hide-overflow');
    $('.main-color-menu').css('background-color', 'rgba(255, 88, 81, .9)');
    $('.main-color-menu').css('transform', 'scaleX(1)');
    $('.scrolltop, .scrolldown').addClass('hide-block');

    if($('body').hasClass('show-Menu')){
      $('#menu-content').css('transform', 'scaleX(1)');
      $('#menu-content').css('opacity', '1');

      $('.list-socials').css('padding', '0 60.5px 0 22.5px');
      $('.top-line').css('padding', '56.5px 124px 18.5px 15%');
      $('.bottom-line').css('height', '100px');

      $('.nav-item').css('transform', 'scaleY(1)');
      $('.nav-item').css('opacity', '1');

      $('.menu-container > .briefLink, .contact').css('transform', 'scaleX(1)');
      $('.menu-container > .briefLink, .contact').css('opacity', '1');

      $('#list-lang-menu, #list-socials-menu').css('transform', 'scaleX(1)');
      $('#list-lang-menu, #list-socials-menu').css('opacity', '1');

      $('.footer-wrapper').css('opacity', '0');
    }
    else{
      $('.nav-item, .menu-container > .contact').css('transform', 'scaleY(0)');
      $('.nav-item, .menu-container > .contact').css('opacity', '0');

      $('.menu-container > .briefLink').css('transform', 'scaleX(0)');
      $('.menu-container > .briefLink').css('opacity', '0');

      $('#list-lang-menu, #list-socials-menu').css('transform', 'scaleX(0)');
      $('#list-lang-menu, #list-socials-menu').css('opacity', '0');

      setTimeout(() => {
        $('.icon').removeClass('menu-cross');
        $('.left-line').removeClass('left-active');
        $('body').removeClass('hide-overflow');
        $('.main-color-menu').css('background-color', 'transparent');
        $('.main-color-menu').css('transform', 'scaleX(0)');
        $('.scrolltop, .scrolldown').removeClass('hide-block');

        $('#menu-content').css('transform', 'scaleX(0)');
        $('#menu-content').css('opacity', '0');

        $('.list-socials').css('padding', '0 22.5px');
        $('.top-line').css('padding', '18.5px 62px');
        $('.bottom-line').css('height', '62px');

      $('.footer-wrapper').css('opacity', '1');

      }, 700);
    }
  });
});