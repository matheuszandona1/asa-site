$(".mundo_container").slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: true,
	infinite: false,
	prevArrow: $(".prev"),
	nextArrow: $(".next"),
	dots: true,
})

$(".slider-home").slick({
	infinite: false,
	autoplay: true,
	autoplaySpeed: 2500,
	arrows: true,
	prevArrow: $(".prev-h"),
	nextArrow: $(".next-h"),
	dots: true,
})

$("#phone").mask("(00) 00000-0000")
