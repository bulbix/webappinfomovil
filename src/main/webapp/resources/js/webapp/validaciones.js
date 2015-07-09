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
				msjValidacion = "&iexcl;Felicidades!";
				textoBoton = "&iexcl;Lo quiero!";
				sitioDisponible = "www." + nombreDominio + "." + tipoDominio + " esta disponible";
				
				if (tipoDominio == "recurso")
					sitioDisponible = $("#idCatTipoRecurso option:selected").html() + "/" + nombreDominio + " esta disponible";
			}
			else
			{
				funcion = "aceptar()"
				msjValidacion = "";
				textoBoton = "Aceptar"
				sitioDisponible = "www." + nombreDominio + "." + tipoDominio + " no esta disponible";
			}
			
			$('#modalPublicacion').html("<div id='myModalPublicar' class='modal fade' tabindex='-1' role='dialog' aria-labelledby='myModalLabel' aria-hidden='true'>"+
					"<div class='modal-dialog modal-lg'><div class='modal-content'><div class='modal-header'><button type='button' class='close' data-dismiss='modal' aria-label='Close'>"+
					"<span aria-hidden='true'>&times;</span></button><p class='modal-title' ></p></div><div class='modal-body bgWhite'>"+
					"<h2 class='textWhite col-xs-12 col-sm-12 col-md-6 col-md-offset-3 col-lg-6 col-lg-offset-3 text-center'>"+ msjValidacion +"</h2><h5 class='textWhite col-xs-12 col-sm-12 col-md-6 col-md-offset-3 col-lg-6 col-lg-offset-3 text-center'>"+
					"El dominio " + sitioDisponible + "</h5><div class='clear divider'></div></div><div class='modal-footer'>"+
					"<button type='button' class='btn btn-default text-center col-xs-12 col-sm-12 col-md-6 col-md-offset-3 col-lg-6 col-lg-offset-3' data-dismiss='modal' onClick=" + funcion + "><strong>"+ textoBoton +"</strong>" + 
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
	$("#nombreDominio").val($("#nombreDominioBusqueda").val());
	$("#tipoDominio").val($("#tipoDominioBusqueda").val());
	$("#publicarDominio").submit();
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
					data : {
						nombreEmpresa : nombreNegocio,
						descripcionCorta : descripcionCorta,
						correoElectronico : correo,
						telefono : telefono
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