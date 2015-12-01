app.factory('MensajesService', function($http) {
	
	 function abrirBlockUIGeneral(mensaje) {	
 	 	$.blockUI.defaults.baseZ = 9000;
			$.blockUI({
				message : mensaje,
				css : {
					class : "alertaUI",
					top : ($(window).height() - 400) / 2 + 'px',
					left : ($(window).width() - 400) / 2 + 'px',
					width : '400px'
				}
			});
	 };
	
	
	 function cerrarBlockUIGeneral(titulo , mensaje) {
    	 $.unblockUI();
    	 if(mensaje.length > 0) {
    		 BootstrapDialog
				.show({
					title : '<span class="textBlack" style="font-size:1.15em;"><img alt="" src="../resources/webapp/images/fa-warning-bk.png"  title="Alerta" />' + titulo + '</span>',
					message : '<div style="display:block; min-height:150px;"><p class="textBlack text-center" style="font-size:1.15em;">' + mensaje + '</p><br/>'
				});
    	 }
     };
     
     
     
	return{   	
		abrirBlockUIGeneral : abrirBlockUIGeneral,
		cerrarBlockUIGeneral : cerrarBlockUIGeneral
		
	}
	
});