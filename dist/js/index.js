$(".about-tabs .nav-link").click((e) => {
	let curTextLink = $(e.target).text();

	$(".hero h1").text(curTextLink);
});


var map;
var marker;
var customMarker = "../img/pin.png";
var myLatLng = { lat: 44.681901, lng: 34.414313 };
function initMap() {
	map = new google.maps.Map(document.getElementById("map"), {
		center: myLatLng,
		zoom: 14,
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		styles: [
			{
				featureType: "water",
				stylers: [
					{
						visibility: "on",
					},
					{
						color: "#b5cbe4",
					},
				],
			},
			{
				featureType: "landscape",
				stylers: [
					{
						color: "#efefef",
					},
				],
			},
			{
				featureType: "road.highway",
				elementType: "geometry",
				stylers: [
					{
						color: "#83a5b0",
					},
				],
			},
			{
				featureType: "road.arterial",
				elementType: "geometry",
				stylers: [
					{
						color: "#bdcdd3",
					},
				],
			},
			{
				featureType: "road.local",
				elementType: "geometry",
				stylers: [
					{
						color: "#ffffff",
					},
				],
			},
			{
				featureType: "poi.park",
				elementType: "geometry",
				stylers: [
					{
						color: "#e3eed3",
					},
				],
			},
			{
				featureType: "administrative",
				stylers: [
					{
						visibility: "on",
					},
					{
						lightness: 33,
					},
				],
			},
			{
				featureType: "road",
			},
			{
				featureType: "poi.park",
				elementType: "labels",
				stylers: [
					{
						visibility: "on",
					},
					{
						lightness: 20,
					},
				],
			},
			{},
			{
				featureType: "road",
				stylers: [
					{
						lightness: 20,
					},
				],
			},
		],
	});
	marker = new google.maps.Marker({
		position: myLatLng,
		icon: customMarker,
		title: "Санаторий «Славутич»",
		map: map,
	});
}

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

$(".main-tabs .nav-tabs").click((e) => {
	$(".tab-img").toggleClass("active");
});

$(".main-tabs .nav-item").click((e, i) => {
	$(".main-tabs .nav-item.arrow").toggleClass("arrow");
	e.currentTarget.classList.add("arrow");

	let activeTabLeft = document.querySelector(".nav-item.arrow").offsetLeft;

	console.log("123", activeTabLeft);
	let arrowPosition = activeTabLeft - 30;
	document.querySelector(".nav-arrow").style.left = arrowPosition + "px";
});

// tab-nav-mobile

$(".btnNextTab").click(function () {
	$(".nav-tabs .active").parent().next("li").find("a").trigger("click");
	// $(".slider-tab-nav").find(".slick-current > .nav-link").addClass("active");

	$(".tab-img").toggleClass("active");
});

$(".btnPreviousTab").click(function () {
	$(".nav-tabs .active").parent().prev("li").find("a").trigger("click");
	$(".slider-tab-nav")
		.find(".slick-current")
		.prev(".slick-slide > .nav-link")
		.addClass("active");

	$(".tab-img").toggleClass("active");
});

$(".slider-tab-nav .nav-link").click(function (e) {
	$(".slider-tab-nav .nav-link").removeClass("active");
});

// $(".nav-link").off("click");

/* Get our elements. */
const player = document.querySelector(".player");
const video = player.querySelector(".viewer");
const progress = player.querySelector(".progress");
const progressBar = player.querySelector(".progress__filled");
const toggle = player.querySelector(".toggle");
const skipButtons = player.querySelectorAll("[data-skip]");
const ranges = player.querySelectorAll(".player__slider");
const fullscreen = player.querySelector(".fullscreen");

let isFullScreen = false;

/* Build our functions */
function togglePlay() {
	const action = video.paused ? "play" : "pause";
	video[action]();
}

function updatePlayIcon() {
	toggle.classList.toggle("playing");
	player.classList.toggle("paused");
	if (toggle.classList.contains("playing")) {
		toggle.setAttribute("title", "Pause");
	} else {
		toggle.setAttribute("title", "Play");
	}
}

function skip() {
	video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate() {
	video[this.name] = this.value;
}

function handleProgress() {
	const percent = (video.currentTime / video.duration) * 100;
	progressBar.style.flexBasis = percent + "%";
}

// function scrub(e) {
// 	const seconds = (e.offsetX / progress.offsetWidth) * video.duration;
// 	video.currentTime = seconds;
// }

function toggleFullScreen(e) {
	if (isFullScreen) {
		if (document.exitFullscreen) {
			document.exitFullscreen();
		} else if (document.mozCancelFullScreen) {
			document.mozCancelFullScreen();
		} else if (document.webkitCancelFullScreen) {
			document.webkitCancelFullScreen();
		} else if (document.msExitFullscreen) {
			document.msExitFullscreen();
		} else {
			console.error("Unable to find a fullscreen exit method.");
		}
		console.log("removing fullscreen class");
	} else {
		if (player.requestFullscreen) {
			player.requestFullscreen(); // standard
		} else if (player.webkitRequestFullscreen) {
			player.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
		} else if (player.mozRequestFullScreen) {
			player.mozRequestFullScreen();
		} else if (player.msRequestFullscreen) {
			player.msRequestFullscreen();
		} else {
			console.error("Unable to find a fullscreen request method");
		}
	}
}

function toggleFullScreenClasses() {
	player.classList.toggle("fullscreen");
	isFullScreen = !isFullScreen;
}

/* Hook up the event listeners */
video.addEventListener("click", togglePlay);
toggle.addEventListener("click", togglePlay);

video.addEventListener("play", updatePlayIcon);
video.addEventListener("pause", updatePlayIcon);
video.addEventListener("timeupdate", handleProgress);

skipButtons.forEach((button) => button.addEventListener("click", skip));

ranges.forEach((range) => range.addEventListener("change", handleRangeUpdate));
ranges.forEach((range) =>
	range.addEventListener("mousemove", handleRangeUpdate),
);

let mousedown = false;
progress.addEventListener("click", scrub);
progress.addEventListener("mousemove", (e) => mousedown && scrub(e));
progress.addEventListener("mousedown", () => (mousedown = true));
progress.addEventListener("mouseup", () => (mousedown = false));

fullscreen.addEventListener("click", toggleFullScreen);

document.addEventListener("fullscreenchange", toggleFullScreenClasses);
document.addEventListener("mozfullscreenchange", toggleFullScreenClasses);
document.addEventListener("webkitfullscreenchange", toggleFullScreenClasses);
document.addEventListener("msfullscreenchange", toggleFullScreenClasses);
