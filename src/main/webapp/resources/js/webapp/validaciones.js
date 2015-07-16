$(document).ready(function() {
	$("#txtTelefono").numeric({negative : false} );
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
	//	alert("longitud de dominio");
		return false;
	}

	if (nombreDominio.toLowerCase().indexOf("infomovil") != -1)
	{
		$("#validacionNombre").html("No debe contener la palabra Infomovil");
	//	alert("contenido infomovil");
		return false;
	}

	if (!regAuxiliar.test(nombreDominio)) 
	{
	//	alert("exp. regular");
		$("#validacionNombre").html("Caracteres no validos");
		//$("#formatoServicios").css("display", "block");
		return false;
	}
	
	$("#validacionNombre").css("display", "none");
	console.log("nombreDominio: "+ nombreDominio + ", tipoDominio: " + tipoDominio);
	
	if(contextPath == "/")
		contextPath = "";
	
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
				//msjValidacion = "&iexcl;Felicidades!";
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
	$.blockUI({ message: '<h1><img src="/WebAppInfomovil/resources/webapp/images/busy.gif" />Nombrando...</h1>' }); 
	var dominio = $("#nombreDominioBusqueda").val().toLowerCase();
	console.log("dominio::::: " + dominio);
	$("#nombreDominio").val(dominio);
	$("#tipoDominio").val($("#tipoDominioBusqueda").val());
	$("#publicarDominio").submit();
}

function actualizaPlantilla()
{	
	console.log("actualizaPlantilla");
	var plantillaNueva = "Coverpage1azul"; // Obtener del modal
	var nombreNegocio = $("#txtNombreNegocio").val();
	var descripcionCorta = $("#txtDescripcionCorta").val() ;
	var correo = $("#txtCorreo").val();
	var telefono = $("#txtTelefono").val();
	var plantilla = $("#plantilla").val();			
	var aux;
	
	console.log("plantillaNueva: " + plantillaNueva + ", plantilla: " + plantilla);
//	if (plantillaNueva == plantilla)
//		return;
	$.blockUI({ message: '<h1><img src="/WebAppInfomovil/resources/webapp/images/busy.gif" />Actualizando...</h1>' }); 
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
			alert("Plantilla actualizada correctamente");
			
			if(json.actualizaTemplate == "0")
			{
				if(contextPath == "/")
					contextPath = "";
				$.unblockUI();
				window.location = contextPath + '/infomovil/editarSitio';
			}

		},
		error : function(json) {
			alert("Error");
			$.unblockUI();
		//	aux = JSON.parse(json);
		//	console.log(JSON.stringify(aux));

	//		console.log('Algo salio mal! ' + JSON.parse(json));
		}

	});		
}

function generarSlider()
{
	//actualizaPlantilla();
	var templates = new Array("Coverpage1azul", "Coverpage2azul");
	var urlRecurso = "";
	var slider = "";
	var li = "";

	slider = "<ul class='bxslider'>";
	
	for (i = 0; i < templates.length; i = i + 1) 
	{
		urlRecurso = "http://landing.infomovil.com/webapp/templates/" + templates[i] + "/templateVacio.png";
		li = "<li><img src='" + urlRecurso + "' title='Funky roots'/></li>";
		slider = slider + li;
		urlRecurso = "";
	}

	slider = slider + "</ul></div><div class='modal-footer'><button type='button' class='btn btn-default' data-dismiss='modal'>Cerrar</button></div></div></div></div>";
	
	$("#modalTemplates").html("<div id='myModalTemplate' class='modal fade' tabindex='-1' role='dialog' aria-labelledby='myModalLabel' aria-hidden='true'>" +
			"<div class='modal-dialog modal-lg'><div class='modal-content'><div class='modal-header'><button type='button' class='close' data-dismiss='modal'" + 
			"aria-label='Close'><span aria-hidden='true'>&times;</span></button><p class='modal-title'>Elige tu estilo</p></div><div class='modal-body bgWhite'>" + slider);

	console.log($("#modalTemplates").html());
	$('#modalTemplates > .alert-success').append($('#myModalTemplates').modal('show'));
	//console.log("slider::::: " + slider);
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
			
//			if ($("#txtNombreNegocio").val().length > 0 && $("#txtDescripcionCorta").val().length > 0
//					&& $("#txtCorreo").val().length > 0 && $("#txtTelefono").val().length > 0) {
//				
//			} 
			
//			console.log("El valor de n2 es: " + n2);
			
			if(contextPath == "/"){
				contextPath = "";
			}

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
