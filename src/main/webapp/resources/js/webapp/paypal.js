$("#btnPagoPaypal").click(function() {
	
	var $nombre  = $("#nombreUser").val();
	var $direccion = $("#direccionUser").val();
	var $correo = $("#emailUser").val();
	var $pais = "México";
	var $tipoPlan = "DOMINIO TEL";
	var $titulo = "TEL";
	var $tipoCompra = "tel";
	var falta = 0
	
	if($nombre.length == 0 )
		falta = 1;
	else if($direccion.length == 0)
		falta = 2;
	
	if(falta == 0) 
	{	
		var producto = payPal.arrayProductos["TEL"];
		var tipoCompra = "DOMINIO TEL";
		$( "#datosIncompletos" ).empty();
		intentoPago($nombre, $direccion, $correo, $pais, $tipoPlan, $titulo, $tipoCompra, producto);
	}
	else
	{
		$( "#datosIncompletos" ).empty();

		switch(falta) {

			case 1:
				$( "#datosIncompletos" ).append("Falta completar el dato Nombre");
				break;
			case 2:
				$( "#datosIncompletos" ).append("Falta completar el dato Dirección");
				break;			
		}			
	}
});

$("#btnPagoPaypalPP").click(function() { 
	
	if ($("#tipoPlanPro option:selected").index() == 0)
	{
		$("#precioPP").html("40.00");
		var plan = "PLAN PRO 1 MES";
		var tipoCompra = "PP1";
		var producto = payPal.arrayProductos[tipoCompra];
	}
	else
	{		
		$("#precioPP").html("440.00");
		var plan = "PLAN PRO 12 MESES";
		var tipoCompra = "PP12";
		var producto = payPal.arrayProductos[tipoCompra];
	}
	
	intentoPago("", "", "", "", plan, "", tipoCompra, producto);
});

function intentoPago($nombre, $direccion, $correo, $pais,
		$tipoPlan, $titulo, $tipoCompra, $producto) {
	
	var $nombre  = $("#nombreUser").val();
	var $direccion = $("#direccionUser").val();
	var $pais = "MX";
	var $email = $("#emailUser").val();

	console.log("producto: " + $producto);
	
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

	$.ajax({
			type : "POST",
			url : contextPath + "/infomovil/crearSitioIntentoPago",
				dataType : "json",
				data : {
					nombre: $nombre,
					direccion: $direccion,
					pais: $pais,
					tipoPlan: $tipoPlan, 
					titulo: $titulo,
					tipoCompra: $tipoCompra					
				},
			success : function(data) {

				if(data.resultado > 0) {
					$("#hosted_button_id").val($producto);
					$("#customPaypal").val(data.resultado + ',' + $email);
					comprarPayPal(data.resultado);
					
				}else{
					$("#datosIncompletos").append( "No se ha podido enviar la petición por favor intentalo nuevamente." );
				}
				
				$.unblockUI();
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

function actualizaPrecio(indice) {
	
	if (indice == 0)
	{
		$("#precioPP").html("40.00");
		$("#precioModalPP").html("40.00 MNX");
		$("#periodoModalPP").html("1 Mes");
	}
	else
	{
		$("#precioPP").html("440.00");
		$("#precioModalPP").html("440.00 MNX");
		$("#periodoModalPP").html("12 Meses");
	}
}