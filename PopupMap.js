var map = L.map('mapid', {
	minZoom: 3,
	maxZoom: 17
}).setView([53.334973, -6.26358], 9);

L.tileLayer('https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}.png', {
	attribution: '<a href="https://wikimediafoundation.org/wiki/Maps_Terms_of_Use">Wikimedia</a>',
	minZoom: 1,
	maxZoom: 18
}).addTo(map);

map.on('click', onMapClick);

var popup = L.popup();

function onMapClick(e) {
	popup
	.setLatLng(e.latlng)
	.setContent(e.latlng.toString())
	.openOn(map)
}