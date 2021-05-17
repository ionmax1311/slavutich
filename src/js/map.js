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
