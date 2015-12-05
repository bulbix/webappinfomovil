app.factory('HorarioService', function($http, MensajesService) {
	
	function getHoras() {
    	 
    	 var horas =    '<option value="00:00">00:00</option>'+	 
    	 				'<option value="00:30">00:30</option>' + '<option value="01:00">01:00</option>'+
    	 				'<option value="01:30">01:30</option>' + '<option value="02:00">02:00</option>'+
    	 				'<option value="02:30">02:30</option>' + '<option value="03:00">03:00</option>'+
    	 				'<option value="03:30">03:30</option>' + '<option value="04:00">04:00</option>'+
    	 				'<option value="04:30">04:30</option>' + '<option value="05:00">05:00</option>'+
    	 				'<option value="05:30">05:30</option>' + '<option value="06:00">06:00</option>'+
    	 				'<option value="06:30">06:30</option>' + '<option value="07:00">07:00</option>'+
    	 				'<option value="07:30">07:30</option>' + '<option value="08:00">08:00</option>'+
    	 				'<option value="08:30">08:30</option>' + '<option value="09:00">09:00</option>'+
    	 				'<option value="09:30">09:30</option>' + '<option value="10:00">10:00</option>'+
    	 				'<option value="10:30">10:30</option>' + '<option value="11:00">11:00</option>'+
    	 				'<option value="11:30">11:30</option>' + '<option value="12:00">12:00</option>'+
    	 				'<option value="12:30">12:30</option>' + '<option value="13:00">13:00</option>'+
    	 				'<option value="13:30">13:30</option>' + '<option value="14:00">14:00</option>'+
    	 				'<option value="14:30">14:30</option>' + '<option value="15:00">15:00</option>'+
    	 				'<option value="15:30">15:30</option>' + '<option value="16:00">16:00</option>'+
    	 				'<option value="16:30">16:30</option>' + '<option value="17:00">17:00</option>'+
    	 				'<option value="17:30">17:30</option>' + '<option value="18:00">18:00</option>'+
    	 				'<option value="18:30">18:30</option>' + '<option value="19:00">19:00</option>'+
    	 				'<option value="19:30">19:30</option>' + '<option value="20:00">20:00</option>'+
    	 				'<option value="20:30">20:30</option>' + '<option value="21:00">21:00</option>'+
    	 				'<option value="21:30">21:30</option>' + '<option value="22:00">22:00</option>'+
    	 				'<option value="22:30">22:30</option>' + '<option value="23:00">23:00</option>'+
    	 				'<option value="23:30">23:30</option>' ;
		 return horas;
	 };

    	function getHorarios() {
    	console.log("Se llamo a getHorarios");
    	var mensaje = "";
    		$http({
    			method: 'POST',
    			url: contextPath + "/infomovil/getHorarios",
    			params: { 
    			}
    		}).then(function successCallback(response) {
    			
    			var option ="";
    			var resphoras = getHoras();
    			if(response.data.codeError == 0) {
    				
    				console.log("Esta en el 0 de getHorarios: " +  response.data.codeError);
    				console.log("y el inicio es: " + response.data.listaHorario[0].inicio);
    				$('#Lunes1').empty().append('<option selected="selected">'+ response.data.listaHorario[0].inicio +'</option>' + resphoras);
    				$('#Lunes2').empty().append('<option selected="selected">'+ response.data.listaHorario[0].cierre +'</option>' + resphoras);
    				$('#Martes1').empty().append('<option selected="selected">'+ response.data.listaHorario[1].inicio +'</option>' + resphoras);
    				$('#Martes2').empty().append('<option selected="selected">'+ response.data.listaHorario[1].cierre +'</option>' + resphoras);
    				$('#Miercoles1').empty().append('<option selected="selected">'+ response.data.listaHorario[2].inicio +'</option>' + resphoras);
    				$('#Miercoles2').empty().append('<option selected="selected">'+ response.data.listaHorario[2].cierre +'</option>' + resphoras);
    				$('#Jueves1').empty().append('<option selected="selected">'+ response.data.listaHorario[3].inicio +'</option>' + resphoras);
    				$('#Jueves2').empty().append('<option selected="selected">'+ response.data.listaHorario[3].cierre +'</option>' + resphoras);
    				$('#Viernes1').empty().append('<option selected="selected">'+ response.data.listaHorario[4].inicio +'</option>' + resphoras);
    				$('#Viernes2').empty().append('<option selected="selected">'+ response.data.listaHorario[4].cierre +'</option>' + resphoras);
    				$('#Sabado1').empty().append('<option selected="selected">'+ response.data.listaHorario[5].inicio +'</option>' + resphoras);
    				$('#Sabado2').empty().append('<option selected="selected">'+ response.data.listaHorario[5].cierre +'</option>' + resphoras);
    				$('#Domingo1').empty().append('<option selected="selected">'+ response.data.listaHorario[6].inicio +'</option>' + resphoras);
    				$('#Domingo2').empty().append('<option selected="selected">'+ response.data.listaHorario[6].cierre +'</option>' + resphoras);
    				
    			}else if(response.data.codeError == "-100"){
    				console.log("Esta en el -100 de getHorarios: " +  response.data.codeError);
    				$('#Lunes1').empty().append('<option selected="selected">00:00</option>' + resphoras);
    				$('#Lunes2').empty().append('<option selected="selected">00:00</option>' + resphoras);
    				$('#Martes1').empty().append('<option selected="selected">00:00</option>' + resphoras);
    				$('#Martes2').empty().append('<option selected="selected">00:00</option>' + resphoras);
    				$('#Miercoles1').empty().append('<option selected="selected">00:00</option>' + resphoras);
    				$('#Miercoles2').empty().append('<option selected="selected">00:00</option>' + resphoras);
    				$('#Jueves1').empty().append('<option selected="selected">00:00</option>' + resphoras);
    				$('#Jueves2').empty().append('<option selected="selected">00:00</option>' + resphoras);
    				$('#Viernes1').empty().append('<option selected="selected">00:00</option>' + resphoras);
    				$('#Viernes2').empty().append('<option selected="selected">00:00</option>' + resphoras);
    				$('#Sabado1').empty().append('<option selected="selected">00:00</option>' + resphoras);
    				$('#Sabado2').empty().append('<option selected="selected">00:00</option>' + resphoras);
    				$('#Domingo1').empty().append('<option selected="selected">00:00</option>' + resphoras);
    				$('#Domingo2').empty().append('<option selected="selected">00:00</option>' + resphoras);
    			}else{
    				mensaje = "No se ha podido obtener el horario";
    				MensajesService.cerrarBlockUIGeneral("Horarios",mensaje);
    			}
    			$("#myModalHorarios").modal();
    			return response.data.codeError;
    			
    			
    		}, function errorCallback(response) {
    			
    			console.log("El error es: " + response , response.data.codeError);
    			mensaje = "No se ha podido obtener el horario";
    			MensajesService.cerrarBlockUIGeneral("Horarios",mensaje);
    			$("#myModalHorarios").modal();
    			return response.data.codeError;
    		});
    		
    	};
    	
   
    	function guardarHorario(horas){
    		var mensaje = "";
    		$http({
    			method: 'POST',
    			url: contextPath + "/infomovil/guardarHorarios",
    			params: { 
    				dias: horas
    			}	  
    		}).then(function successCallback(response) {
    			
    			if(response.data.codeError == 0) {
    			    console.log("Me regresa 0 en guardarHorario");
    			}else{
    				mensaje = "No se ha podido guardar el contacto";	
    			}
    			getHorarios();
    			MensajesService.cerrarBlockUIGeneral("Horarios",mensaje);
    			
    		}, function errorCallback(response) {
    			console.log("El error es: " + response , response.data.codeError);
    			mensaje = "No se ha podido guardar el contacto";
    			MensajesService.cerrarBlockUIGeneral("Horarios",mensaje);
    		});
    		
    	};
    	
    	function eliminarHorario() {
    		
    		var mensaje = "Eliminando horario...";
    		MensajesService.abrirBlockUIGeneral(mensaje);
    		
    		$http({
    			method: 'POST',
    			url: contextPath + "/infomovil/eliminarHorarios",
    			params: { 
    			}	  
    		}).then(function successCallback(response) {
    			mensaje = "";
    			if(response.data.codeError == 0) {
    			    console.log("Me regresa 0 en eliminarHorario");
    			    getHorarios();
    			}else{
    				mensaje = "No se ha podido eliminar el horario";	
    			}
    			
    			MensajesService.cerrarBlockUIGeneral("Horarios",mensaje);
    			
    		}, function errorCallback(response) {
    			console.log("El error es: " + response , response.data.codeError);
    			mensaje = "No se ha podido eliminar el horario";
    			MensajesService.cerrarBlockUIGeneral("Horarios",mensaje);
    		});
    		
    	};
    	
		return{
			 getHoras : getHoras,
			 getHorarios : getHorarios,
			 guardarHorario : guardarHorario,
			 eliminarHorario : eliminarHorario
			   	
		}
});