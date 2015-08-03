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
myApp.latPermiso = 0;
myApp.lonPermiso = 0;

function initialize() 
{
	myApp.longitud = parseFloat($("#longitud").val());
	myApp.latitud =  parseFloat($("#latitud").val());
	myApp.tieneMapa = (myApp.longitud != 0 && myApp.latitud != 0);
	var myLatlng = null;
	var map = null;
	var marker = null;
	
	if (!myApp.tieneMapa)
	{
		myApp.obtenerDireccion = false
		myApp.latitud = 21.06086980676483; /*Default mexico*/
		myApp.longitud = -98.86579389431152;
		myApp.zoom = 3;
	}
	else
	{
		myApp.obtenerDireccion = true;
		myApp.zoom = 15;
	}

	myLatlng = new google.maps.LatLng(myApp.latitud, myApp.longitud);
	
	var mapOptions =
	{
		center: myLatlng, 
		zoom: myApp.zoom
	};
//	console.log("myApp.latitud: " + myApp.latitud + ", myApp.longitud: " + myApp.longitud);
	map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
	myApp.mapAuxiliar = map;
	var input = (document.getElementById('pac-input'));
	var autocomplete = new google.maps.places.Autocomplete(input);
	
	autocomplete.bindTo('bounds', map);
	map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
	
	var infowindow = new google.maps.InfoWindow();
	marker = new google.maps.Marker({ map : map, position: myLatlng });
	marker.setVisible(true);
	
	if (myApp.obtenerDireccion)
		obtenerDireccion(myLatlng);

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
	});

	google.maps.event.addListener(map, 'center_changed', function() {
		myApp.mapAuxiliar = map;
	});	

	/**/
	$("#myModalMaps").on('shown.bs.modal', function() { 
		
		google.maps.event.trigger(map, "resize");
		map.panTo(marker.getPosition());
	});
		
	$("#guardarUbicacion").on("click", function() {
		guardarUbicacion(myApp.mapAuxiliar);
	});
	
	$("#borrarUbicacion").on("click", function() {
		
		if(!myApp.tieneMapa)
			return;
		
		actualizarUbicacion("", "", "");
	});
	
	$("#ubicame").on("click", function() {
		
		myApp.geolocalizacion = navigator.geolocation ? true : false;
		myLatlng = new google.maps.LatLng(myApp.latitud, myApp.longitud);
		
		if (!myApp.geolocalizacion)
		{
			console.log("Este buscador, no soporta la geolocalización");
			return;
		}
		
        navigator.geolocation.getCurrentPosition(function (position) {
        	
        	myApp.latPermiso = position.coords.latitude;
        	myApp.lonPermiso = position.coords.longitude;
        	console.log("latitud: " + myApp.latPermiso + ", longitud: " + myApp.lonPermiso);            
        	myLatlng = null;
        	myLatlng = new google.maps.LatLng(myApp.latPermiso, myApp.lonPermiso);
        	marker.setPosition(myLatlng);
    		map.panTo(myLatlng);
    		map.setZoom(15);
    		myApp.mapAuxiliar = map;

       }, function(error) {
            errorGeolocalizacion(error);
       });

	});
	/**/
}

function getLocationData(latLng, guardarDatos) {
	
	  var geocoder = new google.maps.Geocoder();

	  geocoder.geocode({ "location" : latLng }, function(results, status) {
		    if (status == google.maps.GeocoderStatus.OK)
		    {
		    	myApp.direccion = "";
		    	myApp.direccion = results[0].formatted_address;
		    	guardarDatos(results[0].formatted_address);
		    }
	});
}

function guardarDatos(dir)
{
	actualizarUbicacion(myApp.latitud, myApp.longitud, dir);
}

function guardarUbicacion(map) {
	
	var latLng = null;
	myApp.mapCenter = map.getCenter();
	myApp.latitud = myApp.mapCenter.lat();   
	myApp.longitud = myApp.mapCenter.lng(); 
	latLng = new google.maps.LatLng(myApp.mapCenter.lat(), myApp.mapCenter.lng());	
	getLocationData(latLng, guardarDatos);	
}

function obtenerDireccion(latLng) 
{
	var geocoder = new google.maps.Geocoder();
	
	geocoder.geocode({ "location" : latLng }, function(results, status) {
	    if (status == google.maps.GeocoderStatus.OK)
	    {
	    	$("#direccionMap").html(results[0].formatted_address);
			$("#idOpcionUbicacion").html("Editar ubicación actual:");
	    }
	  });
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

	myApp.obtenerDireccion = false;
	
    switch(error.code)
    {
        case error.PERMISSION_DENIED:
        	myApp.msjValidacion = "No has dado autorización para obtener tu Geolocalización, favor de buscar manualmente tu ubicación."
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
    
    $.blockUI.defaults.baseZ = 9000;
    $.blockUI({ 
    	message: myApp.msjValidacion,
        css: { 
            top:  ($(window).height() - 400) /2 + 'px', 
            left: ($(window).width() - 400) /2 + 'px', 
            width: '400px' 
        } 
    	}); 
    setTimeout($.unblockUI, 2000);          
}