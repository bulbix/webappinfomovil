var ak = "";
var si = "";
var uid = "";
var aux = "";

$("#modalMovilizaPP").click(function() { 
//	console.log("modalMovilizaPP");
	var tienePlanPro = $("#planPro").val();
	
	if (tienePlanPro == "SI")
	{
		$('#myModalMoviliza').modal('hide');
		$("#myModalMovilizaAct").modal();
	}
	else
	{
		window.location = contextPath + '/infomovil/miCuenta';
		console.log("else");
	}
});

$("#modalGeneraCodigoMov").click(function() { 
//	console.log("modalGeneraCodigoMov");
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
	
});

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
		type : "POST",
		url : contextPath + "/infomovil/enviarCorreoMoviliza",
		dataType : "json",
		data : {
			hash: aux
		},	
		success : function(data) {
			console.log("después de mandar el correo a customer");
			$('#myModalMovilizaCode').modal('hide');
			BootstrapDialog
			.show({
				title : "<span class='textBlack' style='font-size:1.15em;'><img alt='' src='../resources/webapp/images/fa-informacion.png' width='20px'  title='Alerta' /> Moviliza tu sitio</span>",
				message : '<div style="display:block; min-height:150px;"><p class="textBlack text-center" style="font-size:1.15em;">'+
				'<br/><img width="80" height="80" alt="Infomovil" src="../resources/webapp/images/fa-code-bk.png">'+
				'El correo se ha enviado con éxito</p><br/>',
				buttons : [
							{
								label : 'Aceptar',
								action : function(dialog) {
									dialog.close();
								}
							}]
			});
			$.unblockUI();
		},
		error : function(json) {
			console.log("error: " + json);
			$.unblockUI();
		}
	});			
});

function sessionBtnEditorMiCuenta() {
	
	/*$.getJSON(contextPath + "/infomovil/getProducto", function(data) {
		console.log("Me regreso : " + JSON.stringify(data));
	}).done(function() {
	    console.log( "second success" );
	  })
	  .fail(function() {
	    console.log( "error" );
	  });*/
	console.debug("una vez");
	
	$.ajax({
		type : "GET",
		url : contextPath + "/infomovil/getProducto",
		success : function(data) {
			console.log("Me regreso : " + JSON.stringify(data));
			window.location = contextPath + '/infomovil/' + data.vista;
		},
		params : {},
		error : function(json) {
			console.log("error: " + JSON.stringify(json));
		}
	});		
}

function ocultaNotaValidaPP() {
	
	var tienePlanPro = $("#planPro").val();
	
	if (tienePlanPro == "SI") 
		$("#tienePlanProNota").hide();
	
	$("#myModalMoviliza").modal();
	
	if ($('#myModalMoviliza').is(':hidden'))
		   $('#myModalMoviliza').show();
}