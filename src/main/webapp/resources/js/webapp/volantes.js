var app = angular.module('InfomovilVolantes', ['ngMaterial','ngMessages','angular-momentjs']);
var preferenceContVol = 0;

app.controller("VolantesController", function ($scope, $http, VolanteService, MensajesService,  $moment, volanteMapaService) {
	
	var templatesPromo = new Array("promo8", "promo6",  "promo1", "promo5", "promo4", "promo7", "promo2", "promo3");
	var nombresPromo = new Array("Navidad", "Cursos",  "Bares","Floral", "Tecnología 2", "Buen Fin", "Hipster", "Tecnología");
	
	var volantesCtrl = this;
	volantesCtrl.modfechaVigencia = "";
	volantesCtrl.planPro = "";
	volantesCtrl.fechaVigencia = new Date();
	
	//Convertir date a string fecha
	$scope.$watch('volantesCtrl.fechaVigencia', function(v){ 
	    var d = new Date(v);
	    var curr_date = d.getDate();
	    var curr_month = d.getMonth() + 1; 
	    var curr_year = d.getFullYear();
	    volantesCtrl.modfechaVigencia = curr_date + "/" + curr_month + "/" + curr_year;
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
	volantesCtrl.indicePromocion = 2;
	volantesCtrl.maxLength = 30;
	volantesCtrl.eventoPromocion = "";

	volantesCtrl.init = function(planPro) {

		volantesCtrl.planPro = planPro;
		
		if (volantesCtrl.planPro == "NO")
			$("#txtNombreVolante").prop("disabled", true);
			
	};
	
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
		
		volantesCtrl.indicePromocion = 2;
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
			if(volantesCtrl.resultado == "email")
				$("#divError").html("El formato de email es incorrecto");
			else if(volantesCtrl.resultado == "telefono")
				$("#divError").html("El formato de teléfono es incorrecto deben ser 10 digitos");
			else
			$("#divError").html(volantesCtrl.resultado);
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
    			fechaVigencia:  volantesCtrl.modfechaVigencia,//$("#datepicker").val(),
    			base64Imagen: "",
    			redimir: $('.radioPromo:checked').val(),
    			terminos: $("#infoadiPromo").val(),
    			templatePromo: $("#tempPromocion").text(),
    			idPromocion: $("#idPromocion").text(),
    			empresa: $("#nombreEmpresaPromo").val(),
    			nombreVolante: volantesCtrl.planPro == "SI" ? $("#txtNombreVolante").val() : ""    				
    		}	  
    	}).then(function successCallback(response) {

    		guardarContactos();		
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
		    			idPromocion: $("#idPromocion").text(),
		    			nombreVolante: $("#nombrePromocion").text()
		    		}	  
		    	}).then(function successCallback(response) {
		    		
		    		volantesCtrl.indicePromocion = 2;
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
			if(volantesCtrl.resultado == "email")
				$("#divError").html("El formato de email es incorrecto");
			else if(volantesCtrl.resultado == "telefono")
				$("#divError").html("El formato de teléfono es incorrecto deben ser 10 digitos");
			else
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
				datepickerPromo : volantesCtrl.modfechaVigencia,
				base64Imagen : "",
				redimir : $('.radioPromo:checked').val(),
				infoadiPromo : $("#infoadiPromo").val(),
				plantillaPromo : volantesCtrl.plantillaPromo,
				idPromocion : $("#idPromocion").text(),
				empresa: $("#nombreEmpresaPromo").val(),
    			nombreVolante: volantesCtrl.planPro == "SI" ? $("#txtNombreVolante").val() : "",
		};
		
		VolanteService.actualizarVolante(volante, volantesCtrl.eventoPromocion);
		guardarContactos();
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
		
		var regexTel = new RegExp("^\\d{10}$");
		var regexEmail = new RegExp('^[_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$');
		var regExpNombreVolante = new RegExp('^\\w{0,30}$');
		var $nom = $("#nombrePromo").val().trim();
		var $desc = $("#descPromo").val().trim();
		var $dp = volantesCtrl.modfechaVigencia;
		var $rp = $('.radioPromo:checked').val();
		var $tV = $("#telefonoVolante").val();
		var $eCV = $("#emailContactoVolante").val();
		var nombreVolante = $("#txtNombreVolante").val().trim();
		
		if (volantesCtrl.planPro == "SI" && nombreVolante.length > 0)
		{
			if (!regExpNombreVolante.test(nombreVolante))
				return "El nombre del volante no debe ser mayor a 30 caracteres ni debe contener caracteres especiales ni espacios en blanco";
		}
		
		if ($nom.length <= 0)
			return "Falta llenar el campo nombre de la promoción";
		else if ($desc.length <= 0)
			return "Falta llenar el campo descripción de la promoción";			
		else if ($dp.length <= 0)
			return "Falta llenar el campo vigencia de la promoción";	
		else if ($rp.length <= 0)
			return "Falta llenar el campo cómo redimir";
		else if ($tV.length > 0 && !regexTel.test($tV)) 
			 return "telefono"; 
		else if ($eCV.length > 0 && !regexEmail.test($eCV)) 
			 return "email"; 
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

    VolanteService.getVolantes();

    var upsertContactoVolantes = function(contacto) {
	
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
	
	var upsertContactoEmpresa = function(contacto) {
		
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
 
	var eliminarContactoVolantes = function(contacto) {
			
		var url = contactos.delUrl;
			
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

	function getOfferId() {
		
		var datos = {};
		var resp = requestServer("POST",contextPath + "/infomovil/getPromociones",{});
		
		if (resp[0] != undefined) {
			
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
	
	function getService() {
		
		if($( "#tipoTelefonoVolante" ).val() == "+52")
		{
			preferenceContVol = 0;
			return "E2U+voice:tel";
		}
		else
		{
			preferenceContVol = 1;
			return "E2U+voice:tel+x-mobile";
		}
		
	};
	
	var getContactoTel = function() {
		
		var valContacto = 0;
		
		if($("#idTelContactoVolante").val() > 0) 
			valContacto = $("#idTelContactoVolante").val(); 
			
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
	
	var getContactoEmail = function() {
		
		var valContacto = 0;
		
		if($("#idEmailContactoTelVolante").val() > 0) 
			valContacto = $("#idEmailContactoVolante").val();
		
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

	var guardarContactos = function() {
		
		if($("#telefonoVolante").val().length > 0)
		{
			console.log("Envio a guardar el Telefono");
			datosContacto = getContactoTel();
			upsertContactoVolantes(datosContacto);		 
		}
		
		if($("#emailContactoVolante").val().length > 0) 
		{
			console.log("Envio a guardar el Email");
			datosContacto = getContactoEmail();
			upsertContactoVolantes(datosContacto);	
		}
	};

});