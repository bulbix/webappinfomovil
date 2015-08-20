var myApp = angular.module('myApp', ['ngRoute']);
var myControllers = { };

myApp.config(['$routeProvider', function($routeProvider) {

    $routeProvider
      .when('/agregarUbicacion', {
        templateUrl: '/WebAppInfomovil/resources/webapp/html/modalMapa.html',
        controller: 'modalMapa'
    });
}]);

//myControllers.modalMapa = function($scope, $modal) {
	
	/*$scope.muestraModalMapa = function() {
		console.log("Mostrar modal!");
	}*/
//}

myControllers.modalMapa = function($scope, $timeout, $dialog){
	  $timeout(function(){
	    $dialog.dialog({}).open('/WebAppInfomovil/resources/webapp/html/modalMapa.html');  
	  }, 3000);  
	}

myApp.controller(myControllers);
