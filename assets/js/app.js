$(function() {
	/*Menu nav toggle*/
	$("#navToggle").on("click", function(event) {
		event.preventDefault();

		$(this).toggleClass("active");
		$("#nav").toggleClass("active");
	})


	/*Slider*/
	$(".slider").slick({
		infinite: true,
		fade: false,
		slidesToShow: 3,
		slidesToScroll: 1,
		prevArrow: $('.arrow-prev'),
		nextArrow: $('.arrow-next')
	})


})