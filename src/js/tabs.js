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
