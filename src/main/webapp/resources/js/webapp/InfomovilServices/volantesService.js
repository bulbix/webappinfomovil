app.factory('VolanteService', function($http, MensajesService) {
	
	var volantes;
	var banderaCanal;
	var nombreVolante;
	
    function getVolantes(callback) {

		$http({
			method: 'GET',
			url: contextPath + "/infomovil/getPromociones",
		}).then(function successCallback(response) {
			
			volantes = response.data;
			nombreVolante = response.data.nombreSitio;
			banderaCanal = response.data.banderaCanal;
			console.log("getVolantes: " + response.data.length);
			
			if (callback != null)
				callback();
			
		}, function errorCallback(response) {
			
			var mensaje = "No se ha podido obtener la lista de volantes";
			MensajesService.cerrarBlockUIGeneral("Contactos", mensaje);
		});
	}
    
    function actualizarVolante(volante, evento, callback) {

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
    		guardarEventoGA(evento, response.data.nombreSitio, response.data.banderaCanal);
    		
    		if (callback != null)
    			callback();
    		
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
    	 nombreVolante : function() {
    		 return nombreVolante;
    	 },
    	 banderaCanal : function() {
    		 return banderaCanal;
    	 },
    	 actualizarVolante : actualizarVolante 	  
     }
});