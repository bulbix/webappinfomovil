(function() {

	console.log("funcion anonima");
	var longitud = parseFloat($("#longitud").val());
	var latitud  = parseFloat($("#latitud").val());
	var tieneMapa = (longitud != 0 && latitud != 0);
	
	if (tieneMapa) {
		var coordenadas = new google.maps.LatLng(latitud, longitud);
		var obtenerDireccion = true;
		var zoom = 15;
		var opcionesMapa = { center: coordenadas, zoom: zoom};
		var mapa = new google.maps.Map(document.getElementById('map-canvas'), global.opcionesMapa);
		var input = (document.getElementById('pac-input'));
		
		var autocomplete = new google.maps.places.Autocomplete(global.input);
		autocomplete.bindTo('bounds', global.mapa);
		mapa.controls[google.maps.ControlPosition.TOP_LEFT].push(global.input);
		var infowindow = new google.maps.InfoWindow();
		var marcador = new google.maps.Marker({ map : global.mapa, position: global.coordenadas });
		marcador.setVisible(true);
	}
	
})();

var global = { };

function iniciarMapa() {
	
	global.longitud = parseFloat($("#longitud").val());
	global.latitud  = parseFloat($("#latitud").val());
	global.tieneMapa = (global.longitud != 0 && global.latitud != 0);
	
	console.log("longitud: " + global.longitud + ", latitud: " + global.latitud);
	if (global.tieneMapa) {
		
		global.coordenadas = new google.maps.LatLng(global.latitud, global.longitud);
		global.obtenerDireccion = true;
		global.zoom = 15;		
		global.opcionesMapa = {	center: global.coordenadas, zoom: global.zoom };
		global.mapa = new google.maps.Map(document.getElementById('map-canvas'), global.opcionesMapa);
		global.input = (document.getElementById('pac-input'));
		global.autocomplete = new google.maps.places.Autocomplete(global.input);
		global.autocomplete.bindTo('bounds', global.mapa);
		global.mapa.controls[google.maps.ControlPosition.TOP_LEFT].push(global.input);
		global.infowindow = new google.maps.InfoWindow();
		global.marcador = new google.maps.Marker({ map : global.mapa, position: global.coordenadas });
		global.marcador.setVisible(true);
	}
	
	$("#myModalMaps").on('shown.bs.modal', function() { 
		
		if (!global.tieneMapa) {

			if (navigator.geolocation) {
			     navigator.geolocation.getCurrentPosition(function (position) {
			    	 
			    	console.log("coordenadas: " + position.coords.latitude + ", " + position.coords.longitude);
			 		global.coordenadas = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
					global.obtenerDireccion = true;
					global.zoom = 15;		
					global.opcionesMapa = {	center: global.coordenadas, zoom: 15 };
					global.mapa = new google.maps.Map(document.getElementById('map-canvas'), global.opcionesMapa);
					global.input = (document.getElementById('pac-input'));
					global.autocomplete = new google.maps.places.Autocomplete(global.input);
					global.autocomplete.bindTo('bounds', global.mapa);
					global.mapa.controls[google.maps.ControlPosition.TOP_LEFT].push(global.input);
					global.infowindow = new google.maps.InfoWindow();
					global.marcador = new google.maps.Marker({ map : global.mapa, position: global.coordenadas });
					global.marcador.setVisible(true);
					google.maps.event.trigger(global.mapa, "resize");
			    	//    marker.setPosition( new google.maps.LatLng( Lat, Lng) );
			    	//    map.panTo( new google.maps.LatLng( Lat, Lng) );
					console.log("mapa");
					google.maps.event.addListener(global.autocomplete, 'place_changed', getPlaceChanged);
			 /*   	 global.currentLocation = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
			         global.mapa.setCenter(global.currentLocation);
			 		 google.maps.event.trigger(global.mapa, "resize");
					 global.mapa.panTo(global.marcador.getPosition());*/
			     });
			 }
		}
//		google.maps.event.trigger(global.mapa, "resize");
//		global.mapa.panTo(global.marcador.getPosition());

	});


}

function getPlaceChanged() {
	console.log("place_changed!");
	
    global.infowindow.close();
    global.place = global.autocomplete.getPlace();
    
    if (!global.place.geometry) {
      return;
    }

    if (global.place.geometry.viewport) {
    	global.mapa.fitBounds(global.place.geometry.viewport);
    } else {
    	global.mapa.setCenter(global.place.geometry.location);
    	global.mapa.setZoom(15);
    }

    global.marcador.setPlace(({
      placeId: global.place.place_id,
      location: global.place.geometry.location
    }));
    
    global.marcador.setVisible(true);

    global.infowindow.setContent('<div><strong>' + global.place.name + '</strong><br>' +
        global.place.formatted_address);
    
    global.infowindow.open(global.mapa, global.marcador);
    console.log("position--> " + global.place.geometry.location);
}