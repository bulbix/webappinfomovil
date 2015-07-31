var myApp = { };
myApp.longitud = null;
myApp.latitud = null;
myApp.zoom = 15;
myApp.msjValidacion = "";
myApp.myLatlng = null;
myApp.place = null;
myApp.mapCenter = null;
myApp.geocoder = null;
myApp.mapAuxiliar = null;
myApp.obtenerDireccion = false;
myApp.geolocalizacion = false;
myApp.bandera = false;
myApp.tieneMapa = false;
myApp.direccion = "";

function initialize() 
{
	myApp.longitud = parseFloat($("#longitud").val());
	myApp.latitud =  parseFloat($("#latitud").val());
	myApp.tieneMapa = (myApp.longitud != 0 && myApp.latitud != 0);
	var myLatlng = null;
	
	if (!myApp.tieneMapa)
	{
		myApp.obtenerDireccion = false
		myApp.latitud = 21.06086980676483;
		myApp.longitud = -98.86579389431152;
		myApp.zoom = 3;
		myApp.geolocalizacion = navigator.geolocation ? true : false;
		myLatlng = new google.maps.LatLng(myApp.latitud, myApp.longitud);
		
		if (myApp.geolocalizacion)
		{
            navigator.geolocation.getCurrentPosition(function (position) {
            	
            	myApp.latitud = position.coords.latitude;
            	myApp.longitud = position.coords.longitude;

            }, function(error) {
                errorGeolocalizacion(error);
            });
		}
	}
	else
	{
		myLatlng = new google.maps.LatLng(myApp.latitud, myApp.longitud);
		myApp.obtenerDireccion = true;
		myApp.zoom = 15;
	}
	
	var mapOptions =
	{
		center: new google.maps.LatLng(myApp.latitud, myApp.longitud), 
		zoom: myApp.zoom
	};
  
	var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
	myApp.mapAuxiliar = map;
	var input = (document.getElementById('pac-input'));
	var autocomplete = new google.maps.places.Autocomplete(input);
	
	autocomplete.bindTo('bounds', map);
	map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
	
	var infowindow = new google.maps.InfoWindow();
	var marker = new google.maps.Marker({ map : map, position: myLatlng });
	marker.setVisible(true);
	
	if (myApp.obtenerDireccion)
		obtenerDireccion(myLatlng);
	
	/*google.maps.event.addListener(marker, 'click', function() {
		infowindow.open(map, marker);
		console.log("click:::");
	});*/

	google.maps.event.addListener(autocomplete, 'place_changed', function() {
	  
	    infowindow.close();
	    myApp.place = autocomplete.getPlace();
	    
	    if (!myApp.place.geometry) {
	      return;
	    }
	
	    if (myApp.place.geometry.viewport) {
	    	map.fitBounds(myApp.place.geometry.viewport);
	    } else {
	    	map.setCenter(myApp.place.geometry.location);
	    	map.setZoom(15);
	    }
	
	    marker.setPlace(({
	      placeId: myApp.place.place_id,
	      location: myApp.place.geometry.location
	    }));
	    
	    marker.setVisible(true);
	
	    infowindow.setContent('<div><strong>' + myApp.place.name + '</strong><br>' +
	        myApp.place.formatted_address);
	    myApp.mapAuxiliar = map;
	    infowindow.open(map, marker);
    
	});
  
	google.maps.event.addListener(map, 'dragend', function() {
		
		myApp.mapAuxiliar = map;
		myApp.mapCenter = myApp.mapAuxiliar.getCenter(); //map.getCenter();
		var latitud = myApp.mapCenter.lat();   
		var longitud = myApp.mapCenter.lng(); 
		var latLng = new google.maps.LatLng(latitud, longitud);
		myApp.bandera = true;
	});

	google.maps.event.addListener(map, 'center_changed', function() {
		myApp.mapAuxiliar = map;
	});	

	/**/
	$("#myModalMaps").on('shown.bs.modal', function() { 
		google.maps.event.trigger(map, "resize");
		map.panTo(marker.getPosition());
	});
	
	$("#myModalMaps").on('hidden.bs.modal', function (e) {
		console.log("myApp.bandera: " + myApp.bandera);
	})
		
	$("#guardarUbicacion").on("click", function() {
		guardarUbicacion(myApp.mapAuxiliar);
	});
	
	$("#borrarUbicacion").on("click", function() {
		actualizarUbicacion("", "", "");
	});
	/**/
}

function guardarUbicacion(map) {
	
	var direccion = "";
	myApp.mapCenter = map.getCenter();
	myApp.latitud = myApp.mapCenter.lat();   
	myApp.longitud = myApp.mapCenter.lng(); 

	if (myApp.place == null)
	{
		var latLng = new google.maps.LatLng(myApp.latitud, myApp.longitud);
		obtenerDireccion(latLng);
		direccion = $("#direccionMap").val();
	}
	else
		direccion = myApp.place.formatted_address;
	
	console.log("obtener ubicacion: " + direccion + ", latitude: " + myApp.latitud + ", longitude: " + myApp.longitud);
	actualizarUbicacion(myApp.latitud, myApp.longitud, direccion);
}

function obtenerDireccion(latLng) 
{
	var dir = "";
	var geocoder = new google.maps.Geocoder();
	
	geocoder.geocode({ "location" : latLng }, function(results, status) {
	    if (status == google.maps.GeocoderStatus.OK)
	    {
	    	$("#direccionMap").val(results[0].formatted_address);
	    	if (myApp.obtenerDireccion)
	    		$("#direccionMap").html(results[0].formatted_address);
	    }
	  });
}

function centerChanged(map, marker) {
	
	myApp.bandera = true;
	
	if (myApp.bandera) {
		myApp.bandera = false;
		map.panTo(marker.getPosition());
	}	
}

function actualizarUbicacion(latitud, longitud, direccion) {

	$("#myModalMaps").css("display", "none");
    $.blockUI({ 
        message: "Actualizando ubicación...", 
        css: { 
            top:  ($(window).height() - 400) /2 + 'px', 
            left: ($(window).width() - 400) /2 + 'px', 
            width: '400px' 
        } 
    }); 
    
	$.ajax({
		type : "GET",
		url : contextPath + "/infomovil/actualizaMapa",
		dataType : "json",
		contentType: "text/plain",
		data : {
			longitud: longitud,
			latitud: latitud, 
			direccion: direccion
		},
		success : function(json) {		
			
			if(json.actualizaMapa == "0")
			{
				console.log("Ubicacion actualizada correctamente");		
				window.location = contextPath + '/infomovil/editarSitio';
			}

			$.unblockUI();
		},
		error : function(json) {
			console.log("Error actualizaMapa");
			$.unblockUI();
		}

	});	
}

function errorGeolocalizacion(error) {

	myApp.mostrarMapa = false;
    
    switch(error.code)
    {
        case error.PERMISSION_DENIED:
        	myApp.msjValidacion = "Permiso denegado para obtener tu Geolocalización, favor de buscar manualmente tu ubicación."
            console.log("User denied the request for Geolocation.");
            break;
        case error.POSITION_UNAVAILABLE:
        	myApp.msjValidacion = "La información de Geolocalización no está disponible";
            console.log("Location information is unavailable.");
            break;
        case error.TIMEOUT:
        	myApp.msjValidacion = "Tiempo de espera agotado para obtener tu Geolocalización";
            console.log("The request to get user location timed out.");
            break;
        case error.UNKNOWN_ERROR:
        	myApp.msjValidacion = "Error al intentar obtener tu Geolocalización";
            console.log("An unknown error occurred.");
            break;
    }   
}