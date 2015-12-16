var app = angular.module('InfomovilVolantes', []);

app.controller("VolantesController", function ($scope, $http, MensajesService) {
	
	var volantesCtrl = this;
	
	volantesCtrl.getVolantes = function() {
		
		console.log("entro a getVolantes");
		
		$http({
			method: 'GET',
			url: contextPath + "/infomovil/getPromociones",
		}).then(function successCallback(response) {
			
			volantesCtrl.volantes = response.data;
					 
		}, function errorCallback(response) {
			console.log("El error es: " + response);
			var mensaje = "No se ha podido obtener la lista de volantes";
			MensajesService.cerrarBlockUIGeneral("Contactos", mensaje);
		});
	}
	
	volantesCtrl.getVolantes();
});

