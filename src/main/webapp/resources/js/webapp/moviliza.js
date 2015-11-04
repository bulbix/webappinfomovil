var ak = "";
var si = "";
var uid = "";
var aux = "";

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

				ak = data.auxAK;
				si = data.auxSI;
				uid = data.usuario;
				aux = data.hashMoviliza;
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

$("#enviarCorreoCio").click(function() { 

	$.blockUI.defaults.baseZ = 9000;
	$.blockUI({
		message: "Enviando correo moviliza...",
		css: {
			class:"alertaUI",
			top:  ($(window).height() - 400) /2 + 'px',
			left: ($(window).width() - 400) /2 + 'px',
			width: '400px'
		}
	});
	
	$.ajax({
		type : "GET",
		url : contextPath + "/infomovil/enviarCorreoMoviliza",
		dataType : "json",
		contentType: "text/plain",
		data : {
			hash: aux
		},	
		success : function(data) {
			console.log("después de mandar el correo a customer");
			$('#myModalMovilizaCode').modal('hide');
			$.unblockUI();
		},
		error : function(json) {
			console.log("error: " + json);
			$.unblockUI();
		}
	});		
	
});