var myApp = angular.module('myApp', ['uiGmapgoogle-maps']);
var myGlobalVariables = { };
var myControllers = { };

myGlobalVariables.latitude = 0;
myGlobalVariables.longitud = 0;
myGlobalVariables.zoom = 15;
myGlobalVariables.tieneMapa = false;
myGlobalVariables.geolocalizacion = false;
myGlobalVariables.mostrarMapa = false;

myControllers.mapController = function($scope) {

    myGlobalVariables.geolocalizacion = false;
    
    if (!myGlobalVariables.tieneMapa)
    {
        myGlobalVariables.geolocalizacion = navigator.geolocation ? true : false;
        
        if (myGlobalVariables.geolocalizacion) /*Soporta la geolocalizacion*/
        {
            console.log("si soporta la geolocalizacion");
            myGlobalVariables.mostrarMapa = true;
            navigator.geolocation.getCurrentPosition(function (position) {
                
                myGlobalVariables.latitude = position.coords.latitude;
                myGlobalVariables.longitud = position.coords.longitude;
                console.log("latitude: " + myGlobalVariables.latitude + 
                            ", longitude: " + myGlobalVariables.longitud);                     
            }, function(error){
                errorGeolocalizacion(error);
            });
        }
        else
        {
           console.log("Este browser no soporta la geolocalizacion");                                          
        }
    }

    console.log("geolocationAvailable: " + myGlobalVariables.geolocalizacion + ", myGlobalVariables.mostrarMapa: " + myGlobalVariables.mostrarMapa);
    if (myGlobalVariables.mostrarMapa)
    {
        console.log("latitude: " + myGlobalVariables.latitude + ", longitude: " + myGlobalVariables.longitud);
        
        $scope.map = {
            center: { 
                latitude: myGlobalVariables.latitude, 
                longitude: myGlobalVariables.longitud 
                }, 
            zoom: myGlobalVariables.zoom
        }

        $scope.marker = {
            coords: {
                latitude: myGlobalVariables.latitude, 
                longitude: myGlobalVariables.longitud 
            }
        }
    }
} /*Contoller*/

function errorGeolocalizacion(error) {

    myGlobalVariables.mostrarMapa = false;
    
    switch(error.code)
    {
        case error.PERMISSION_DENIED:
            console.log("User denied the request for Geolocation.");
            break;
        case error.POSITION_UNAVAILABLE:
            console.log("Location information is unavailable.");
            break;
        case error.TIMEOUT:
            console.log("The request to get user location timed out.");
            break;
        case error.UNKNOWN_ERROR:
            console.log("An unknown error occurred.");
            break;
    }
    
}

myApp.controller(myControllers);