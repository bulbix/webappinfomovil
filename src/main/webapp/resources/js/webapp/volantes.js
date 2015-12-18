$(".datepicker").datepicker({ dateFormat: 'dd/mm/yy' });

var app = angular.module('InfomovilVolantes', []);

app.controller("VolantesController", function ($scope, $http, VolanteService, MensajesService) {
	
	var templatesPromo = new Array("promo8", "promo6",  "promo1","promo5", "promo4", "promo7", "promo2", "promo3"); //, "promo6");
	var nombresPromo = new Array("Navidad", "Cursos",  "Bares","Floral", "Tecnología 2", "Buen Fin", "Hipster", "Tecnología"); //, "ATT"); /*Cambiar nombres*/
	
	var volantesCtrl = this;

	volantesCtrl.muestraPublicarPromo = false;
	volantesCtrl.muestraPromoPublicada = false;
	volantesCtrl.muestraDivError = false;
	volantesCtrl.noEspecificado = false;
	volantesCtrl.llamanos = false;
	volantesCtrl.enviaEmail = false;
	volantesCtrl.visitanos = false;
	volantesCtrl.plantillaPromo = "promo1";
	volantesCtrl.indicePromocion = 0;
	volantesCtrl.eventoPromocion = "";
	
	volantesCtrl.vistaPrevia = function() {

		volantesCtrl.plantillaPromo = templatesPromo[volantesCtrl.indicePromocion];
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
		volantesCtrl.eventoPromocion = "promo-publicar";
		
		if (!(volantesCtrl.resultado == "datosCompletos"))
		{
			$("#divError").html("Falta llenar el campo " + volantesCtrl.resultado);
			volantesCtrl.muestraDivError = true;
			return;
		}
		
		volantesCtrl.muestraDivError = false;
		volantesCtrl.plantillaFinalPromo = "promo1";
		
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
    			templatePromo: $("#tempPromocion").text(),
    			idPromocion: $("#idPromocion").text()
    		}	  
    	}).then(function successCallback(response) {

			VolanteService.guardarEventoGA(volantesCtrl.eventoPromocion, 
					response.data.nombreSitio, response.data.banderaCanal);
			VolanteService.getVolantes();
			$.unblockUI();
    		
    	}, function errorCallback(response) {
    		volantesCtrl.mensaje = "No se ha podido publicar el volante";
    		MensajesService.cerrarBlockUIGeneral("Volantes", volantesCtrl.mensaje);
    	});
	};
	
	volantesCtrl.eliminarVolante = function() {
		
		volantesCtrl.eventoPromocion = "promo-eliminar";
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

		    		$("#tempPromocion").text("promo1");
					volantesCtrl.muestraPublicarPromo = true;
					volantesCtrl.muestraPromoPublicada = false;
					volantesCtrl.indicePromocion = 0;
					
					VolanteService.guardarEventoGA(volantesCtrl.eventoPromocion, 
							response.data.nombreSitio, response.data.banderaCanal);
					VolanteService.getVolantes();
					$.unblockUI();
		    		
		    	}, function errorCallback(response) {
		    		volantesCtrl.mensaje = "No se ha podido eliminar el volante";
		    		MensajesService.cerrarBlockUIGeneral("Volantes", volantesCtrl.mensaje);
		    	});
			}

		});
	};
	
	volantesCtrl.guardarPromocion = function() {
		
		volantesCtrl.resultado = volantesCtrl.validarCampos(); 
		volantesCtrl.eventoPromocion = "promo-guardar";
		
		if (!(volantesCtrl.resultado == "datosCompletos"))
		{
			$("#divError").html("Falta llenar el campo " + volantesCtrl.resultado);
			volantesCtrl.muestraDivError = true;
			return;
		}
		
		volantesCtrl.muestraDivError = false;

		var plantillaFinalPromo = $("#tempPromocion").text();		
		
		if (plantillaFinalPromo.trim().length > 0 && plantillaFinalPromo != null)
			volantesCtrl.plantillaPromo = plantillaFinalPromo;
		
		var volante = {
				nombrePromo : $("#nombrePromo").val(),
				descPromo : $("#descPromo").val(),
				datepickerPromo : $("#datepicker").val(),
				base64Imagen : "",
				redimir : $('.radioPromo:checked').val(),
				infoadiPromo : $("#infoadiPromo").val(),
				plantillaPromo : volantesCtrl.plantillaPromo,
				idPromocion : $("#idPromocion").text()
		};

		VolanteService.actualizarVolante(volante, volantesCtrl.eventoPromocion);
	};
	
	volantesCtrl.verPromoActiva = function() {
		
		volantesCtrl.urlPromo = $("#urlPromocion").text();
		
		if (volantesCtrl.urlPromo.trim().length > 0 && volantesCtrl.urlPromo != null)
			window.open(volantesCtrl.urlPromo, '_blank');
	};
	
	volantesCtrl.compartirPromo = function() {
		
		$scope.urlPromoShare = $("#urlPromocion").text();
		console.log("$scope.urlPromoShare: " + $scope.urlPromoShare);
		$('#myModalPromoShare').modal();
	};
	
	volantesCtrl.actualizaPlantillaVolante = function() {
		
		volantesCtrl.plantillaPromo = templatesPromo[volantesCtrl.indicePromocion];
		volantesCtrl.eventoPromocion = "promo-plantilla";
		
		if (volantesCtrl.muestraPublicarPromo)
		{
			volantesCtrl.mensaje = "Actualizando plantilla volante...";
	    	MensajesService.abrirBlockUIGeneral(volantesCtrl.mensaje);
			$('#myModalTempPromo').modal('hide');			
			setTimeout($.unblockUI, 1000);
		}
		else
		{
			var volante = {
					nombrePromo : $("#nombrePromo").val(),
					descPromo : $("#descPromo").val(),
					datepickerPromo : $("#datepicker").val(),
					base64Imagen : "",
					redimir : $('.radioPromo:checked').val(),
					infoadiPromo : $("#infoadiPromo").val(),
					plantillaPromo : volantesCtrl.plantillaPromo,
					idPromocion : $("#idPromocion").text()
			};

			VolanteService.actualizarVolante(volante, volantesCtrl.eventoPromocion);
			//console.log("guardar");
		}
		//console.log("vista previa: " + volantesCtrl.indicePromocion);// + volantesCtrl.muestraPublicarPromo);
	};

	volantesCtrl.generarSliderPromo = function()
	{
		var urlRecurso = "";
		var slider = "";
		var span = "";
		var li = "";
		var bandera = 0;
		
		slider = "<ul class='bxslider'>";
		
		for (i = 0; i < templatesPromo.length; i = i + 1) 
		{	
			urlRecurso = "https://s3-us-west-2.amazonaws.com/promo.mobileinfo.io/templates/" + templatesPromo[i] + "/" + templatesPromo[i] + ".png";
			li = "<li class='text-center'><img style='width:100%; height:auto; min-width:280px!important; max-width:600px !important; max-height:661px!important;min-height:265px!important; display:block;' src='" + urlRecurso + "' title='" + nombresPromo[i] + "'' /></li>";
			slider = slider + li;
			urlRecurso = "";
		}	
		
		slider + "</div><div class='modal-footer'></div></div></div></div>";
		$(slider).insertAfter(".contenidoSlider");
		
		var sliderModal = $('.bxslider').bxSlider({
			 moveSlides: 1,
			    displaySlideQty: 2,
			    responsive: false,
			adaptiveHeight: true,
			mode: 'fade',
			captions: true,
			pager: true,
			touchEnabled : true,
			useCSS:false,
			onSlideAfter: function() { indicePromocion = sliderModal.getCurrentSlide(); },
			});
		
		$(document).on('click','.bx-next', function() {
			volantesCtrl.indicePromocion = sliderModal.getCurrentSlide();		
			});
		
		$(document).on('click','.bx-prev', function() {
			volantesCtrl.indicePromocion = sliderModal.getCurrentSlide();
			});

		$(document).on('click','.bx-pager-link', function() {
			volantesCtrl.indicePromocion = sliderModal.getCurrentSlide();
			});	
	};
	
	volantesCtrl.validarCampos = function() {
		
		var $nom = $("#nombrePromo").val().trim();
		var $desc = $("#descPromo").val().trim();
		var $dp = $("#datepicker").val();
		var $rp = $('.radioPromo:checked').val();

		if($nom.length <= 0)
			return "nombre de la promoción";
		else if($desc.length <= 0)
			return "descripción de la promoción";			
		else if($dp.length <= 0)
			return "vigencia de la promoción";	
		else if($rp.length <= 0)
			return "cómo redimir";
		else
			return "datosCompletos";
	};

    $scope.$watch(function () { return VolanteService.volantes(); }, function (value) {

    	volantesCtrl.volantes = value;
    	volantesCtrl.arr = value instanceof Array ? value : [value]; 
		volantesCtrl.muestraPublicarPromo = true;
		volantesCtrl.muestraPromoPublicada = false;
		
		if (volantesCtrl.arr.length > 0)
		{
			volantesCtrl.muestraPublicarPromo = false;
			volantesCtrl.muestraPromoPublicada = true;
		}
    });
    
	//$("#datepicker").datepicker({ dateFormat: 'dd/mm/yy' });
    volantesCtrl.generarSliderPromo();
    VolanteService.getVolantes();
});

