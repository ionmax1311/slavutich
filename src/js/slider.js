$(".poster-slider").slick({
	// autoplay: true,
	// autoplaySpeed: 1000,
	// asNavFor: ".slider-poster-nav",
	centerPadding: "60px",
	slidesToShow: 4,
	slidesToScroll: 1,
	dots: false,
	arrows: true,
	infinite: true,
	appendArrows: ".poster-slider-arrows",
	variableWidth: true,
	prevArrow:
		'<button id="prevPoster" type="button" class=" btn-slider-poster"><img src="img/arrow-sl-left.png" alt=""></button>',
	nextArrow:
		'<button id="nextPoster" type="button" class=" btn-slider-poster"><img src="img/arrow-sl-right.png" alt=""></button>',
	responsive: [
		{
			breakpoint: 1300,
			settings: {
				// arrows: true,

				// centerPadding: "40px",
				slidesToShow: 3,
			},
		},
		{
			breakpoint: 992,
			settings: {
				arrows: true,
				slidesToShow: 2,
			},
		},
	],
});

$(".reviews-slider").slick({
	// autoplay: true,
	// autoplaySpeed: 1000,
	// asNavFor: ".slider-poster-nav",

	slidesToShow: 2,
	slidesToScroll: 1,
	dots: false,
	arrows: true,
	infinite: true,
	appendArrows: ".reviews-slider-arrows",
	// appendArrows: ".slider-arrows",
	// prevArrow:
	// 	'<span class="slider-arrow"><img src="img/arrow-sl-left.png" alt=""></span>',
	// nextArrow:
	// 	'<span class="slider-arrow"><img src="img/arrow-sl-right.png" alt=""></span>',
	// centerMode: true,
	// centerPadding: "40%",
	// appendArrows: $(".slider-poster-arrow"),
	prevArrow:
		'<button id="prevReviews" type="button" class=" btn-slider-reviews"><img src="img/arrow-sl-left.png" alt=""></button>',
	nextArrow:
		'<button id="nextReviews" type="button" class=" btn-slider-reviews"><img src="img/arrow-sl-right.png" alt=""></button>',
	responsive: [
		{
			breakpoint: 767,
			settings: {
				// arrows: true,

				// centerPadding: "40px",
				slidesToShow: 1,
			},
		},
		// 	{
		// 		breakpoint: 992,
		// 		settings: {
		// 			arrows: true,
		// 			// centerMode: true,
		// 			// centerPadding: "40px",
		// 			slidesToShow: 2,
		// 		},
		// 	},
		// 	// {
		// 	// 	breakpoint: 480,
		// 	// 	settings: {
		// 	// 		arrows: true,
		// 	// 		// centerMode: true,
		// 	// 		// centerPadding: "20px",
		// 	// 		slidesToShow: 1,
		// 	// 	},
		// 	// },
	],
});

$(".slider-tab-nav ul").on(
	"afterChange",
	function (event, slick, currentSlide) {
		console.log("currentSlide", currentSlide);
		// console.log("slick", slick);
		event.preventDefault();
		if (currentSlide === 4) {
			console.log("Last slide");
			$("#btnNextTab").attr("disabled", "disabled");
		}
		if (currentSlide === 0) {
			console.log("first slide");
			$("#btnPreviousTab").attr("disabled", "disabled");
		}
	},
);
$(".slider-tab-nav ul").slick({
	accessibility: false,
	slidesToShow: 1,
	slidesToScroll: 1,
	dots: false,
	arrows: true,
	infinite: false,
	appendArrows: ".main-tabs-arrow",
	variableWidth: true,
	prevArrow:
		'<button class="btnPreviousTab"><img src="img/arrow-sl-left.png" alt="img" /></button>',
	nextArrow:
		'<button class="btnNextTab"><img src="img/arrow-sl-right.png" alt="img" /></button>',
});

$(".transfer-auto-slider").slick({
	// accessibility: false,
	slidesToShow: 1,
	slidesToScroll: 1,
	dots: false,
	arrows: true,
	infinite: true,
	appendArrows: ".transfer-nav-arrow",
	// variableWidth: true,
	prevArrow:
		'<button class="btnPreviousSl"><img src="img/arrow-sl-left.png" alt="img" /></button>',
	nextArrow:
		'<button class="btnNextSl"><img src="img/arrow-sl-right.png" alt="img" /></button>',
});
$("#nav-bus-tab").on("click", function () {
	$(".transfer-bus-slider").slick("slickGoTo", 2);
});
// $(document).ready(function () {
// 	// функция будет выполнена при полной загрузке страницы
// 	setTimeout(function () {
// 		// если нужно устанавливаем задержку выполнения действия
// 		$(".transfer-bus-slider .btnNextSl").click(); // имитируем нажатие кнопкой мишы на блок
// 		console.log("123");
// 	}, 500); // время задержки в милисикундах
// });
// $(window).on("load", function () {
// $(".transfer-bus-slider .item").slickNext();
// $(".transfer-bus-slider").slick("slickGoTo", 2);
$(".transfer-bus-slider").slick({
	// accessibility: false,
	// autoplay: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	dots: false,
	arrows: true,
	infinite: true,
	appendArrows: ".transfer-nav-arrow-bus",
	// variableWidth: true,
	prevArrow:
		'<button class="btnPreviousSl"><img src="img/arrow-sl-left.png" alt="img" /></button>',
	nextArrow:
		'<button class="btnNextSl"><img src="img/arrow-sl-right.png" alt="img" /></button>',
});
// });

$(".slider-rooms-1").slick({
	autoplay: true,
	autoplaySpeed: 5000,

	swipe: false,
	centerPadding: "60px",
	slidesToShow: 2,
	slidesToScroll: 1,
	dots: false,
	arrows: true,
	infinite: true,
	appendArrows: ".rooms-slider-arrows-1",
	variableWidth: true,
	prevArrow:
		'<button id="prevRooms1" type="button" class=" btn-slider-rooms-1"><img src="img/arrow-sl-left.png" alt=""></button>',
	nextArrow:
		'<button id="nextRooms1" type="button" class=" btn-slider-rooms-1"><img src="img/arrow-sl-right.png" alt=""></button>',
	// responsive: [
	// 	{
	// 		breakpoint: 1300,
	// 		settings: {

	// 			slidesToShow: 3,
	// 		},
	// 	},
	// 	{
	// 		breakpoint: 992,
	// 		settings: {
	// 			arrows: true,
	// 			slidesToShow: 2,
	// 		},
	// 	},
	// ],
});

$(".slider-rooms-2").slick({
	autoplay: true,
	autoplaySpeed: 6000,

	swipe: false,
	centerPadding: "60px",
	slidesToShow: 2,
	slidesToScroll: 1,
	dots: false,
	arrows: true,
	infinite: true,
	appendArrows: ".rooms-slider-arrows-2",
	variableWidth: true,
	prevArrow:
		'<button id="prevRooms2" type="button" class=" btn-slider-rooms-2"><img src="img/arrow-sl-left.png" alt=""></button>',
	nextArrow:
		'<button id="nextRooms2" type="button" class=" btn-slider-rooms-2"><img src="img/arrow-sl-right.png" alt=""></button>',
});

$(".slider-rooms-3").slick({
	autoplay: true,
	autoplaySpeed: 5000,

	swipe: false,
	centerPadding: "60px",
	slidesToShow: 2,
	slidesToScroll: 1,
	dots: false,
	arrows: true,
	infinite: true,
	appendArrows: ".rooms-slider-arrows-3",
	variableWidth: true,
	prevArrow:
		'<button id="prevRooms3" type="button" class=" btn-slider-rooms-3"><img src="img/arrow-sl-left.png" alt=""></button>',
	nextArrow:
		'<button id="nextRooms3" type="button" class=" btn-slider-rooms-3"><img src="img/arrow-sl-right.png" alt=""></button>',
});
$(".slider-rooms-4").slick({
	autoplay: true,
	autoplaySpeed: 6000,

	swipe: false,
	centerPadding: "60px",
	slidesToShow: 2,
	slidesToScroll: 1,
	dots: false,
	arrows: true,
	infinite: true,
	appendArrows: ".rooms-slider-arrows-4",
	variableWidth: true,
	prevArrow:
		'<button id="prevRooms4" type="button" class=" btn-slider-rooms-4"><img src="img/arrow-sl-left.png" alt=""></button>',
	nextArrow:
		'<button id="nextRooms4" type="button" class=" btn-slider-rooms-4"><img src="img/arrow-sl-right.png" alt=""></button>',
});
$(".slider-rooms-5").slick({
	autoplay: true,
	autoplaySpeed: 5000,

	swipe: false,
	centerPadding: "60px",
	slidesToShow: 2,
	slidesToScroll: 1,
	dots: false,
	arrows: true,
	infinite: true,
	appendArrows: ".rooms-slider-arrows-5",
	variableWidth: true,
	prevArrow:
		'<button id="prevRooms5" type="button" class=" btn-slider-rooms-5"><img src="img/arrow-sl-left.png" alt=""></button>',
	nextArrow:
		'<button id="nextRooms5" type="button" class=" btn-slider-rooms-5"><img src="img/arrow-sl-right.png" alt=""></button>',
});

$(".slider-rooms-6").slick({
	autoplay: true,
	autoplaySpeed: 6000,

	swipe: false,
	centerPadding: "60px",
	slidesToShow: 2,
	slidesToScroll: 1,
	dots: false,
	arrows: true,
	infinite: true,
	appendArrows: ".rooms-slider-arrows-6",
	variableWidth: true,
	prevArrow:
		'<button id="prevRooms6" type="button" class=" btn-slider-rooms-6"><img src="img/arrow-sl-left.png" alt=""></button>',
	nextArrow:
		'<button id="nextRooms6" type="button" class=" btn-slider-rooms-6"><img src="img/arrow-sl-right.png" alt=""></button>',
});

$(".slider-rooms-7").slick({
	autoplay: true,
	autoplaySpeed: 5000,

	swipe: false,
	centerPadding: "60px",
	slidesToShow: 2,
	slidesToScroll: 1,
	dots: false,
	arrows: true,
	infinite: true,
	appendArrows: ".rooms-slider-arrows-7",
	variableWidth: true,
	prevArrow:
		'<button id="prevRooms7" type="button" class=" btn-slider-rooms-7"><img src="img/arrow-sl-left.png" alt=""></button>',
	nextArrow:
		'<button id="nextRooms7" type="button" class=" btn-slider-rooms-7"><img src="img/arrow-sl-right.png" alt=""></button>',
});
