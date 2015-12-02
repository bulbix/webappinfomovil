var app = angular.module('InfomovilAppEditor', []);

app.controller('HorariosControllerLlamarModal', function($scope, $http, HorarioService,MensajesService) {
	
	var llamarModalhorarios = this;
	var resphoras = HorarioService.getHoras();
	$("#Lunes1").append( resphoras );
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
	
	
	llamarModalhorarios.abrirModalHorarios = function(){
		console.log("LLama a  abrirModalHorarios");
		HorarioService.getHorarios();
	};
	
});

app.controller('ModalHorarios', function($scope, $http, HorarioService, MensajesService) {
	var combosModalHorarios = this;
	var horas = new Array();
	
	combosModalHorarios.eliminarHorario = function(){
		MensajesService.abrirBlockUIGeneral("Eliminando horario...");
		HorarioService.eliminarHorario();
	};
	
	combosModalHorarios.guardarHorario = function(){
		MensajesService.abrirBlockUIGeneral("Guardando horario...");
		console.log("Entro en guardar horarios!!");
		console.log("Imprime el valor enviado : " + $( "#Lunes1 option:selected" ).text());
		console.log("Imprime el valor enviado : " + $( "#Lunes2 option:selected" ).text());
		console.log("Imprime el valor enviado : " + $( "#Martes1 option:selected" ).text());
		console.log("Imprime el valor enviado : " + $( "#Martes2 option:selected" ).text());
	
		
		
		
		horas[0] = $( "#Lunes1 option:selected" ).text();
		horas[1] = $( "#Lunes2 option:selected" ).text();
		horas[2] = $( "#Martes1 option:selected" ).text();
		horas[3] = $( "#Martes2 option:selected" ).text();
		horas[4] = $( "#Miercoles1 option:selected" ).text();
		horas[5] = $( "#Miercoles2 option:selected" ).text();
		horas[6] = $( "#Jueves1 option:selected" ).text();
		horas[7] = $( "#Jueves2 option:selected" ).text();
		horas[8] = $( "#Viernes1 option:selected" ).text();
		horas[9] = $( "#Viernes2 option:selected" ).text();
		horas[10] = $( "#Sabado1 option:selected" ).text();
		horas[11] = $( "#Sabado2 option:selected" ).text();
		horas[12] = $( "#Domingo1 option:selected" ).text();
		horas[13] = $( "#Domingo2 option:selected" ).text();
		
		
		HorarioService.guardarHorario(horas);
	};
	
	
	combosModalHorarios.closeMyModalHorarios = function(){
		$("#myModalHorarios").modal('toggle');
	};
	
	
	
	
	

	
	
});



