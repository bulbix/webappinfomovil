$(document).ready(function() {
	
	
	
	
	
});

$("#btnPagoPaypal").click(function() {
	var $nombre  = $("#nombreUser").val();
	var $direccion = $("#direccionUser").val();
	var $correo = $("#emailUser").val();
	var $pais = "México";
	console.log($nombre + '' + $correo + '' + $direccion)
	var falta = 0
	if($nombre.length == 0 ){
		falta = 1;
	}else if($direccion.length == 0){
		falta = 2;
	}else if($correo.length == 0){
		falta = 3;
	}
	if(falta == 0){
		$( "#datosIncompletos" ).empty();
		
		intentoPago($nombre, $direccion, $correo, $pais);
	}else{
		$( "#datosIncompletos" ).empty();
		switch(falta){
			case 1:
				$( "#datosIncompletos" ).append( "Falta completar el dato Nombre" );
				break;
			case 2:
				$( "#datosIncompletos" ).append( "Falta completar el dato Dirección" );
				break;
			case 3: 
				$( "#datosIncompletos" ).append( "Falta completar el dato Email" );
				break;
		}	
		
	}
});




function intentoPago($nombre, $direccion, $correo, $pais){
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
	console.log("Entro a intento Pago");
	$.ajax({
			type : "POST",
			url : contextPath + "/infomovil/crearSitioIntentoPago",
				dataType : "json",
				contentType: "text/plain",
				data : {},
			success : function(data) {
				console.log("El resultado es: " + data.resultado);
				$("#customPaypal").val(data.resultado + "test@test.com");
				comprarPayPal(data.resultado);
				
			},
			error : function(json) {
				
				$.unblockUI();
			}

	});
}

/*nombre:$("#").val(),
direccion:$("#").val(),
pais:$("#").val()*/

function comprarPayPal(customId){
	document.getElementById("formPaypal").submit();
	$.unblockUI();
	
}