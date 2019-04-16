$(function() {
  let bottomOffset = $(window).height()+62;

  let h2Creativity = $('#h2Creativity').offset().top - bottomOffset; 
  let h2Digital = $('#h2Digital').offset().top - bottomOffset; 
  let h2Ideas = $('#h2Ideas').offset().top - bottomOffset; 
  let skills = $('#skills').offset().top - bottomOffset; 
  let projectItem = $('#projectItem').offset().top - bottomOffset; 
  let visuelIdeas = $('#visuelIdeas').offset().top - bottomOffset; 
  
  $(window).scroll(function() { //when window is scrolled
    // console.log(h2Digital - $(window).scrollTop());
    if(h2Creativity - $(window).scrollTop() <= 150){
      $('#h2Creativity').addClass('vanishIn');
      $('#h2Creativity').css('opacity', '1');
    }
    if(h2Digital - $(window).scrollTop() <= 150){
      $('#h2Digital').addClass('vanishIn');
      $('#h2Digital').css('opacity', '1');
    }
    if(h2Ideas - $(window).scrollTop() <= 150){
      $('#h2Ideas').addClass('vanishIn');
      $('#h2Ideas').css('opacity', '1');
    }
    if(skills - $(window).scrollTop() <= 150){
      $('#skills').addClass('slideDownReturn');
      $('#skills').css('opacity', '1');
    }
    if(projectItem - $(window).scrollTop() <= 150){
      $('#projectItem').addClass('slideDownReturn');
      $('#projectItem').css('opacity', '1');
    }
    if(visuelIdeas - $(window).scrollTop() <= 50){
      $('#visuelIdeas').addClass('slideDownReturn');
      $('#visuelIdeas').css('opacity', '1');
    }
  });
});
