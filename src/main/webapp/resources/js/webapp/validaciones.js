var templates = new Array("Coverpage20","Coverpage19","Coverpage18","Coverpage17","Coverpage16","Coverpage15","Coverpage14","Coverpage13","Coverpage12","Coverpage11", "Coverpage10", "Coverpage9", "Coverpage7", "Coverpage8", "Coverpage1azul", "Coverpage2", "Coverpage3", "Coverpage4", "Coverpage5", "Coverpage6");
var nombres = new Array("Servicios","Salud","Regalos","Música","Educativo","Legal","Café","Deportes","Florerías","Metrópoli", "Nuevos negocios", "Pr&oacute;ximamente", "Otoño", "Vanguardia", "Portada azul", "Restaurantes", "Belleza", "Reposter&iacute;as", "Automotriz", "Taxistas"); /*Cambiar nombres*/
var nombreDominio = "";
var tipoDominio = "";
var indice = 0;
	
$(document).ready(function() {
	$("#txtTelefono").numeric({negative : false});
	//$('#myModalMultiproducto').removeData("modal").modal({ backdrop: 'static', keyboard: false })
});

$("#btnVolante").on('click', function() {
	window.location = contextPath + '/infomovil/misPromociones';
});

function validaDominio(tipo)
{
	var sitioDisponible = "";
	var infomovil = "infomovil";
	var textoBoton = "Aceptar";
	var opcion = "NO_PUBLICAR"
	var msjValidacion = "";
	var funcion = "aceptar()";
	var nombreSitio = "";
	var regAuxiliar = /^[_a-z0-9-]+([a-z0-9])$/;

	if (tipo == 'recurso')
	{
		nombreDominio = $("#nombreDominioRec").val();
		tipoDominio = $("#tipoDominioRec").val();
	}
	else
	{
		nombreDominio = $("#nombreDominioBusqueda").val();
		tipoDominio = $("#tipoDominioBusqueda").val();
	}
	
	nombreDominio = nombreDominio.toLowerCase().trim();

	console.log("nombreDominio::: " + nombreDominio + ", tipoDominio:::: " + tipoDominio + ", tipo: " + tipo);
	
	if (nombreDominio == null || nombreDominio.trim().length == 0 || nombreDominio.trim().length < 3 || nombreDominio.trim().length > 30)
	{
		$("#validacionNombre").html("El nombre debe ser de una longitud mínimo de 2 y máximo 30 caracteres");
		$("#validacionNombreRec").html("El nombre debe ser de una longitud mínimo de 2 y máximo 30 caracteres");
		$("#validacionNombre").css("display", "block");
		$("#validacionNombreRec").css("display", "block");
		return false;
	}

	if (infomovil.indexOf(nombreDominio.toLowerCase()) != -1 || nombreDominio.toLowerCase().indexOf("infomovil") != -1)
	{
		$("#validacionNombre").html("No debe contener la palabra Infomovil");
		$("#validacionNombreRec").html("No debe contener la palabra Infomovil");
		$("#validacionNombre").css("display", "block");
		$("#validacionNombreRec").css("display", "block");
		return false;
	}

	if (!regAuxiliar.test(nombreDominio)) 
	{
		$("#validacionNombre").html("Caracteres no v&aacutelidos");
		$("#validacionNombreRec").html("Caracteres no v&aacutelidos");
		$("#validacionNombreRec").css("display", "block");
		$("#validacionNombre").css("display", "block");
		return false;
	}
	
	$("#validacionNombre").css("display", "none");
	$("#validacionNombreRec").css("display", "none");

    $.blockUI({ 
        message: "Buscando disponibilidad...", 
        css: { 
            top:  ($(window).height() - 400) /2 + 'px', 
            left: ($(window).width() - 400) /2 + 'px', 
            width: '400px' 
        } 
    }); 
	
	$.ajax
	({
		type : "GET",
		url : contextPath + "/infomovil/existeDominio",
		dataType : "json",
		data:
		{
			nombreDominio : nombreDominio,
			tipoDominio : tipoDominio
		}
	})
    .done
    (
		function(json)
    	{
			if (tipoDominio == "recurso")
				sitioDisponible = "www.infomovil.com/" + nombreDominio;
			else
				sitioDisponible = "www." + nombreDominio + "." + tipoDominio;
			
			nombreSitio = sitioDisponible.length;
			
			if (nombreSitio > 25)
				sitioDisponible = sitioDisponible.substring(4, nombreSitio);
		
			if (json.resultado.indexOf("No existe") != -1)
			{				
				funcion = "publicar()";
				opcion = "PUBLICAR";
				msjValidacion = "";
				textoBoton = "&iexcl;Lo quiero!";				
				sitioDisponible =  "<strong class='textPurple'>"+ sitioDisponible + "</strong> <br/>est&aacute; disponible";
			}
			else
			{
				funcion = "aceptar()"
				msjValidacion = "";
				textoBoton = "Aceptar";
				sitioDisponible = "<strong class='textPurple'>"+ sitioDisponible + "</strong> <br/>no est&aacute; disponible";
			}
			
			$('#modalPublicacion').html("<div id='myModalPublicar' class='modal fade' tabindex='-1' role='dialog' aria-labelledby='myModalLabel' aria-hidden='true'>"+
					"<div class='modal-dialog modal-md'><div class='modal-content'><div class='modal-header'><button type='button' class='close textBlack' data-dismiss='modal' aria-label='Close'>"+
					"<span aria-hidden='true'>&times;</span></button></div><div class='modal-body'>"+
					"<h2 class='textBlack col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center'>"+ msjValidacion +"</h2><span class='textBlack btnsEditor col-xs-12 col-sm-12 col-md-6 col-md-offset-3 col-lg-6 col-lg-offset-3 text-center'>"+
					"" + sitioDisponible + "</span><div class='clear divider'></div></div><div class='modal-footer'>"+
					"<button type='button' class='btn btn-purple text-center col-xs-12 col-sm-12 col-md-6 col-md-offset-3 col-lg-6 col-lg-offset-3 btnsEditor' data-dismiss='modal' onClick=" + funcion + "><strong>"+ textoBoton +"</strong>" + 
					"</button><input type='hidden' id='opcion' value=" + opcion + "/></div></div></div></div>");
			
			$('#modalPublicacion > .alert-success').append($('#myModalPublicar').modal('show'));
			$.unblockUI();
	    }
		
	 ).fail(function( jqXHR, textStatus ) {
		 console.log("fail:::::" + textStatus);
		 $.unblockUI();
	 });
}

function aceptar()
{
	$('#modalPublicacion > .alert-success').append($('#myModalPublicar').modal('remove'));
}

function publicar()
{

//	console.log("publicar::: " + nombreDominio + ", " + tipoDominio);
	$("#idCatTipoRecurso").val("1"); /*tel*/	
	
//	if (tipoDominio == "recurso")
//		$("#idCatTipoRecurso").val($("#idCatTipoRec").val());
	
	//console.log("publicar::::: " + nombreDominio + ", tipoDominio: " + tipoDominio + ", tipo: " + $("#idCatTipoRecurso").val());
	$("#nombreDominio").val(nombreDominio.toLowerCase().trim());
	$("#tipoDominio").val(tipoDominio.toLowerCase());

	$("#modalPublicacion").css("display", "none");
	$.blockUI({ 
		message: "Publicando sitio...", 
		css: { 
			top:  ($(window).height() - 400) /2 + 'px', 
			left: ($(window).width() - 400) /2 + 'px', 
			width: '400px' 
		} 
	}); 
	
	$("#publicarDominio").submit();
}

function actualizaPlantilla(plantillaElegida)
{	
	//console.log("actualizaPlantilla");
	var plantillaNueva = plantillaElegida; // Obtener del modal
	var nombreNegocio = $("#txtNombreNegocio").val();
	var descripcionCorta = $("#txtDescripcionCorta").val() ;
	var correo = $("#txtCorreo").val();
	var telefono = $("#txtTelefono").val();
	var plantilla = $("#plantilla").val();			
	var aux;
	
//	console.log("plantillaNueva: " + plantillaNueva + ", plantilla: " + plantilla);
//	if (plantillaNueva == plantilla)
//		return;

	$("#modalTemplates").css("display", "none");
    $.blockUI({ 
        message: "Actualizando estilo...", 
        css: { 
            top:  ($(window).height() - 400) /2 + 'px', 
            left: ($(window).width() - 400) /2 + 'px', 
            width: '400px' 
        } 
    }); 
    
	$.ajax({
		type : "GET",
		url : contextPath + "/infomovil/actualizaPlantilla",
		dataType : "json",
		contentType: "text/plain",
		data : {
			nombreEmpresa : nombreNegocio,
			descripcionCorta : descripcionCorta,
			correoElectronico : correo,
			telefono : telefono,
			plantilla : plantillaNueva
		},
		success : function(json) {
			
//			console.log("json.actualizaTemplate:::" + json.actualizaTemplate);
			$("#plantilla").val(plantillaNueva);			
			
			if(json.actualizaTemplate == "0")
			{
		//		console.log("Plantilla actualizada correctamente");				
				window.location = contextPath + '/infomovil/editarSitio';
			}

			$.unblockUI();
		},
		error : function(json) {
			//console.log("Error");
			$.unblockUI();
		}

	});		
}

function generarSlider()
{
	var urlRecurso = "";
	var slider = "";
	var span = "";
	var li = "";
	var bandera = 0;
	
	slider = "<ul class='bxslider'>";
	
	for (i = 0; i < templates.length; i = i + 1) 
	{	
		urlRecurso = "https://s3.amazonaws.com/landing.infomovil.com/webapp/templates/" + templates[i] + "/" + templates[i] + ".png";
		li = "<li class='text-center'><img style='width:100%; height:auto; min-width:280px!important; max-width:600px !important; max-height:568px!important;min-height:265px!important; display:block;' src='" + urlRecurso + "' title='" + nombres[i] + "'' /></li>";
		slider = slider + li;
		urlRecurso = "";
	}	
	
	$('#modalTemplates').html("<div id='myModalTemplates' class='modal fade' tabindex='-1' role='dialog' aria-labelledby='myModalLabel' aria-hidden='true'>" +
			"<div class='modal-dialog modal-md'><div class='modal-content'>" +

			"<div class='modal-header'>" +
			 	"<button type='button' class='close textBlack pull-left' data-dismiss='modal' aria-label='Close'><span aria-hidden='true'>&times;</span></button> <button type='button' class='btn btn-purple pull-right txtBtnEditor' onClick='actualizaEstilo()'>Aplicar estilo</button>" +
			        "</div><div class='modal-body'>" + slider + "</div><div class='modal-footer'></div></div></div></div>");
	
	$('#modalTempPromo').html("<div id='myModalTempPromo' class='modal fade' tabindex='-1' role='dialog' aria-labelledby='myModalLabel' aria-hidden='true'>" +
			"<div class='modal-dialog modal-md'><div class='modal-content'>" +

			"<div class='modal-header'>" +
			 	"<button type='button' class='close textBlack pull-left' data-dismiss='modal' aria-label='Close'><span aria-hidden='true'>&times;</span></button> <button type='button' class='btn btn-purple pull-right txtBtnEditor' onClick='actualizaEstilo()'>Aplicar estilo</button>" +
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
		onSlideAfter: function() {indice = slider.getCurrentSlide();},
		onSliderLoad: function(){
			  if ($("#plantilla").val() == templates[0])
				  span = "<img src='https://s3.amazonaws.com/landing.infomovil.com/webapp/images/temp_act.png' width='30'/>";
			  }
		});
	
	$(document).on('click','.bx-next', function() {
		indice = slider.getCurrentSlide();		
		});
	
	$(document).on('click','.bx-prev', function() {
		indice = slider.getCurrentSlide();
		});

	$(document).on('click','.bx-pager-link', function() {
		indice = slider.getCurrentSlide();
		});
	
}

function plantillaElegida(indicador)
{
	var span = "<img src='https://s3.amazonaws.com/landing.infomovil.com/webapp/images/temp_inact.png' width='30'/>";
	
	if ($("#plantilla").val() == templates[indicador])
		span = "<img src='https://s3.amazonaws.com/landing.infomovil.com/webapp/images/temp_act.png' width='30'/>";

	$("#imgActivo").val(span);
	//console.log(":::::: " + $("#imgActivo").val());
}

function actualizaEstilo()
{
	actualizaPlantilla(templates[indice]);
}

function autosave() {
	
	var n1 = $("#txtNombreNegocio").val() + $("#txtDescripcionCorta").val() +
		$("#txtCorreo").val() + $("#txtTelefono").val();

	var autosaveForm = function($form, seconds) {
		setTimeout(function() {
	
			var n2 = "";
			
			var nombreNegocio = $("#txtNombreNegocio").val();
			var descripcionCorta = $("#txtDescripcionCorta").val() ;
			var correo = $("#txtCorreo").val();
			var telefono = $("#txtTelefono").val();
			
			n2 = nombreNegocio + descripcionCorta + correo + telefono;

			if (n2 != n1) {
				$.ajax({
					type : "GET",
					url : contextPath + "/infomovil/guardarInformacion",
					dataType : "json",
					contentType: "text/plain",
					data : {
						nombreEmpresa : nombreNegocio,
						descripcionCorta : descripcionCorta,
						correoElectronico : correo.toLowerCase(),
						telefono : telefono, 
						plantilla : $("#plantilla").val()
					},
					success : function(json) {
						n1 = nombreNegocio + descripcionCorta + correo + telefono;
						autosaveForm($form, seconds);
					},
					error : function(json) {
						//console.log('Algo salio mal!');
					}

				});
			} else {
				autosaveForm($form, seconds);
			}

		}, seconds);
	}

	autosaveForm($('form'), 5000);
}