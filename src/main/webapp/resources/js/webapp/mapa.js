var myApp = { };
myApp.longitud = null;
myApp.latitud = null;
myApp.geolocalizacion = false;

function initialize() 
{
	if (myApp.longitud != 0 && myApp.latitud != 0) {
		
	}
	else {
		
	}
	
	var mapOptions =
	{
		center: {lat: -33.8688, lng: 151.2195},
		zoom: 13
	};
  
	var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
	var input = (document.getElementById('pac-input'));
	var autocomplete = new google.maps.places.Autocomplete(input);
	
	autocomplete.bindTo('bounds', map);
	map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
	
	var infowindow = new google.maps.InfoWindow();
	var marker = new google.maps.Marker({ map : map });
  
	google.maps.event.addListener(marker, 'click', function() {
    infowindow.open(map, marker);
	});

	google.maps.event.addListener(autocomplete, 'place_changed', function() {
	  
    infowindow.close();
    var place = autocomplete.getPlace();
    
    if (!place.geometry) {
      return;
    }

    if (place.geometry.viewport) {
      map.fitBounds(place.geometry.viewport);
    } else {
      map.setCenter(place.geometry.location);
      map.setZoom(17);
    }

    // Set the position of the marker using the place ID and location
    marker.setPlace(({
      placeId: place.place_id,
      location: place.geometry.location
    }));
    
    marker.setVisible(true);

    infowindow.setContent('<div><strong>' + place.name + '</strong><br>' +
        'Place ID: ' + place.place_id + '<br>' +
        place.formatted_address);
    infowindow.open(map, marker);
    
	});
  
	$(window).on('shown.bs.modal', function() { 
		google.maps.event.trigger(map, "resize");
	});
}