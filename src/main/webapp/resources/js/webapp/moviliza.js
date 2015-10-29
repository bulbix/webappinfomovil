function validaPlanPro() { 
	
	var tienePlanPro = $("#planPro").val();
	
	if (tienePlanPro == "SI")
	{
		$("#myModalMoviliza").hide();
		$("#myModalMovilizaAct").modal();
	}
	else
	{
		window.location = contextPath + '/infomovil/miCuenta';
	}
}

function ocultaNotaValidaPP() {
	
	var tienePlanPro = $("#planPro").val();
	
	if (tienePlanPro == "SI") 
		$("#tienePlanProNota").hide();
	
	$("#myModalMoviliza").modal();
	
	if ($('#myModalMoviliza').is(':hidden'))
		   $('#myModalMoviliza').show();
}

function generaCodigoMoviliza() {
	
	var tienePlanPro = $("#planPro").val();
	
	if (tienePlanPro == "SI") {

		$.blockUI.defaults.baseZ = 9000;
		$.blockUI({
			message: "Generando código moviliza tu sitio...",
			css: {
				class:"alertaUI",
				top:  ($(window).height() - 400) /2 + 'px',
				left: ($(window).width() - 400) /2 + 'px',
				width: '400px'
			}
		});
		
		$.ajax({
			type : "POST",
			url : contextPath + "/infomovil/generaCodigoMoviliza",
				dataType : "json",
				
			success : function(data) {
				console.log("hashMoviliza: " + data.scriptMoviliza);
				$("#codigoMoviliza").html(data.scriptMoviliza);
				$("#myModalMovilizaCode").modal();
				$.unblockUI();
			},
			error : function(json) {
				console.log("Error descError: " + data.descError);
				$.unblockUI();
			}
		});		
	}
}