app.factory('ContactoService', function($http) {
	
	var contactos, contactosPermitidos, contactosGuardados, validacionRegEx;
	
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
	
     function cerrarBlockUIGeneral(mensaje) {
    	 
    	 $.unblockUI();
    	 
    	 if(mensaje.length > 0) {
    		 BootstrapDialog
				.show({
					title : "<span class='textBlack' style='font-size:1.15em;'><img alt='' src='../resources/webapp/images/fa-warning-bk.png'  title='Alerta' />Contactos</span>",
					message : '<div style="display:block; min-height:150px;"><p class="textBlack text-center" style="font-size:1.15em;">' + mensaje + '</p><br/>'
				});
 	 			
    	 }
     };

     function getObjetoTipoContacto(tipo) {
		 
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
				    maxlength : "10",
				    tipo : 'tel:'
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
				    maxlength : "10",
				    tipo : 'tel:'
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
				    maxlength : "10",
				    tipo : 'tel:'
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
				    maxlength : "10",
				    tipo : 'tel:'
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
				    msjValidacion : 'Formato incorrecto de email',
				    tipo : 'mailto:'
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
				    msjValidacion : 'Formato incorrecto para skype',
				    tipo : 'skype:'
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
				
			case 'securewebsite':
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
	   actualizarContacto : actualizarContacto,
	   abrirBlockUIGeneral : abrirBlockUIGeneral,
	   cerrarBlockUIGeneral : cerrarBlockUIGeneral,
	   getObjetoTipoContacto : getObjetoTipoContacto,
	  
  }
   
});