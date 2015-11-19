/**
 * 
 */


var app = angular.module('InfomovilApp', []);
app.controller('ToolBarContactoController', function($scope,$http){

	var toolbarContacto = this;
	toolbarContacto.descripcion = "descrito";
	toolbarContacto.downgrade = "";
	toolbarContacto.contacto = "";

	
	toolbarContacto.mostrarModalContactos = function(){ 
		$myModalContactos.modal();
		
	}



	toolbarContacto.eliminarContacto = function(){
		console.log(toolbarContacto.claveContacto);
		eliminarContacto();
	}

	$http({
		  method: 'GET',
		  url: contextPath + "/infomovil/getContactos",
		}).then(function successCallback(response) {
			toolbarContacto.contactos = response.data;
		  }, function errorCallback(response) {
			  console.log("El error es: " + response);
		  });
	

	toolbarContacto.actualizarContacto = function(){
		console.log(toolbarContacto.claveContacto);
		actualizarContacto();
		
	}

	
	toolbarContacto.abrirActualizarContacto = function(){
		console.log('mandar a llamar al modal de actualziar contacto');
		
		
	}
	
    
    var eliminarContacto = function(){
    		$http({
			  method: 'POST',
			  url: contextPath + "/infomovil/eliminarContacto",
			  params: { 
				  claveDeContacto: ""
				  }	  
				}).then(function successCallback(response) {
				
					console.log(response.data.codeError);
					if(response.data.codeError == 0){
						console.log("SI ELIMINO CORRECTAMENTE");
						
					}else{
						console.log("EL ERROR ES: " + response.data.codeError );
						
					}
				
				}, function errorCallback(response) {
				  console.log("El error es: " + response , response.data.codeError);
				});
     };
     
     var actualizarContacto = function(){
 		$http({
			  method: 'POST',
			  url: contextPath + "/infomovil/actualizarContacto",
			  params: { 
				  claveDeContacto: "NumerodelContacto",
				  descripcionContacto: "descripcion del contacto" ,
				  numeroEmailRedSocial: "!^.*$!mailto:" + "roni@mail.com!",
				  constanteContacto: "E2U+email:mailto",
				  redSocialWebSecure: ""}	  
				}).then(function successCallback(response) {
					console.log(response.data.codeError);
					if(response.data.codeError == 0){
						console.log("SI ACTUALIZO CORRECTAMENTE");
						
					}else{
						console.log("EL ERROR ES: " + response.data.codeError );
						
					}
				

				}, function errorCallback(response) {
					 console.log("El error es: " + response , response.data.codeError);
				});
     };
  
    

	
	toolbarContacto.abrirActualizarContacto = function(item) {
		console.log("item abrirActualizarContacto: " + item.regExp)
		
	}

	
});

//ng-click="toolbarContacto.eliminarContacto()"
//toolbarContacto.descripcion = "descrito";
//toolbarContacto.descripcion
//<input type="text" ng-model="toolbarContacto.descripcion"/>
//toolbarContacto.mostrarHola = true;
//toolbarContacto.mostrarHola = false;
//<h1 ng-show="toolbarContacto.mostrarHola">Holasadsadasdasdasdas</h1>


app.controller('TipoContacto', function($scope,$http){
	var datosTipoContacto = this;
	
	
	datosTipoContacto.menuContactos = true;
	datosTipoContacto.formTelefonos = false;
	datosTipoContacto.formRedesSociales = false;
	
	datosTipoContacto.telefonos = function(tipo){
		datosTipoContacto.menuContactos = false;
		datosTipoContacto.formTelefonos = true;
		datosTipoContacto.formRedesSociales = false;
		var mensajesContacto = objetoTipoContacto(tipo);
		$scope.nombre = mensajesContacto.nombre;
		$scope.etiqueta = mensajesContacto.etiqueta;
		$scope.pais = mensajesContacto.pais;
		$scope.placeholderTelefonos = mensajesContacto.placeholder; 
		$scope.mensajeTelefonos = mensajesContacto.mensaje;
		
	}
	
	datosTipoContacto.redesSociales = function(tipo){
		datosTipoContacto.menuContactos = false;
		datosTipoContacto.formRedesSociales = true;
		datosTipoContacto.formTelefonos = false;
		var mensajesContacto = objetoTipoContacto(tipo);
		$scope.nombre = mensajesContacto.nombre;
		$scope.etiqueta = mensajesContacto.etiqueta;
		$scope.mensajeRedSocial = mensajesContacto.mensaje;
		$scope.placeholderTelefonos = mensajesContacto.placeholder; 
		
	}
	
	datosTipoContacto.regresarAgregarContacto = function(){
		datosTipoContacto.menuContactos = true;
		datosTipoContacto.formRedesSociales = false;
		datosTipoContacto.formTelefonos = false;
	}
	
	datosTipoContacto.guardarContacto = function(){
		guardarContacto();
		
	}
	 var guardarContacto = function(){
			$http({
				  method: 'POST',
				  url: contextPath + "/infomovil/guardarContacto",
				  params: { 
					  descripcionContacto: "descripcion del contacto" ,
					  numeroEmailRedSocial: "!^.*$!mailto:" + "roni@mail.com!",
					  constanteContacto: "E2U+email:mailto",
					  redSocialWebSecure: ""}	  
					}).then(function successCallback(response) {
						console.log(response.data.codeError);
						if(response.data.codeError == 0){
							console.log("SI ACTUALIZO CORRECTAMENTE");
							
						}else{
							console.log("EL ERROR ES: " + response.data.codeError );
							
						}
					
					}, function errorCallback(response) {
						console.log("El error es: " + response , response.data.codeError);
					});
	     	};
	
	
	
	
	 var objetoTipoContacto = function(tipo){
		 switch(tipo){
			case 'tel':
				var titulos = {
					imagen : ' ',
				    nombre : 'Teléfono',
				    etiqueta : 'Número Telefónico',
				    pais : '+52',
				    placeholder : 'Teléfono',
				};
				return titulos;
				break;
				
			case 'movil':
				var titulos = {
					imagen : '',
				    nombre : 'Móvil',
				    etiqueta : 'Número Telefónico',
				    pais : '+521',
				    placeholder : 'Teléfono',
				    mensaje : 'Recuerda que para recibir llamadas internacionales el formato es (1)xxx.xxx.xxxx(10digitos)'
				};
				return titulos;
				break;
			
			case 'telSMS':
				var titulos = {
					imagen : '',
				    nombre : 'Teléfono SMS',
				    etiqueta : 'Número Telefónico',
				    pais : '+52',
				    placeholder : 'Teléfono'
				};
				return titulos;
				break;
				
			case 'email':
				var titulos = {
					imagen : ' ',
				    nombre : 'E-mail',
				    etiqueta : 'E-mail',
				    placeholder : '',
				    mensaje : ''
				};
				return titulos;
				break;
				
			case 'fax':
				var titulos = {
					imagen : ' ',
				    nombre : 'Fax',
				    etiqueta : 'Número Fax',
				    pais : ' +52',
				    placeholder : 'Teléfono'
				};
				return titulos;
				break;
				
			case 'facebook':
				var titulos = {
					imagen : '',
				    nombre : 'Facebook',
				    etiqueta : 'Liga a tu cuenta de Facebook',
				    placeholder : 'www.facebook.com/tufanpage',
				    mensaje : ''
				};
				return titulos;
				break;
				
			case 'twitter':
				var titulos = {
					imagen : ' ',
				    nombre : 'Twitter',
				    etiqueta : 'Enlaza tu cuenta de Twitter',
				    placeholder : 'www.twitter.com/tucuenta',
				    mensaje : 'Se publicaran tus ultimos Tweets en tu sitio web'
				};
				return titulos;
				break;
				
			case 'google':
				var titulos = {
					imagen : ' ',
				    nombre : 'Google+',
				    etiqueta : 'Liga a tu cuenta de Google+',
				    placeholder : 'plus.google.com/tucuenta',
				    mensaje : ''
				};
				return titulos;
				break;
				
			case 'skype':
				var titulos = {
					imagen : ' ',
				    nombre : 'Skype',
				    etiqueta : 'Liga a tu cuenta de Skype',
				    placeholder : 'tucuenta',
				    mensaje : ''
				};
				return titulos;
				break;
			
			case 'linkedin':
				var titulos = {
					imagen : ' ',
				    nombre : 'LinkedIn',
				    etiqueta : 'Liga a tu cuenta de LinkedIn',
				    placeholder : 'www.linkedin.com/tuempresa',
				    mensaje : ''
				};
				return titulos;
				break;
				
			case 'web':
				var titulos = {
					imagen : ' ',
				    nombre : 'Website',
				    etiqueta : 'Liga a tu sitio web',
				    placeholder : 'www.infomovil.com',
				    mensaje : ''
				};
				return titulos;
				break;
				
			default:
				console.log("La opcion de contacto no existe: " + tipo);
			}
	};
	
	
	
	
	
});






































































