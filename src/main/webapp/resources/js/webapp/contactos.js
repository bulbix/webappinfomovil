var app = angular.module('InfomovilApp', []);

app.controller('ToolBarContactoController', function($scope, $http, ContactoService, MensajesService) {

	var toolbarContacto = this;
	toolbarContacto.descripcion = "descrito";
	toolbarContacto.downgrade = "";
	toolbarContacto.contacto = "";
	toolbarContacto.claseLi = "";
	toolbarContacto.contactos = "";
	toolbarContacto.imagenIco = "";
	
	toolbarContacto.agregaContacto = function(downgrade, contacto) {
		
		ContactoService.setContactosPermitidos(contacto);

		if (toolbarContacto.contactos.length == contacto)
		{
			var mensaje = "Ya has registrado todos los contactos disponibles";
			MensajesService.cerrarBlockUIGeneral("Contactos",mensaje)
			return;
		}
		
		$("#numeroEmailRedSocial").keydown(function(e) {
			$("#msgValidaRegExp").css("display", "none");
		});
		
		$("#myModalContactos").modal();
	};

	toolbarContacto.mostrarModalContactos = function() {
		$myModalContactos.modal();
	};

	toolbarContacto.getContenidoDowngrade = function(downgrade, index, contacto, item) {
		
		var tipoContactoLista = "";
		var mensajesContactoLista = "";
		var tipoBusqueda = "redSocial";
		var llaveBusqueda = item.subCategory;
		var contenidoFinalContacto = item.regExp;
		
		toolbarContacto.claseBoton = "btn btn-outlineGreen textWhite navEditorLato";
		toolbarContacto.claseLi = "ui-state-default textBlack claseCursorLi";
		$scope.contenidoContacto = "";
		
		if (downgrade == 'DOWNGRADE' && index > contacto)
		{
			toolbarContacto.claseBoton = "btn btn-outlineDisable textWhite navEditorLato";
			toolbarContacto.claseLi = "ui-state-default textBlack claseCursorLiDowngrade";
		}
		
		if(item.servicesNaptr.trim().length > 0)
		{
			tipoBusqueda = "tel";
			llaveBusqueda = item.servicesNaptr;
		}

		tipoContactoLista = ContactoService.getTipoContacto(tipoBusqueda , llaveBusqueda);
		mensajesContactoLista = ContactoService.getObjetoTipoContacto(tipoContactoLista);
		$scope.imagenIco = mensajesContactoLista.imagenIco;

		if (mensajesContactoLista.tipo != undefined)
		{
			contenidoFinalContacto = item.regExp.substring(mensajesContactoLista.tipo.length, item.regExp.length);
			
			if (mensajesContactoLista.tipo.indexOf("tel") != -1)
				contenidoFinalContacto = item.regExp.substring(mensajesContactoLista.tipo.length + mensajesContactoLista.pais.length, item.regExp.length);
		}
		
		$scope.contenidoContacto = contenidoFinalContacto;
	};
	
	toolbarContacto.eliminarContacto = function(item) {
		
		var textos = {
			titulo : "Eliminar Contacto",
			mensaje : "¿Seguro que deseas eliminar el contacto?"
		};

		MensajesService.obtenerConfirmacion(textos, function(confirmarBorrar) {
			
			if (confirmarBorrar)
				eliminarContacto(item.claveContacto);
		});
	};
	
	toolbarContacto.toggleContacto = function(item) {
		console.log("toggleContacto");
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
			tipoContactoAct = ContactoService.getTipoContacto("redSocial" , item.subCategory);
		else
			tipoContactoAct = ContactoService.getTipoContacto("tel" , item.servicesNaptr);

		mensajesContacto = ContactoService.getObjetoTipoContacto(tipoContactoAct);
		expReg = mensajesContacto.expRegular != undefined ? mensajesContacto.expRegular : "^\\d{10}$";
		placeHolder = mensajesContacto.placeholder != undefined ? mensajesContacto.placeholder : "Número Telefónico Inválido";
		contenidoContacto = item.regExp;
		$scope.imagenIco = mensajesContacto.imagenIco;
		
		regex = new RegExp(expReg);
		
		if (mensajesContacto.tipo != undefined)
		{
			contenidoContacto = item.regExp.substring(mensajesContacto.tipo.length, item.regExp.length);
			
			if (mensajesContacto.tipo.indexOf("tel") != -1)
				contenidoContacto = item.regExp.substring(mensajesContacto.tipo.length + mensajesContacto.pais.length, item.regExp.length);
		}

		$("#paisActualizarTel").text("");
		$("#nombreActualizarTel").text(mensajesContacto.nombre); 
		$("#etiquetaActualizarTel").text(mensajesContacto.etiqueta);
		$("#paisActualizarTel").text(mensajesContacto.pais);
		$("#inputTelefonosActualizar").val(contenidoContacto);  
		$("#textAreaActualizarTel").val(item.longLabelNaptr); 
		$("#claveContactoC").val(item.claveContacto); 
		$("#servicesNaptrC").val(item.servicesNaptr); 
		$("#subCategoryC").val(item.subCategory); 
		$("#visibleC").val(item.visible);
		$("#tipoContactoActualizar").val(mensajesContacto.tipo);
		$("#inputTelefonosActualizar" ).attr("pattern", expReg);
		$("#inputTelefonosActualizar").attr("placeholder", placeHolder);
		$("#imagenIco").attr("src", mensajesContacto.imagenIco);
		$("#myModalContactosActualizar").modal();
		
		$("#inputTelefonosActualizar").keydown(function(e) { 
			ContactoService.setValidacionRegEx(regex.test($("#inputTelefonosActualizar").val()));
		});
	}
	
    var eliminarContacto = function(claveContacto) {
	
    	var mensaje = "Eliminando contacto...";
    	MensajesService.abrirBlockUIGeneral(mensaje);
    	
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
    		
    		MensajesService.cerrarBlockUIGeneral("Contactos",mensaje);
    		
    	}, function errorCallback(response) {
    		console.log("El error es: " + response , response.data.codeError);
    		mensaje = "No se ha podido eliminar el contacto";
    		MensajesService.cerrarBlockUIGeneral("Contactos",mensaje);
    	});
     };    
 
	 var ordenarContactos = function(itemsFin) {
		 
		 var mensaje = "Actualizando contactos...";
		 var strInicio = "<l>";
		 var strFinal = "";
		 
		 for(i = 0; i < itemsFin.length; i++)
			 strFinal =  strFinal + "<f><i>"+ itemsFin[i] + "</i><p>" + i + "</p></f>";
		 
		 strFinal = strInicio + strFinal + "</l>"; 
		 MensajesService.abrirBlockUIGeneral(mensaje);
		 
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
		  		 
			 MensajesService.cerrarBlockUIGeneral("Contactos",mensaje);

		 }, function errorCallback(response) {
			 console.log("El error es de que ni fue es: " + response , response.data.codeError);
			 mensaje = "No se han podido actualizar los contactos";
			 MensajesService.cerrarBlockUIGeneral("Contactos" ,mensaje);
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

app.controller('TipoContacto', function($scope, $http, ContactoService, MensajesService) {
	 
	var datosTipoContacto = this;
	
	datosTipoContacto.mostrarBtnRegresar = false;
	datosTipoContacto.mostrarBtnGuardar = false;
	datosTipoContacto.menuContactos = true;
	datosTipoContacto.formGuardaContacto = false;
	datosTipoContacto.muestraMsjValidacion = false;
	
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
		$scope.imagenIco = mensajesContacto.imagenIco;
	}
	
	datosTipoContacto.regresarAgregarContacto = function() {
		regresarGenerico();
	}
	
	datosTipoContacto.guardarContacto = function() {

		var regex = null;
		
		if (ContactoService.getContactosGuardados() == ContactoService.getContactosPermitidos())
		{
			var mensaje = "Ya has registrado todos los contactos disponibles";
			MensajesService.cerrarBlockUIGeneral("Contactos", mensaje)
			return;
		}

		regex = new RegExp($scope.expRegularValida);
		
		if (!regex.test($scope.contacto.numeroEmailRedSocial))
		{
			$("#msgValidaRegExp").css("display", "block");
			return;
		}
		
		$("#msgValidaRegExp").css("display", "none");
		
		var contacto = {
			longLabelNaptr : $scope.contacto.longLabelNaptr != undefined ? $scope.contacto.longLabelNaptr : "", 
			numeroEmailRedSocial: $scope.contacto.numeroEmailRedSocial
		};
		
		console.log("Contacto: " + $scope.contacto.numeroEmailRedSocial + ", " + $scope.contacto.longLabelNaptr);
	//	guardarContacto(contacto);
		
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
		 MensajesService.abrirBlockUIGeneral(mensaje);

		 $http({
			 method: 'POST',
			 url: contextPath + "/infomovil/guardarContacto",
			 params: {
				 descripcionContacto: contacto.longLabelNaptr,
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
			 MensajesService.cerrarBlockUIGeneral("Contactos",mensaje);
		 }, function errorCallback(response) {
			 console.log("El error es: " + response , response.data.codeError);
			 mensaje = "No se ha podido guardar el contacto";
			 MensajesService.cerrarBlockUIGeneral("Contactos",mensaje);
		 });
	 };	
});

app.controller('ActualizarContactos', function($scope, $http, ContactoService,MensajesService) {
	
	var actualizarTipoContacto = this;
	
	actualizarTipoContacto.closeMyModalActualizarContactos = function() {
		$("#myModalContactosActualizar").modal('hide');			
	}
	
	actualizarTipoContacto.guardarDatosContacto = function() {
		
		var contacto = {
					
			claveContacto : $("#claveContactoC").val(), 
			longLabelNaptr : $("#textAreaActualizarTel").val(),
			regExp : $("#inputTelefonosActualizar").val(),
			servicesNaptr : $("#servicesNaptrC").val(),
			subCategory : $("#subCategoryC").val(),
			visible : $("#visibleC").val(),
			tipoContacto : $("#tipoContactoActualizar").val(),
			codigoPais : $("#paisActualizarTel").val()
		};
		
		ContactoService.actualizarContacto(contacto);
		$("#myModalContactosActualizar").modal('toggle');
	}
});