$("#btnPagoPaypal").click(function() {
	
	var $nombre  = $("#nombreUser").val();
	var $direccion = $("#direccionUser").val();
	var $correo = $("#emailUser").val();
	var $pais = "México";
	console.log($nombre + '' + $correo )
	var falta = 0
	if($nombre.length == 0 ){
		falta = 1;
	}else if($direccion.length == 0){
		falta = 2;
	}
	if(falta == 0){
		$( "#datosIncompletos" ).empty();
		
		intentoPago($nombre, $direccion, $correo, $pais);
	}else{
		$( "#datosIncompletos" ).empty();
		switch(falta) {
			case 1:
				$( "#datosIncompletos" ).append( "Falta completar el dato Nombre" );
				break;
			case 2:
				$( "#datosIncompletos" ).append( "Falta completar el dato Dirección" );
				break;
		}			
	}
});

function intentoPago($nombre, $direccion, $correo, $pais) {
	
	var $nombre  = $("#nombreUser").val();
	var $direccion = $("#direccionUser").val();
	var $pais = "MX";
	var $email = $("#emailUser").val();
	
	$.blockUI.defaults.baseZ = 9000;
	$.blockUI({
		message: "Redireccionando a paypal...",
		css: {
			class:"alertaUI",
			top:  ($(window).height() - 400) /2 + 'px',
			left: ($(window).width() - 400) /2 + 'px',
			width: '400px'
		}
	});
	console.log("Entro a intento Pago" + $nombre + '' + $direccion + '' + $pais);
	$.ajax({
			type : "POST",
			url : contextPath + "/infomovil/crearSitioIntentoPago",
				dataType : "json",
				//contentType: "text/plain",
				data : {
					nombre: $nombre,
					direccion: $direccion,
					pais: $pais
					
				},
			success : function(data) {
				console.log("El resultado es: " + data.resultado);
				if(data.resultado > 0) {
					$("#customPaypal").val(data.resultado + ',' + $email);
					comprarPayPal(data.resultado);
				}else{
					$.unblockUI();
					$( "#datosIncompletos" ).append( "No se ha podido enviar la petición por favor intentalo nuevamente." );
				}
				
			},
			error : function(json) {
				$.unblockUI();
				$( "#datosIncompletos" ).append( "No se ha podido enviar la petición por favor intentalo nuevamente." );
			}

	});
}

function comprarPayPal(customId) {
	document.getElementById("formPaypal").submit();
	$.unblockUI();	
}

function abrirModalExitoso(idModal) {
	$("#" + idModal).modal();	
}