$(document).ready(function() {
	
	
	
	
	
});

$("#btnPagoPaypal").click(function() {
	$nombre  = $("#nombreUser").val();
	$direccion = $("#direccionUser").val();
	$correo = $("#emailUser").val();
	$pais = "México";
	var falta = 0
	if($nombre.length > 0 ){
		falta = 1;
	}else if($direccion.length > 0){
		falta = 2;
	}else if($correo.length > 0){
		falta = 3;
	}
	if(falta == 0){
		intentoPago($nombre, $direccion, $correo, $pais);
	}else{
		switch(falta){
			case 1:
				$( ".inner" ).append( "<p>Falta completar el dato Nombre</p>" );
			case 2:
				$( ".inner" ).append( "<p>Falta completar el dato Dirección</p>" );
			case 3: 
				$( ".inner" ).append( "<p>Falta completar el dato Email</p>" );
		}	
		
	}
});




function intentoPago($nombre, $direccion, $correo, $pais){
	
	$.ajax({
			type : "POST",
			url : contextPath + "/infomovil/intentoPago",
			dataType : "json",
			contentType: "text/plain",
			data : {
				nombre: $nombre,
				direccion: $direccion,
				correo: $correo,
				pais: $pais 

			},
			success : function(data) {
				console.log(data);
				$.unblockUI();
			},
			error : function(json) {
				
				$.unblockUI();
			}

	});
}


function comprarPayPal(){
	$cmd = '_xclick';
	$business = 'mi_cuenta_sandbox@mi_pagina.com';
	$item_name = 'Renovación de tu Dominio .tel'
	$item_number = 'Dominio .tel';
	$amount = '10.15';
	$page_style = 'primary';
	$no_shipping = '1';
	$return = 'http://mi_pagina/exito.html';
	$rm = value='2';
	$cancel_return = 'http://mi_pagina/cancelada.html';
	$no_note = '1';
	$currency_code = 'EUR';
	$cn = 'PP-BuyNowBF';
	$custom = value='';
	
	$first_name = 'NOMBRE';
	$last_name = 'APELLIDOS';
	$address1 = 'DIRECCIÓN';
	$city = 'POBLACIÓN';
	$zip = 'CÓDIGO POSTAL';
	
	$night_phone_a ='';
	$night_phone_b = 'TELÉFONO';
	$night_phone_c = '';
	$lc = 'es';
	$country = 'ES';
	
	$.ajax({
			type : "POST",
			url : "https://www.sandbox.paypal.com/cgi-bin/webscr",
			dataType : "json",
			contentType: "text/plain",
			data : {
				nombre: $nombre,
				direccion: $direccion,
				correo: $correo,
				country: $country,
				cmd: $cmd,
				business: $business,
				item_name: $item_name,
				item_number: $item_number,
				amount: $amount,
				page_style: $page_style,
				no_shipping: $no_shipping,
				rm: $rm,
				cancel_return: $cancel_return,
				no_note: $no_note,
				currency_code : $currency_code,
				cn : $cn,
				custom: $custom,
				first_name : $first_name,
				last_name : $last_name,
				address1: $address1,
				city: $city,
				zip: $zip,
				night_phone_a: $night_phone_a,
				night_phone_b: $night_phone_b,
				night_phone_c: $night_phone_c,
				lc: $lc,
				country: $country,
				return: $return,
			},
			success : function(data) {
				$.unblockUI();
			},
			error : function(json) {
				
				$.unblockUI();
			}

	});
}