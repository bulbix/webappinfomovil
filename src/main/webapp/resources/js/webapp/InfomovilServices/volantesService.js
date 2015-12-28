app.factory('VolanteService', function($http, MensajesService) {
	
	var volantes;
	
    function getVolantes() {

		$http({
			method: 'GET',
			url: contextPath + "/infomovil/getPromociones",
		}).then(function successCallback(response) {
			
			volantes = response.data;
			console.log("getVolantes: " + response.data.length);
			
		}, function errorCallback(response) {
			
			var mensaje = "No se ha podido obtener la lista de volantes";
			MensajesService.cerrarBlockUIGeneral("Contactos", mensaje);
		});
	}
    
    function actualizarVolante(volante, evento) {

    	var mensaje = "Actualizando volante...";
    	MensajesService.abrirBlockUIGeneral(mensaje);
    	 
    	$http({
    		method: 'POST',
    		url: contextPath + "/infomovil/guardarPromocion",
    		params: {
    			titulo: volante.nombrePromo,
    			descripcion: volante.descPromo,
    			fechaVigencia:  volante.datepickerPromo,
    			base64Imagen: "",
    			redimir: volante.redimir,
    			terminos: volante.infoadiPromo,
    			templatePromo: volante.plantillaPromo,
    			idPromocion: volante.idPromocion
    		}		  
    	}).then(function successCallback(response) { 

    		MensajesService.cerrarBlockUIGeneral("Volantes", "");
    		
			$('#myModalTempPromo').modal('hide');
    		getVolantes();    		
    		guardarEventoGA(evento, response.data.nombreSitio, response.data.banderaCanal)
    		
    	}, function errorCallback(response) {

    		mensaje = "No se ha podido actualizar el contacto";
    		MensajesService.cerrarBlockUIGeneral("Volantes", mensaje);
    	});
    
     };

    function guardarEventoGA(nombreEvento, nombreSitio, banderaCanal) {
    	console.log("nombreEvento: " + nombreEvento + ", nombreSitio: " + nombreSitio + ", banderaCanal: " + banderaCanal);
    	//ga('send', 'event', 'promo', nombreEvento, nombreSitio, banderaCanal);
    }
     
     return {
    	 
    	 getVolantes : getVolantes,
    	 guardarEventoGA: guardarEventoGA,
    	 volantes : function() {
		   return volantes;
    	 },	
    	 actualizarVolante : actualizarVolante 	  
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
		}
	}
	
});