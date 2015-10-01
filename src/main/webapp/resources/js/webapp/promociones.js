//Calores para 
$nombrePromo =  $("#nombrePromo");
$descPromo =  $("#descPromo");
$datepickerPromo =  $("#datepicker");
$radioPromo =  $(".radioPromo");
$infoadiPromo =  $("#infoadiPromo");
$divPromoPublicada = $("#divPromoPublicada");
$divPublicarPromo = $("#divPublicarPromo");
$idPromocion = $("#idPromocion");
//botones para publicar promocion
$btnPublicar = $("#btnPublicar");
$btnVistaPrevia = $("#btnVistaPrevia");
//botones para modificar promocion publicada
$btnCompartir = $("#btnCompartir");
$btnVerPromo = $("#btnVerPromo");
$btnEliminar = $("#btnEliminar");
$btnGuardar = $("#btnGuardar");
var weHaveSuccess = false;
	
$(function() {
	$datepickerPromo.datepicker({ dateFormat: 'dd-mm-yy' });	
});
	
$datepickerPromo.click(function() {
	var date = $datepickerPromo.datepicker({ dateFormat: 'dd-mm-yy' }).val();
});

var $getPromociones = function(){
	weHaveSuccess = false;
	$.blockUI.defaults.baseZ = 9000;
	$.blockUI({
		message: "Obteniendo promoción...",
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
			weHaveSuccess = true;
			$.unblockUI();
		},
		error : function(json) {
			$.unblockUI();
			BootstrapDialog.show({
				title: "<span class='textBlack' style='font-size:1.15em;'><img alt='' src='../resources/webapp/images/fa-warning-bk.png'  title='Alerta' />No se ha elimiasdasdasdasdasdasdnado la promoción</span>",
				message: '<div style="display:block; min-height:150px;"><p class="textBlack text-center" style="font-size:1.15em;">Por favor intentalo más tarde.</p><br/>'
			});		
			weHaveSuccess = true;
		},
		complete: function() {
			if (!weHaveSuccess) {
				BootstrapDialog.show({
					title: "<span class='textBlack' style='font-size:1.15em;'><img alt='' src='../resources/webapp/images/fa-warning-bk.png'  title='Alerta' />No xxxxxse ha eliminado la promoción</span>",
					message: '<div style="display:block; min-height:150px;"><p class="textBlack text-center" style="font-size:1.15em;">Por favor intentalo más tarde.</p><br/>'
				});
			}$.unblockUI();
		}
		
	});	
};

//Carga los datos de las promociones //
$getPromociones();
						

var $publicarPromocion = function(){
	weHaveSuccess = false;
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
		dataType : "json",
		data : {
			titulo: $nombrePromo.val(),
			descripcion: $descPromo.val(),
			fechaVigencia:  $datepickerPromo.val(),
			base64Imagen: "",
			redimir: $radioPromo.val(),
			terminos:$infoadiPromo.val()
		},
			success : function(data) {
				console.log("LA RESPUESTA DEL GUARDADO ES: " +data);
				$divPublicarPromo.hide();
				$divPromoPublicada.show();
				weHaveSuccess = true;
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
};


var $guardarCambiosEnPromocion = function(){
		weHaveSuccess = false;	
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
				redimir: $radioPromo.val(),
				terminos: $infoadiPromo.val()
			},
				success : function(data) {
					console.log("LA RESPUESTA DEL GUARDADO ES: " +data);
					$divPublicarPromo.hide();
					$divPromoPublicada.show();
					weHaveSuccess = true;
					$.unblockUI();
				},
				error : function(json) {
					$.unblockUI();
					BootstrapDialog.show({
						title: "<span class='textBlack' style='font-size:1.15em;'><img alt='' src='../resources/webapp/images/fa-warning-bk.png'  title='Alerta' />No se han guardado los cambios</span>",
						message: '<div style="display:block; min-height:150px;"><p class="textBlack text-center" style="font-size:1.15em;">Por favor intentalo más tarde.</p><br/>'
					});
										
				},
				complete: function() {
					if (!weHaveSuccess) {
						BootstrapDialog.show({
							title: "<span class='textBlack' style='font-size:1.15em;'><img alt='' src='../resources/webapp/images/fa-warning-bk.png'  title='Alerta' />No se han guardado los cambios</span>",
							message: '<div style="display:block; min-height:150px;"><p class="textBlack text-center" style="font-size:1.15em;">Por favor intentalo más tarde.</p><br/>'
						});
					}
				}
			});	
};

var $eliminarPromocion = function(){
	weHaveSuccess = false;
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
			 $divPublicarPromo.show();
			 $divPromoPublicada.hide();
			 $activaRadio("0");
			 weHaveSuccess = true;
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
};


var $vistaPrevia = function(){
	
};


var $compartirPromocion = function(){
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
};


var $verPromocionActiva = function(){
		
};

var $activaRadio  = function(radio){
		switch(radio){
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
			default: $("#r1#r2#r3#r4").prop('checked', false);
		}
};

$(document).ready(function() {					
	$btnPublicar.click(function(){
		console.log("Va a publicar!");
		$publicarPromocion()
	});
	
	$btnVistaPrevia.click(function(){
		console.log("Va a vista previa");
		$vistaPrevia();
		
	});
	$btnCompartir.click(function(){
		console.log("va a compartir!!");
		$compartirPromocion();
		
	});
	$btnVerPromo.click(function(){
		console.log(" va a ver la promo en linea");
		$verPromocionActiva();
		
	});
	$btnEliminar.click(function(){
		console.log("va a eliminar promocion");
		$eliminarPromocion();
	});
	$btnGuardar.click(function(){
		console.log("Va a guardar los cambios");
		$guardarCambiosEnPromocion();
		
	});
				
});

 
	

