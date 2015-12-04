var app = angular.module('InfomovilApp', []);

app.controller('ToolBarContactoController', function($scope, $http, ContactoService, MensajesService) {

	var toolbarContacto = this;
	var itemsInicio = "";
    var itemsFin = "";
	toolbarContacto.descripcion = "descrito";
	toolbarContacto.downgrade = "";
	toolbarContacto.contacto = "";
	toolbarContacto.claseLi = "";
	toolbarContacto.contactos = "";
	toolbarContacto.imagenIco = "";
	$scope.order = false;
	
	toolbarContacto.activarSortearContacto = function() {
		
		$(".disabledBoton").prop("disabled", false);
		$("#sortable").sortable();
		$("#sortable").sortable( "option", "disabled", false );
		$("#sortable").sortable({
			start: function(event, ui) {
	    		 itemsInicio = $("#sortable").sortable("toArray");
	    		 console.log("Unamos los corazones!");
	    	 }
	    });
		 
		 $("#sortable").sortable({
			 update: function(event, ui) {	
				 itemsFin = $( "#sortable" ).sortable("toArray");
				
				 if(itemsInicio != itemsFin)
					 ordenarContactos(itemsFin);
				 
				 $("#sortable").disableSelection();
				 $("#sortable").sortable('disable');
			 }	
		 
		 });
	};
		
	toolbarContacto.agregaContacto = function(downgrade, contacto) {
		
		ContactoService.setContactosPermitidos(contacto);
		console.log("downgrade: " + downgrade + ", permitidos: " + contacto + ", guardados: " + toolbarContacto.contactos.length);

		if ((toolbarContacto.contactos.length == contacto) || 
			(downgrade == "DOWNGRADE" && toolbarContacto.contactos.length > contacto))
		{
			var mensaje = "<div style='display:block; min-height:150px;' class='col-xs-12'><p>Ya has registrado todos los contactos disponibles</p><p class='textBlack text-center' style='font-size:1.15em;'>Adquiere <strong>Plan Pro</strong> en la sección <img alt='' src='../resources/webapp/images/fa-user-bk.png' width='20' title='Mi Cuenta' /> Mi Cuenta para agregar más contactos </p><br/> </div><div class='clearfix'></div><div style='display:block; height:30px; width:100%;'></div>";
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
		
		var className = "";
		var idElemento = "contactoId" + index;
		var tipoContactoLista = "";
		var mensajesContactoLista = "";
		var tipoBusqueda = "redSocial";
		var nombreElemento = "li.contacto" + index;
		var llaveBusqueda = item.subCategory;
		var contenidoFinalContacto = item.regExp;
		
		toolbarContacto.claseBoton = "btn btn-outlineGreen textWhite navEditorLato disabledBoton";
		toolbarContacto.claseLi = "ui-state-default textBlack claseCursorLi";
		toolbarContacto.claseCheck = "onoffswitch-label";
		$scope.contactoDowngrade = "1";
		$scope.contenidoContacto = "";
		
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
		
		if (downgrade == 'DOWNGRADE' && index > contacto)
		{
			toolbarContacto.claseBoton = "btn btn-outlineDisable textWhite navEditorLato";
			toolbarContacto.claseLi = "ui-state-default textBlack claseCursorLiDowngrade";
			toolbarContacto.claseCheck = "offswitch-label";
			$scope.contactoDowngrade = "0";
			$scope.imagenIco = mensajesContactoLista.imagenIco.replace("-bk", "");
		}
		
		$scope.tipoContactoLis = mensajesContactoLista.tipo != undefined ? mensajesContactoLista.tipo : "";
		$scope.codigoPaisLis = mensajesContactoLista.pais != undefined ? mensajesContactoLista.pais : "";
		$scope.contenidoContacto = contenidoFinalContacto;
	};
	
	toolbarContacto.eliminarContacto = function(item, index) {

		if (item.downgrade == "0")
			return;
		
		var textos = {
			titulo : "Borrar Contacto",
			mensaje : "¿Seguro que deseas borrar el contacto?"
		};

		MensajesService.obtenerConfirmacion(textos, function(confirmarBorrar) {
			
			if (confirmarBorrar)
				eliminarContacto(item.claveContacto);
		});
	};
	
	toolbarContacto.toggleContacto = function(item) {

		if (item.downgrade == "0")
			return;
		
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

		if (item.downgrade == "0")
			return;
		
		if(item.subCategory.trim().length > 0)
			tipoContactoAct = ContactoService.getTipoContacto("redSocial" , item.subCategory);
		else
			tipoContactoAct = ContactoService.getTipoContacto("tel" , item.servicesNaptr);

		mensajesContacto = ContactoService.getObjetoTipoContacto(tipoContactoAct);
		expReg = mensajesContacto.expRegular != undefined ? mensajesContacto.expRegular : "^\\d{10}$";
		placeHolder = mensajesContacto.placeholder != undefined ? mensajesContacto.placeholder : "Número Telefónico Inválido";
		contenidoContacto = item.regExp;
		$scope.imagenIco = mensajesContacto.imagenIco;
		console.log("$scope.imagenIco: " + $scope.imagenIco);
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
    		
    		MensajesService.cerrarBlockUIGeneral("Contactos", mensaje);
    		
    	}, function errorCallback(response) {
    		console.log("El error es: " + response , response.data.codeError);
    		mensaje = "No se ha podido eliminar el contacto";
    		MensajesService.cerrarBlockUIGeneral("Contactos", mensaje);
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
			var mensaje = "<div style='display:block; min-height:150px;' class='col-xs-12'><p>Ya has registrado todos los contactos disponibles</p><p class='textBlack text-center' style='font-size:1.15em;'>Adquiere <strong>Plan Pro</strong> en la sección <img alt='' src='../resources/webapp/images/fa-user-bk.png' width='20' title='Mi Cuenta' /> Mi Cuenta para agregar más contactos </p><br/> </div><div class='clearfix'></div><div style='display:block; height:30px; width:100%;'></div>";
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

		guardarContacto(contacto);		
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
			 MensajesService.cerrarBlockUIGeneral("Contactos", mensaje);
		 }, function errorCallback(response) {
			 console.log("El error es: " + response , response.data.codeError);
			 mensaje = "No se ha podido guardar el contacto";
			 MensajesService.cerrarBlockUIGeneral("Contactos", mensaje);
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