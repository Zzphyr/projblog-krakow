var mymap = L.map('mapid').setView([38.724833, -9.145972], 13);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18,
	id: 'mapbox.streets',
	accessToken: 'pk.eyJ1IjoibWFudWNhcmQiLCJhIjoiY2sxajZoZ3IyMGw4eTNjcGdjbGQyMzc2bCJ9.ka70U2ToJqgGCNsGqppuGg'
}).addTo(mymap);

var marker = L.marker([38.724833, -9.145972]).addTo(mymap);
marker.bindPopup("We are here!");

// mapbox access token: pk.eyJ1IjoibWFudWNhcmQiLCJhIjoiY2sxajZoZ3IyMGw4eTNjcGdjbGQyMzc2bCJ9.ka70U2ToJqgGCNsGqppuGg