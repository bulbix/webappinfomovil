var app = angular.module('InfomovilVolantes', []);

app.controller("VolantesController", function ($scope, $http, MensajesService) {
	
	var volantesCtrl = this;

	volantesCtrl.muestraPublicarPromo = false;
	volantesCtrl.muestraPromoPublicada = false;
	volantesCtrl.muestraDivError = false;
	volantesCtrl.noEspecificado = false;
	volantesCtrl.llamanos = false;
	volantesCtrl.enviaEmail = false;
	volantesCtrl.visitanos = false;
	volantesCtrl.plantillaPromo = "promo1";

	volantesCtrl.getVolantes = function() {

		$http({
			method: 'GET',
			url: contextPath + "/infomovil/getPromociones",
		}).then(function successCallback(response) {

			volantesCtrl.muestraPublicarPromo = true;
			volantesCtrl.muestraPromoPublicada = false;
			
			if (response.data.length > 0)
			{
				volantesCtrl.muestraPublicarPromo = false;
				volantesCtrl.muestraPromoPublicada = true;
			}
			
			volantesCtrl.volantes = response.data;
			
		}, function errorCallback(response) {
			
			volantesCtrl.mensaje = "No se ha podido obtener la lista de volantes";
			MensajesService.cerrarBlockUIGeneral("Contactos", volantesCtrl.mensaje);
		});
	}
	
	volantesCtrl.vistaPrevia = function() {

    	var mensaje = "Generando vista previa...";
    	MensajesService.abrirBlockUIGeneral(mensaje);

    	$http({
    		method: 'POST',
    		url: contextPath + "/infomovil/verPromo",
    		params: { 
    			idDominio : 0,
    			titulo: $("#nombrePromo").val(),
    			descripcion: $("#descPromo").val(),
    			fechaVigencia: $("#datepicker").val(),
    			base64Imagen: "",
    			redimir: $('.radioPromo:checked').val(),
    			terminos: $("#infoadiPromo").val(),
    			templatePromo: volantesCtrl.plantillaPromo
    		}	  
    	}).then(function successCallback(response) {

			$("#urlVistaPreviaPromo").attr('src', response.data.urlVistaPreviaPromo + '?vistaPrevia=1');
			$("#myModalPromo").modal();	
			$.unblockUI();
    		
    	}, function errorCallback(response) {
    		volantesCtrl.mensaje = "No se ha podido generar la vista previa";
    		MensajesService.cerrarBlockUIGeneral("Volantes", volantesCtrl.mensaje);
    	});
    	
	};
	
	volantesCtrl.publicarVolante = function() {

		volantesCtrl.resultado = volantesCtrl.validarCampos(); 
		console.log("validación: " + volantesCtrl.resultado);
		
		if (!(volantesCtrl.resultado == "datosCompletos"))
		{
			$("#divError").html("Falta llenar el campo " + volantesCtrl.resultado);
			volantesCtrl.muestraDivError = true;
			return;
		}
		
		volantesCtrl.muestraDivError = false;
		volantesCtrl.plantillaFinalPromo = "promo1"; //$("#tempPromocion").val();
		
		if (volantesCtrl.plantillaFinalPromo.length > 0 && volantesCtrl.plantillaFinalPromo != null)
			volantesCtrl.plantillaPromo = volantesCtrl.plantillaFinalPromo;

		volantesCtrl.mensaje = "Publicando volante...";
    	MensajesService.abrirBlockUIGeneral(volantesCtrl.mensaje);

    	$http({
    		method: 'POST',
    		url: contextPath + "/infomovil/guardarPromocion",
    		params: { 
    			titulo: $("#nombrePromo").val(),
    			descripcion: $("#descPromo").val(),
    			fechaVigencia:  $("#datepicker").val(),
    			base64Imagen: "",
    			redimir: $('.radioPromo:checked').val(),
    			terminos: $("#infoadiPromo").val(),
    			templatePromo: volantesCtrl.plantillaFinalPromo,
    			idPromocion: $("#idPromocion").text()
    		}	  
    	}).then(function successCallback(response) {

			volantesCtrl.muestraPublicarPromo = false;
			volantesCtrl.muestraPromoPublicada = true;
			volantesCtrl.getVolantes();
			$.unblockUI();
    		
    	}, function errorCallback(response) {
    		volantesCtrl.mensaje = "No se ha podido publicar el volante";
    		MensajesService.cerrarBlockUIGeneral("Volantes", volantesCtrl.mensaje);
    	});
	};
	
	volantesCtrl.eliminarVolante = function() {
		
		var textos = {
				titulo : "Borrar Volante",
				mensaje : "¿Seguro que deseas borrar el volante?"
			};
		
		MensajesService.obtenerConfirmacion(textos, function(confirmarBorrar) {
			
			if (confirmarBorrar) {

				volantesCtrl.mensaje = "Eliminando volante...";
		    	MensajesService.abrirBlockUIGeneral(volantesCtrl.mensaje);
	    		
		    	$http({
		    		method: 'POST',
		    		url: contextPath + "/infomovil/eliminarPromocion",
		    		params: { 
		    			idPromocion: $("#idPromocion").text()
		    		}	  
		    	}).then(function successCallback(response) {

					volantesCtrl.muestraPublicarPromo = true;
					volantesCtrl.muestraPromoPublicada = false;
					$("#nombrePromo").val(""); 
					$("#descPromo").val("");
					$("#infoadiPromo").val("");
					$("#idPromocion").val("");
					$("#datepickerPromo").val("");
					$("urlPromocion").val("");
				//	 templatePromo = "promo1";
					$("#tempPromocion").val("");
					volantesCtrl.nombreSitio = response.data.nombreSitio;
					volantesCtrl.banderaCanal = response.data.banderaCanal;
					// guardarEventoGA('promo-eliminar');
					volantesCtrl.noEspecificado = true;
					console.log("volantesCtrl.nombreSitio: " + volantesCtrl.nombreSitio + ", volantesCtrl.banderaCanal: " + volantesCtrl.banderaCanal);
					$.unblockUI();
		    		
		    	}, function errorCallback(response) {
		    		volantesCtrl.mensaje = "No se ha podido eliminar el volante";
		    		MensajesService.cerrarBlockUIGeneral("Volantes", volantesCtrl.mensaje);
		    	});
			}

		});
	};
	
	volantesCtrl.validarCampos = function() {
		
		var $nom = $("#nombrePromo").val().trim();
		var $desc = $("#descPromo").val().trim();
		var $dp = $("#datepicker").val();
		var $rp = $('.radioPromo:checked').val();

		if($nom.length <= 0){
			return "nombre de la promoción";
		}else if($desc.length <= 0){
			return "descripción de la promoción";
			
		}else if($dp.length <= 0){
			return "vigencia de la promoción";
			
		}else if($rp.length <= 0){
			return "cómo redimir";
		}else{
			return "datosCompletos";
		}
			
	};

	//$("#datepicker").datepicker({ dateFormat: 'dd/mm/yy' });
	volantesCtrl.getVolantes();
});

