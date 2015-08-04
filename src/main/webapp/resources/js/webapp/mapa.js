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
myApp.guardaPorEvento = false;
myApp.marker = null;
myApp.latAux = null;
myApp.lngAux = null;
var myLatlng = null;
var map = null;

function initialize() 
{
	myApp.longitud = parseFloat($("#longitud").val());
	myApp.latitud =  parseFloat($("#latitud").val());
	myApp.tieneMapa = (myApp.longitud != 0 && myApp.latitud != 0);
	
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
		zoom: myApp.zoom,
		mapTypeControl: false,
	};

	map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
	myApp.mapAuxiliar = map;
	var input = (document.getElementById('pac-input'));
	var autocomplete = new google.maps.places.Autocomplete(input);
	
	autocomplete.bindTo('bounds', map);
	map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
	
	var infowindow = new google.maps.InfoWindow();
	myApp.marker = new google.maps.Marker({ map : map, position: myLatlng });
	myApp.marker.setVisible(true);
	
	if (myApp.obtenerDireccion)
		obtenerDireccion(myLatlng);

	google.maps.event.addListener(autocomplete, 'place_changed', function() {
  
	    infowindow.close();
	    myApp.place = autocomplete.getPlace();

	    if (!myApp.place.geometry) {
	    	$.unblockUI();
	    	myApp.guardaPorEvento = false;
	    	return;
	    }
	
	    if (myApp.place.geometry.viewport) {
	    	map.fitBounds(myApp.place.geometry.viewport);
	    } else {
	    	map.setCenter(myApp.place.geometry.location);
	    	map.setZoom(15);
	    }
	
	    myApp.marker.setPlace(({
	      placeId: myApp.place.place_id,
	      location: myApp.place.geometry.location
	    }));
	    
	    myApp.marker.setVisible(true);
	    
	    infowindow.setContent('<div><strong>' + myApp.place.name + '</strong><br>' +
	        myApp.place.formatted_address);
	    myApp.mapAuxiliar = map;
	    infowindow.open(map, myApp.marker);
	    console.log("evento changed: " + myApp.place.formatted_address + ", coordenadas: " + myApp.place.geometry.location);
	    myApp.guardaPorEvento = true;
	    myApp.latAux = myApp.place.geometry.location.lat();
	    myApp.lngAux = myApp.place.geometry.location.lng();
	    console.log("coordenadas finales: lat: " + myApp.latAux + ", lon: "  + myApp.lngAux);
	});
  
	google.maps.event.addListener(map, 'dragend', function() {
		myApp.mapAuxiliar = map;
		myApp.guardaPorEvento = false;
		console.log("dragend");
	});

	/**/
	$("#myModalMaps").on('shown.bs.modal', function() { 
		
		var markerAux = myApp.marker.getPosition(); /*El marker actual, evento changed o coordenadas guardadas*/
		console.log("marker_lat: " + markerAux.lat() + ", marker_lon: " + markerAux.lng() + ", global lon-> " + myApp.longitud + ", global lat-> " + myApp.latitud);
		//if ()
		google.maps.event.trigger(map, "resize");
		map.panTo(myApp.marker.getPosition());
	});
		
	$("#guardarUbicacion").on("click", function() {
		guardarUbicacion(myApp.mapAuxiliar);
	});
	
	$("#borrarUbicacion").on("click", function() {
		
		if(!myApp.tieneMapa)
			return;
		
		actualizarUbicacion("", "", "", "0");
	});
	
	$("#ubicame").on("click", function() {
		
		myApp.geolocalizacion = navigator.geolocation ? true : false;
		myLatlng = new google.maps.LatLng(myApp.latitud, myApp.longitud);
		
		if (!myApp.geolocalizacion)
		{
			mostrarError("Este buscador, no soporta la geolocalización");
			console.log("Este buscador, no soporta la geolocalización");
			return;
		}
		
	   	 $.blockUI.defaults.baseZ = 9000;
		    $.blockUI({ 
		    	message: "Obteniendo tu ubicación actual...",
		        css: {
		        	class:"alertaUI",
		            top:  ($(window).height() - 400) /2 + 'px', 
		            left: ($(window).width() - 400) /2 + 'px', 
		            width: '400px' 
		           
		        } 
		    	}); 
	    
        navigator.geolocation.getCurrentPosition(function (position) {
        	 
        	myApp.latPermiso = position.coords.latitude;
        	myApp.lonPermiso = position.coords.longitude;  
       
        	$("#pac-input").val("");
        	myLatlng = null;
        	myLatlng = new google.maps.LatLng(myApp.latPermiso, myApp.lonPermiso);    
        	myApp.marker.setMap(null);
        	myApp.marker = new google.maps.Marker({ map : map, position: myLatlng });        	
        	myApp.marker.setPosition(myLatlng);
    		myApp.marker.setVisible(true);
    		map.panTo(myLatlng);
    		map.setZoom(15);
    		myApp.mapAuxiliar = map;
    		myApp.guardaPorEvento = false;
    		$.unblockUI();

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
	actualizarUbicacion(myApp.latitud, myApp.longitud, dir, "1");
}

function guardarUbicacion(map) {
	
	console.log("myApp.guardaPorEvento: " + myApp.guardaPorEvento);
	var latLng = null;
	
	if (myApp.guardaPorEvento) 
	{	
		myApp.latitud = myApp.latAux;
		myApp.longitud = myApp.lngAux;	
	}
	else
	{
		myApp.mapCenter = map.getCenter();
		myApp.latitud = myApp.mapCenter.lat();   
		myApp.longitud = myApp.mapCenter.lng(); 	
	}
	
	console.log("ultimas a guardar: lat-> " + myApp.latitud + ", lon-> " +  myApp.longitud);
	latLng = new google.maps.LatLng(myApp.latitud, myApp.longitud);	
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

function actualizarUbicacion(latitud, longitud, direccion, accion) {

	if (accion == "1")
		$("#myModalMaps").css("display", "none");
	
	$.blockUI.defaults.baseZ = 9000;
    $.blockUI({ 
        message: "Actualizando ubicación...", 
        css: { 
        	class:"alertaUI",
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
				if (accion == "1") /*Guardar mapa*/
				{
					console.log("Ubicacion actualizada correctamente");		
					window.location = contextPath + '/infomovil/editarSitio';
				}
				else /*Borrar mapa, no cerrar el modal y quitar el marker*/
				{
					myApp.latitud = 21.06086980676483; /*Default mexico*/
					myApp.longitud = -98.86579389431152;
					myApp.zoom = 3;
					myLatlng = new google.maps.LatLng(myApp.latitud, myApp.longitud);
		        	myApp.marker.setPosition(myLatlng);
		    		map.panTo(myLatlng);
		    		map.setZoom(3);
			    	$("#direccionMap").html("");
					$("#idOpcionUbicacion").html("Coloca tu ubicación");
				}
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

	$.unblockUI();
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
    
    mostrarError(myApp.msjValidacion);
}

function mostrarError(descripcionMsj) {
	
    $.blockUI.defaults.baseZ = 9000;
    $.blockUI({ 
    	message: descripcionMsj,
        css: { 
        	class:"alertaUI",
            top:  ($(window).height() - 400) /2 + 'px', 
            left: ($(window).width() - 400) /2 + 'px', 
            width: '400px' 
        } 
    	}); 
    
    setTimeout($.unblockUI, 2000);   
}
