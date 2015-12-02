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