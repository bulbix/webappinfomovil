var app = angular.module('InfomovilApp', []);

app.controller('ToolBarContactoController', function($scope, $http, ContactoService) {

	var toolbarContacto = this;
	toolbarContacto.descripcion = "descrito";
	toolbarContacto.downgrade = "";
	toolbarContacto.contactos = "";

	toolbarContacto.agregaContacto = function(downgrade, contacto) {
		
		ContactoService.setContactosPermitidos(contacto);

		if (toolbarContacto.contactos.length == contacto)
		{
			var mensaje = "Ya has registrado todos los contactos disponibles";
			ContactoService.cerrarBlockUIGeneral(mensaje)
			return;
		}
		
		$("#myModalContactos").modal();
	};

	toolbarContacto.mostrarModalContactos = function() {
		$myModalContactos.modal();
	};

	toolbarContacto.eliminarContacto = function(item) {
		
    	BootstrapDialog
		.show({
			title : '<div class="textBlack">Eliminar Contacto</div>',
			message : '<div style="display:block; padding: 10px;">¿Seguro que deseas eliminar el contacto?</div>',
			buttons : [
					{
						label : 'Cancelar',
						action : function(dialog) {
							dialog.close();
						}
					},
					{
						label : 'Aceptar',
						action : function(dialog) {
							dialog.close();
							eliminarContacto(item.claveContacto);
						}
					} ]
		});
	};
	
	toolbarContacto.toggleContacto = function(item) {
		
		var visibleContacto = "1";
		
		if (item.visible == "1")
			visibleContacto = "0";
		
		item.visible = visibleContacto;		
		ContactoService.actualizarContacto(item);
	};
	
	toolbarContacto.abrirActualizarContacto = function(item) {

		var regex = null;
		var mensajesContacto = "";
		var tipoContactoAct = "";
		var expReg = "";
		var placeHolder = "";
		var contenidoContacto = "";
		
		if(item.subCategory.trim().length > 0)
			tipoContactoAct = consultarElTipoContacto("redSocial" , item.subCategory);
		else
			tipoContactoAct = consultarElTipoContacto("tel" , item.servicesNaptr);

		mensajesContacto = ContactoService.getObjetoTipoContacto(tipoContactoAct);
		expReg = mensajesContacto.expRegular != undefined ? mensajesContacto.expRegular : "^\\d{10}$";
		placeHolder = mensajesContacto.placeholder != undefined ? mensajesContacto.placeholder : "Número Telefónico Inválido";
		contenidoContacto = item.regExp;
		
		regex = new RegExp(expReg);
		
		if (mensajesContacto.tipo != undefined)
			contenidoContacto = item.regExp.substring(mensajesContacto.tipo.length, item.regExp.length);
		
		$("#nombreActualizarTel").text(mensajesContacto.nombre); 
		$("#etiquetaActualizarTel").text(mensajesContacto.etiqueta);
		$("#paisActualizarTel").text(mensajesContacto.pais);
		$("#inputTelefonosActualizar").val(contenidoContacto);  
		$("#textAreaActualizarTel").val(item.longLabelNaptr); 
		$("#claveContactoC").val(item.claveContacto); 
		$("#servicesNaptrC").val(item.servicesNaptr); 
		$("#subCategoryC").val(item.subCategory); 
		$("#visibleC").val(item.visible);
		$("#inputTelefonosActualizar" ).attr("pattern", expReg);
		$("#inputTelefonosActualizar").attr("placeholder", placeHolder);
		$("#myModalContactosActualizar").modal();
		
		$("#inputTelefonosActualizar").keydown(function(e) { 
			ContactoService.setValidacionRegEx(regex.test($("#inputTelefonosActualizar").val()));
		});
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
    		
    		mensaje = "";
    		
    		if(response.data.codeError == 0) {
    		    ContactoService.getContactos();
    		}else{
    			mensaje = "No se ha podido eliminar el contacto";
    		}
    		
    		ContactoService.cerrarBlockUIGeneral(mensaje);
    		
    	}, function errorCallback(response) {
    		console.log("El error es: " + response , response.data.codeError);
    		mensaje = "No se ha podido eliminar el contacto";
    		ContactoService.cerrarBlockUIGeneral(mensaje);
    	});
     };    
     
     var consultarElTipoContacto = function(tipo, llave) {
    	 
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
  
	 var ordenarContactos = function(itemsFin) {
		 
		 var mensaje = "Actualizando contactos...";
		 var strInicio = "<l>";
		 var strFinal = "";
		 
		 for(i = 0; i < itemsFin.length; i++)
			 strFinal =  strFinal + "<f><i>"+ itemsFin[i] + "</i><p>" + i + "</p></f>";
		 
		 strFinal = strInicio + strFinal + "</l>"; 
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
    	 ContactoService.setContactosGuardados(arr.length);
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

app.controller('TipoContacto', function($scope, $http, ContactoService) {
	 
	var datosTipoContacto = this;
	
	datosTipoContacto.mostrarBtnRegresar = false;
	datosTipoContacto.mostrarBtnGuardar = false;
	datosTipoContacto.menuContactos = true;
	datosTipoContacto.formGuardaContacto = false;
	
	datosTipoContacto.tipo = function(tipo) {
		
		var mensajesContacto = ContactoService.getObjetoTipoContacto(tipo);
		
		datosTipoContacto.formGuardaContacto = true;
		datosTipoContacto.mostrarBtnRegresar = true;
		datosTipoContacto.mostrarBtnGuardar = true;
		datosTipoContacto.menuContactos = false;
		datosTipoContacto.muestraPais = mensajesContacto.muestraPais;
		$scope.nombre = mensajesContacto.nombre;
		$scope.placeholderContenido = mensajesContacto.placeholder; 
		$scope.mensajeTelefonos = mensajesContacto.mensaje != undefined ? mensajesContacto.mensaje : "";
		$scope.expRegularValida = mensajesContacto.expRegular != undefined ? mensajesContacto.expRegular : "^\\d{10}$";
		$scope.pais = mensajesContacto.pais != undefined ? mensajesContacto.pais : "";
		$scope.etiqueta = mensajesContacto.etiqueta != undefined ? mensajesContacto.etiqueta : "Número Telefónico";
		$scope.subCategory = mensajesContacto.subcategoria != undefined ? mensajesContacto.subcategoria : "";
		$scope.servicio = mensajesContacto.servicio != undefined ? mensajesContacto.servicio : "E2U+web:http";
		$scope.msjValidacion = mensajesContacto.msjValidacion != undefined ? mensajesContacto.msjValidacion : "Número Telefónico Inválido";
		$scope.maxlength = mensajesContacto.maxlength != undefined ? mensajesContacto.maxlength : "255";
		$scope.tipoContacto = mensajesContacto.tipo != undefined ? mensajesContacto.tipo : "";
	}
	
	datosTipoContacto.regresarAgregarContacto = function() {
		regresarGenerico();
	}
	
	datosTipoContacto.guardarContacto = function(contacto, formulario) {
		
		if (formulario.$valid)
		{
			if (ContactoService.getContactosGuardados() == ContactoService.getContactosPermitidos())
			{
				var mensaje = "Ya has registrado todos los contactos disponibles";
				ContactoService.cerrarBlockUIGeneral(mensaje)
				return;
			}
			
			guardarContacto(contacto);
		}
	}
	
	datosTipoContacto.closeMyModalContactos = function() {
		$("#myModalContactos").modal('toggle');		
	}
	
	var regresarGenerico = function() {
		
		datosTipoContacto.mostrarBtnRegresar = false;
		datosTipoContacto.mostrarBtnGuardar = false;
		datosTipoContacto.menuContactos = true;
		datosTipoContacto.formGuardaContacto = false;
		
	}
	
	 var guardarContacto = function(contacto) {

		 var mensaje = "Guardando contacto...";
		 ContactoService.abrirBlockUIGeneral(mensaje);

		 $http({
			 method: 'POST',
			 url: contextPath + "/infomovil/guardarContacto",
			 params: {
				 descripcionContacto: contacto.longLabelNaptr != undefined ? contacto.longLabelNaptr : "",
				 numeroEmailRedSocial: contacto.numeroEmailRedSocial,
				 constanteContacto: $scope.servicio,
				 redSocialWebSecure: $scope.subCategory,
				 tipoContacto: $scope.tipoContacto,
				 codigoPais: $scope.pais
			 }	  
		 }).then(function successCallback(response) {

			 console.log(response.data.codeError);
			 mensaje = "";

			 if(response.data.codeError == 0) {

				 $("#numeroEmailRedSocial").val("");
				 $("#longLabelNaptr").val("");
			     ContactoService.getContactos();
			     regresarGenerico();
			     
			     if($('#myModalContactosActualizar').is(':visible'))
	    				$("#myModalContactosActualizar").modal('toggle');
			     
			     if($('#myModalContactos').is(':visible'))
	    				$("#myModalContactos").modal('hide');

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
});

app.controller('ActualizarContactos', function($scope, $http, ContactoService) {
	
	var actualizarTipoContacto = this;
	
	actualizarTipoContacto.closeMyModalActualizarContactos = function() {
		
		$("#myModalContactosActualizar").modal('hide');
			
	}
	
	actualizarTipoContacto.guardarDatosContacto = function() {
		
		console.log("validación: " + ContactoService.getValidacionRegEx());
		var contacto = {
				claveContacto : $("#claveContactoC").val(), 
				longLabelNaptr : $("#textAreaActualizarTel").val(),
				regExp : $("#inputTelefonosActualizar").val(),
				servicesNaptr : $("#servicesNaptrC").val(),
				subCategory : $("#subCategoryC").val(),
				visible : $("#visibleC").val()
		};
		 
	   ContactoService.actualizarContacto(contacto);
	   $("#myModalContactosActualizar").modal('toggle');
	}
});