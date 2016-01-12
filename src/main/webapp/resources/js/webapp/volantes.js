var app = angular.module('InfomovilVolantes', ['ngMaterial','ngMessages','angular-momentjs']);
var preferenceContVol = 0;

app
.config(function($mdDateLocaleProvider) {
	  $mdDateLocaleProvider.formatDate = function(date) {
	    return moment(date).format('DD/MM/YYYY');
	  };
})

.controller("VolantesController", function ($scope, $http, VolanteService, MensajesService,  $moment, volanteMapaService) {
	
	console.debug("Consulta javascript " + stringsIdioma['error.loginFailed'])
	
	var templatesPromo = new Array("promo8", "promo6",  "promo1", "promo5", "promo4", "promo7", "promo2", "promo3");
	var nombresPromo = new Array("Navidad", "Cursos",  "Bares","Floral", "Tecnología 2", "Buen Fin", "Hipster", "Tecnología");
	
	var volantesCtrl = this;
	volantesCtrl.modfechaVigencia = "";
	volantesCtrl.planPro = "";
	volantesCtrl.fechaVigencia = new Date();
	
	//Convertir date a string fecha
	$scope.$watch('volantesCtrl.fechaVigencia', function(v) {
		
	    var d = new Date(v);
	    volantesCtrl.modfechaVigencia = moment(d).format('DD/MM/YYYY');
	});
	
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
		
		console.log("publicarVolante");
		volantesCtrl.resultado = volantesCtrl.validarCampos();
		volantesCtrl.eventoPromocion = "promo-publicar";
		
		if (!(volantesCtrl.resultado == "datosCompletos"))
		{
			if(volantesCtrl.resultado == "email")
				$("#divError").html("El formato de email es incorrecto");
			else if(volantesCtrl.resultado == "teléfono" || volantesCtrl.resultado == "celular")
				$("#divError").html("El formato de "+volantesCtrl.resultado+" es incorrecto deben ser 10 digitos");
			else if(volantesCtrl.resultado == "fecha")
				$("#divError").html("El formato de "+volantesCtrl.resultado+" es incorrecto");
			else
				$("#divError").html(volantesCtrl.resultado);
			
			$("#divError").css("display", "block");
			console.log("error: " + $("#divError").html());
			volantesCtrl.muestraDivError = true; 
			return;
			
		}

		$("#divError").css("display", "none");
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


    		if(response.data.codeError == "0"){
        		guardarContactos();
		
				VolanteService.guardarEventoGA(volantesCtrl.eventoPromocion, 
						response.data.nombreSitio, response.data.banderaCanal);
				
				//VolanteService.getVolantesPublicar();
				VolanteService.getVolantes();
				volantesCtrl.muestraPublicarPromo = false;
				volantesCtrl.muestraPromoPublicada = true;
    		}
    		else{
    			volantesCtrl.mensaje = "El nombre elegido ya existe";
        		MensajesService.cerrarBlockUIGeneral("Volantes", volantesCtrl.mensaje);
    		}
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

				console.log("id promo: " +  $("#idPromocion").text());
				volantesCtrl.mensaje = "Eliminando volante...";
		    	MensajesService.abrirBlockUIGeneral(volantesCtrl.mensaje);
	    		
		    	$http({
		    		method: 'POST',
		    		url: contextPath + "/infomovil/eliminarPromocion",
		    		params: { 
		    			idPromocion: $("#idPromocion").text()
		    		}	  
		    	}).then(function successCallback(response) {
		    		
		    		$("#idEmailContactoVolante").text("");
		    		$("#idCelContactoVolante").text("");
		    		$("#idTelContactoVolante").text("");
		    		$("#telefonoVolante").val("");
		    		$("#telContactoVolante").val("");
		    		$("#celContactoVolante").val("");
		    		$("#nombreEmpresaPromo").val("");
		    		$("#emailContactoVolante").val("");
		    		$("#txtNombreVolante").val("");
		    		$("#tempPromocion").text("promo1");
		    		volantesCtrl.indicePromocion = 2;
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
			else if(volantesCtrl.resultado == "teléfono" || volantesCtrl.resultado == "celular")
				$("#divError").html("El formato de "+ volantesCtrl.resultado +" es incorrecto deben ser 10 digitos");
			else if(volantesCtrl.resultado == "fecha")
				$("#divError").html("El formato de "+volantesCtrl.resultado+" es incorrecto");
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
		var lWhatsapp = "javascript:alert('Esta acción no se puede completar en este dispositivo')";
		
		var lFace = "http://www.facebook.com/sharer/sharer.php?u=" + $scope.urlPromoShare + "&t=Checa%20esta%20promo%20"; 
		var lGoogle = "https://plus.google.com/share?url=" + $scope.urlPromoShare; 	
		var lEmail = "mailto:?subject="+ $scope.urlPromoShare + "%20Checa%20esta%20promo!&body=Checa%20esta%20promo:%20"+ $scope.urlPromoShare + "%0A%0ACrea%20un%20volante%20digital%20asi%20con%20www.infomovil.com%0A%0A"; 
		var lTwitt = "http://www.twitter.com/intent/tweet?text="+ $scope.urlPromoShare +"%20%0A%0ACheca%20esta%20promo:%20"+ $scope.urlPromoShare; 
		
		if(navigator.userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile/i))
			var lWhatsapp = "whatsapp://send?text=Checa%20esta%20promo:%20" + $scope.urlPromoShare;
		
		$('#Facebook').attr('href', lFace);
		$('#Google').attr('href', lGoogle);
		$('#Email').attr('href', lEmail);
		$('#Twitter').attr('href', lTwitt);
		$('#WhatsApp').attr('href', lWhatsapp);
	
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
	
	
	

 
	
	volantesCtrl.validarCampos = function() {
		
		var regexFecha = new RegExp(/^(((0[1-9]|[12]\d|3[01])\/(0[13578]|1[02])\/((19|[2-9]\d)\d{2}))|((0[1-9]|[12]\d|30)\/(0[13456789]|1[012])\/((19|[2-9]\d)\d{2}))|((0[1-9]|1\d|2[0-8])\/02\/((19|[2-9]\d)\d{2}))|(29\/02\/((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00))))$/g);
		var regexTel = new RegExp("^\\d{10}$");
		var regexEmail = new RegExp('^[_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$');
		var regExpNombreVolante = new RegExp('^\\w{0,30}$');
		var $nom = $("#nombrePromo").val().trim();
		var $desc = $("#descPromo").val().trim();
		var $dp = volantesCtrl.modfechaVigencia;
		var $rp = $('.radioPromo:checked').val();
		var $tV = $("#telContactoVolante").val();
		var $cV = $("#celContactoVolante").val();
		var $eCV = $("#emailContactoVolante").val();
		var nombreVolante = $("#txtNombreVolante").val().trim();
		var $fV = $(".md-datepicker-input").val();
		var bolFecha = regexFecha.test($fV);
		
		if (!volantesCtrl.muestraPromoPublicada) 
		{
			if (volantesCtrl.planPro == "SI" && nombreVolante.length > 0)
			{
				if (!regExpNombreVolante.test(nombreVolante))
					return "El nombre del volante no debe ser mayor a 30 caracteres ni debe contener caracteres especiales ni espacios en blanco";
			}
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
			 return "teléfono"; 
		else if($cV.length > 0 && !regexTel.test($cV)) 
			 return "celular"; 
		else if($eCV.length > 0 && !regexEmail.test($eCV)) 
			 return "email"; 
		else if(!bolFecha )
			 return "fecha"; 
		else
			return "datosCompletos";
	};

    $scope.$watch(function () { return VolanteService.volantes(); }, function (value) {
    	
    	volantesCtrl.volantes = value;
    	volantesCtrl.arr = value instanceof Array ? value : [value]; 
		
    	console.log("volantes total: " + VolanteService.getTotVolantes() + ", volantesCtrl.arr.length: " + volantesCtrl.arr.length);
		if (volantesCtrl.arr.length > 0 && VolanteService.getTotVolantes() != undefined)
		{	    	
			volantesCtrl.muestraPublicarPromo = false;
			volantesCtrl.muestraPromoPublicada = true;
			console.log("si hay promo");
			if(volantesCtrl.arr[0] != undefined) {
				
				volantesCtrl.modfechaVigencia = volantesCtrl.arr[0].endDateOffer;
				var fechaVigencia = $moment(volantesCtrl.arr[0].endDateOffer, "DD/MM/YYYY");
				volantesCtrl.fechaVigencia = fechaVigencia.toDate();
				$("#txtNombreVolante").val(volantesCtrl.arr[0].pagina)
			}
			
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
			requestServer("GET",contextPath + "/infomovil/refrescarPromocion",{});
			console.debug("Refrescando la promocion")
						 
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
		console.debug("Este nunca se ejecuta! Server " + server + "y OfferId es: " + datos.offerId , datos.empresa, datos.pagina);
		return datos;
	};

	var getContactoTel = function(){
		var valContacto = 0;
		if($("#idTelContactoVolante").text() > 0) valContacto = $("#idTelContactoVolante").text(); 
			var offerID = VolanteService.getOfferId();
			var contacto = {
					contactoId: valContacto,
					offerId : offerID.offerId,
					descripcion : "",
					orderNaptr : 0,
					preference : 0,
					contenido : $( "#telContactoVolante" ).val(),
					codigoPais : "+52",
					services : "E2U+voice:tel", 
					tipoContacto : 'tel:',
					activo : 1,
					ultimaModificacion : "",
					usuarioModifico : "",
					hashUser : hashUsuario()
				};
			return contacto;
	};
	
	var getContactoCel = function(){
		var valContacto = 0;
		if($("#idCelContactoVolante").text() > 0) valContacto = $("#idCelContactoVolante").text(); 
			var offerID = VolanteService.getOfferId();
			var contacto = {
					contactoId: valContacto,
					offerId : offerID.offerId,
					descripcion : "",
					orderNaptr : 0,
					preference : 1,
					contenido : $( "#celContactoVolante" ).val(),
					codigoPais : "+52 1",
					services : "E2U+voice:tel+x-mobile", 
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
		if($("#idEmailContactoVolante").text() > 0) 
			valContacto = $("#idEmailContactoVolante").text(); 
		
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
        
		if($("#telContactoVolante").val().length > 0) {
			datosContacto = getContactoTel();
			upsertContactoVolantes(datosContacto);		 
		}else{
			// Elimianar el contacto porque esta vacio
			VolanteService.eliminarContactoVolante("tel");
		}
		if($("#celContactoVolante").val().length > 0){
			datosContacto = getContactoCel();
			upsertContactoVolantes(datosContacto);		 
		}else{
			// Elimianar el contacto porque esta vacio
			VolanteService.eliminarContactoVolante("cel");
		}
		
		if($("#emailContactoVolante").val().length > 0) 
		{
			datosContacto = getContactoEmail();
			upsertContactoVolantes(datosContacto);	
		}else{
			//Elininar el contacto porque esta vacio
			VolanteService.eliminarContactoVolante("email");
		}
		
	};

});



function descargarArchivo(tipo) {
	console.log("Entro a descargar el archivo con el tipo: " + tipo);
	var eventoPromocion = "promo-guardarPDF";
	var pathArchivo = $("#urlVistaPreviaPromoImprimir").attr('src');

	if (pathArchivo == undefined)
		pathArchivo = $("#urlPromocion").text() + "?vistaPrevia=1";
	
	pathArchivo = pathArchivo.replace("html", tipo);
	var link = document.createElement("a");
	document.body.appendChild(link);
	link.target="_self";
	link.download = "promo." + tipo;
	link.href = pathArchivo;
	link.click();

    if (tipo == 'jpg')
    	eventoPromocion = "promo-guardarJPG";
	
    ga('send', 'event', 'promo', eventoPromocion, $("#tempNombrePromo").val(), $("#tempBanderaPromo").val());
};


function imprimirPromocionWeb() {

	var urlPromo = $("#urlPromocion").text();
	var nombrePromo = urlPromo.substring(urlPromo.lastIndexOf("/") + 1);
	var eventoPromocion = 'promo-imprimir';
	var oldstrInner = document.documentElement.innerHTML;
	var oldstr = document.body.innerHTML;
	var html = document.html;
	$.blockUI.defaults.baseZ = 9000;
	$.blockUI({
		message : "Generando impresión...",
		css : {
			class : "alertaUI",
			top : ($(window).height() - 400) / 2 + 'px',
			left : ($(window).width() - 400) / 2 + 'px',
			width : '400px'
		}
	});

	$.ajax({
		type : "POST",
		url : contextPath + "/infomovil/getHTMLPromocion",
		data : {nombrePromocion: nombrePromo},
	
		success : function(data) {
			
			$("#myModalPromoImprimir").modal('toggle');
			document.documentElement.innerHTML = data.elHtmlDePromocion;
			setTimeout(function () { window.print(); 
			window.focus();
			window.close();
			document.documentElement.innerHTML = oldstrInner;
		    $(document.body).html(oldstr);
		    banderaImprimir = true;

		    $("#myModalPromoImprimir").modal();	
			$.unblockUI();}, 2500);
			
			ga('send', 'event', 'promo', eventoPromocion, $("#tempNombrePromo").val(), $("#tempBanderaPromo").val());
			
		},
		error : function(json) {
			$.unblockUI();
			banderaImprimir = false;
			BootstrapDialog.show({
				title: "<span class='textBlack' style='font-size:1.15em;'><img alt='' src='../resources/webapp/images/fa-warning-bk.png'  title='Alerta' />No se ha generado la impresión</span>",
				message: '<div style="display:block; min-height:150px;"><p class="textBlack text-center" style="font-size:1.15em;">Por favor intentalo más tarde.</p><br/>'
			});
									
		}
	});	
};

var banderaImprimir=false;
function cerrarModalImprimir(){
	if(banderaImprimir == true)
		location.reload();
};
