new WOW().init();

$(document).ready(function(){
  $('#side-toggler').on('click', function(){
    $('.sidebar').addClass('sactive');
  });
  $('#sidebar-dismiss').on('click', function(){
    $('.sidebar').removeClass('sactive');
  });
})
$('.slider-pic').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  draggable: false,
  centerMode: false,
  arrows: false,
  fade: true,
  autoplay:true,
  asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
  slidesToShow: 4,
  slidesToScroll: 0,
  centerMode: false,
  asNavFor: '.slider-pic',
  dots: true,
  centerMode: true,
  focusOnSelect: true,
  infinite: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    }
  ]
});
	