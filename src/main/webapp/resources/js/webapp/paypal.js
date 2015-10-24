var plan = "PLAN PRO 1 MES";
var producto = "GJ87DBKRZ956A";
var tipoCompra = "PP1";

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
		$( "#datosIncompletos" ).empty();
		producto = "JCLPR45ZL73CU";
		tipoCompra = "DOMINIO TEL";
		$("#hosted_button_id").val(producto);
		intentoPago($nombre, $direccion, $correo, $pais, $tipoPlan, $titulo, $tipoCompra);
	}
	else
	{
		$( "#datosIncompletos" ).empty();
	
		switch(falta)
		{
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
		var producto = "GJ87DBKRZ956A";
		var tipoCompra = "PP1";
	}
	else
	{		
		$("#precioPP").html("440.00");
		var plan = "PLAN PRO 12 MESES";
		var producto = "BFAWPP8D27FAY";
		var tipoCompra = "PP12";
	}
	
	$("#hosted_button_id").val(producto);
	intentoPago("", "", "", "", plan, "", tipoCompra);
});

function intentoPago($nombre, $direccion, $correo, $pais,
		$tipoPlan, $titulo, $tipoCompra) {
	
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
	console.log("Entro a intento Pago" + $tipoPlan + ', ' + $tipoCompra);
	$.ajax({
			type : "POST",
			url : contextPath + "/infomovil/crearSitioIntentoPago",
				dataType : "json",
				//contentType: "text/plain",
				data : {
					nombre: $nombre,
					direccion: $direccion,
					pais: $pais,
					tipoPlan: $tipoPlan, 
					titulo: $titulo,
					tipoCompra: $tipoCompra					
				},
			success : function(data) {
				console.log("El resultado es: " + data.resultado);
				if(data.resultado > 0) {
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
	console.log("plan: " + plan + ", tipoCompra: " + tipoCompra);
}