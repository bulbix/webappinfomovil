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
     
    function obtenerConfirmacion(textos, callback) {

    	BootstrapDialog
		.show({
			title : "<div class='textBlack'>" + textos.titulo + "</div>",
			message : "<div style='display:block; padding: 10px;'>" + textos.mensaje + "</div>",
			buttons : [
					{
						label : stringsIdioma['VOEDLA0060'],
						action : function(dialog) {
							callback(false);
							dialog.close();
						}
					},
					{
						label : stringsIdioma['VOEDLA0059'],
						action : function(dialog) {
							callback(true);
							dialog.close();
						}
					} ]
		});
    }
     
	return { 
		
		abrirBlockUIGeneral : abrirBlockUIGeneral,
		cerrarBlockUIGeneral : cerrarBlockUIGeneral,
		obtenerConfirmacion : obtenerConfirmacion
	}
	
});