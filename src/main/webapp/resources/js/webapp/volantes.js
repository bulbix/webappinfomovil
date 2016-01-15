var app = angular.module('InfomovilVolantes', ['ngMaterial','ngMessages','angular-momentjs']);
var preferenceContVol = 0;
var banderaImprimir = false;

app
.config(function($mdDateLocaleProvider) {
	  $mdDateLocaleProvider.formatDate = function(date) {
	    return moment(date).format('DD/MM/YYYY');
	  };
})

.controller("VolantesController", function ($scope, $http, VolanteService, MensajesService,  $moment, volanteMapaService) {
	
	var templatesPromo = new Array("promo8", "promo6",  "promo1", "promo5", "promo4", "promo7", "promo2", "promo3");
	
	var volantesCtrl = this;
	volantesCtrl.volantes = null;
	volantesCtrl.modfechaVigencia = "";
	volantesCtrl.planPro = "";
	volantesCtrl.fechaVigencia = new Date();
	volantesCtrl.isSpanish = idiomaSeleccionado == 'es';

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
	volantesCtrl.tabla = "multiproducto";
	volantesCtrl.indicePromocion = 2;
	volantesCtrl.maxLength = 30;
	volantesCtrl.eventoPromocion = "";

	volantesCtrl.init = function(planPro) {

		volantesCtrl.planPro = planPro;
		 
		if (volantesCtrl.planPro == "NO")
			$("#txtNombreVolante").prop("disabled", true);
		
		//console.log("El idioma seleccionado es: " +idiomaSeleccionado);
		if(idiomaSeleccionado == 'en') {
			$("#nombreVolanteIngles").hide();
			$("#miCtaEs").hide();
			$("#publicarVolanteIngles").attr("class", "col-xs-12 col-sm-12 text-right reset");
		}
	};
	
	volantesCtrl.actualizaProducto = function() {

		volantesCtrl.mensaje = stringsIdioma['VOEDLA0032'];
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
    		
    		volantesCtrl.mensaje = stringsIdioma['VOEDER0033'];
    		MensajesService.cerrarBlockUIGeneral("Volantes", volantesCtrl.mensaje);
    		
    	});
	};
	
	volantesCtrl.vistaPrevia = function() {
		
		volantesCtrl.indicePromocion = 2;
		volantesCtrl.plantillaPromo = templatesPromo[volantesCtrl.indicePromocion];
    	var mensaje = stringsIdioma['VOEDLA0034'];
    	MensajesService.abrirBlockUIGeneral(mensaje);
    	
    	$http({
    		method: 'POST',
    		url: contextPath + "/infomovil/verPromo",
    		params: { 
    			idDominio : 0,
    			titulo: $("#nombrePromo").val(),
    			descripcion: $("#descPromo").val(),
    			fechaVigencia: volantesCtrl.modfechaVigencia,
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
    		volantesCtrl.mensaje = stringsIdioma['VOEDER0035'];
    		MensajesService.cerrarBlockUIGeneral("Volantes", volantesCtrl.mensaje);
    	});
    	
	};
	
	volantesCtrl.publicarVolante = function() {

		volantesCtrl.resultado = volantesCtrl.validarCampos();
		volantesCtrl.eventoPromocion = "promo-publicar";

		if (!(volantesCtrl.resultado == "datosCompletos"))
		{	
			$("#divError").html(volantesCtrl.resultado);
			$("#divErrorImg").css("display", "inline");
			volantesCtrl.muestraDivError = true;
			return;
		}

		$("#divErrorImg").css("display", "none");
		volantesCtrl.muestraDivError = false;
		volantesCtrl.plantillaFinalPromo = "promo1";
		
		if (volantesCtrl.plantillaFinalPromo.length > 0 && volantesCtrl.plantillaFinalPromo != null)
			volantesCtrl.plantillaPromo = volantesCtrl.plantillaFinalPromo;

		volantesCtrl.mensaje = stringsIdioma['VOEDLA0036'];
    	MensajesService.abrirBlockUIGeneral(volantesCtrl.mensaje);

    	$http({
    		method: 'POST',
    		url: contextPath + "/infomovil/guardarPromocion",
    		params: { 
    			titulo: $("#nombrePromo").val(),
    			descripcion: $("#descPromo").val(),
    			fechaVigencia:  volantesCtrl.modfechaVigencia,
    			base64Imagen: "",
    			redimir: $('.radioPromo:checked').val(),
    			terminos: $("#infoadiPromo").val(),
    			templatePromo: $("#tempPromocion").text(),
    			idPromocion: $("#idPromocion").text(),
    			empresa: $("#nombreEmpresaPromo").val(),
    			nombreVolante: volantesCtrl.planPro == "SI" ? $("#txtNombreVolante").val() : ""    				
    		}	  
    	}).then(function successCallback(response) {

    		if(response.data.codeError == "0") {
    			
        		guardarContactos(function() {
        			
    				VolanteService.guardarEventoGA(volantesCtrl.eventoPromocion, 
    						response.data.nombreSitio, response.data.banderaCanal);

    				VolanteService.getVolantes();
    				volantesCtrl.muestraPublicarPromo = false;
    				volantesCtrl.muestraPromoPublicada = true;
    				
        		});
    		}
    		else{
    			volantesCtrl.mensaje = stringsIdioma['VOEDER0037'];
        		MensajesService.cerrarBlockUIGeneral("Volantes", volantesCtrl.mensaje);
    		}

    		
    	}, function errorCallback(response) {
    		volantesCtrl.mensaje = stringsIdioma['VOEDER0038'];
    		MensajesService.cerrarBlockUIGeneral("Volantes", volantesCtrl.mensaje);
    	});
	};
	
	volantesCtrl.eliminarVolante = function() {
		
		volantesCtrl.eventoPromocion = "promo-eliminar";
		var textos = {
				titulo : stringsIdioma['VOEDLA0058'],
				mensaje : stringsIdioma['VOEDLA0039']
			};
		
		MensajesService.obtenerConfirmacion(textos, function(confirmarBorrar) {
			
			if (confirmarBorrar) {

				volantesCtrl.mensaje = stringsIdioma['VOEDLA0040'];
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
		    		volantesCtrl.mensaje = stringsIdioma['VOEDER0038'];
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
			$("#divError").html(volantesCtrl.resultado);
			$("#divErrorImg").css("display", "inline");
			volantesCtrl.muestraDivError = true;
			return;
		}
		
		volantesCtrl.muestraDivError = false;
		$("#divErrorImg").css("display", "none");
		
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
		var lWhatsapp = "javascript:alert('" + stringsIdioma['VOEDLA0055'] + "')";
		
		var lFace = "http://www.facebook.com/sharer/sharer.php?u=" + $scope.urlPromoShare + "&t=" + stringsIdioma['VOEDLA0056']; 
		var lGoogle = "https://plus.google.com/share?url=" + $scope.urlPromoShare; 	
		var lEmail = "mailto:?subject="+ $scope.urlPromoShare + "%20" + stringsIdioma['VOEDLA0056'] + "!&body=" + stringsIdioma['VOEDLA0056'] + ":%20"+ $scope.urlPromoShare + "%20%0A%0A"+ stringsIdioma['VOEDLA0057']; 
		var lTwitt = "http://www.twitter.com/intent/tweet?text="+ $scope.urlPromoShare +"%20%0A%0A" + stringsIdioma['VOEDLA0056'] + ":%20" + $scope.urlPromoShare; 
		
		if(navigator.userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile/i))
			var lWhatsapp = "whatsapp://send?text=" + stringsIdioma['VOEDLA0056'] + $scope.urlPromoShare;
		
		$('#Facebook').attr('href', lFace);
		$('#Google').attr('href', lGoogle);
		$('#Email').attr('href', lEmail);
		$('#Twitter').attr('href', lTwitt);
		$('#WhatsApp').attr('href', lWhatsapp);
	
		$('#myModalPromoShare').modal();
	};

	volantesCtrl.imprimirPromo = function() {

		volantesCtrl.mensaje = stringsIdioma['VOEDLA0077'];
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
		var $eCV = $("#emailContactoVolante").val().toLowerCase().trim();
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
			return stringsIdioma['VOEDLA0047'];
		else if ($desc.length <= 0)
			return stringsIdioma['VOEDLA0048'];			
		else if ($dp.length <= 0)
			return stringsIdioma['VOEDLA0049'];	
		else if ($rp == undefined || $rp.length <= 0)
			return stringsIdioma['VOEDLA0050'];
		else if ($tV.length > 0 && !regexTel.test($tV)) 
			 return stringsIdioma['VOEDLA0052']; 
		else if($cV.length > 0 && !regexTel.test($cV)) 
			 return stringsIdioma['VOEDLA0053']; 
		else if($eCV.length > 0 && !regexEmail.test($eCV)) 
			 return stringsIdioma['VOEDLA0051']; 
		else if(!bolFecha )
			 return stringsIdioma['VOEDLA0054']; 
		else
			return "datosCompletos";
	};

    $scope.$watch(function () { return VolanteService.volantes(); }, function (value) {
    	
    	volantesCtrl.arr = value instanceof Array ? value : [value]; 

		if (volantesCtrl.arr.length > 0 && VolanteService.getTotVolantes() != undefined)
		{	    	
			volantesCtrl.volantes = value;
			volantesCtrl.muestraPublicarPromo = false;
			volantesCtrl.muestraPromoPublicada = true;

			if(volantesCtrl.arr[0] != undefined) {
				
				volantesCtrl.modfechaVigencia = volantesCtrl.arr[0].endDateOffer;
				var fechaVigencia = $moment(volantesCtrl.arr[0].endDateOffer, "DD/MM/YYYY");
				volantesCtrl.fechaVigencia = fechaVigencia.toDate();
				$("#txtNombreVolante").val(volantesCtrl.arr[0].pagina)
			}
		}
		else
		{
			volantesCtrl.volantes = new Array("");
			volantesCtrl.volantes.idOffer = 0;
			volantesCtrl.volantes.urlPromocion = "";
			volantesCtrl.volantes.template = "promo1";
			volantesCtrl.volantes.empresa = "";
			volantesCtrl.volantes.titleOffer = "";
			volantesCtrl.volantes.descOffer = "";
			volantesCtrl.volantes.termsOffer = "";
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

			requestServer("GET", contextPath + "/infomovil/refrescarPromocion",{});
						 
		}, function errorCallback(response) {
			console.log("El error es: " + response.data, response.data.code);	
		});
	};
	
	var upsertContactoEmpresa = function(contacto) {
		
		var url = contactos.saveEmpUrl;
		var offerID = VolanteService.getOfferId();
		var hash = hashUsuario();
		var empresaInput = $("#nombreEmpresaPromo").val();
		
		dataEmp = {offerId:offerID.offerId,empresa: empresaInput, hashUser:hash};
		$http({	
			method: 'POST',
			url: url,
			data: dataEmp,
			async : true
		}).then(function successCallback(response) {
			VolanteService.getContactosVolantes();			 
		}, function errorCallback(response) {
			console.log("El error es: " + response.data, response.data.code);
		});
		
		$.unblockUI();
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
		
		$.unblockUI();
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

	var getContactoTel = function() {
		
		var valContacto = 0;
		
		if($("#idTelContactoVolante").text() > 0) 
			valContacto = $("#idTelContactoVolante").text(); 
			
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
	
	var getContactoCel = function() {
		
		var valContacto = 0;
		
		if($("#idCelContactoVolante").text() > 0) 
			valContacto = $("#idCelContactoVolante").text(); 
		
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
				contenido : $( "#emailContactoVolante" ).val().toLowerCase().trim(),
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
	
	var guardarContactos = function(callback) {
        
		if($("#telContactoVolante").val().length > 0) {
			datosContacto = getContactoTel();
			upsertContactoVolantes(datosContacto);		 
		}else{
			VolanteService.eliminarContactoVolante("tel");
		}
		
		if($("#celContactoVolante").val().length > 0){
			datosContacto = getContactoCel();
			upsertContactoVolantes(datosContacto);		 
		}else{
			VolanteService.eliminarContactoVolante("cel");
		}
		
		if($("#emailContactoVolante").val().length > 0) 
		{
			datosContacto = getContactoEmail();
			upsertContactoVolantes(datosContacto);	
		}else{
			VolanteService.eliminarContactoVolante("email");
		}
		
		if (callback != null)
			callback();
	};

});

function descargarArchivo(tipo) {
	
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
	var pathArchivo = $("#urlVistaPreviaPromoImprimir").attr('src');
	if (pathArchivo == undefined)
		pathArchivo = $("#urlPromocion").text() + "?vistaPrevia=1";
	
	pathArchivo = pathArchivo.replace("html", "jpg");
	var htmlImagen = "<HTML><HEAD><TITLE>Infomovil</TITLE></HEAD><BODY  style='margin: 0 auto; text-align: center;'><img src='"+pathArchivo+"' alt='Infomovil' style=“width:100%; min-width:600px; height:auto; min-height:600px; margin:0 auto;”></BODY></HTML>";
	document.documentElement.innerHTML = htmlImagen;
	setTimeout(function () { window.print(); 
	window.focus();
	window.close();
	document.documentElement.innerHTML = oldstrInner;
    $(document.body).html(oldstr);
    banderaImprimir = true;
    $("#myModalPromoImprimir").modal();	
	$.unblockUI();}, 2500);	
	ga('send', 'event', 'promo', eventoPromocion, $("#tempNombrePromo").val(), $("#tempBanderaPromo").val());
};

function cerrarModalImprimir() {
	
	if (banderaImprimir)
		location.reload();
};