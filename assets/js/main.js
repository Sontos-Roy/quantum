new WOW().init();

$(document).ready(function(){
  $('#side-toggler').on('click', function(){
    $('.sidebar').addClass('sactive');
  });
  $('#sidebar-dismiss').on('click', function(){
    $('.sidebar').removeClass('sactive');
  });
})