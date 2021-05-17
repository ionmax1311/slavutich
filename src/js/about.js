$(".about-tabs .nav-link").click((e) => {
	let curTextLink = $(e.target).text();

	$(".hero h1").text(curTextLink);
});
