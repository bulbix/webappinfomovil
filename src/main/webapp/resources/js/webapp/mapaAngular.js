app.controller('MapCtrl', function($http, ubicacionFactory,volanteMapaService) {

	var mapaCtrl = this;

	var modeloMap = {
			longitud:null,
			latitud:null,
			zoom:15,
			msjValidacion : "",
			myLatlng : null,
			place : null,
			mapCenter : null,
			geocoder : null,
			mapAuxiliar : null,
			obtenerDireccion : false,
			geolocalizacion : false,
			bandera : false,
			tieneMapa : false,
			direccion : "",
			latPermiso : 0,
			lonPermiso : 0,
			guardaPorEvento : false,
			marker : null,
			latAux : null,
			lngAux : null,
			width : '200px'
	};

	var myLatlng = null;
	var map = null;
	var hashUser = null;
	var tipoProducto = null;
	volanteMapaService.state.locId = 0;
	volanteMapaService.state.offerId = 0;
	
	mapaCtrl.init = function(tipo) {
		
		tipoProducto = tipo;
		hashUser = hashUsuario();
		
		var url = ubicacionFactory.ubicacion(tipo).getUrl;
		var params;
		
		if(tipo == 'pagina'){
			params = {hashUser:hashUser};
		}
		else{
			var resp = requestServer("POST",contextPath + "/infomovil/getPromociones",{});
			if (resp[0] != undefined){
				volanteMapaService.state.offerId = resp[0].idOffer;
			}
			
			params = {offerId:volanteMapaService.state.offerId,hashUser:hashUser};
		}

		$http({
			method: 'GET',
			url: url,
			params: params
		}).then(function successCallback(response) {
			
			if(response.data.ubicacion.length > 0){
				modeloMap.longitud = response.data.ubicacion[0].longitude;
				modeloMap.latitud = response.data.ubicacion[0].latitude;
				
				if(tipo == 'volante'){
					volanteMapaService.state.locId = response.data.ubicacion[0].locId;
				}
				else{
					volanteMapaService.state.locId = 0;
				}
				
			}
			else{
				modeloMap.longitud = 0; modeloMap.latitud = 0;
			}

			modeloMap.tieneMapa = (modeloMap.longitud != 0 && modeloMap.latitud != 0);

			if (!modeloMap.tieneMapa) {
				modeloMap.obtenerDireccion = false
				modeloMap.latitud = 21.06086980676483; /*Default mexico*/
				modeloMap.longitud = -98.86579389431152;
				modeloMap.zoom = 3;
			}
			else {
				modeloMap.obtenerDireccion = true;
				modeloMap.zoom = 15;
			}

			myLatlng = new google.maps.LatLng(modeloMap.latitud, modeloMap.longitud);
			
			eventosMapa();

		}, function errorCallback(response) {
			console.log("Error getMapa");
		});
		
		//Refrescar mapa
		$("#myModalMaps").on('shown.bs.modal', function() { 
			$("#pac-input").val("");
			google.maps.event.trigger(map, "resize");
			map.panTo(modeloMap.marker.getPosition());
		});

	}

	mapaCtrl.guardar = function(){
		guardarUbicacion(modeloMap.mapAuxiliar);
	}

	mapaCtrl.borrar = function(){
		if(!modeloMap.tieneMapa)
			return;
		
		mensajeActualizacion("Eliminando ubicación...");
		
		var url = ubicacionFactory.ubicacion(tipoProducto).delUrl;
		var data;
		
		if(tipoProducto == 'pagina'){
			data={hashUser:hashUser};
		}
		else{
			data={locId:volanteMapaService.state.locId,hashUser:hashUser}
		}

		$http({
			method: 'DELETE',
			headers: {'Content-Type': 'application/json' },
			url: url,
			data:data
		}).then(function successCallback(response) {
			if(response.data.codeError == 0){
				modeloMap.latitud = 21.06086980676483; /*Default mexico*/
				modeloMap.longitud = -98.86579389431152;
				modeloMap.zoom = 3;
				myLatlng = new google.maps.LatLng(modeloMap.latitud, modeloMap.longitud);
				modeloMap.marker.setPosition(myLatlng);
				map.panTo(myLatlng);
				map.setZoom(3);
				$("#direccionMap").html("");
				$("#idOpcionUbicacion").html("Coloca tu ubicación");
				
				//offerId = 0;
				//locId = 0;
				
				$.unblockUI();
			}
		}, function errorCallback(response) {
			console.error("Error eliminarMapa");
			$.unblockUI();
		});

	}

	function getLocationData(latLng) {

		var geocoder = new google.maps.Geocoder();

		geocoder.geocode({ "location" : latLng }, function(results, status) {
			if (status == google.maps.GeocoderStatus.OK)
			{
				modeloMap.direccion = "";
				modeloMap.direccion = results[0].formatted_address;
				actualizarUbicacion(modeloMap.latitud, modeloMap.longitud, modeloMap.direccion);
			}
		});
	}
	
	function mensajeActualizacion(msg){
		$.blockUI.defaults.baseZ = 9000;
		$.blockUI({ 
			message: msg, 
			css: { 
				padding:        '10px', 
				textAlign:      'center', 
				color:          '#000', 
				border:         '3px solid #aaa', 
				backgroundColor:'#fff', 
				cursor:         'wait' ,
				margin:			'0 auto',
				top:  ($(window).height() - 200) /2 + 'px', 
				left: ($(window).width() - 200) /2 + 'px', 
				width: modeloMap.width 
			} 
		});
	}

	function actualizarUbicacion(latitud, longitud, direccion) {
		$("#myModalMaps").css("display", "none");

		mensajeActualizacion("Actualizando ubicación...");
		
		var url = ubicacionFactory.ubicacion(tipoProducto).saveUrl;
		var data;
		
		if(tipoProducto == 'pagina'){
			data={hashUser:hashUser,latitude:latitud,longitude:longitud,direccion:direccion};
		}
		else{
			if (volanteMapaService.state.offerId == 0){
				var resp = requestServer("POST",contextPath + "/infomovil/getPromociones",{});
				if (resp[0] != undefined){
					volanteMapaService.state.offerId = resp[0].idOffer;
				}
			}
			
			data={locId:volanteMapaService.state.locId,offerId:volanteMapaService.state.offerId,
				hashUser:hashUser,latitude:latitud,
				longitude:longitud,direccion:direccion}
		}		

		$http({
			method: 'POST',
			url: url,
			data:data
		}).then(function successCallback(response) {
			if(response.data.codeError == 0 ) {
				
				if(tipoProducto == "volante"){
					volanteMapaService.state.locId = response.data.locId;
				}
				
				myLatlng = new google.maps.LatLng(latitud, longitud);
				modeloMap.tieneMapa = true;
				obtenerDireccion(myLatlng);
				modeloMap.marker.setPosition(myLatlng);
				
				$.unblockUI();
			}
		}, function errorCallback(response) {
			console.error("Error actualizarMapa");
			$.unblockUI();
		});

	}

	function guardarUbicacion(map) {
		var latLng = null;

		if (modeloMap.guardaPorEvento) {	
			modeloMap.latitud = modeloMap.latAux;
			modeloMap.longitud = modeloMap.lngAux;	
		}
		else {
			modeloMap.mapCenter = map.getCenter();
			modeloMap.latitud = modeloMap.mapCenter.lat();   
			modeloMap.longitud = modeloMap.mapCenter.lng(); 	
		}

		latLng = new google.maps.LatLng(modeloMap.latitud, modeloMap.longitud);	
		getLocationData(latLng);	
	}


	mapaCtrl.ubicame = function(){
		modeloMap.geolocalizacion = navigator.geolocation ? true : false;
		myLatlng = new google.maps.LatLng(modeloMap.latitud, modeloMap.longitud);

		if (!modeloMap.geolocalizacion)
		{
			mostrarError("Este buscador, no soporta la geolocalización");
			console.log("Este buscador, no soporta la geolocalización");
			return;
		}
		
		mensajeActualizacion("Obteniendo tu ubicación actual...");

		navigator.geolocation.getCurrentPosition(function (position) {

			modeloMap.latPermiso = position.coords.latitude;
			modeloMap.lonPermiso = position.coords.longitude;  

			myLatlng = null;
			myLatlng = new google.maps.LatLng(modeloMap.latPermiso, modeloMap.lonPermiso);    
			modeloMap.marker.setMap(null);
			modeloMap.marker = new google.maps.Marker({ map : map, position: myLatlng });        	
			modeloMap.marker.setPosition(myLatlng);
			modeloMap.marker.setVisible(true);
			map.panTo(myLatlng);
			map.setZoom(15);
			modeloMap.mapAuxiliar = map;
			modeloMap.guardaPorEvento = false;
			modeloMap.tieneMapa = false;
			$("#pac-input").val("");
			$.unblockUI();

		}, function(error) {
			errorGeolocalizacion(error);
		}, {enableHighAccuracy: true, timeout: 15000});
	}

	function eventosMapa(){

		var mapOptions = {
				center: myLatlng, 
				zoom: modeloMap.zoom,
				mapTypeControl: false,
		};

		map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
		modeloMap.mapAuxiliar = map;
		var input = (document.getElementById('pac-input'));
		var autocomplete = new google.maps.places.Autocomplete(input);

		autocomplete.bindTo('bounds', map);
		map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

		var infowindow = new google.maps.InfoWindow();
		modeloMap.marker = new google.maps.Marker({ map : map, position: myLatlng });
		modeloMap.marker.setVisible(true);

		if (modeloMap.obtenerDireccion)
			obtenerDireccion(myLatlng);

		google.maps.event.addListener(autocomplete, 'place_changed', function() {

			infowindow.close();
			modeloMap.place = autocomplete.getPlace();

			if (!modeloMap.place.geometry) {
				$.unblockUI();
				modeloMap.guardaPorEvento = false;
				return;
			}

			if (modeloMap.place.geometry.viewport) {
				map.fitBounds(modeloMap.place.geometry.viewport);
			} else {
				map.setCenter(modeloMap.place.geometry.location);
				map.setZoom(15);
			}

			modeloMap.marker.setPlace(({
				placeId: modeloMap.place.place_id,
				location: modeloMap.place.geometry.location
			}));

			modeloMap.marker.setVisible(true);

			infowindow.setContent('<div><strong>' + modeloMap.place.name + '</strong><br>' +
					modeloMap.place.formatted_address);
			modeloMap.mapAuxiliar = map;
			infowindow.open(map, modeloMap.marker);
			console.log("evento changed: " + modeloMap.place.formatted_address + ", coordenadas: " + modeloMap.place.geometry.location);
			modeloMap.guardaPorEvento = true;
			modeloMap.latAux = modeloMap.place.geometry.location.lat();
			modeloMap.lngAux = modeloMap.place.geometry.location.lng();
			console.log("coordenadas finales: lat: " + modeloMap.latAux + ", lon: "  + modeloMap.lngAux);
		});

		google.maps.event.addListener(map, 'dragend', function() {
			modeloMap.mapAuxiliar = map;
			modeloMap.guardaPorEvento = false;
			console.log("dragend");
		});

	}

	function obtenerDireccion(latLng)  {
		var geocoder = new google.maps.Geocoder();

		geocoder.geocode({ "location" : latLng }, function(results, status) {
			if (status == google.maps.GeocoderStatus.OK)
			{
				$("#direccionMap").html(results[0].formatted_address);
				$("#idOpcionUbicacion").html("Editar ubicación actual:");
			}
		});
	}


	function errorGeolocalizacion(error) {

		$.unblockUI();
		modeloMap.obtenerDireccion = false;

		switch(error.code)
		{
		case error.PERMISSION_DENIED:
			modeloMap.msjValidacion = "Necesitas habilitar la función de geolocalización. Favor de cambiar tu configuración o de buscar manualmente tu ubicación."
				console.log("User denied the request for Geolocation.");
			break;
		case error.POSITION_UNAVAILABLE:
			modeloMap.msjValidacion = "La información de geolocalización no está disponible.";
			console.log("Location information is unavailable.");
			break;
		case error.TIMEOUT:
			modeloMap.msjValidacion = "Tiempo de espera agotado para obtener tu geolocalización. Intenta de nuevo.";
			console.log("The request to get user location timed out.");
			break;
		case error.UNKNOWN_ERROR:
			modeloMap.msjValidacion = "Error al intentar obtener tu geolocalización. Intenta de nuevo.";
			console.log("An unknown error occurred.");
			break;
		}        

		mostrarError(modeloMap.msjValidacion);
	}

	function mostrarError(descripcionMsj) {

		$.blockUI.defaults.baseZ = 9000;
		$.blockUI({ 
			message: descripcionMsj,
			css: { 
				padding:        '10px', 
				textAlign:      'center', 
				color:          '#000', 
				border:         '3px solid #aaa', 
				backgroundColor:'#fff', 
				cursor:         'wait' ,
				margin:			'0 auto',
				top:  ($(window).height() - 200) /2 + 'px', 
				left: ($(window).width() - 200) /2 + 'px', 
				width: modeloMap.width
			} 
		}); 

		setTimeout($.unblockUI, 3000);   
	}

})

.factory("ubicacionFactory", function(){
	
	var server = requestServer("POST",contextPath + "/infomovil/getPerfil",{}).perfil; 
	
	var ubicacionPagina = {
			getUrl: server +'/api/editorPagina/getUbicacion',
			delUrl: server + '/api/editorPagina/deleteUbicacion',
			saveUrl: server + 'api/editorPagina/upsertUbicacion'
	}

	var ubicacionVolante = {
			getUrl:server+'/api/editorVolante/getUbicacion',
			delUrl:server + '/api/editorVolante/deleteUbicacion',
			saveUrl: server + 'api/editorVolante/upsertUbicacion'
	}
	
	return { 
		ubicacion: function(tipo){
			if(tipo == 'pagina')
				return ubicacionPagina;
			else
				return ubicacionVolante;
		}
	}
	
})
.factory('volanteMapaService', function($http, MensajesService) {
	
	var state = {offerId : 0, locId: 0 };
	
	return {
		state : state,
		borrarDatos : function(){
			console.debug("Datos Mapa:" + state.offerId + "," + state.locId)
			state.offerId = 0; state.locId = 0;
			console.debug("Datos Mapa:" + state.offerId + "," + state.locId)
			$("#direccionMap").html("");
			$("#idOpcionUbicacion").html("Coloca tu ubicación");
		}
	}
	
});