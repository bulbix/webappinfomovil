var server = requestServer("POST",contextPath + "/infomovil/getPerfil",{}).perfil; 
var contactos = {
		getUrl:server+'/api/editorVolante/getContacto',
		delUrl:server + '/api/editorVolante/deleteContacto',
		saveUrl: server + 'api/editorVolante/upsertContacto'
};

app.factory('VolanteService', function($http, MensajesService) {
	
	var volantes;
	var totVolantes;
	var datos = {};
	var banderaCanal;
	var nombreVolante;
	
    function getVolantes(callback) {

    	console.log("getVolantes");
		$http({
			method: 'GET',
			url: contextPath + "/infomovil/getPromociones",
		}).then(function successCallback(response) {
			
			volantes = response.data;
			totVolantes = volantes.length;
			console.log("volante service tot volantes: " + totVolantes);
			nombreVolante = response.data.nombreSitio;
			banderaCanal = response.data.banderaCanal;
			
			if (totVolantes > 0 && totVolantes != undefined)
			{
				$(".muestraPromoPublicada").css("display", "block");
				$(".muestraPublicarPromo").css("display", "none");
			}
			else
			{
				$(".muestraPublicarPromo").css("display", "block");
				$(".muestraPromoPublicada").css("display", "none");
			}
			
			getContactosVolantes();
			
			if (callback != null)
				callback();
			
		}, function errorCallback(response) {
			
			var mensaje = "No se ha podido obtener la lista de volantes";
			MensajesService.cerrarBlockUIGeneral("Contactos", mensaje);
		});
	}
    function getVolantesPublicar(callback) {

    	console.log("getVolantesPublicar");
		$http({
			method: 'GET',
			url: contextPath + "/infomovil/getPromociones",
		}).then(function successCallback(response) {
			$("#idPromocion").text(response.data[0].idOffer);
			$("#urlPromocion").text(response.data[0].urlPromocion);
			$("#tempPromocion").text(response.data[0].template);
			getContactosVolantes();
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
    		getVolantesPublicar();    		
    		guardarEventoGA(evento, response.data.nombreSitio, response.data.banderaCanal);
    		
    		if (callback != null)
    			callback();
    		
    	}, function errorCallback(response) {

    		mensaje = "No se ha podido actualizar el contacto";
    		MensajesService.cerrarBlockUIGeneral("Volantes", mensaje);
    	});
    
     };

    function guardarEventoGA(nombreEvento, nombreSitio, banderaCanal) {
    	ga('send', 'event', 'promo', nombreEvento, nombreSitio, banderaCanal);
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
			
				for(i=0; i<response.data.contacto.length; i++){
						if(response.data.contacto[i].services == "E2U+voice:tel" ){
							$("#telContactoVolante").val(response.data.contacto[i].contenido);
							$("#idTelContactoVolante").text(response.data.contacto[i].contactoId);
						}else if(response.data.contacto[i].services == "E2U+voice:tel+x-mobile"){
							$("#celContactoVolante").val(response.data.contacto[i].contenido);
							$("#idCelContactoVolante").text(response.data.contacto[i].contactoId);
						}else if(response.data.contacto[i].services == "E2U+email:mailto"){
							$("#emailContactoVolante").val(response.data.contacto[i].contenido);
							$("#idEmailContactoVolante").text(response.data.contacto[i].contactoId);
						}
				}
				$("#nombreEmpresaPromo").val(datos.empresa);
				
			}, function errorCallback(response) {
				console.log("No se ha podido obtener la lista de contactos volantes " + response);
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
		console.log("Entro a eliminar el contacto");
		var url = contactos.delUrl;
		var valContacto = 0;
		
		if(tipoContacto == "tel" && ( $("#idTelContactoVolante").text().length > 0) )
			valContacto = $("#idTelContactoVolante").text(); 
		else if(tipoContacto == "cel" && ( $("#idCelContactoVolante").text().length > 0) )
			valContacto = $("#idCelContactoVolante").text(); 
		else if(tipoContacto == "email" && ( $("#idEmailContactoVolante").text().length > 0) )
			valContacto = $("#idEmailContactoVolante").text(); 
			
		
		console.log("La url de eliminar es: "+url +" y el idContacto es: "+valContacto);
		var hasha = hashUsuario();
		var delContacto = {"contactoId":valContacto, "hashUser":hasha};
		$http({
			method: 'DELETE',
			headers: {'Content-Type': 'application/json' },
			url : url,
			data : delContacto
		}).then(function successCallback(response) {
			console.log("Si me elimino el contacto: "  + response.data.codeError, response.data);
			if(tipoContacto == "tel" && ( $("#idTelContactoVolante").text().length > 0) )
				valContacto = $("#idTelContactoVolante").text(""); 
			else if(tipoContacto == "cel" && ( $("#idCelContactoVolante").text().length > 0) )
				valContacto = $("#idCelContactoVolante").text(""); 
			else if(tipoContacto == "email" && ( $("#idEmailContactoVolante").text().length > 0) )
				valContacto = $("#idEmailContactoVolante").text(""); 
			
			requestServer("GET",contextPath + "/infomovil/refrescarPromocion",{});
			console.debug("Refrescando la promocion")
			
			
		}, function errorCallback(response) {
			console.log("El error de eliminar es: " + response.data.codeError);
			
		});
	};
   
	
     return {
    	 getContactosVolantes: getContactosVolantes,
    	 getVolantes : getVolantes,
    	 guardarEventoGA: guardarEventoGA,
    	 eliminarContactoVolante : eliminarContactoVolante,
    	 getVolantesPublicar : getVolantesPublicar,
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
    	 },
    	 getTotVolantes : function() {
    		 return totVolantes;
    	 }
     }
});