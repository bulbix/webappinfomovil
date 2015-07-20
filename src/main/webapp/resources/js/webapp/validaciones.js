var templates = new Array("Coverpage1azul", "Coverpage2", "Coverpage3", "Coverpage4", "Coverpage5", "Coverpage6");
var nombres = new Array("Coverpage1azul", "Coverpage2", "Coverpage3", "Coverpage4", "Coverpage5", "Coverpage6"); /*Cambiar nombres*/
var indice = 0;
	
$(document).ready(function() {
	$("#txtTelefono").numeric({negative : false} );
	if(contextPath == "/")
		contextPath = "";
	
});

function validaDominio()
{
	console.log("validaDominio::::::");
	var nombreDominio = $("#nombreDominioBusqueda").val();
	var tipoDominio = $("#tipoDominioBusqueda").val();
	var sitioDisponible = "";
	var textoBoton = "Aceptar";
	var opcion = "NO_PUBLICAR"
	var msjValidacion = "";
	var funcion = "aceptar()";
	var regAuxiliar = /^[_a-z0-9-]+([a-z0-9])$/;
	
	nombreDominio = nombreDominio.toLowerCase();
	
	if (nombreDominio == null || nombreDominio.trim().length == 0 || nombreDominio.trim().length < 3)
	{
		$("#validacionNombre").html("El nombre debe ser mayor a 2 caracteres y menor a 64");
		return false;
	}

	if (nombreDominio.toLowerCase().indexOf("infomovil") != -1)
	{
		$("#validacionNombre").html("No debe contener la palabra Infomovil");
		return false;
	}

	if (!regAuxiliar.test(nombreDominio)) 
	{
		$("#validacionNombre").html("Caracteres no v&aacutelidos");
		return false;
	}
	
	$("#validacionNombre").css("display", "none");
	console.log("nombreDominio: "+ nombreDominio + ", tipoDominio: " + tipoDominio);
	
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
			console.log("termino busqueda de dominio:::::: " + json.resultado);
			if (json.resultado.indexOf("No existe") != -1)
			{
				funcion = "publicar()";
				opcion = "PUBLICAR";
				msjValidacion = "";
				textoBoton = "&iexcl;Lo quiero!";
				sitioDisponible = "www." + nombreDominio + "." + tipoDominio + " est&aacute; disponible";
				
				if (tipoDominio == "recurso")
					sitioDisponible = $("#idCatTipoRecurso option:selected").html() + "/" + nombreDominio + " est&aacute; disponible";
			}
			else
			{
				funcion = "aceptar()"
				msjValidacion = "";
				textoBoton = "Aceptar"
				sitioDisponible = "www." + nombreDominio + "." + tipoDominio + " no est&aacute; disponible";
			}
			
			$('#modalPublicacion').html("<div id='myModalPublicar' class='modal fade' tabindex='-1' role='dialog' aria-labelledby='myModalLabel' aria-hidden='true'>"+
					"<div class='modal-dialog modal-lg'><div class='modal-content'><div class='modal-header'><button type='button' class='close' data-dismiss='modal' aria-label='Close'>"+
					"<span aria-hidden='true'>&times;</span></button><p class='modal-title' ></p></div><div class='modal-body bgWhite'>"+
					"<h2 class='textBlack col-xs-12 col-sm-12 col-md-6 col-md-offset-3 col-lg-6 col-lg-offset-3 text-center'>"+ msjValidacion +"</h2><h5 class='textBlack col-xs-12 col-sm-12 col-md-6 col-md-offset-3 col-lg-6 col-lg-offset-3 text-center'>"+
					"El dominio " + sitioDisponible + "</h5><div class='clear divider'></div></div><div class='modal-footer'>"+
					"<button type='button' class='btn btn-purple text-center col-xs-12 col-sm-12 col-md-6 col-md-offset-3 col-lg-6 col-lg-offset-3' data-dismiss='modal' onClick=" + funcion + "><strong>"+ textoBoton +"</strong>" + 
					"</button><input type='hidden' id='opcion' value=" + opcion + "/></div></div></div></div>");
			
			$('#modalPublicacion > .alert-success').append($('#myModalPublicar').modal('show'));
			
	    }
	 ).fail(function( jqXHR, textStatus ) {
		 
	 });
}

function aceptar()
{
	$('#modalPublicacion > .alert-success').append($('#myModalPublicar').modal('remove'));
}

function publicar()
{
	$.blockUI({ message: "<h1><img src='" + contextPath + "/resources/webapp/images/project-loader.gif' /></h1>" }); 
//	$("#LoadingImageFace").show();
	var dominio = $("#nombreDominioBusqueda").val().toLowerCase();
	console.log("dominio::::: " + dominio);
	$("#nombreDominio").val(dominio);
	$("#tipoDominio").val($("#tipoDominioBusqueda").val());
	$("#publicarDominio").submit();
}

function actualizaPlantilla(plantillaElegida)
{	
	console.log("actualizaPlantilla");
	var plantillaNueva = plantillaElegida; // Obtener del modal
	var nombreNegocio = $("#txtNombreNegocio").val();
	var descripcionCorta = $("#txtDescripcionCorta").val() ;
	var correo = $("#txtCorreo").val();
	var telefono = $("#txtTelefono").val();
	var plantilla = $("#plantilla").val();			
	var aux;
	
	console.log("plantillaNueva: " + plantillaNueva + ", plantilla: " + plantilla);
//	if (plantillaNueva == plantilla)
//		return;

	$("#modalTemplates").css("display", "none");
	$(document).ready(function() { 
	        $.blockUI({ 
	            message: "Actualizando estilo...", 
	            css: { 
	                top:  ($(window).height() - 400) /2 + 'px', 
	                left: ($(window).width() - 400) /2 + 'px', 
	                width: '400px' 
	            } 
	        }); 
	 
	        setTimeout($.unblockUI, 2000); 
 
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
			
			console.log("json.actualizaTemplate:::" + json.actualizaTemplate);
			$("#plantilla").val(plantillaNueva);			
			
			if(json.actualizaTemplate == "0")
			{
				console.log("Plantilla actualizada correctamente");
				$.unblockUI();
				window.location = contextPath + '/infomovil/editarSitio';
			}

		},
		error : function(json) {
			console.log("Error");
			//$("#LoadingImageFace").hide();
			$.unblockUI();
		//	aux = JSON.parse(json);
		//	console.log(JSON.stringify(aux));

	//		console.log('Algo salio mal! ' + JSON.parse(json));
		}

	});		
//	$("#LoadingImageFace").hide();
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
		li = "<li onClick='actualizaPlantilla(this.id)' id='" + templates[i] +"' class='text-center'><img style='width:100%; height:auto; min-width:280px!important; max-width:600px !important; max-height:568px!important;min-height:265px!important; display:block;' src='" + urlRecurso + "' title='" + nombres[i] + "'' /></li>";
		slider = slider + li;
		urlRecurso = "";
	}
	
//	$('#modalTemplates').html("<div id='myModalTemplates' class='modal fade' tabindex='-1' role='dialog' aria-labelledby='myModalLabel' aria-hidden='true'>" +
//			"<div class='modal-dialog modal-lg'><div class='modal-content'><div class='modal-header'>" +
//			 	"<button type='button' class='close textBlack' data-dismiss='modal' aria-label='Close'><span aria-hidden='true'>&times;</span></button>" +
//			        "<p class='modal-title textBlack'>Elije tu estilo</p></div>" + 
//			        "<div class='modal-body bgWhite'>" + slider + "</div><div class='modal-footer'>" + //<span class='text-left'>" + span + "</span>" +
//			        "<span class='text-left'><img src='https://s3.amazonaws.com/landing.infomovil.com/webapp/images/temp_act.png' width='30'/> Estilo " + nombres[i] + "</span>" +
//			        "<button type='button' class='btn btn-purple pull-right' data-dismiss='modal'>Cerrar</button></div></div></div></div>");

	/*********************************************************************************************
	** 	Colocar la imagen oculta del template activo, y actualizarlo.....
	/*********************************************************************************************/
//	$('#modalTemplates').html("<div id='myModalTemplates' class='modal fade' tabindex='-1' role='dialog' aria-labelledby='myModalLabel' aria-hidden='true'>" +
//			"<div class='modal-dialog modal-lg'><div class='modal-content'><div class='modal-header'>" +
//			 	"<button type='button' class='close textBlack' data-dismiss='modal' aria-label='Close'><span aria-hidden='true'>&times;</span></button>" +
//			        "<p class='modal-title textBlack'>Elije tu estilo</p></div>" + 
//			        "<div class='modal-body bgWhite'><div class="slide-contain">" + slider + "</div></div><div class='modal-footer'>" + //<span class='text-left'>" + span + "</span>" +
////			        "<span class='text-left'><img src='https://s3.amazonaws.com/landing.infomovil.com/webapp/images/temp_act.png' width='30'/> Estilo " + nombres[i] + "</span>" +
//			        "<button type='button' class='btn btn-purple pull-right' onClick='actualizaEstilo()'>Aplicar estilo</button></div></div></div></div>");
	
	
	$('#modalTemplates').html("<div id='myModalTemplates' class='modal fade' tabindex='-1' role='dialog' aria-labelledby='myModalLabel' aria-hidden='true'>" +
			"<div class='modal-dialog modal-lg'><div class='modal-content'>" +

			"<div class='modal-header'>" +
			 	"<button type='button' class='close textBlack pull-left' data-dismiss='modal' aria-label='Close'><span aria-hidden='true'>&times;</span></button> <button type='button' class='btn btn-purple pull-right' onClick='actualizaEstilo()'>Aplicar estilo</button>" +
			        "</div>" + 
			        "<div class='modal-body bgWhite'>" + slider + "</div><div class='modal-footer'>" + //<span class='text-left'>" + span + "</span>" +
//			        "<span class='text-left'><img src='https://s3.amazonaws.com/landing.infomovil.com/webapp/images/temp_act.png' width='30'/> Estilo " + nombres[i] + "</span>" +
			        " </div></div></div></div>");
	
	var slider = $('.bxslider').bxSlider({
		 moveSlides: 1,
		    displaySlideQty: 2,
		    responsive: false,
		    infiniteLoop: true,
		adaptiveHeight: true,
		mode: 'fade',
		captions: true,
		pager: true,
		touchEnabled : false,
		onSliderLoad: function(){
			  if ($("#plantilla").val() == templates[0])
				  span = "<img src='https://s3.amazonaws.com/landing.infomovil.com/webapp/images/temp_act.png' width='30'/>";
			  }
		});
	
	$(document).on('click','.bx-next', function() {
		indice = slider.getCurrentSlide();
//		plantillaElegida(indice);
		});
	
	$(document).on('click','.bx-prev', function() {
		indice = slider.getCurrentSlide();
//		plantillaElegida(indice);
		});

	$(document).on('click','.bx-pager-link', function() {
		indice = slider.getCurrentSlide();
//		plantillaElegida(indice);
		});
	
}

function plantillaElegida(indicador)
{
	var span = "<img src='https://s3.amazonaws.com/landing.infomovil.com/webapp/images/temp_inact.png' width='30'/>";
	
	if ($("#plantilla").val() == templates[indicador])
		span = "<img src='https://s3.amazonaws.com/landing.infomovil.com/webapp/images/temp_act.png' width='30'/>";

	$("#imgActivo").val(span);
	console.log(":::::: " + $("#imgActivo").val());
}

function actualizaEstilo()
{
	//alert("template a actualizar: " + templates[indice]);
	actualizaPlantilla(templates[indice]);
}

function autosave() {
	
	var n1 = $("#txtNombreNegocio").val() + $("#txtDescripcionCorta").val() +
		$("#txtCorreo").val() + $("#txtTelefono").val();
	
	//console.log('El valor de n1 es: ' + n1);

	var autosaveForm = function($form, seconds) {
		setTimeout(function() {
	/*		console.log("NombreNegocio: " + $("#txtNombreNegocio").val());
			console.log("DescripcionCorta: " + $("#txtDescripcionCorta").val());
			console.log("Correo: " + $("#txtCorreo").val());
			console.log("Telefono: " + $("#txtTelefono").val());
	*/		
			var n2 = "";
			
			var nombreNegocio = $("#txtNombreNegocio").val();
			var descripcionCorta = $("#txtDescripcionCorta").val() ;
			var correo = $("#txtCorreo").val();
			var telefono = $("#txtTelefono").val();
			
			n2 = nombreNegocio + descripcionCorta + correo + telefono;

			if (/*n2.length > 0 &&*/ n2 != n1) {
				$.ajax({
					type : "GET",
					url : contextPath + "/infomovil/guardarInformacion",
					dataType : "json",
					contentType: "text/plain",
					data : {
						nombreEmpresa : nombreNegocio,
						descripcionCorta : descripcionCorta,
						correoElectronico : correo,
						telefono : telefono, 
						plantilla : $("#plantilla").val()
					},
					success : function(json) {
					//	console.log('Guardado :)');
						n1 = nombreNegocio + descripcionCorta + correo + telefono;
					//	console.log('El valor de n1 es: ' + n1);
						autosaveForm($form, seconds);
					},
					error : function(json) {
						console.log('Algo salio mal!');
					}

				});
			} else {
				autosaveForm($form, seconds);
			}

		}, seconds);
	}

	autosaveForm($('form'), 5000);
}
			
			
			
			
			
			
			