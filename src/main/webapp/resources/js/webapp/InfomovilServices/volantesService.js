var server = requestServer("POST",contextPath + "/infomovil/getPerfil",{}).perfil; 
var contactos = {
		getUrl:server+'/api/editorVolante/getContacto',
		delUrl:server + '/api/editorVolante/deleteContacto',
		saveUrl: server + 'api/editorVolante/upsertContacto'
};

app.factory('VolanteService', function($http, MensajesService) {
	
	var volantes;
	var datos = {};
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
			getContactosVolantes();
			
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
    			idPromocion: volante.idPromocion,
    			empresa: volante.empresa,
    			nombreVolante : volante.nombreVolante,
    		}		  
    	}).then(function successCallback(response) { 

    		MensajesService.cerrarBlockUIGeneral("Volantes", "");
    		
			$('#myModalTempPromo').modal('hide');
    		//getVolantes();    		
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
    };
     
    function getContactosVolantes() {
		var url = contactos.getUrl;
		var offerID = getOfferId();
		var hash = hashUsuario();
        
		if(offerID.offerId > 0){
			edatos = {offerId:offerID.offerId,hashUser:hash};
			$http({
				method: 'GET',
				url: url,
				params: edatos,
				async : true,
			}).then(function successCallback(response) {
				console.log("Me respondio con cuantos: "  + response.data.contacto.length);
				for(i=0; i<response.data.contacto.length; i++){

						if(response.data.contacto[i].services == "E2U+voice:tel" ){
							$("#telContactoVolante").val(response.data.contacto[i].contenido);
						}else if(response.data.contacto[i].services == "E2U+voice:tel+x-mobile"){
							$("#celContactoVolante").val(response.data.contacto[i].contenido);
						}else if(response.data.contacto[i].services == "E2U+email:mailto")
							$("#emailContactoVolante").val(response.data.contacto[i].contenido);
				}
				$("#nombreEmpresaPromo").val(datos.empresa);
				
			}, function errorCallback(response) {
				console.log("No se ha podido obtener la lista de contactos volantes " + response);
				//var mensaje = "No se ha podido obtener la lista de contactos volantes";
				//MensajesService.cerrarBlockUIGeneral("Contactos", mensaje);
			});
		}
	};
    
	function getOfferId(){
		
		var resp = requestServer("POST",contextPath + "/infomovil/getPromociones",{});
		if (resp[0] != undefined){
			datos = {
				"offerId" : resp[0].idOffer,
				"empresa" : resp[0].empresa,
				"pagina" : resp[0].pagina,
			};	
		}else{
			datos = {
					"offerId" : "",
					"empresa" : "",
					"pagina" : "",
				};
		}

		return datos;
	};
	
	var eliminarContactoVolante = function(tipoContacto){
		var url = contactos.delUrl;
		var valContacto = 0;
		
		if(tipoContacto == "tel" && ( $("#idTelContactoVolante").val() > 0) )
			valContacto = $("#idTelContactoVolante").val(); 
		else if(tipoContacto == "cel" && ( $("#idCelContactoVolante").val() > 0) )
			valContacto = $("#idCelContactoVolante").val(); 
		else if(tipoContacto == "email" && ( $("#idEmailContactoVolante").val() > 0) )
			valContacto = $("#idEmailContactoVolante").val(); 
			
		
		console.log("La url de eliminar es: "+url +" y el idContacto es: "+valContacto);
		$http({
			method: 'DELETE',
			headers: {'Content-Type': 'application/json' },
			url : url,
			data : valContacto
		}).then(function successCallback(response) {
			console.log("Si me elimino el contacto: "  + response.data.codeError, response.data);
							 
		}, function errorCallback(response) {
			console.log("El error es: " + response.data);
			
		});
	};
   
	
     return {
    	 getContactosVolantes: getContactosVolantes,
    	 getVolantes : getVolantes,
    	 guardarEventoGA: guardarEventoGA,
    	 eliminarContactoVolante : eliminarContactoVolante,
    	 volantes : function() {
		   return volantes;
    	 },	

    	 actualizarVolante : actualizarVolante, 	  
    	 getOfferId : getOfferId,

    	 nombreVolante : function() {
    		 return nombreVolante;
    	 },
    	 banderaCanal : function() {
    		 return banderaCanal;
    	 }
    	 
     }
});