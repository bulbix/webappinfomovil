//Calores para 
var $nombrePromo =  $("#nombrePromo");
var $descPromo =  $("#descPromo");
var $datepickerPromo =  $("#datepicker");
var $infoadiPromo =  $("#infoadiPromo");
var $divPromoPublicada = $("#divPromoPublicada");
var $divPublicarPromo = $("#divPublicarPromo");
var $idPromocion = $("#idPromocion");
// div que muestra que falta un campo por llenar
var $divError = $("#divError");
//botones para publicar promocion
var $btnPublicar = $("#btnPublicar");
var $btnVistaPrevia = $("#btnVistaPrevia");
//botones para modificar promocion publicada
var $btnCompartir = $("#btnCompartir");
var $btnVerPromo = $("#btnVerPromo");
var $btnEliminar = $("#btnEliminar");
var $btnGuardar = $("#btnGuardar");
	
$(function() {
	$datepickerPromo.datepicker({ dateFormat: 'dd/mm/yy' });	
});
	
$datepickerPromo.click(function() {
	var date = $datepickerPromo.datepicker({ dateFormat: 'dd/mm/yy' }).val();
});



var $getPromociones = function(){
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
			
			$.unblockUI();
		},
		error : function(json) {
			$.unblockUI();
			BootstrapDialog.show({
				title: "<span class='textBlack' style='font-size:1.15em;'><img alt='' src='../resources/webapp/images/fa-warning-bk.png'  title='Alerta' />No se ha elimiasdasdasdasdasdasdnado la promoción</span>",
				message: '<div style="display:block; min-height:150px;"><p class="textBlack text-center" style="font-size:1.15em;">Por favor intentalo más tarde.</p><br/>'
			});		
		
		}
		
	});	
};


var $publicarPromocion = function(){
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
					terminos:$infoadiPromo.val()
				},
					success : function(data) {
						console.log("LA RESPUESTA DEL GUARDADO ES: " +data);
						$divPublicarPromo.hide();
						$divPromoPublicada.show();
					
						$.unblockUI();
					},
					error : function(json) {
						$.unblockUI();
						console.log("ocurrio un error!!");
						BootstrapDialog.show({
							title: "<span class='textBlack' style='font-size:1.15em;'><img alt='' src='../resources/webapp/images/fa-warning-bk.png'  title='Alerta' />No se ha publicado la promoción</span>",
							message: '<div style="display:block; min-height:150px;"><p class="textBlack text-center" style="font-size:1.15em;">Por favor intentalo más tarde.</p><br/>'
						});
											
					}
				});	
			
};


var $guardarCambiosEnPromocion = function(){
	
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
				terminos: $infoadiPromo.val()
			},
				success : function(data) {
					console.log("LA RESPUESTA DEL GUARDADO ES: " +data);
					$divPublicarPromo.hide();
					$divPromoPublicada.show();
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

var $eliminarPromocion = function(){
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
			 $.unblockUI();
		},
		error : function(json) {
			$.unblockUI();
			BootstrapDialog.show({
				title: "<span class='textBlack' style='font-size:1.15em;'><img alt='' src='../resources/webapp/images/fa-warning-bk.png'  title='Alerta' />No se ha eliminado la promoción</span>",
				message: '<div style="display:block; min-height:150px;"><p class="textBlack text-center" style="font-size:1.15em;">Por favor intentalo más tarde.</p><br/>'
			});						
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


var $verPromocionActiva = function() {

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
			titulo: $nombrePromo.val(),
			descripcion: $descPromo.val(),
			fechaVigencia:  $datepickerPromo.val(),
			base64Imagen: "",
			redimir: $radioPromo.val(),
			terminos:$infoadiPromo.val()
		},
			success : function(data) {
				console.log("Mostrar el modal con el iframe: " + data.urlVistaPreviaPromo);
				$.unblockUI();
				window.open(data.urlVistaPreviaPromo, '_blank');
			},
			error : function(json) {
				$.unblockUI();
				console.log("json::: " + json);
				BootstrapDialog.show({
					title: "<span class='textBlack' style='font-size:1.15em;'><img alt='' src='../resources/webapp/images/fa-warning-bk.png'  title='Alerta' />No se ha podido obtener la vista previa de la promoción</span>",
					message: '<div style="display:block; min-height:150px;"><p class="textBlack text-center" style="font-size:1.15em;">Por favor intentalo más tarde.</p><br/>'
				});
									
			}
		});	
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
			default: $("#r2#r3#r4").prop('checked', false);
					 $("#r1").prop('checked', true);
		}
};


var $validarCampos  = function(){
	$nom =$nombrePromo.val();
	$desc = $descPromo.val();
	$dp = $datepickerPromo.val();
	$rp = $('.radioPromo:checked').val();
	if($nom.length <= 0){
		return "nombre de la promoción";
	}else if($desc.length <= 0){
		return "descripción de la promoción";
		
	}else if($dp.length <= 0){
		return "vigencia de la promoción";
		
	}else if($rp.length <= 0){
		return "comó redimir";
	}else{
		return "datosCompletos";
	}
		
};

$(document).ready(function() {					
	$btnPublicar.click(function(){
		console.log("Va a publicar!");
		$resultado = $validarCampos(); 
		if( $resultado == "datosCompletos"){
			$publicarPromocion();
		}else{
			$divError.val("Falta llenar el campo " + $resultado);
		}
		
	});
	
	$btnVistaPrevia.click(function() {
		console.log("Va a vista previa");
		$vistaPrevia();
	});
	
	$btnCompartir.click(function() {
		console.log("va a compartir!!");
		$compartirPromocion();	
	});
	
	$btnVerPromo.click(function() {
		$verPromocionActiva();		
	});
	
	$btnEliminar.click(function() {
		console.log("va a eliminar promocion");
		$eliminarPromocion();
	});
	
	$btnGuardar.click(function() {
		console.log("Va a guardar los cambios");

		$resultado = $validarCampos(); 
		if( $resultado == "datosCompletos"){
			$guardarCambiosEnPromocion();
		}else{
			$divError.text("Falta llenar el campo " + $resultado);
		}

	});
				
});