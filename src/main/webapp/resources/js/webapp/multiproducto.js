var app = angular.module('InfomovilAppMultiproducto', []);

app.controller("MultiproductoController", function ($scope, $http, MensajesService) {
	var multiproductoCtrl = this;
	

	multiproductoCtrl.paginaWeb = function() {
		console.log("Entro en pagina WEb: ", contextPath);
		window.location = contextPath + '/infomovil/editarSitio';
	};
		
	multiproductoCtrl.volanteWeb = function() {
		console.log("Entro a volante web: ", contextPath);
		window.location = contextPath + '/infomovil/misVolantes';
	};
	
	
	
	
	
	
	
});