/* ======= Preloader ======= */

/* ======= Testinomial Slider ======= */
 $('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-nav'
});

$('.slider-nav').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  dots: false,
  centerMode: true,
  focusOnSelect: true,
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    }, 
  ]
}).on('beforeChange', function(event, slick, currentSlide, nextSlide){
  RemoveClass();
  AddClass();
});

$(".slick-prev").click(function(){
	RemoveClass();
	AddClass();
});

$(".slick-next").click(function(){
	RemoveClass();
	AddClass();
});

// On edge hit
$('.slider-nav').on('edge', function(event, slick, direction){
  	RemoveClass();
	AddClass();
});

// On swipe event	
$('.slider-nav').on('swipe', function(event, slick, direction){
	RemoveClass();
	AddClass();
});

$('.slider-nav').click(function(e) {
  RemoveClass();
	AddClass();
});


$( document ).ready(function() {	
	AddClass();
});

function RemoveClass() {
	$('div.slick-slide').removeClass('first');
	$('div.slick-slide').removeClass('second');
	$('div.slick-slide').removeClass('third');
	$('div.slick-slide').removeClass('fourth');
	$('div.slick-slide').removeClass('fifth');
	$('div.slick-slide').removeClass('sixth');
	$('div.slick-slide').removeClass('seven');
}

function AddClass() {
	$('.slick-track').find('.slick-center').addClass('third');
	$('.slick-center').prev("div.slick-active:first").addClass("first");
	$('.slick-center').prev("div.slick-active:first").prev("div.slick-active").addClass("second");
	$('.second').prev("div.slick-slide").addClass("sixth");
	$('.slick-center').next("div.slick-active:first").addClass("fourth");
	$('.slick-center').next("div.slick-active:first").next("div.slick-active").addClass("fifth");
	$('.fifth').next("div.slick-slide").addClass("seven");
}
$(document).ready(function($) {
	$(window).on('load',function(){
		$('#preloader').fadeOut('slow',function(){$(this).remove();});
	});
	/* ======= Scrolllt ======= */
	$.scrollIt({
		topOffset: -95, // offste (in px) for fixed top navigation        
	});

	/* ======= Accordian ======= */
	function toggleIcon(e) {
		$(e.target)
			.prev('.panel-heading')
			.find(".more-less")
			.toggleClass('glyphicon-plus glyphicon-minus');
	}
	$('.panel-group').on('hidden.bs.collapse', toggleIcon);
	$('.panel-group').on('shown.bs.collapse', toggleIcon);
});