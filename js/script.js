
$('.slider').slick({
	autoplay: false,
	infinite: true,
	slidesToShow: 2,
	slidesToScroll: 2,
	prevArrow: '<div class="slick-prev"></div>',
	nextArrow: '<div class="slick-next"></div>',
	dots: true,

	responsive: [
		{
		breakpoint: 767,
		settings: {
			slidesToShow: 1,
			slidesToScroll: 1,
		}
		}
	]
});