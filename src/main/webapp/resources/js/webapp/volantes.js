
var preferenceContVol = 0;
	$(".datepicker").datepicker({ dateFormat: 'dd/mm/yy' });
	console.log("$datepickerPromo");


var app = angular.module('InfomovilVolantes', ['ngMaterial','ngMessages','angular-momentjs']);


app.controller("VolantesController", function ($scope, $http, VolanteService, MensajesService,  $moment, volanteMapaService) {
	
	var templatesPromo = new Array("promo8", "promo6",  "promo1","promo5", "promo4", "promo7", "promo2", "promo3"); //, "promo6");
	var nombresPromo = new Array("Navidad", "Cursos",  "Bares","Floral", "Tecnología 2", "Buen Fin", "Hipster", "Tecnología"); //, "ATT"); /*Cambiar nombres*/
	
	var volantesCtrl = this;

	console.debug("Volantes.js ngMaterial");
	volantesCtrl.modfechaVigencia = "";
	volantesCtrl.fechaVigencia = new Date();
	
	//Convertir date a string fecha
	$scope.$watch('volantesCtrl.fechaVigencia', function(v){ 
	    var d = new Date(v);
	    var curr_date = d.getDate();
	    var curr_month = d.getMonth() + 1; 
	    var curr_year = d.getFullYear();
	    volantesCtrl.modfechaVigencia = curr_date + "/" + curr_month + "/" + curr_year;
	    console.log("Fecha Vigencia " + volantesCtrl.modfechaVigencia)
	})
	
	volantesCtrl.muestraPublicarPromo = false;
	volantesCtrl.muestraPromoPublicada = false;
	volantesCtrl.muestraDivError = false;
	volantesCtrl.noEspecificado = false;
	volantesCtrl.llamanos = false;
	volantesCtrl.enviaEmail = false;
	volantesCtrl.visitanos = false;
	volantesCtrl.plantillaPromo = "promo1";
	volantesCtrl.producto = "web";
	volantesCtrl.vista = "editarSitio";
	volantesCtrl.tabla = "multiproducto_dev";
	volantesCtrl.indicePromocion = 0;
	volantesCtrl.eventoPromocion = "";
	
	volantesCtrl.actualizaProducto = function() {

		volantesCtrl.mensaje = "Actualizando producto...";
    	MensajesService.abrirBlockUIGeneral(volantesCtrl.mensaje);      
    	
    	$http({
    		method: 'POST',
    		url: contextPath + "/infomovil/actualizaProducto",
    		params: {
    			tableName: volantesCtrl.tabla,
    			producto: volantesCtrl.producto
    		}		  
    	}).then(function successCallback(response) {
    		
    		volantesCtrl.mensaje = "";
    		MensajesService.cerrarBlockUIGeneral("Volantes", volantesCtrl.mensaje);
    		window.location = contextPath + "/infomovil/" + volantesCtrl.vista;
    		
    	}, function errorCallback(response) {
    		
    		volantesCtrl.mensaje = "No se ha podido actualizar el producto";
    		MensajesService.cerrarBlockUIGeneral("Volantes", volantesCtrl.mensaje);
    		
    	});
	};
	
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
    			fechaVigencia: volantesCtrl.modfechaVigencia, //$("#datepicker").val(),
    			base64Imagen: "",
    			redimir: $('.radioPromo:checked').val(),
    			terminos: $("#infoadiPromo").val(),
    			templatePromo: volantesCtrl.plantillaPromo,
    			empresa: $("#nombreEmpresaPromo").val(),
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
    	
    	console.debug("Fecha Vigencia: " + volantesCtrl.modfechaVigencia)

    	$http({
    		method: 'POST',
    		url: contextPath + "/infomovil/guardarPromocion",
    		params: { 
    			titulo: $("#nombrePromo").val(),
    			descripcion: $("#descPromo").val(),
    			fechaVigencia:  volantesCtrl.modfechaVigencia,//$("#datepicker").val(),
    			base64Imagen: "",
    			redimir: $('.radioPromo:checked').val(),
    			terminos: $("#infoadiPromo").val(),
    			templatePromo: $("#tempPromocion").text(),
    			idPromocion: $("#idPromocion").text(),
    			empresa: $("#nombreEmpresaPromo").val(),
    			nombreVolante: $("#txtNombreVolante").val(),
    				
    		}	  
    	}).then(function successCallback(response) {
    		if($("#telefonoVolante").val().length > 0){
    			console.log("Envio a guardar el Telefono");
    			datosContacto = getContactoTel();
    			upsertContactoVolantes(datosContacto);	
    			 
    		}
    		if($("#emailContactoVolante").val().length > 0){
    			console.log("Envio a guardar el Email");
    			datosContacto = getContactoEmail();
    			upsertContactoVolantes(datosContacto);
    			
    		}
		
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
		    		$("#telefonoVolante").val("");
		    		$("#nombreEmpresaPromo").val("");
		    		$("#emailContactoVolante").val("");
		    		$("#txtNombreVolante").val("");
		    		$("#tempPromocion").text("promo1");
					volantesCtrl.muestraPublicarPromo = true;
					volantesCtrl.muestraPromoPublicada = false;
					volantesCtrl.indicePromocion = 0;
					volantesCtrl.modfechaVigencia = "";
					volantesCtrl.fechaVigencia = new Date();
					
					
					VolanteService.guardarEventoGA(volantesCtrl.eventoPromocion, 
							response.data.nombreSitio, response.data.banderaCanal);
					VolanteService.getVolantes();
					volanteMapaService.borrarDatos();
					
					
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
				datepickerPromo : volantesCtrl.modfechaVigencia, //$("#datepicker").val(),
				base64Imagen : "",
				redimir : $('.radioPromo:checked').val(),
				infoadiPromo : $("#infoadiPromo").val(),
				plantillaPromo : volantesCtrl.plantillaPromo,
				idPromocion : $("#idPromocion").text(),
				empresa: $("#nombreEmpresaPromo").val(),
    			nombreVolante: $("#txtNombreVolante").val(),
		};
		datosContacto = getContacto();
		upsertContactoVolantes(datosContacto); 
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
					datepickerPromo : volantesCtrl.modfechaVigencia, //$("#datepicker").val(),
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

	volantesCtrl.imprimirPromo = function() {

		volantesCtrl.mensaje = "Obteniendo volante...";
    	MensajesService.abrirBlockUIGeneral(volantesCtrl.mensaje);
    	
		$("#urlVistaPreviaPromoImprimir").attr("src", $("#urlPromocion").text() + "?vistaPrevia=1");

		var iframe = document.getElementById("urlVistaPreviaPromoImprimir");
		iframe.src = iframe.src + (new Date()).getTime() + Math.floor(Math.random() * 1000000);
		iframe.src = iframe.src;
		document.getElementById('urlVistaPreviaPromoImprimir').onload = function() {
			$.unblockUI();
			$("#myModalPromoImprimir").modal();
	    };
	    
	};
	
	volantesCtrl.imprimirPromocionWeb = function() {
		
		var urlPromo = $("#urlPromocion").text();
		volantesCtrl.nombrePromo = urlPromo.substring(urlPromo.lastIndexOf("/") + 1);
		volantesCtrl.eventoPromocion = 'promo-imprimir';
		var oldstrInner = document.documentElement.innerHTML;
		var oldstr = document.body.innerHTML;
		
		volantesCtrl.mensaje = "Generando impresión...";
    	MensajesService.abrirBlockUIGeneral(volantesCtrl.mensaje);

		$.ajax({
			type : "POST",
			url : contextPath + "/infomovil/getHTMLPromocion",
			data : {nombrePromocion: volantesCtrl.nombrePromo},
		
			success : function(data) {
				
				$("#myModalPromoImprimir").modal('toggle');
				document.documentElement.innerHTML = data.elHtmlDePromocion;
				setTimeout(function () { window.print(); 
				window.focus();
				window.close();
				document.documentElement.innerHTML = oldstrInner;
			    $(document.body).html(oldstr);
			    $("#myModalPromoImprimir").modal();	
				$.unblockUI();}, 2500);
				
				VolanteService.guardarEventoGA(volantesCtrl.eventoPromocion, 
						$("#tempNombrePromo").val(), $("#tempBanderaPromo").val());
				
			},
			error : function(json) {
				$.unblockUI();
				BootstrapDialog.show({
					title: "<span class='textBlack' style='font-size:1.15em;'><img alt='' src='../resources/webapp/images/fa-warning-bk.png'  title='Alerta' />No se ha generado la impresión</span>",
					message: '<div style="display:block; min-height:150px;"><p class="textBlack text-center" style="font-size:1.15em;">Por favor intentalo más tarde.</p><br/>'
				});
										
			}
		});	
	};
	
	volantesCtrl.descargarArchivo = function(tipo) {
		
		volantesCtrl.eventoPromocion = "promo-guardarPDF";
		volantesCtrl.pathArchivo = $("#urlVistaPreviaPromoImprimir").attr('src');
		volantesCtrl.pathArchivo = volantesCtrl.pathArchivo.replace("html", tipo);
		volantesCtrl.link = document.createElement("a");
		volantesCtrl.link.download = "promo." + tipo;
		volantesCtrl.link.href = volantesCtrl.pathArchivo;
		volantesCtrl.link.click();
	    
	    if (tipo == 'jpg')
	    	volantesCtrl.eventoPromocion = "promo-guardarJPG";
	    
		VolanteService.guardarEventoGA(volantesCtrl.eventoPromocion, 
				$("#tempNombrePromo").val(), $("#tempBanderaPromo").val());
	};
	
	volantesCtrl.validarCampos = function() {
		
		var $nom = $("#nombrePromo").val().trim();
		var $desc = $("#descPromo").val().trim();
		var $dp = volantesCtrl.modfechaVigencia;//$("#datepicker").val();
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
			if(volantesCtrl.arr[0] != undefined){
				volantesCtrl.modfechaVigencia = volantesCtrl.arr[0].endDateOffer;
				console.debug("Promos: " + volantesCtrl.modfechaVigencia)
				var fechaVigencia = $moment(volantesCtrl.arr[0].endDateOffer, "DD/MM/YYYY");
				volantesCtrl.fechaVigencia = fechaVigencia.toDate();
			}
		}
		else{
			
		}
	
    });
    
	//$("#datepicker").datepicker({ dateFormat: 'dd/mm/yy' });
    volantesCtrl.generarSliderPromo();
    VolanteService.getVolantes();

var upsertContactoVolantes = function(contacto){
	 var url = contactos.saveUrl;
	 $http({	
		 method: 'POST',
		 url: url,
		 data:contacto,
		 async : true
		}).then(function successCallback(response) {
			console.log("Se guardo el contacto y me regreso: "  + response.data.codeError);
			VolanteService.getContactosVolantes();			 
		}, function errorCallback(response) {
			console.log("El error es: " + response.data, response.data.code);
			
		});
	};
	
	var upsertContactoEmpresa = function(contacto){
		 	var url = contactos.saveEmpUrl;
		 	var offerID = VolanteService.getOfferId();
			var hash = hashUsuario();
			var empresaInput = $("#nombreEmpresaPromo").val();
			console.log("NombreEmpresa quedaría " + empresaInput );
			dataEmp = {offerId:offerID.offerId,empresa: empresaInput, hashUser:hash};
		 $http({	
			 method: 'POST',
			 url: url,
			 data: dataEmp,
			 async : true
			}).then(function successCallback(response) {
				console.log("Se guardo la empresa y me regreso: "  + response.data.codeError);
				VolanteService.getContactosVolantes();			 
			}, function errorCallback(response) {
				console.log("El error es: " + response.data, response.data.code);
				
			});
		};
 
 
var eliminarContactoVolantes = function(contacto){
		var url = contactos.delUrl;
		console.log("La url de eliminar es: "+url);
		$http({
			method: 'DELETE',
			headers: {'Content-Type': 'application/json' },
			url: url,
			data:contacto
		}).then(function successCallback(response) {
			console.log("Si me elimino el contacto: "  + response.data.codeError, response.data);
							 
		}, function errorCallback(response) {
			console.log("El error es: " + response.data);
			
		});
	};

	function getOfferId(){
		var datos = {};
		var resp = requestServer("POST",contextPath + "/infomovil/getPromociones",{});
		if (resp[0] != undefined){
			datos = {
				"offerId" : resp[0].idOffer,
				"empresa" : resp[0].empresa,
				"pagina" : resp[0].pagina,
			};
			$("#nombreEmpresaPromo").val(datos.empresa);
			$("#txtNombreVolante").val(datos.pagina);
			
		}
		console.debug("Server " + server + "y OfferId es: " + datos.offerId , datos.empresa, datos.pagina);
		return datos;
	};


	
	function getService(){
		if($( "#tipoTelefonoVolante" ).val() == "+52"){
			preferenceContVol = 0;
			return "E2U+voice:tel";
		}
		else{
			preferenceContVol = 1;
			return "E2U+voice:tel+x-mobile";
		}
		
	};
	
	var getContactoTel = function(){
		var valContacto = 0;
		if($("#idTelContactoVolante").val() > 0) valContacto = $("#idTelContactoVolante").val(); 
			var offerID = VolanteService.getOfferId();
			var contacto = {
					contactoId: valContacto,
					offerId : offerID.offerId,
					descripcion : "",
					orderNaptr : 0,
					preference : 0,
					contenido : $( "#telefonoVolante" ).val(),
					codigoPais : $( "#tipoTelefonoVolante" ).val(),
					services : getService(), 
					tipoContacto : 'tel:',
					activo : 1,
					ultimaModificacion : "",
					usuarioModifico : "",
					hashUser : hashUsuario()
				};
			return contacto;
	};
	var getContactoEmail = function(){
		var valContacto = 0;
		if($("#idEmailContactoTelVolante").val() > 0) valContacto = $("#idEmailContactoVolante").val(); 
		var offerID = VolanteService.getOfferId();
			var contacto = {
					contactoId: valContacto,
					offerId : offerID.offerId,
					descripcion : "",
					orderNaptr : 0,
					preference : 1,
					contenido : $( "#emailContactoVolante" ).val(),
					codigoPais : "",
					services : "E2U+email:mailto", 
					tipoContacto : 'mailto:',
					activo : 1,
					ultimaModificacion : "",
					usuarioModifico : "",
					hashUser : hashUsuario()
				};
			return contacto;
	};


});

