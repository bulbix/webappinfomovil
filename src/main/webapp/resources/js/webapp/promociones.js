$nombrePromo =  $("#nombrePromo");
$descPromo =  $("#descPromo");
$datepickerPromo =  $("#datepicker");
$radioPromo =  $(".radioPromo");
$infoadiPromo =  $("#infoadiPromo");
$divPromoPublicada = $("#divPromoPublicada");
$divPublicarPromo = $("#divPublicarPromo");
$btnPublicar = $("#btnPublicar");
$btnVistaPrevia = $("#btnVistaPrevia");

$btnCompartir = $("#btnCompartir");
$btnVerPromo = $("#btnVerPromo");
$btnEliminar = $("#btnEliminar");
$btnGuardar = $("#btnGuardar");

var myRadio = $('input[name=radioPromo]');

$radioPromo.on( "click", function() {
	$( "#log" ).html( $( "input:checked" ).val() + " is checked!" );
});
	
$(function() {
	$datepickerPromo.datepicker({ dateFormat: 'yy-mm-dd' });	
});
	
$datepickerPromo.click(function() {
	var date = $datepickerPromo.datepicker({ dateFormat: 'yy-mm-dd' }).val();
});

$(document).ready(function() {					
	
	$btnPublicar.click(function() {
		publicarPromocion();
	});
				
	$btnVistaPrevia.click(function() {
		vistaPrevia();			
	});
	
	$btnCompartir.click(function() {
		compartirPromocion();			
	});
	
	$btnVerPromo.click(function() {
		verPromocionActiva();			
	});
	
	$btnEliminar.click(function() {
		eliminarPromocion();			
	});
	
	$btnGuardar.click(function() {
		guardarCambiosEnPromocion();
	});
							
});
										
function publicarPromocion() {

	var weHaveSuccess = false;
	
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
		url : contextPath + "/infomovil/publicarPromo",
		dataType : "json",
		contentType: "text/plain",
		data : {
			domainId: binaryString,
			titleOffer: $nombrePromo.val(),
			descOffer: $descPromo.val(),
			endDateOffer:  $datepickerPromo.val(),
			redeemOffer: $radioPromo.val(),
			termsOffer:$infoadiPromo.val()
		
		},
			success : function(data) {
				console.log("LA RESPUESTA DEL GUARDADO ES: " +data);
				$divPromoPublicada.hide();
				$divPromoPublicada.show();
				var weHaveSuccess = true;
				$.unblockUI();
			},
			error : function(json) {
				$.unblockUI();
				BootstrapDialog.show({
					title: "<span class='textBlack' style='font-size:1.15em;'><img alt='' src='../resources/webapp/images/fa-warning-bk.png'  title='Alerta' />No se ha publicado la promoción</span>",
					message: '<div style="display:block; min-height:150px;"><p class="textBlack text-center" style="font-size:1.15em;">Por favor intentalo más tarde.</p><br/>'
				});
									
			},
			complete: function() {
				if (!weHaveSuccess) {
					BootstrapDialog.show({
						title: "<span class='textBlack' style='font-size:1.15em;'><img alt='' src='../resources/webapp/images/fa-warning-bk.png'  title='Alerta' />No se ha publicado la promoción</span>",
						message: '<div style="display:block; min-height:150px;"><p class="textBlack text-center" style="font-size:1.15em;">Por favor intentalo más tarde.</p><br/>'
					});
				}
			}
		});					
}


function eliminarPromocion() {
	
	var weHaveSuccess = false;
	
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
		url : contextPath + "/infomovil/publicarPromo",
		dataType : "json",
		contentType: "text/plain",
		data : {
			domainId: binaryString,
			offerdId: $nombrePromo.val(),	
		},
		success : function(data) {
			console.log("LA RESPUESTA DEL GUARDADO ES: " +data);
			$divPromoPublicada.show();
			$divPromoPublicada.hide();
			var weHaveSuccess = true;
			$.unblockUI();
		},
		error : function(json) {
			$.unblockUI();
			BootstrapDialog.show({
				title: "<span class='textBlack' style='font-size:1.15em;'><img alt='' src='../resources/webapp/images/fa-warning-bk.png'  title='Alerta' />No se ha eliminado la promoción</span>",
				message: '<div style="display:block; min-height:150px;"><p class="textBlack text-center" style="font-size:1.15em;">Por favor intentalo más tarde.</p><br/>'
			});						
		},
		complete: function() {
			if (!weHaveSuccess) {
				BootstrapDialog.show({
					title: "<span class='textBlack' style='font-size:1.15em;'><img alt='' src='../resources/webapp/images/fa-warning-bk.png'  title='Alerta' />No se ha eliminado la promoción</span>",
					message: '<div style="display:block; min-height:150px;"><p class="textBlack text-center" style="font-size:1.15em;">Por favor intentalo más tarde.</p><br/>'
				});
			}
		}
	});
}

function vistaPrevia() {
	
}

function compartirPromocion(opcion,url) {
	
	switch(opcion) {
	
	case Facebook:
		lFace = "http://www.facebook.com/sharer/sharer.php?u=" + url + "&t=Site created with www.infomovil.com";
		if (lenguaje.equalsIgnoreCase("es"))
		{
			lFace = "http://www.facebook.com/sharer/sharer.php?u=" + url + "&t=Sitio creado con www.infomovil.com";
		}
		window.location.replace(lFace);
		break;
	case WhatsApp: 
		lWhatsapp = "";
		if (lenguaje.equalsIgnoreCase("es"))
		{
			alert('Esta acción no se puede completar en este dispositivo'); 
		}
		if(nav.equals("movilMac")){
			lWhatsapp = "whatsapp://send?text=Checa%20este%20sitio%20web:" + url; 
		}
		if(nav.equals("movilAndroid")){ 
			lWhatsapp = "whatsapp://send?text=Checa%20este%20sitio%20web:" + url; 
		}
		if(nav.equals("operamini7")){ 
			lWhatsapp = "whatsapp://send?text=Checa%20este%20sitio%20web:" + url; 
		}
		if(nav.equals("operamini8")){ 
			lWhatsapp = "whatsapp://send?text=Checa%20este%20sitio%20web:" + url; 
		}
		if(lWhatsapp != "")window.location.replace(lWhatsapp);
		break;
	case Twitter:
		lTwitt = "http://www.twitter.com/intent/tweet?text=http://"+ url +"%20%0A%0A Very good site! " + url;
		if (lenguaje.equalsIgnoreCase("es"))
		{
			lTwitt = "http://www.twitter.com/intent/tweet?text=http://"+ url +"%20%0A%0ACheca%20este%20sitio%20web:"+ url;
		}
		window.location.replace(lTwitt);
		break;
	case Google:
		lGoogle = "https://plus.google.com/share?url=http://" + url;
		if (lenguaje.equalsIgnoreCase("es"))
		{
			lGoogle = "https://plus.google.com/share?url=http://" + url;
		}
		window.location.replace(lGoogle);
		break;
	case Email:
		if(nav.equals("operamini7")){
			lMail = "mailto:?subject=http://"+ url + "%20Checa%20este%20sitio!&amp;body=Checa%20este%20sitio%20web:%20http://"+ url + "%0A%0ACreado%20con%20www.infomovil.com";
		}else{
			lMail = "mailto:?subject=http://"+ url + "%20Checa%20este%20sitio!&amp;body=Checa%20este%20sitio%20web:%20http://"+ url + "%0A%0ACreado%20con%20www.infomovil.com";
		}
	 	window.location.replace(lMail);
		break;
	
	
	}
}

function verPromocionActiva() {
		
}

function eliminarPromocion() {
		
}

function guardarCambiosEnPromocion() {
		
}