

var $nombrePromo =  $("#nombrePromo");
var $descPromo =  $("#descPromo");
var $datepickerPromo =  $("#datepicker");
var $infoadiPromo =  $("#infoadiPromo");
var $divPromoPublicada = $("#divPromoPublicada");
var $divPublicarPromo = $("#divPublicarPromo");
var $idPromocion = $("#idPromocion");
var $urlPromocion = $("#urlPromocion");
var $divError = $("#divError");
var $btnPublicar = $("#btnPublicar");
var $btnVistaPrevia = $("#btnVistaPrevia");
var $btnCompartir = $("#btnCompartir");
var $btnVerPromo = $("#btnVerPromo");
var $btnEliminar = $("#btnEliminar");
var $btnGuardar = $("#btnGuardar");
var templatesPromo = new Array( "promo6",  "promo1","promo5", "promo4",  "promo2", "promo3"); //, "promo6""promo8","promo7",);
var nombresPromo = new Array( "Cursos",  "Bares","Floral", "Tecnología 2",  "Hipster", "Tecnología"); //, "ATT""Navidad","Buen Fin",); /*Cambiar nombres*/
var plantillaPromo = "promo1";
var indicePromocion = 0;
var nombreSitio = "";
var banderaCanal = "";
var $btnVistaPreviaImprimirMovil = $("#btnImprimirPromoMovil");
var $btnVistaPreviaImprimir = $("#btnImprimirPromo");
var oldstrInner = "";
var oldstr = "";
var pathPDF =  "";
var pathJPG = "";
var $urlVPPromoImprimir = $("#urlVistaPreviaPromoImprimir");
/*$(function() {
	$("#datepicker").datepicker({ dateFormat: 'dd/mm/yy' });
	console.log("$datepickerPromo");
});
	
$("#datepicker").click(function() {
	var date = $datepickerPromo.datepicker({ dateFormat: 'dd/mm/yy' }).val();
	console.log("click $datepickerPromo");
});*/

var $getPromociones = function() {
	
	$.blockUI.defaults.baseZ = 9000;
	$.blockUI({
		message: "Obteniendo Promoción...",
		css: {
			class:"alertaUI",
			top:  ($(window).height() - 400) /2 + 'px',
			left: ($(window).width() - 400) /2 + 'px',
			width: '400px'
		}
	});
	
	$.ajax({
		type : "POST",
		url : contextPath + "/infomovil/getPromociones",
		dataType : "json",
		success : function(data) {
			if(data.length > 0){ 
				$nombrePromo.val(data[0].titleOffer); 
				$descPromo.val(data[0].descOffer);
				$infoadiPromo.val(data[0].termsOffer);
				 $idPromocion.val(data[0].idOffer);
				 $datepickerPromo.val(data[0].endDateOffer);
				 $divPublicarPromo.hide();
				 $divPromoPublicada.show();
				 $activaRadio(data[0].redeemOffer);
				}else{
					$divPromoPublicada.hide();
					$divPublicarPromo.show();
				}
			
			$.unblockUI();
		},
		error : function(json) {
			$.unblockUI();
			BootstrapDialog.show({
				title: "<span class='textBlack' style='font-size:1.15em;'><img alt='' src='../resources/webapp/images/fa-warning-bk.png'  title='Alerta' />No se ha eliminado la Promoción</span>",
				message: '<div style="display:block; min-height:150px;"><p class="textBlack text-center" style="font-size:1.15em;">Por favor intentalo más tarde.</p><br/>'
			});		
		
		}
		
	});	
};

var $publicarPromocion = function() {
console.log("Entro a publicarpromocion");
	var plantillaFinalPromo = $("#tempPromocion").val();
	
	if (plantillaFinalPromo.trim().length > 0 && plantillaFinalPromo != null)
		plantillaPromo = plantillaFinalPromo;
	
	$.blockUI.defaults.baseZ = 9000;
	$.blockUI({
		message: "Publicando promoción...",
		css: {
			class:"alertaUI",
			top:  ($(window).height() - 400) /2 + 'px',
			left: ($(window).width() - 400) /2 + 'px',
			width: '400px'
		}
	});	
			
	$.ajax({
		type : "POST",
		url : contextPath + "/infomovil/guardarPromocion",
		data : {
			titulo: $nombrePromo.val(),
			descripcion: $descPromo.val(),
			fechaVigencia:  $datepickerPromo.val(),
			base64Imagen: "",
			redimir: $('.radioPromo:checked').val(),
			terminos:$infoadiPromo.val(),
			templatePromo: plantillaFinalPromo,
			idPromocion:$idPromocion.val(),
			empresa: "mi Empresa",
			nombreVolante: "juniorMan"
		},
		success : function(data) {			
			$divPublicarPromo.hide();
			$divPromoPublicada.show();
			$("#idPromocion").val(data.idOffer);
			$urlPromocion.val(data.urlPromocion);
			$urlVPPromoImprimir.attr('src' , data.urlPromocion);
			$("#urlPromo").val(data.urlPromocion);
			nombreSitio = data.nombreSitio;
			banderaCanal = data.banderaCanal; 
			$("#tempNombrePromo").val(data.nombreSitio);
			$("#tempBanderaPromo").val(data.banderaCanal);
			console.log("Va a ir a get Contacto");
			datosContacto = getContacto();
			console.log("ya regreso de getcontacto");
			upsertContactoVolantes(datosContacto);
			console.log("ya debio haber ido a upsertcontactovolante");
			guardarEventoGA('promo-publicar');
			$.unblockUI();
		},
		error : function(json) {
			$.unblockUI();
			BootstrapDialog.show({
				title: "<span class='textBlack' style='font-size:1.15em;'><img alt='' src='../resources/webapp/images/fa-warning-bk.png'  title='Alerta' />No se ha publicado la Promoción</span>",
				message: '<div style="display:block; min-height:150px;"><p class="textBlack text-center" style="font-size:1.15em;">Por favor intentalo más tarde.</p><br/>'
			});							
		}
	});				
};

var $guardarCambiosEnPromocion = function() {
	
	var plantillaFinalPromo = $("#tempPromocion").val();
	
	if (plantillaFinalPromo.trim().length > 0 && plantillaFinalPromo != null)
		plantillaPromo = plantillaFinalPromo;
	
	$.blockUI.defaults.baseZ = 9000;
	$.blockUI({
		message: "Guardando cambios...",
		css: {
			class:"alertaUI",
			top:  ($(window).height() - 400) /2 + 'px',
			left: ($(window).width() - 400) /2 + 'px',
			width: '400px'
			}
		});	
		
	$.ajax({
		type : "POST",
		url : contextPath + "/infomovil/guardarPromocion",
		dataType : "json",
		data : {
			titulo: $nombrePromo.val(),
			descripcion: $descPromo.val(),
			fechaVigencia:  $datepickerPromo.val(),
			base64Imagen: "",
			redimir: $('.radioPromo:checked').val(),
			terminos: $infoadiPromo.val(),
			templatePromo: plantillaPromo,
			idPromocion:$idPromocion.val()
			},
			success : function(data) {
				$divPublicarPromo.hide();
				$divPromoPublicada.show();
				$("#idPromocion").val(data.idOffer);		
				$("#tempPromocion").val(data.templatePromo);
				nombreSitio = data.nombreSitio;
				banderaCanal = data.banderaCanal;
				guardarEventoGA('promo-guardar');
				$.unblockUI();
			},
			error : function(json) {
				$.unblockUI();
				BootstrapDialog.show({
					title: "<span class='textBlack' style='font-size:1.15em;'><img alt='' src='../resources/webapp/images/fa-warning-bk.png'  title='Alerta' />No se han guardado los cambios</span>",
					message: '<div style="display:block; min-height:150px;"><p class="textBlack text-center" style="font-size:1.15em;">Por favor intentalo más tarde.</p><br/>'
				});
										
			}
		});	
};

var $eliminarPromocion = function() {

	var eliminarPromocion = false;
	
	BootstrapDialog
	.show({
		title : '<div class="textBlack">Eliminar</div>',
		message : '<div style="display:block; padding: 10px;">¿Seguro que deseas eliminar la promoción?</div>',
		buttons : [{
					
			label : 'Cancelar',
			action : function(dialog) {
				dialog.close();
				
			}
		},
		{
			label : 'Aceptar',
			action : function(dialog) {
				dialog.close();

				$.blockUI.defaults.baseZ = 9000;
				$.blockUI({
					message: "Eliminando la promoción...",
					css: {
						class:"alertaUI",
						top:  ($(window).height() - 400) /2 + 'px',
						left: ($(window).width() - 400) /2 + 'px',
						width: '400px'
					}
				});
				
				$.ajax({
					type : "POST",
					url : contextPath + "/infomovil/eliminarPromocion",
					dataType : "json",
					
					data : {
						idPromocion: $idPromocion.val()	
					},
					success : function(data) {
						 $nombrePromo.val(""); 
						 $descPromo.val("");
						 $infoadiPromo.val("");
						 $idPromocion.val("");
						 $datepickerPromo.val("");
						 $urlPromocion.val("");
						 $divPublicarPromo.show();
						 $divPromoPublicada.hide();
						 $activaRadio("0");
						 templatePromo = "promo1";
						 $("#tempPromocion").val("");
						 nombreSitio = data.nombreSitio;
						 banderaCanal = data.banderaCanal;
						 guardarEventoGA('promo-eliminar');
						 $.unblockUI();
					},
					error : function(json) {
						$.unblockUI();
						BootstrapDialog.show({
							title: "<span class='textBlack' style='font-size:1.15em;'><img alt='' src='../resources/webapp/images/fa-warning-bk.png'  title='Alerta' />No se ha eliminado la Promoción</span>",
							message: '<div style="display:block; min-height:150px;"><p class="textBlack text-center" style="font-size:1.15em;">Por favor intentalo más tarde.</p><br/>'
						});						
					}
				});
			}
		}]
	});
};

var $compartirPromocion = function() {	
	//$('#myModalPromoShare').modal();		
};

var $verPromocionActiva = function() {
	
	var $urlPromo = $("#urlPromocion").val();
	
	if ($urlPromo.trim().length > 0 && $urlPromo != null)
		window.open($urlPromo, '_blank');
};

var $vistaPrevia = function() {

	$.blockUI.defaults.baseZ = 9000;
	$.blockUI({
		message: "Generando vista previa...",
		css: {
			class:"alertaUI",
			top:  ($(window).height() - 400) /2 + 'px',
			left: ($(window).width() - 400) /2 + 'px',
			width: '400px'
		}
	});
	
	$.ajax({
		
		type : "POST",
		url : contextPath + "/infomovil/verPromo",
		dataType : "json",
		data : {	
			idDominio : 0,
			titulo: $nombrePromo.val(),
			descripcion: $descPromo.val(),
			fechaVigencia:  $datepickerPromo.val(),
			base64Imagen: "",
			redimir: $('.radioPromo:checked').val(),
			terminos:$infoadiPromo.val(),
			templatePromo: plantillaPromo,
			empresa: "mi Empresa"
		},
			success : function(data) {
				$("#urlVistaPreviaPromo").attr('src', data.urlVistaPreviaPromo + '?vistaPrevia=1');
				$("#myModalPromo").modal();	
				$.unblockUI();
			},
			error : function(json) {
				$.unblockUI();
				BootstrapDialog.show({
					title: "<span class='textBlack' style='font-size:1.15em;'><img alt='' src='../resources/webapp/images/fa-warning-bk.png'  title='Alerta' />No se ha podido obtener la vista previa de la Promoción</span>",
					message: '<div style="display:block; min-height:150px;"><p class="textBlack text-center" style="font-size:1.15em;">Por favor intentalo más tarde.</p><br/>'
				});									
			}
		});	
	};

var $activaRadio  = function(radio) {
	
	switch(radio) 
	{
		case 'No especificado':
			$("#r1").prop('checked', true);
		break;
	
		case 'Llámanos':
			$("#r2").prop('checked', true);
		break;
		
		case 'Envíanos un e-mail':
			$("#r3").prop('checked', true);
		break;
		
		case 'Visítanos':
			$("#r4").prop('checked', true);
		break;
		
		default: $("#r2#r3#r4").prop('checked', false);
			$("#r1").prop('checked', true);
		}
};

var $validarCampos  = function() {
	
	var $nom = $nombrePromo.val().trim();
	var $desc = $descPromo.val().trim();
	var $dp = $datepickerPromo.val();
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

$(document).ready(function() {	
	
	$btnPublicar.click(function() {

		$resultado = $validarCampos(); 
		
		if( $resultado == "datosCompletos")
		{
			$divError.css("display", "none");
			$publicarPromocion();
		}
		else
		{
			$divError.html("Falta llenar el campo " + $resultado);
			$divError.css("display", "block");
		}
		
	});
	
	$btnVistaPrevia.click(function() {
		$vistaPrevia();
	});
	
	$btnVistaPreviaImprimir.click(function(){
		$vistaPreviaImprimir();
		
	});
	$btnVistaPreviaImprimirMovil.click(function(){
		$vistaPreviaImprimir();
		
	});
	
	$btnCompartir.click(function() {
		var url = $("#urlPromocion").val(); 
		var lFace = "http://www.facebook.com/sharer/sharer.php?u=" + url + "&t=Checa%20esta%20promo%20"; 
		$('#Facebook').attr('href', lFace); 
		var lGoogle = "https://plus.google.com/share?url=" + url; 
		$('#Google').attr('href', lGoogle);
		var lEmail = "mailto:?subject="+ url + "%20Checa%20esta%20promo!&body=Checa%20esta%20promo:%20"+ url + "%0A%0ACrea%20un%20volante%20digital%20asi%20con%20www.infomovil.com%0A%0A"; 
		$('#Email').attr('href', lEmail); 
		var lTwitt = "http://www.twitter.com/intent/tweet?text="+ url +"%20%0A%0ACheca%20esta%20promo:%20"+ url; 
		$('#Twitter').attr('href', lTwitt);
		if(navigator.userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile/i)){ var lWhatsapp = "whatsapp://send?text=Checa%20esta%20promo:%20" + url; }else{ var lWhatsapp = "javascript:alert('Esta acción no se puede completar en este dispositivo')"; } 
		$('#WhatsApp').attr('href', lWhatsapp);
		$compartirPromocion();	
	});
	
	$btnVerPromo.click(function() {
		$verPromocionActiva();		
	});
	
	$btnEliminar.click(function() {
		$eliminarPromocion();
	});
	
	$btnGuardar.click(function() {

		$resultado = $validarCampos(); 
		if( $resultado == "datosCompletos") {
			$("#divError").val("");
			$("#divError").css("display", "none");
			$guardarCambiosEnPromocion();
		}else{
			$divError.text("Falta llenar el campo " + $resultado);
			$("#divError").css("display", "block");
		}

	});
	
	
				
});

function generarSliderPromo()
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
	
	$('#modalTempPromo').html("<div id='myModalTempPromo' class='modal fade' tabindex='-1' role='dialog' aria-labelledby='myModalLabel' aria-hidden='true'>" +
			"<div class='modal-dialog modal-md'><div class='modal-content'>" +

			"<div class='modal-header'>" +
			 	"<button type='button' class='close textBlack pull-left' data-dismiss='modal' aria-label='Close'><span aria-hidden='true'>&times;</span></button> <button type='button' class='btn btn-purple pull-right txtBtnEditor' onClick='actualizaEstiloPromo()'>Aplicar estilo</button>" +
			        "</div><div class='modal-body'>" + slider + "</div><div class='modal-footer'></div></div></div></div>");
	
	var slider = $('.bxslider').bxSlider({
		 moveSlides: 1,
		    displaySlideQty: 2,
		    responsive: false,
		adaptiveHeight: true,
		mode: 'fade',
		captions: true,
		pager: true,
		touchEnabled : true,
		useCSS:false,
		onSlideAfter: function() { indicePromocion = slider.getCurrentSlide(); },
		});
	
	$(document).on('click','.bx-next', function() {
		indicePromocion = slider.getCurrentSlide();		
		});
	
	$(document).on('click','.bx-prev', function() {
		indicePromocion = slider.getCurrentSlide();
		});

	$(document).on('click','.bx-pager-link', function() {
		indicePromocion = slider.getCurrentSlide();
		});	
}

function actualizaEstiloPromo() {

	plantillaPromo = templatesPromo[indicePromocion];
	
	if ($('#btnVistaPrevia').is(':visible'))
	{
		$('#myModalTempPromo').modal('hide');
		$("#tempPromocion").val(plantillaPromo);
		$.blockUI.defaults.baseZ = 9000;
		$.blockUI({
			message: "Actualizando plantilla promo...",
			css: {
				class:"alertaUI",
				top:  ($(window).height() - 400) /2 + 'px',
				left: ($(window).width() - 400) /2 + 'px',
				width: '400px'
			}
		});	
		
		setTimeout($.unblockUI, 1000);
	}
	else
	{		
		$.blockUI.defaults.baseZ = 9000;
		$.blockUI({
			message: "Actualizando plantilla promo...",
			css: {
				class:"alertaUI",
				top:  ($(window).height() - 400) /2 + 'px',
				left: ($(window).width() - 400) /2 + 'px',
				width: '400px'
				}
			});	
			
		$.ajax({
			type : "POST",
			url : contextPath + "/infomovil/guardarPromocion",
			dataType : "json",
			data : {
				titulo: $nombrePromo.val(),
				descripcion: $descPromo.val(),
				fechaVigencia:  $datepickerPromo.val(),
				base64Imagen: "",
				redimir: $('.radioPromo:checked').val(),
				terminos: $infoadiPromo.val(),
				templatePromo: plantillaPromo,
				idPromocion:$idPromocion.val()
				},
				success : function(data) {
					$('#myModalTempPromo').modal('hide');
					$("#tempPromocion").val(data.templatePromo);
					nombreSitio = data.nombreSitio;
					banderaCanal = data.banderaCanal;
					guardarEventoGA('promo-plantilla');
					$.unblockUI();
				},
				error : function(json) {
					$.unblockUI();
					BootstrapDialog.show({
						title: "<span class='textBlack' style='font-size:1.15em;'><img alt='' src='../resources/webapp/images/fa-warning-bk.png'  title='Alerta' />No se han guardado los cambios</span>",
						message: '<div style="display:block; min-height:150px;"><p class="textBlack text-center" style="font-size:1.15em;">Por favor intentalo más tarde.</p><br/>'
					});										
				}
			});	
	}
}

function guardarEventoGA(nombreEvento) {
	ga('send', 'event', 'promo', nombreEvento, nombreSitio, banderaCanal);
}

/*function muestraTemplatePromo() {
	$("#myModalTempPromo").modal();
};*/


var $vistaPreviaImprimir = function() {
	
	$.blockUI.defaults.baseZ = 9000;
	$.blockUI({
		message: "Actualizando plantilla promo...",
		css: {
			class:"alertaUI",
			top:  ($(window).height() - 400) /2 + 'px',
			left: ($(window).width() - 400) /2 + 'px',
			width: '400px'
			}
		});	
	var iframe = document.getElementById("urlVistaPreviaPromoImprimir");
	iframe.src = iframe.src + (new Date()).getTime() + Math.floor(Math.random() * 1000000);
	iframe.src = iframe.src;
	document.getElementById('urlVistaPreviaPromoImprimir').onload= function() {
		$.unblockUI();
		$("#myModalPromoImprimir").modal();
    };
};

var imprimirPromocionWeb = function(){	
	oldstrInner = document.documentElement.innerHTML;
	oldstr = document.body.innerHTML;
	$.blockUI.defaults.baseZ = 9000;
	$.blockUI({
		message: "Generando impresión...",
		css: {
			class:"alertaUI",
			top:  ($(window).height() - 400) /2 + 'px',
			left: ($(window).width() - 400) /2 + 'px',
			width: '400px'
		}
	});
	console.log("El valor enviado es: " + $("#tempNombrePromo").val() + '.html');
	var nombrePromocion = $("#tempNombrePromo").val() + '.html';
	$.ajax({
		type : "POST",
		url : contextPath + "/infomovil/getHTMLPromocion",
		data : {nombrePromocion: nombrePromocion},
	
		success : function(data) {
			$("#myModalPromoImprimir").modal('toggle');
			document.documentElement.innerHTML = data.elHtmlDePromocion;
			imprimirPromocionEnPantalla(data.elHtmlDePromocion);
			
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

var imprimirPromocionEnPantalla = function(datahtml){
	setTimeout(function () { window.print(); 
	window.focus();
	window.close();
	document.documentElement.innerHTML = oldstrInner;
    $(document.body).html(oldstr);
    $("#myModalPromoImprimir").modal();	
	$.unblockUI();}, 2500);
//	console.log("Nombre del evento: mi Evento,   nombreSitio: " + $("#tempNombrePromo").val() + ", banderaCanal: " + $("#tempBanderaPromo").val());
	ga('send', 'event', 'promo', 'promo-imprimir', $("#tempNombrePromo").val(), $("#tempBanderaPromo").val());
};

var descargarPDF = function(){
	
	pathPDF = $("#urlVistaPreviaPromoImprimir").attr('src');
	console.log("pathPDF: " + pathPDF);
	pathPDF = pathPDF.replace("html", "pdf");
	//window.open(pathPDF, '_blank', 'fullscreen=yes');
//	console.log("guardarEventoGA: " + nombreEvento + ", nombreSitio: " + nombreSitio + ", banderaCanal: " + banderaCanal);
	var link = document.createElement("a");
    link.download = "promo.pdf";
    link.href = pathPDF;
    link.click();
    ga('send', 'event', 'promo', 'promo-guardarPDF', $("#tempNombrePromo").val(), $("#tempBanderaPromo").val());
   
};

var descargarJPG = function(){
	
	pathJPG = $("#urlVistaPreviaPromoImprimir").attr('src');
	console.log("pathJPG: " + pathJPG);
	pathJPG = pathJPG.replace("html", "jpg");
	//window.open(pathJPG, '_blank', 'fullscreen=yes');
//	console.log("guardarEventoGA: " + nombreEvento + ", nombreSitio: " + nombreSitio + ", banderaCanal: " + banderaCanal);
	
	var link = document.createElement("a");
    link.download = "promo.jpg";
    link.href = pathJPG;
    link.click();
	ga('send', 'event', 'promo', 'promo-guardarJPG', $("#tempNombrePromo").val(), $("#tempBanderaPromo").val());
	
};


function getContactosVolantes(offerId, hashUser ) {
		var url = contactos.getUrl;
		console.log(url + "?offerId="+offerId+"&hashUser="+hashUser);
		$http({
			method: 'GET',
			url: url + "?offerId="+offerId+"&hashUser="+hashUser,
			
		}).then(function successCallback(response) {
			console.log("Me respondio: "  + response.data);
			contactosVolantes = response.data;
			console.log(response.data.contactoId);
			console.log(response.data.offerId);
			console.log(response.data.descripcion);
			console.log(response.data.orderNaptr);
			console.log(response.data.preference);
			console.log(response.data.contenido);
			console.log(response.data.codigoPais);
			console.log(response.data.services);
			console.log(response.data.tipoContacto);
			console.log(response.data.activo);
			console.log(response.data.ultimaModificacion);
			console.log(response.data.usuarioModifico);
			console.log(response.data.hashUser);

		}, function errorCallback(response) {
			console.log("El error es: " + response);
			var mensaje = "No se ha podido obtener la lista de contactos";
			MensajesService.cerrarBlockUIGeneral("Contactos", mensaje);
		});
	}
 
var upsertContactoVolantes = function(contacto){
	 console.log("Entro en upsertContacto!!!");
	 	var url = contactos.saveUrl;
	 	console.log(url);
		$http({
			method: 'POST',
			url: url,
			params: {
				contactoId: contacto.id,
				offerId : contacto.offerId,
				descripcion : contacto.descripcion,
				orderNaptr : contacto.orderNaptr,
				preference : contacto.preference,
				contenido : contacto.contenido,
				codigoPais : contacto.codigoPais,
				services : contacto.services,
				tipoContacto : contacto.tipoContacto,
				activo : contacto.activo,
				ultimaModificacion : contacto.ultimaModificacion,
				usuarioModifico : contacto.usuarioModifico,
				hashUser : contacto.hashUser

        },
		}).then(function successCallback(response) {
			console.log("Se guardo el contacto y me regreso: "  + response.data);
			var respContacto = response.data;
							 
		}, function errorCallback(response) {
			console.log("El error es: " + response);
			var mensaje = "No se ha podido obtener la lista de contactos";
			MensajesService.cerrarBlockUIGeneral("Contactos", mensaje);
		});
	};
 
  function eliminarContactoVolantes(contacto) {
		var url = contactos.delUrl;
		console.log(url);
		$http({
			method: 'POST',
			url: url,
			params: {
				contactoId: "",
				offerId : contacto.offerId,
				descripcion : contacto.descripcion,
				orderNaptr : contacto.orderNaptr,
				preference : contacto.preference,
				contenido : contacto.contenido,
				codigoPais : contacto.codigoPais,
				services : contacto.services,
				tipoContacto : contacto.tipoContacto,
				activo : contacto.activo,
				ultimaModificacion : contacto.ultimaModificacion,
				usuarioModifico : contacto.usuarioModifico,
				hashUser : hashUsuario()

         },
		}).then(function successCallback(response) {
			console.log("Me respondio error: "  + response.data);
			var respContacto = response.data;
							 
		}, function errorCallback(response) {
			console.log("El error es: " + response);
			var mensaje = "No se ha podido obtener la lista de contactos";
			MensajesService.cerrarBlockUIGeneral("Contactos", mensaje);
		});
	};

	function getOfferId(){
		
		var offerId = 0;
		var resp = requestServer("POST",contextPath + "/infomovil/getPromociones",{});
		if (resp[0] != undefined){
			offerId = resp[0].idOffer;
		}
		console.debug("Server " + server + "y OfferId es: " + offerId);
		return offerId;
	};

	function getService(){
		if($( "#tipoTelefonoVolante option:selected" ).val() == "+52")
			return "E2U+voice:tel";
		else
			return "E2U+voice:tel+x-mobile";
		
	};
	
	var getContacto = function(){
	console.log("Entro a get Contacto");
	console.log("lada:" + $( "#tipoTelefonoVolante option:selected" ).val() );
	console.log("telefono:" + $( "#telefonoVolante" ).val() );
		var contacto = {
				contactoId: $("#idContactoVolante").val(),
				offerId : getOfferId(),
				descripcion : "",
				orderNaptr : "",
				preference : "0",
				contenido : $( "#telefonoVolante" ).val(),
				codigoPais : $( "#tipoTelefonoVolante option:selected" ).val(),
				services : getService(), 
				tipoContacto : 'tel:',
				activo : "1",
				ultimaModificacion : "",
				usuarioModifico : "",
				hashUser : hashUsuario()
			};
		//E2U+voice:tel
		//E2U+voice:tel+x-mobile
		return contacto;
	};
