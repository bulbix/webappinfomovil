function generarMensaje(mensaje){
	$.blockUI.defaults.baseZ = 9000;
	$.blockUI({
		message: mensaje,
		css: {
			class:"alertaUI",
			top:  ($(window).height() - 400) /2 + 'px',
			left: ($(window).width() - 400) /2 + 'px',
			width: '400px'
		}
	});	
}

function requestServer(method, url, params){
	var result = {}
	$.ajax({
		type : method,
		contentType: "application/json",
		url : url,
		async : false,
		dataType : "json",
		params: params,
		success : function(json) {
			result = json;
		},
		error : function(json) {
			result = json;
		}
	});
	
	return result
}

function hashUsuario() {
	var hashUsuario = requestServer("POST",contextPath + "/infomovil/getFecha",{}).hashUsuario;
	return hashUsuario;
}