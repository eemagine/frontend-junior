$(document).ready(function() {
	orDivPosition();


	var owl = $(".slideshow");

	owl.owlCarousel({
items : 8, //10 items above 1000px browser width
itemsDesktop : [1000,8], //5 items between 1000px and 901px
itemsDesktopSmall : [900,7], // betweem 900px and 601px
itemsTablet: [600,4], //2 items between 600 and 0
itemsMobile : false // itemsMobile disabled - inherit from itemsTablet option
});

// Custom Navigation Events
$(".next").click(function(){
	owl.trigger('owl.next');
})
$(".prev").click(function(){
	owl.trigger('owl.prev');
})






});
$(window).resize(function() {
	orDivPosition();
});

function orDivPosition() {
	if ($(window).width() < 484) {
		var boxWidth = $('.images').width() * 0.5 - 45;
	}
	else {
		var boxWidth = $('.images').width() * 0.5 - 79;
	}
	
	$('.orDiv').css({
		left: boxWidth
	});
};

