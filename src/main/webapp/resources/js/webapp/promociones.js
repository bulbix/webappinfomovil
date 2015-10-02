//Calores para 
var $nombrePromo =  $("#nombrePromo");
var $descPromo =  $("#descPromo");
var $datepickerPromo =  $("#datepicker");
var $infoadiPromo =  $("#infoadiPromo");
var $divPromoPublicada = $("#divPromoPublicada");
var $divPublicarPromo = $("#divPublicarPromo");
var $idPromocion = $("#idPromocion");
var $urlPromocion = $("#urlPromocion");
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

var $getPromociones = function() {
	
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


var $publicarPromocion = function() {
	
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
			$divPublicarPromo.hide();
			$divPromoPublicada.show();
			$("#idPromocion").val(data.idOffer);
			$("#urlPromocion").val(data.urlPromocion);			
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

var $guardarCambiosEnPromocion = function() {
	
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
				$divPublicarPromo.hide();
				$divPromoPublicada.show();
				$("#idPromocion").val(data.idOffer);				
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
		title : '<div class="textBlack">Eliminar Imagen</div>',
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
			}
		}]
	});
};

var $compartirPromocion = function() {
	
	$('#myModalPromoShare').modal();	
	
};

var $verPromocionActiva = function() {
	
	var $urlPromo = $("#urlPromocion").val();
	
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

	if ($urlPromo.trim().length > 0 && $urlPromo != null)
	{
		$("#urlVistaPreviaPromo").attr('src', $("#urlPromocion").val());
		$("#myModalPromo").modal();
	}
	else
	{
		console.log("no hay url");
	}
	

	$.unblockUI();

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
			terminos:$infoadiPromo.val()
		},
			success : function(data) {
				$("#urlVistaPreviaPromo").attr('src', data.urlVistaPreviaPromo);
				$("#myModalPromo").modal();	
				$.unblockUI();
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
			console.log("datosCompletos");
			$divError.css("display", "none");
			$publicarPromocion();
		}
		else
		{
			$divError.html("Falta llenar el campo " + $resultado);
			$divError.css("display", "block");
			console.log("Falta llenar el campo dfgfabfda" + $resultado);
		}
		
	});
	
	$btnVistaPrevia.click(function() {
		console.log("Va a vista previa");
		$vistaPrevia();
	});
	
	$btnCompartir.click(function() {
		var url = $("#urlPromocion").val(); 
		var lFace = "http://www.facebook.com/sharer/sharer.php?u=" + url + "&t=Sitio%20creado%20con%20www.infomovil.com"; 
		$('#Facebook').attr('href', lFace); 
		var lGoogle = "https://plus.google.com/share?url=http://" + url; 
		$('#Google').attr('href', lGoogle);
		var lEmail = "mailto:?subject=http://"+ url + "%20Checa%20este%20sitio!&body=Checa%20este%20sitio%20web:%20http://"+ url + "%0A%0ACreado%20con%20www.infomovil.com"; 
		$('#Email').attr('href', lEmail); 
		var lTwitt = "http://www.twitter.com/intent/tweet?text=http://"+ url +"%20%0A%0ACheca%20este%20sitio%20web:"+ url; 
		$('#Twitter').attr('href', lTwitt);
		if(navigator.userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile/i)){ var lWhatsapp = "whatsapp://send?text=Checa%20este%20sitio%20web:" + url; }else{ var lWhatsapp = "javascript:alert('Esta acción no se puede completar en este dispositivo')"; } 
		$('#WhatsApp').attr('href', lWhatsapp);
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