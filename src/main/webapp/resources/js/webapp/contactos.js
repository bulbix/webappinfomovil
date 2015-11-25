var app = angular.module('InfomovilApp', []);

app.controller('ToolBarContactoController', function($scope, $http, ContactoService) {

	var toolbarContacto = this;
	toolbarContacto.descripcion = "descrito";
	toolbarContacto.downgrade = "";
	toolbarContacto.contacto = "";

	toolbarContacto.agregaContacto = function(downgrade, contacto) {
		ContactoService.setContactosPermitidos(contacto);
		console.log("agregaContacto: " + downgrade + ", contacto: " + contacto + ", " + toolbarContacto.contactos.length);
		if (toolbarContacto.contactos.length == contacto)
		{
			console.log("Ya has registrado todos los contactos disponibles")
			return;
		}
		
		$("#myModalContactos").modal();
	};

	toolbarContacto.mostrarModalContactos = function() { 
		$myModalContactos.modal();
	};

	toolbarContacto.eliminarContacto = function(item) {
		eliminarContacto(item.claveContacto);
	};
	

	toolbarContacto.toggleContacto = function(item) {
		
		var visibleContacto = "1";
		
		if (item.visible == "1")
			visibleContacto = "0";
		
		item.visible = visibleContacto;
		
		ContactoService.actualizarContacto(item);
	};
	
	toolbarContacto.abrirActualizarContacto = function(item) {
		console.log(" item.regExp: " + item.regExp);
		console.log(" item.subCategory: " + item.subCategory );
		console.log(" item.longLabelNaptr: " + item.longLabelNaptr);
		console.log(" item.claveContacto: " + item.claveContacto);
		console.log(" item.servicesNaptr: " + item.servicesNaptr);
		console.log(" item.visible: " + item.visible);
		
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
		$("#claveContactoC").val(item.claveContacto); 
		$("#servicesNaptrC").val(item.servicesNaptr); 
		$("#subCategoryC").val(item.subCategory); 
		$("#visibleC").val(item.visible); 
		$("#myModalContactosActualizar").modal();
	}
	
    var eliminarContacto = function(claveContacto) {
    	 var mensaje = "Eliminando contacto...";
    	 ContactoService.abrirBlockUIGeneral(mensaje);
    	$http({
    		method: 'POST',
    		url: contextPath + "/infomovil/eliminarContacto",
    		params: { 
    			claveDeContacto: claveContacto
    		}	  
    	}).then(function successCallback(response) {
    		mensaje="";
    		if(response.data.codeError == 0) {
    			console.log("SI ELIMINO CORRECTAMENTE");
    			 /*Obtiene los contactos*/
    		     ContactoService.getContactos();
    		}else{
    			console.log("EL ERROR ES: " + response.data.codeError );
    			mensaje="No se ha podido eliminar el contacto";
    		}
    		ContactoService.cerrarBlockUIGeneral(mensaje);
    	}, function errorCallback(response) {
    		console.log("El error es: " + response , response.data.codeError);
    		mensaje = "No se ha podido eliminar el contacto";
    		ContactoService.cerrarBlockUIGeneral(mensaje);
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
  
	 var ordenarContactos = function(itemsFin) {
		  	console.log("Esta variable tiene los ids con comita, : " + itemsFin);
		  	var strInicio = "<l>";
		  	var strFinal = "";
		  	for(i=0; i<itemsFin.length ; i++){
		  		strFinal =  strFinal + "<f><i>"+ itemsFin[i] + "</i><p>" + i + "</p></f>";
		  	}
		  	strFinal = strInicio + strFinal + "</l>";
		  	
		  	console.log("Lo que estoy enviando es: " + strFinal);
		  
			 var mensaje="Actualizando contactos...";
			 ContactoService.abrirBlockUIGeneral(mensaje);
			 $http({
		  		 method: 'POST',
		  		 url: contextPath + "/infomovil/setOrderContacts",
		  		 params: {
		  			xml: strFinal
		  		 }		  
		  	 }).then(function successCallback(response) {
		  		 console.log(response.data.codeError);
		  		 mensaje = "";
		  		 if(response.data.codeError == 0) {
		  			 console.log("SI ACTUALIZO CORRECTAMENTE");
		  			 ContactoService.getContactos();

		  		 }else{
		  			 console.log("Si me respondio con EL ERROR ES: " + response.data.codeError );
		  			 mensaje = "No se han podido actualizar los contactos";
				 }
		  		 
		  		ContactoService.cerrarBlockUIGeneral(mensaje);
		  	 }, function errorCallback(response) {
		  		 console.log("El error es de que ni fue es: " + response , response.data.codeError);
		  		 mensaje = "No se han podido actualizar los contactos";
		  		ContactoService.cerrarBlockUIGeneral(mensaje);
		  	 });
	   };

     $scope.$watch(function () { return ContactoService.contactos(); }, function (value) {
    	 toolbarContacto.contactos = value;
    	 var arr = value instanceof Array ? value : [value]; 
    	 if(arr.length == ContactoService.getContactosPermitidos()) {
    		 console.log('Limite alcanzado')
    	 }	 
     });

     var itemsInicio = "";
     var itemsFin = "";
     
     $("#sortable").sortable({
    	 
    	 start: function(event, ui) {
    		 itemsInicio = $("#sortable").sortable("toArray");
    	 }
     });
 
	 $("#sortable").sortable({
		 
		 update: function(event, ui) {	
			 
			 itemsFin = $( "#sortable" ).sortable("toArray");
			  
			 if(itemsInicio != itemsFin)
				 ordenarContactos(itemsFin);
		 }	
	 });
	
	 $("#sortable").disableSelection();

     /*Obtiene los contactos*/
     ContactoService.getContactos();
});

app.factory('ContactoService', function($http) {
	
	var contactos, contactosPermitidos;
	
	function getContactos() {
		
		console.log("getContactos");
		$http({
			method: 'GET',
			url: contextPath + "/infomovil/getContactos",
		}).then(function successCallback(response) {
			
				 contactos = response.data;
			
		}, function errorCallback(response) {
			console.log("El error es: " + response);
			var mensaje = "No se ha podido obtener la lista de contactos";
			cerrarBlockUIGeneral(mensaje);
		});
	}
		
    function actualizarContacto(contacto) {
    	 console.log("claveContacto: " + contacto.claveContacto +
    			 	"longLabelNaptr" + contacto.longLabelNaptr +  
    			 	"regExp: " + contacto.regExp +
    			 	"servicesNaptr: " + contacto.servicesNaptr +
    			 	"subCategory: " + contacto.subCategory +
    			 	"visible: " + contacto.visible 
    	 );
    	 var mensaje = "Actualizando contacto...";
    	 abrirBlockUIGeneral(mensaje);
    	 $http({
    		 method: 'POST',
    		 url: contextPath + "/infomovil/actualizarContacto",
    		 params: {
    			 claveDeContacto : contacto.claveContacto, 
 				 descripcionContacto : contacto.longLabelNaptr,
 				 numeroEmailRedSocial : contacto.regExp,
 				 constanteContacto : contacto.servicesNaptr, 
 				 redSocialWebSecure : contacto.subCategory,
 				 visible : contacto.visible
    		 }		  
    	 }).then(function successCallback(response) {
    		 console.log("El valore regresado es: " + response.data.codeError , response.codeError);
    		 mensaje = "";
    		 if(response.data.codeError == 0) {
    			getContactos();
    			$("#myModalContactosActualizar").modal('toggle');
    		 }else{
    			 console.log("EL ERROR ES: " + response.codeError );
    			 mensaje ="No se ha podido actualizar el contacto";
 			}
    		 cerrarBlockUIGeneral(mensaje);
    	 }, function errorCallback(response) {
    		 console.log("El error es: Peticion incorrecta" + response.codeError);
    		 mensaje = "No se ha podido actualizar el contacto";
    		 cerrarBlockUIGeneral(mensaje);
    	 });
     };	
     
     
     function abrirBlockUIGeneral(mensaje){	
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
	
     function cerrarBlockUIGeneral(mensaje){	
    	 $.unblockUI();
    	 if(mensaje.length > 0){
    		 BootstrapDialog
				.show({
					title : "<span class='textBlack' style='font-size:1.15em;'><img alt='' src='../resources/webapp/images/fa-warning-bk.png'  title='Alerta' />Imagen demasiado grande</span>",
					message : '<div style="display:block; min-height:150px;"><p class="textBlack text-center" style="font-size:1.15em;">' + mensaje + '</p><br/>'
				});
 	 		
 	 	}
     };
  
   return {
	   
	   getContactos : getContactos,
	   contactos: function() {
		   return contactos;
	   },	   
	   setContactosPermitidos : function(value) {
		   contactosPermitidos = value;
	   },
	   getContactosPermitidos : function() {
		   return contactosPermitidos;
	   },	   
	   actualizarContacto : actualizarContacto,
	   abrirBlockUIGeneral : abrirBlockUIGeneral,
	   cerrarBlockUIGeneral : cerrarBlockUIGeneral
  }
   
});

app.controller('TipoContacto', function($scope, $http, ContactoService) {
	 
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
		$scope.placeholderContenido = mensajesContacto.placeholder; 
		$scope.mensajeTelefonos = mensajesContacto.mensaje != undefined ? mensajesContacto.mensaje : "";
		$scope.expRegularValida = mensajesContacto.expRegular != undefined ? mensajesContacto.expRegular : "^\\d{10}$";
		$scope.pais = mensajesContacto.pais != undefined ? mensajesContacto.pais : false;
		$scope.etiqueta = mensajesContacto.etiqueta != undefined ? mensajesContacto.etiqueta : "Número Telefónico";
		$scope.subCategory = mensajesContacto.subcategoria != undefined ? mensajesContacto.subcategoria : "";
		$scope.servicio = mensajesContacto.servicio != undefined ? mensajesContacto.servicio : "E2U+web:http";
		$scope.msjValidacion = mensajesContacto.msjValidacion != undefined ? mensajesContacto.msjValidacion : "Número Telefónico Inválido";
		$scope.maxlength = mensajesContacto.maxlength != undefined ? mensajesContacto.maxlength : "255";
	}
	
	datosTipoContacto.regresarAgregarContacto = function(){
		regresarGenerico();
	}
	
	datosTipoContacto.guardarContacto = function(numeroEmailRedSocial, longLabelNaptr) {
		
		var contacto = { };
		
		contacto.longLabelNaptr = longLabelNaptr;
		contacto.regExp = numeroEmailRedSocial;
		contacto.servicesNaptr = $scope.servicio;
		contacto.subCategory = $scope.subCategory;
		guardarContacto(contacto);
	}
	
	datosTipoContacto.closeMyModalContactos = function(){
		$("#myModalContactos").modal('toggle');		
	}
	
	var regresarGenerico = function() {
		
		datosTipoContacto.mostrarBtnRegresar = false;
		datosTipoContacto.mostrarBtnGuardar = false;
		datosTipoContacto.menuContactos = true;
		datosTipoContacto.formGuardaContacto = false;
		$("#numeroEmailRedSocial").val("");
		$("#longLabelNaptr").val("");
	}
	
	 var guardarContacto = function(contacto) {
		 console.log("contacto => longLabelNaptr: " + contacto.longLabelNaptr + ", regExp: " + contacto.regExp + 
				 ", servicio: " + contacto.servicesNaptr + ", subcategoria: " + $scope.subCategory);
		 var mensaje = "Guardando contacto...";
		 ContactoService.abrirBlockUIGeneral(mensaje);
		 $http({
			 method: 'POST',
			 url: contextPath + "/infomovil/guardarContacto",
			 params: {
				 descripcionContacto: contacto.longLabelNaptr != undefined ? contacto.longLabelNaptr : "",
				 numeroEmailRedSocial: contacto.regExp,
				 constanteContacto: contacto.servicesNaptr,
				 redSocialWebSecure: contacto.subCategory,
				 expRegular: contacto.regExp
			 }	  
		 }).then(function successCallback(response) {
			 console.log(response.data.codeError);
			 mensaje = "";
			 if(response.data.codeError == 0) {
				 console.log("Contacto guardado correctamente");
				 $("#numeroEmailRedSocial").val("");
				 $("#longLabelNaptr").val("");
				 /*Obtiene los contactos*/
			     ContactoService.getContactos();
			     regresarGenerico();
			     $("#myModalContactosActualizar").modal('toggle');
			 }else{
				 console.log("EL ERROR ES: " + response.data.codeError );
				 mensaje = "No se ha podido guardar el contacto";
			 }
			 ContactoService.cerrarBlockUIGeneral(mensaje);
		 }, function errorCallback(response) {
			 console.log("El error es: " + response , response.data.codeError);
			 mensaje = "No se ha podido guardar el contacto";
			 ContactoService.cerrarBlockUIGeneral(mensaje);
		 });
	 };
	
	 var objetoTipoContacto = function(tipo) {
		 
		 var titulos = { } ;
		 
		 switch(tipo) {
		 
			case 'tel':
				titulos =
				{
					imagen : ' ',
				    nombre : 'Teléfono',
				    pais : '+52',
				    placeholder : 'Teléfono',
				    servicio : 'E2U+voice:tel',
				    muestraPais : true,
				    maxlength : "10"
				};
				
				break;
				
			case 'movil':
				titulos =
				{
					imagen : '',
				    nombre : 'Móvil',
				    pais : '+521',
				    placeholder : 'Teléfono',
				    mensaje : 'Recuerda que para recibir llamadas internacionales el formato es (1)xxx.xxx.xxxx(10digitos)',
				    servicio : 'E2U+voice:tel+x-mobile',
				    muestraPais : true,
				    maxlength : "10"
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
				    muestraPais : true,
				    maxlength : "10"
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
				    muestraPais : true,
				    maxlength : "10"
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
				    expRegular : '^[_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$',
				    msjValidacion : 'Formato incorrecto de email'
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
				    expRegular : '(((www|WWW))\\.)?(facebook|FACEBOOK)\\.(com|COM)\\/[a-zA-Z0-9\\*\\?\\+\\[\\(\\)\\{\\}\\^\\$\\|\\.\\/\\ ]{1,}',
				    msjValidacion : 'Formato incorrecto para facebook'
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
				    expRegular : '(twitter|TWITTER)\\.(com|COM)\\/[a-zA-Z0-9\\*\\?\\+\\[\\(\\)\\{\\}\\^\\$\\|\\.\\/\\ ]{1,}',
				    msjValidacion : 'Formato incorrecto para twitter'
				};

				break;
				
			case 'google':
				titulos =
				{
					imagen : ' ',
				    nombre : 'Google+',
				    etiqueta : 'Liga a tu cuenta de Google+',
				    placeholder : 'plus.google.com/tucuenta',
				    expRegular : '(plus|PLUS)\\.(google|GOOGLE)\\.(com|COM)\\/[a-zA-Z0-9\\*\\?\\+\\[\\(\\)\\{\\}\\^\\$\\|\\.\\/\\ ]{1,}',
				    msjValidacion : 'Formato incorrecto para google plus'
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
				    expRegular : '[a-zA-Z0-9\\*\\?\\+\\[\\(\\)\\{\\}\\^\\$\\|\\.\\/\\ ]{1,}',
				    msjValidacion : 'Formato incorrecto para skype'
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
				    expRegular : '((WWW|www)\\.){0,1}(linkedin|LINKEDIN)\\.(com|COM)\\/[a-zA-Z0-9\\*\\?\\+\\[\\(\\)\\{\\}\\^\\$\\|\\.\\/\\ ]{1,}',
				    msjValidacion : 'Formato incorrecto para linkedin'
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
				    expRegular : '^([\\w-]+\\.)+[\\w-]+(/[\\w-./?%&=]*)?$',
				    msjValidacion : 'Formato incorrecto para web'
				};
				break;
				
			default:
				console.log("La opcion de contacto no existe: " + tipo);
			}
		 
		 return titulos; 
	}
	
});

app.controller('ActualizarContactos', function($http,ContactoService) {
	var actualizarTipoContacto = this;
	actualizarTipoContacto.closeMyModalActualizarContactos = function(){
			$("#myModalContactosActualizar").modal('toggle');
			
		}		
	actualizarTipoContacto.guardarDatosContacto = function(){
			console.log("Entro al boton de actualizar los datos!");
		   var contacto = {
				 claveContacto : $("#claveContactoC").val(), 
				 longLabelNaptr : $("#textAreaActualizarTel").val(),
				 regExp : $("#inputTelefonosActualizar").val(),
				 servicesNaptr : $("#servicesNaptrC").val(),
				 subCategory : $("#subCategoryC").val(),
				 visible : $("#visibleC").val()
		};
		 
	   ContactoService.actualizarContacto(contacto);
	}
	
	 
	
	
});