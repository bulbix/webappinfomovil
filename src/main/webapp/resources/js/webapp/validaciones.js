function validaDominio()
{
	console.log("validaDominio::::::");
	var nombreDominio = $("#nombreDominio").val();
	var tipoDominio = $("#tipoDominio").val();
	var sitioDisponible = "";
	
	if (nombreDominio == null || nombreDominio.trim().length == 0)
	{
		$('#validaNombre').css("display", "block"); 
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
				$("#msjValidacion").val("¡Felicidades!");
				sitioDisponible = "www." + nombreDominio + "." + tipoDominio;
				
				if (tipoDominio == "recurso")
					sitioDisponible = $("#idCatTipoRecurso option:selected").html() + "/" + nombreDominio;

				console.log("sitioDisponible:::::" + sitioDisponible);

				
				//$("#nombreSitio").val(sitioDisponible);				
				$("#myModalPublicar").html(sitioDisponible).modal('show');
//				$("#btnBuscarTel").css("display", "none");
//				$("#btnPublicarTel").css("display", "block");
//				$('#validaNombre').val("El dominio: www." + nombreDominio + ".tel, esta disponible, publícalo"); 
//				$('#validaNombre').css("display", "block");
			}
	    }
	 ).fail(function( jqXHR, textStatus ) {

	 });
}

function autosave() {
	
	var n1 = $("#txtNombreNegocio").val() + $("#txtDescripcionCorta").val() +
		$("#txtCorreo").val() + $("#txtTelefono").val();
	
	console.log('El valor de n1 es: ' + n1);

	var autosaveForm = function($form, seconds) {
		setTimeout(function() {
			console.log("NombreNegocio: " + $("#txtNombreNegocio").val());
			console.log("DescripcionCorta: " + $("#txtDescripcionCorta").val());
			console.log("Correo: " + $("#txtCorreo").val());
			console.log("Telefono: " + $("#txtTelefono").val());
			
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
			
			console.log("El valor de n2 es: " + n2);
			
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
						console.log('Guardado :)');
						n1 = nombreNegocio + descripcionCorta + correo + telefono;
						console.log('El valor de n1 es: ' + n1);
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
