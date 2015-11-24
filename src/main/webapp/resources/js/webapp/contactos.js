/**
 * 
 */


var app = angular.module('InfomovilApp', []);

app.controller('ToolBarContactoController', function($scope, $http) {

	var toolbarContacto = this;
	toolbarContacto.descripcion = "descrito";
	toolbarContacto.downgrade = "";
	toolbarContacto.contacto = "";

	toolbarContacto.mostrarModalContactos = function() { 
		$myModalContactos.modal();
	};

	toolbarContacto.eliminarContacto = function(item) {
		eliminarContacto(item.claveContacto);
	};
	
	toolbarContacto.actualizarContacto = function(item) {
		console.log("actualizarContacto: " + item.claveContacto);
		//actualizarContacto();
	};

	toolbarContacto.toggleContacto = function(item) {
		
		var visibleContacto = "1";
		
		if (item.visible == "1")
			visibleContacto = "0";
		
		item.visible = visibleContacto;
		
		actualizarContacto(item);
	};
	
	toolbarContacto.abrirActualizarContacto = function(item) {
		console.log("item abrirActualizarContacto: " + item.regExp + item.subCategory);
		var mensajesContacto = '';
		if(item.subCategory.length > 0){
				mensajesContacto = consultarElTipoContacto("redSocial" , item.subCategory);
					
		}else{
				mensajesContacto = consultarElTipoContacto("tel" , item.servicesNaptr);		
		}
		$("#nombreActualizarTel").text(mensajesContacto.nombre); 
		$("#etiquetaActualizarTel").text(mensajesContacto.etiqueta);
		$("#paisActualizarTel").text(mensajesContacto.pais);
		$("#inputTelefonosActualizar").val(item.regExp);  
		$("#textAreaActualizarTel").val(item.longLabelNaptr); 
		$("#myModalContactosActualizar").modal();
	}

	
    var eliminarContacto = function(claveContacto) {
    	
    	$http({
    		method: 'POST',
    		url: contextPath + "/infomovil/eliminarContacto",
    		params: { 
    			claveDeContacto: claveContacto
    		}	  
    	}).then(function successCallback(response) {
    		
    		if(response.data.codeError == 0) {
    			console.log("SI ELIMINO CORRECTAMENTE");
    			getContactos();
    		}else{
    			console.log("EL ERROR ES: " + response.data.codeError );			
    		}
    		
    	}, function errorCallback(response) {
    		console.log("El error es: " + response , response.data.codeError);
    	});
     };
     
     var actualizarContacto = function(item) {
    	 
    	 console.log("claveDeContacto : " + item.claveContacto +
 				" descripcionContacto : " + item.longLabelNaptr +
 				" numeroEmailRedSocial : " + item.regExp + 
 				" constanteContacto : " + item.servicesNaptr +  
 				" redSocialWebSecure : " + item.subCategory + 
 				" visible : " + item.visible);
    	 
    	 $http({
    		 method: 'POST',
    		 url: contextPath + "/infomovil/actualizarContacto",
    		 params: {
    			 claveDeContacto : item.claveContacto, 
 				 descripcionContacto : item.longLabelNaptr,
 				 numeroEmailRedSocial : item.regExp,
 				 constanteContacto : item.servicesNaptr, 
 				 redSocialWebSecure : item.subCategory,
 				 visible : item.visible
    		 }		  
    	 }).then(function successCallback(response) {
    		 console.log(response.data.codeError);
    		 if(response.data.codeError == 0) {
    			 console.log("SI ACTUALIZO CORRECTAMENTE");
 				 getContactos();
    		 }else{
    			 console.log("EL ERROR ES: " + response.data.codeError );
 			}
    	 }, function errorCallback(response) {
    		 console.log("El error es: " + response , response.data.codeError);
    	 });
     };
     
   
     
     var consultarElTipoContacto = function(tipo, llave){
    	 llave = angular.uppercase(llave);
    	 console.log("la llave es: " + llave);
    	 if(tipo == "redSocial"){
    		 switch(llave){
	    		 case "FACEBOOK" :
	    			 var titulos = {
		    				imagen : '',
		 				    nombre : 'Facebook',
		 				    etiqueta : 'Liga a tu cuenta de Facebook',
		 				    pais : '',
		 				    placeholder : 'www.facebook.com/tufanpage',
		 				    mensaje : ''
	 				};
	 				return titulos;
	    			 break;
	    		 
	    		 case "TWITTER" :
	    			 var titulos = {
		    				imagen : ' ',
		 				    nombre : 'Twitter',
		 				    etiqueta : 'Enlaza tu cuenta de Twitter',
		 				   pais : '',
		 				    placeholder : 'www.twitter.com/tucuenta',
		 				    mensaje : 'Se publicaran tus ultimos Tweets en tu sitio web'
			 				};
		 				return titulos;
	    			 break;
	    			 
	    		 case "SECUREWEBSITE" :
	    			 var titulos = {
		    				imagen : ' ',
		 				    nombre : 'Website',
		 				    etiqueta : 'Liga a tu sitio web',
		 				   pais : '',
		 				    placeholder : 'www.infomovil.com',
		 				    mensaje : ''
			 				};
		 				return titulos;
	    			 break;
	    			 
	    		 case "LINKEDIN" :
	    			 var titulos = {
	    					 imagen : ' ',
	    					 nombre : 'LinkedIn',
	    					 etiqueta : 'Liga a tu cuenta de LinkedIn',
	    					 pais : '',
	    					 placeholder : 'www.linkedin.com/tuempresa',
	    					 mensaje : ''		
	    					};
		 				return titulos;
	    			 break;
    			 
    		 }
    	 }else if(tipo == "tel"){
    	 
    		 switch(llave){
    		 // TElefono normal
    		 case "E2U+VOICE:TEL" :
    			 var titulos = {
	    				imagen : ' ',
	 				    nombre : 'Teléfono',
	 				    etiqueta : 'Número Telefónico',
	 				    pais : '+52',
	 				    placeholder : 'Teléfono',
	 				    mensaje : ''
	 				};
	 				return titulos;
	 				break;
    		 // Celular
    		 case "E2U+VOICE:TE+X-MOBILE" :
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
    		 // Mensaje de celular
    		 case "E2U+SMS:TEL" :
    			 var titulos = {
	    				imagen : '',
	 				    nombre : 'Teléfono SMS',
	 				    etiqueta : 'Número Telefónico',
	 				    pais : '+52',
	 				    placeholder : 'Teléfono',
	 				    mensaje : ''
	 				};
	 				return titulos;
        		 break;
        		// Email
    		 case "E2U+EMAIL:MAILTO" :
    			 var titulos = {
	    				imagen : ' ',
	 				    nombre : 'E-mail',
	 				    etiqueta : 'E-mail',
	 				    placeholder : '',
	 				    mensaje : ''
		 			};
	 				return titulos;
        		 break;
        		 
        		 // Fax
    		 case "E2U+FAX:TEL" :
    			 var titulos = {
	    				imagen : ' ',
	 				    nombre : 'Fax',
	 				    etiqueta : 'Número Fax',
	 				    pais : '+52',
	 				    placeholder : 'Teléfono',
	 				    mensaje : ''
	 				};
	 				return titulos;
        		 break;
        		 // Google+
    		 case "E2U+WEB:HTTP" :
    			 var titulos = {
	    				imagen : ' ',
	 				    nombre : 'Google+',
	 				    etiqueta : 'Liga a tu cuenta de Google+',
	 				    pais : '',
	 				    placeholder : 'plus.google.com/tucuenta',
	 				    mensaje : ''
	 				};
	 				return titulos;
        		 break;
        		// Skype
    		 case "E2U+X-VOICE:SKYPE" :
    			 var titulos = {
	    				imagen : ' ',
	 				    nombre : 'Skype',
	 				    etiqueta : 'Liga a tu cuenta de Skype',
	 				    pais : '',
	 				    placeholder : 'tucuenta',
	 				    mensaje : ''
	 				};
	 				return titulos;
        		 break;
        	
        		 
        		 
    		 }
    	 }
     };
     
     function getContactos() {

    	 console.log("getContactos");
    	 $http({
    		 method: 'GET',
    		 url: contextPath + "/infomovil/getContactos",
    	 }).then(function successCallback(response) {
    		 toolbarContacto.contactos = response.data;
    	 }, function errorCallback(response) {
    		 console.log("El error es: " + response);
    	 });
     }
     
      /*Obtiene los contactos*/
     getContactos();
     
     var itemsInicio = "";
     var itemsFin = "";
     
     $( "#sortable" ).sortable({
		  start: function( event, ui ) {
			  itemsInicio = $( "#sortable" ).sortable( "toArray" );
			  console.log("Los sortedIDs de Inicio son: " + itemsInicio );  
		  }
		});
 
 
	 $( "#sortable" ).sortable({
		  update: function( event, ui ) {		  
			  itemsFin = $( "#sortable" ).sortable( "toArray" );
			  console.log("Los sortedIDs es: " + itemsFin );
			  if( itemsInicio == itemsFin){
				  console.log("Los items son iguales!");
				  
			  }else{
				  console.log("Aqui mandada a ordenar!");
				  ordenarContactos(itemsFin);
				
			  }
		  }
		});

	
	 $( "#sortable" ).disableSelection();
 
 
	 var ordenarContactos = function(itemsFin) {
		  	console.log("Esta variable tiene los ids con comita, : " + itemsFin);
		  	var strInicio = "<l>";
		  	var strFinal = "";
		  	for(i=0; i<itemsFin.length ; i++){
		  		strFinal =  strFinal + "<f><i>"+ itemsFin[i] + "</i><p>" + i + "</p></f>";
		  	}
		  	strFinal = strInicio + strFinal + "</l>";
		  	
		  	console.log("Lo que estoy enviando es: " + strFinal);
		  	
		  	$.blockUI.defaults.baseZ = 9000;
				$.blockUI({
					message : "Actualizando contactos...",
					css : {
						class : "alertaUI",
						top : ($(window).height() - 400) / 2 + 'px',
						left : ($(window).width() - 400) / 2 + 'px',
						width : '400px'
					}
				});
			 $http({
		  		 method: 'POST',
		  		 url: contextPath + "/infomovil/setOrderContacts",
		  		 params: {
		  			xml: strFinal
		  		 }		  
		  	 }).then(function successCallback(response) {
		  		 console.log(response.data.codeError);
		  		 if(response.data.codeError == 0) {
		  			 console.log("SI ACTUALIZO CORRECTAMENTE");
						 getContactos();
		  		 }else{
		  			 console.log("Si me respondio con EL ERROR ES: " + response.data.codeError );
					 }
		  		 $.unblockUI();
		  	 }, function errorCallback(response) {
		  		 console.log("El error es de que ni fue es: " + response , response.data.codeError);
		  		 $.unblockUI();
		  	 });
	   };
	   
	   
});

app.controller('TipoContacto', function($scope, $http) {
	
	var datosTipoContacto = this;
	
	datosTipoContacto.mostrarBtnRegresar = false;
	datosTipoContacto.mostrarBtnGuardar = false;

	datosTipoContacto.menuContactos = true;
	datosTipoContacto.formGuardaContacto = false;
	
	datosTipoContacto.tipo = function(tipo) {
		
		var mensajesContacto = objetoTipoContacto(tipo);
		
		datosTipoContacto.formGuardaContacto = true;
		datosTipoContacto.mostrarBtnRegresar = true;
		datosTipoContacto.mostrarBtnGuardar = true;
		datosTipoContacto.menuContactos = false;
		datosTipoContacto.muestraPais = mensajesContacto.muestraPais;
		$scope.nombre = mensajesContacto.nombre;
		$scope.etiqueta = mensajesContacto.etiqueta;
		$scope.pais = mensajesContacto.pais;
		$scope.placeholderContenido = mensajesContacto.placeholder; 
		$scope.mensajeTelefonos = mensajesContacto.mensaje;	
		$scope.expRegularValida = mensajesContacto.expRegular;	
	}
	
	datosTipoContacto.regresarAgregarContacto = function(){
		regresarGenerico();
	}
	
	datosTipoContacto.guardarContacto = function() {
	
		guardarContacto();
		regresarGenerico();
	}
	
	datosTipoContacto.closeMyModalContactos = function(){
		$("#myModalContactos").modal('toggle');		
	}
	
	var regresarGenerico = function() {
		
		datosTipoContacto.mostrarBtnRegresar = false;
		datosTipoContacto.mostrarBtnGuardar = false;
		datosTipoContacto.menuContactos = true;
		datosTipoContacto.formGuardaContacto = false;
		
	}
	
	 var guardarContacto = function(contacto) {
		 
		 $http({
			 method: 'POST',
			 url: contextPath + "/infomovil/guardarContacto",
			 params: {
				 descripcionContacto: contacto.longLabelNaptr ,
				 numeroEmailRedSocial: contacto.regExp,
				 constanteContacto: contacto.servicesNaptr,
				 redSocialWebSecure: contacto.subCategory
			 }	  
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
	
	 var objetoTipoContacto = function(tipo) {

		 var titulos = { } ;
		 titulos.servicio = 'E2U+web:http';
		 titulos.expRegular = "";
		 titulos.etiqueta = "Número Telefónico";
		 titulos.subcategoria = "";
		 titulos.mensaje = "";
		 titulos.muestraPais = false;
		 
		 switch(tipo) {
		 
			case 'tel':
				titulos =
				{
					imagen : ' ',
				    nombre : 'Teléfono',
				    pais : '+52',
				    placeholder : 'Teléfono',
				    servicio : 'E2U+voice:tel',
				    muestraPais : true
				};
				
				break;
				
			case 'movil':
				var titulos = 
				{
					imagen : '',
				    nombre : 'Móvil',
				    pais : '+521',
				    placeholder : 'Teléfono',
				    mensaje : 'Recuerda que para recibir llamadas internacionales el formato es (1)xxx.xxx.xxxx(10digitos)',
				    servicio : 'E2U+voice:tel+x-mobile',
				    muestraPais : true
				};

				break;
			
			case 'telSMS':
				titulos = 
				{
					imagen : '',
				    nombre : 'Teléfono SMS',
				    pais : '+52',
				    placeholder : 'Teléfono',
				    servicio : 'E2U+sms:tel',
				    muestraPais : true
				};

				break;

			case 'fax':
				titulos = 
				{
					imagen : ' ',
				    nombre : 'Fax',
				    etiqueta : 'Número Fax',
				    pais : ' +52',
				    placeholder : 'Teléfono',
				    servicio : 'E2U+fax:tel',
				    muestraPais : true
				};

				break;
				
			case 'email':
				titulos = 
				{
					imagen : ' ',
				    nombre : 'E-mail',
				    etiqueta : 'E-mail',
				    placeholder : 'email@email.com',
				    servicio : 'E2U+email:mailto',
				    expRegular : '^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$'
				};

				break;
				
			case 'facebook':
				titulos = 
				{
					imagen : '',
				    nombre : 'Facebook',
				    etiqueta : 'Liga a tu cuenta de Facebook',
				    placeholder : 'www.facebook.com/tufanpage',
				    subcategoria : 'facebook',
				    expRegular : ''
				};

				break;
				
			case 'twitter':
				titulos = 
				{
					imagen : ' ',
				    nombre : 'Twitter',
				    etiqueta : 'Enlaza tu cuenta de Twitter',
				    placeholder : 'www.twitter.com/tucuenta',
				    mensaje : 'Se publicarán tus ultimos Tweets en tu página web',
				    subcategoria : 'twitter',
				    expRegular : ''
				};

				break;
				
			case 'google':
				titulos = 
				{
					imagen : ' ',
				    nombre : 'Google+',
				    etiqueta : 'Liga a tu cuenta de Google+',
				    placeholder : 'plus.google.com/tucuenta',
				    expRegular : ''
				};

				break;
				
			case 'skype':
				titulos = 
				{
					imagen : ' ',
				    nombre : 'Skype',
				    etiqueta : 'Liga a tu cuenta de Skype',
				    placeholder : 'tucuenta',
				    servicio : 'E2U+x-voice:skype',
				    expRegular : ''
				};

				break;
			
			case 'linkedin':
				titulos = 
				{
					imagen : ' ',
				    nombre : 'LinkedIn',
				    etiqueta : 'Liga a tu cuenta de LinkedIn',
				    placeholder : 'www.linkedin.com/tuempresa',
				    subcategoria : 'linkedin',
				    expRegular : ''
				};

				break;
				
			case 'web':
				titulos =
				{
					imagen : ' ',
				    nombre : 'Website',
				    etiqueta : 'Liga a tu sitio web',
				    placeholder : 'www.infomovil.com',
				    servicio : 'E2U+web:https',
				    subcategoria : 'securewebsite',
				    expRegular : ''
				};
				break;
				
			default:
				console.log("La opcion de contacto no existe: " + tipo);
			}
		 
		 return titulos; 
	}	
});

app.controller('ActualizarContactos', function($scope, $http) {
	var actualizarTipoContacto = this;
	
	
	actualizarTipoContacto.closeMyModalActualizarContactos = function(){
		$("#myModalContactosActualizar").modal('toggle');
		
	}		
});

