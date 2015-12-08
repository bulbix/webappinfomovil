app.factory('ContactoService', function($http, MensajesService) {
	
	var contactos;
	var contactosPermitidos;
	var contactosGuardados;
	var validacionRegEx;
	var regExp;
	var icono;
	var itemGlobal;
	
	function getContactos() {

		$http({
			method: 'GET',
			url: contextPath + "/infomovil/getContactos",
		}).then(function successCallback(response) {
			
				 contactos = response.data;
				 if(response.data.length > 0){
					 $("#tituloAgregarContactos").hide();
					 if(response.data.length > 1)
						 $("#ordenarContactosShow").show();
					 else
						 $("#ordenarContactosShow").hide();
				 }else{ 
					 $("#ordenarContactosShow").hide();
					 $("#tituloAgregarContactos").show();
				 }
				console.log("el response: " + response.data.length);
					 
		}, function errorCallback(response) {
			console.log("El error es: " + response);
			var mensaje = "No se ha podido obtener la lista de contactos";
			MensajesService.cerrarBlockUIGeneral("Contactos", mensaje);
		});
	}
		
    function actualizarContacto(contacto) {
    	
    	var mensaje = "Actualizando contacto...";
    	MensajesService.abrirBlockUIGeneral(mensaje);
    	 
    	$http({
    		method: 'POST',
    		url: contextPath + "/infomovil/actualizarContacto",
    		params: {
    			claveDeContacto : contacto.claveContacto, 
    			descripcionContacto : contacto.longLabelNaptr,
    			numeroEmailRedSocial : contacto.regExp,
    			constanteContacto : contacto.servicesNaptr, 
    			redSocialWebSecure : contacto.subCategory,
    			visible : contacto.visible,
    			tipoContacto : contacto.tipoContacto,
    			codigoPais : contacto.codigoPais,
    			protocolo : contacto.protocolo
    		}		  
    	}).then(function successCallback(response) {
    		console.log("El valore regresado es: " + response.data.codeError , response.codeError);
    		mensaje = "";
    		if(response.data.codeError == 0) {
    			getContactos();
    		}else{
    			console.log("EL ERROR ES: " + response.codeError );
    			mensaje ="No se ha podido actualizar el contacto";
    		}
    		
    		MensajesService.cerrarBlockUIGeneral("Contactos", mensaje);
    	}, function errorCallback(response) {
    		console.log("El error es: Peticion incorrecta" + response.codeError);
    		mensaje = "No se ha podido actualizar el contacto";
    		MensajesService.cerrarBlockUIGeneral("Contactos", mensaje);
    	});
     };	

     function getObjetoTipoContacto(tipo) {
		 
		 var titulos = { } ;
		 
		 switch(tipo) {
		 
			case 'tel':
				titulos =
				{
					imagenIco : 'fa-tel-bk.png',
				    nombre : 'Teléfono',
				    pais : '+52',
				    placeholder : 'Teléfono',
				    servicio : 'E2U+voice:tel',
				    muestraPais : true,
				    maxlength : "10",
				    tipo : 'tel:'
				};
				
				break;
				
			case 'movil':
				titulos =
				{
					imagenIco : 'fa-movil-bk.png',
				    nombre : 'Móvil',
				    pais : '+521',
				    placeholder : 'Teléfono',
				    mensaje : 'Recuerda que para recibir llamadas internacionales el formato es (1) xxx.xxx.xxxx (10 dígitos)',
				    servicio : 'E2U+voice:tel+x-mobile',
				    muestraPais : true,
				    maxlength : "10",
				    tipo : 'tel:'
				};

				break;
			
			case 'telsms':
				titulos =
				{
					imagenIco : 'fa-sms-bk.png',
				    nombre : 'Teléfono SMS',
				    pais : '+52',
				    placeholder : 'Teléfono',
				    servicio : 'E2U+sms:tel',
				    muestraPais : true,
				    maxlength : "10",
				    tipo : 'tel:'
				};

				break;

			case 'fax':
				titulos =
				{
					imagenIco : 'fa-fax-bk.png',
				    nombre : 'Fax',
				    etiqueta : 'Número Fax',
				    pais : ' +52',
				    placeholder : 'Teléfono',
				    servicio : 'E2U+fax:tel',
				    muestraPais : true,
				    maxlength : "10",
				    tipo : 'tel:'
				};

				break;
				
			case 'email':
				titulos =
				{
					imagenIco : 'fa-mail-bk.png',
				    nombre : 'E-mail',
				    etiqueta : 'E-mail',
				    placeholder : 'email@email.com',
				    servicio : 'E2U+email:mailto',
				    expRegular : '^[_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$',
				    msjValidacion : 'Formato incorrecto de E-mail',
				    tipo : 'mailto:'
				};

				break;
				
			case 'facebook':
				titulos =
				{
					imagenIco : 'fa-fb-bk.png',
				    nombre : 'Facebook',
				    etiqueta : 'Liga a tu cuenta de Facebook',
				    placeholder : 'www.facebook.com/tufanpage',
				    subcategoria : 'facebook',
				    expRegular : '(((www|WWW))\\.)?(facebook|FACEBOOK)\\.(com|COM)\\/[a-zA-Z0-9\\*\\?\\+\\[\\(\\)\\{\\}\\^\\$\\|\\.\\/\\ ]{1,}',
				    msjValidacion : 'Formato incorrecto para Facebook',
				    protocolo : 'http://'
				};

				break;
				
			case 'twitter':
				titulos =
				{
					imagenIco : 'fa-twitter-bk.png',
				    nombre : 'Twitter',
				    etiqueta : 'Enlaza tu cuenta de Twitter',
				    placeholder : 'www.twitter.com/tucuenta',
				    mensaje : 'Se publicarán tus ultimos Tweets en tu página web',
				    subcategoria : 'twitter',
				    expRegular : '(twitter|TWITTER)\\.(com|COM)\\/[a-zA-Z0-9\\*\\?\\+\\[\\(\\)\\{\\}\\^\\$\\|\\.\\/\\ ]{1,}',
				    msjValidacion : 'Formato incorrecto para Twitter',
				    protocolo : 'http://'
				};

				break;
				
			case 'google':
				titulos =
				{
					imagenIco : 'fa-gplus-bk.png',
				    nombre : 'Google+',
				    etiqueta : 'Liga a tu cuenta de Google+',
				    placeholder : 'plus.google.com/tucuenta',
				    expRegular : '(plus|PLUS)\\.(google|GOOGLE)\\.(com|COM)\\/[a-zA-Z0-9\\*\\?\\+\\[\\(\\)\\{\\}\\^\\$\\|\\.\\/\\ ]{1,}',
				    msjValidacion : 'Formato incorrecto para Google+',
				    protocolo : 'http://'
				};

				break;
				
			case 'skype':
				titulos =
				{
					imagenIco : 'fa-skype-bk.png',
				    nombre : 'Skype',
				    etiqueta : 'Liga a tu cuenta de Skype',
				    placeholder : 'tucuenta',
				    servicio : 'E2U+x-voice:skype',
				    expRegular : '[a-zA-Z0-9\\*\\?\\+\\[\\(\\)\\{\\}\\^\\$\\|\\.\\/\\ ]{1,}',
				    msjValidacion : 'Formato incorrecto para Skype',
				    tipo : 'skype:'
				};

				break;
			
			case 'linkedin':
				titulos =
				{
					imagenIco : 'fa-linkedin-bk.png',
				    nombre : 'LinkedIn',
				    etiqueta : 'Liga a tu cuenta de LinkedIn',
				    placeholder : 'www.linkedin.com/tuempresa',
				    subcategoria : 'linkedin',
				    expRegular : '((WWW|www)\\.){0,1}(linkedin|LINKEDIN)\\.(com|COM)\\/[a-zA-Z0-9\\*\\?\\+\\[\\(\\)\\{\\}\\^\\$\\|\\.\\/\\ ]{1,}',
				    msjValidacion : 'Formato incorrecto para LinkedIn',
				    protocolo : 'http://'
				};

				break;
				
			case 'securewebsite':
				titulos =
				{
					imagenIco : 'fa-secweb-bk.png',
				    nombre : 'Website',
				    etiqueta : 'Liga a tu sitio web',
				    placeholder : 'www.infomovil.com',
				    servicio : 'E2U+web:https',
				    subcategoria : 'securewebsite',
				    expRegular : '^([\\w-]+\\.)+[\\w-]+(/[\\w-./?%&=]*)?$',
				    msjValidacion : 'Formato incorrecto para Web',
				    protocolo : 'https://'
				};
				break;
				
			default:
				console.log("La opcion de contacto no existe: " + tipo);
			}
		 
		 return titulos; 
	}
     
   function getTipoContacto(tipo, llave) {
	   
    	 var tipoContactoConsulta = "";
    	 llave = angular.uppercase(llave);

    	 if(tipo == "redSocial")  
    		 tipoContactoConsulta = llave;
    	 else if(tipo == "tel") {
    	 
    		 switch(llave) {

    		 	case "E2U+VOICE:TEL" :
    		 		tipoContactoConsulta = "tel";
    		 		break;
    		 	case "E2U+VOICE:TEL+X-MOBILE" :
    		 		tipoContactoConsulta = "movil";
	    			break;
    		 	case "E2U+SMS:TEL" :
    		 		tipoContactoConsulta = "telSMS";
    		 		break;   		 		
    		 	case "E2U+EMAIL:MAILTO" :
    		 		tipoContactoConsulta = "email";
    		 		break;
    		 	case "E2U+FAX:TEL" :
    		 		tipoContactoConsulta = "fax";
    		 		break;
    		 	case "E2U+WEB:HTTP" :
    		 		tipoContactoConsulta = "google";
    		 		break;
    		 	case "E2U+X-VOICE:SKYPE" :
    		 		tipoContactoConsulta = "skype";
    		 		break;     		 
    		 }
    	 }
    	 
    	 return angular.lowercase(tipoContactoConsulta);
     };
   
     function getIcono() {
    	 
     }
     
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
	   setContactosGuardados : function(value) {
		   contactosGuardados = value;
	   },
	   getContactosGuardados : function() {
		   return contactosGuardados;
	   },
	   setValidacionRegEx : function(value) {
		   validacionRegEx = value;
	   },
	   getValidacionRegEx : function() {
		   return validacionRegEx;
	   },
	   setRegExp : function(value) {
		   regExp = value;
	   },
	   getRegExp : function() {
		   return regExp;
	   },
	   setIcono : function(value) {
		   icono = value;
		   $("#myModalContactosActualizar").modal();
	   },
	   getIcono : function() {
		   return icono;
	   },
	   setItemGlobal : function(value) {
		   itemGlobal = value;
	   },
	   getItemGlobal : function() {
		   return itemGlobal;
	   },
	   getTipoContacto : getTipoContacto,
	   actualizarContacto : actualizarContacto,
	   getObjetoTipoContacto : getObjetoTipoContacto,
	  
  }
   
});