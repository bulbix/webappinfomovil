var app = angular.module('InfomovilAppEditor', []);

app.controller('HorariosControllerLlamarModal', function($scope, $http, HorarioService,ContactoService) {
	
	var llamarModalhorarios = this;
	llamarModalhorarios.abrirModalHorarios = function(){
		var resphoras = HorarioService.getHoras();
	/*	$("#Lunes1").append( resphoras );
		$("#Lunes2").append( resphoras );
		$("#Martes1").append( resphoras );
		$("#Martes2").append( resphoras );
		$("#Miercoles1").append( resphoras );
		$("#Miercoles2").append( resphoras );
		$("#Jueves1").append( resphoras );
		$("#Jueves2").append( resphoras );
		$("#Viernes1").append( resphoras );
		$("#Viernes2").append( resphoras );
		$("#Sabado1").append( resphoras );
		$("#Sabado2").append( resphoras );
		$("#Domingo1").append( resphoras );
		$("#Domingo2").append( resphoras );
		*/
		$("#myModalHorarios").modal();
	};
	
});

app.controller('ModalHorarios', function($scope, $http, HorarioService, ContactoService) {
	var combosModalHorarios = this;
	var horas = new Array();
	HorarioService.getHorarios();
	combosModalHorarios.horario = HorarioService.horario();
	console.log("Controller ModalHorarios");
	
	
	/*combosModalHorarios.Lunes1 = "00:00";
	combosModalHorarios.Lunes2 = "00:00";
	combosModalHorarios.Martes1 = "00:00";
	combosModalHorarios.Martes2 = "00:00";
	combosModalHorarios.Miercoles1 = "00:00";
	combosModalHorarios.Miercoles2 = "00:00";
	combosModalHorarios.Jueves1 = "00:00";
	combosModalHorarios.Jueves2 = "00:00";
	combosModalHorarios.Viernes1 = "00:00";
	combosModalHorarios.Viernes2 = "00:00";
	combosModalHorarios.Sabado1 = "00:00";
	combosModalHorarios.Sabado2 = "00:00";
	combosModalHorarios.Domingo1 = "00:00";
	combosModalHorarios.Domingo2 = "00:00";*/
/*
	combosModalHorarios.insertarHorarios = function(){
		horas[0] = combosModalHorarios.Lunes1;
		horas[1] = combosModalHorarios.Lunes2;
		horas[2] = combosModalHorarios.Martes1;
		horas[3] = combosModalHorarios.Martes2;
		horas[4] = combosModalHorarios.Miercoles1;
		horas[5] = combosModalHorarios.Miercoles2;
		horas[6] = combosModalHorarios.Jueves1;
		horas[7] = combosModalHorarios.Jueves2;
		horas[8] = combosModalHorarios.Viernes1;
		horas[9] = combosModalHorarios.Viernes2;
		horas[10] = combosModalHorarios.Sabado1;
		horas[11] = combosModalHorarios.Sabado2;
		horas[12] = combosModalHorarios.Domingo1;
		horas[13] = combosModalHorarios.Domingo2;
		console.log("El valor acmbio ahora es: " + combosModalHorarios.Lunes1);
	};
	*/
	combosModalHorarios.guardarHorario = function(){
		//$("#myModalHorarios").modal('toggle');
		console.log("Entro en guardar horarios!!");
		horas[0] = combosModalHorarios.Lunes1;
		horas[1] = combosModalHorarios.Lunes2;
		horas[2] = combosModalHorarios.Martes1;
		horas[3] = combosModalHorarios.Martes2;
		horas[4] = combosModalHorarios.Miercoles1;
		horas[5] = combosModalHorarios.Miercoles2;
		horas[6] = combosModalHorarios.Jueves1;
		horas[7] = combosModalHorarios.Jueves2;
		horas[8] = combosModalHorarios.Viernes1;
		horas[9] = combosModalHorarios.Viernes2;
		horas[10] = combosModalHorarios.Sabado1;
		horas[11] = combosModalHorarios.Sabado2;
		horas[12] = combosModalHorarios.Domingo1;
		horas[13] = combosModalHorarios.Domingo2;
		guardarHorario(horas);
	};
	
	
	combosModalHorarios.closeMyModalHorarios = function(){
		$("#myModalHorarios").modal('toggle');
		
	};
	
	
	
	var guardarHorario = function(horas){
		$http({
			method: 'POST',
			url: contextPath + "/infomovil/guardarHorarios",
			params: { 
				dias: horas
			}	  
		}).then(function successCallback(response) {
			
			mensaje = "";
			
			if(response.data.codeError == 0) {
			    console.log("Me regresa 0 con nuevo metodo excelente!");
			}else{
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




