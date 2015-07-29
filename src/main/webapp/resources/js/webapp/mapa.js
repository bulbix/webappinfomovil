var myGlobalVariables = { };

myGlobalVariables.map = null;
myGlobalVariables.infoWindow = null;
myGlobalVariables.latitud = 0;
myGlobalVariables.longitud = 0;
myGlobalVariables.tieneMapa = false;

function initialize() {
	
	var pyrmont = new google.maps.LatLng(-33.8665433, 151.1956316);
	myGlobalVariables.map = new google.maps.Map(document.getElementById('map-canvas'), {
    center: pyrmont,
    zoom: 15
  });

	var request = {
    location: pyrmont,
    radius: 500,
    types: ['store']
  };
  
	myGlobalVariables.infoWindow = new google.maps.InfoWindow();
	var service = new google.maps.places.PlacesService(myGlobalVariables.map);
	service.nearbySearch(request, callback);
}

function callback(results, status) {
	
	if (status == google.maps.places.PlacesServiceStatus.OK) {
		for(var i = 0; i < results.length; i++) {
			createMarker(results[i]);
    }
  }
}

function createMarker(place) {
	
	var placeLoc = place.geometry.location;
	var marker = new google.maps.Marker({
    map: myGlobalVariables.map,
    position: place.geometry.location
  });

	google.maps.event.addListener(marker, 'click', function() {
    myGlobalVariables.infoWindow.setContent(place.name);
    myGlobalVariables.infoWindow.open(myGlobalVariables.map, this);
  });
}