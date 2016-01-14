var app = angular.module('InfomovilAppMultiproducto', []);

app.controller("MultiproductoController", function ($scope, $http, MensajesService) {
	
	var multiproductoCtrl = this;
	multiproductoCtrl.producto = "web";
	multiproductoCtrl.vista = "editarSitio";
	multiproductoCtrl.tabla = "multiproducto";
	multiproductoCtrl.mensaje = "";
	
	multiproductoCtrl.paginaWeb = function() {

		multiproductoCtrl.producto = "web";
		multiproductoCtrl.vista = "editarSitio";
		multiproductoCtrl.actualizaProducto();
	};
		
	multiproductoCtrl.volanteWeb = function() {

		multiproductoCtrl.producto = "volante";
		multiproductoCtrl.vista = "misVolantes";
		multiproductoCtrl.actualizaProducto();
	};

	multiproductoCtrl.actualizaProducto = function() {
		
    	$http({
    		method: 'POST',
    		url: contextPath + "/infomovil/actualizaProducto",
    		params: {
    			tableName: multiproductoCtrl.tabla,
    			producto: multiproductoCtrl.producto
    		}		  
    	}).then(function successCallback(response) {
    		
    		multiproductoCtrl.mensaje = "";
    		MensajesService.cerrarBlockUIGeneral("Multiproducto", multiproductoCtrl.mensaje);
    		window.location = contextPath + "/infomovil/" + multiproductoCtrl.vista;
    		
    	}, function errorCallback(response) {
    		
    		multiproductoCtrl.mensaje = "No se ha podido actualizar el contacto";
    		MensajesService.cerrarBlockUIGeneral("Multiproducto", multiproductoCtrl.mensaje);
    		
    	});
    	
	};
	
});