angular.module("EstadisticasInfomovilApp",[])
.controller("EstadisticasCtrl", function($scope, $http) {
	var estadistica = this;
	$.jqplot.config.enablePlugins = true;

	$( ".datepicker" ).datepicker({ dateFormat: 'dd/mm/yy' });

	estadistica.generarGrafica = function(cual){
		$("#chart").html('');
		generarMensaje("Generando Grafica");
		cargarGrafica(cual, estadistica.fechaInicial, estadistica.fechaFinal);
		$.unblockUI();
	}

	function cargarGrafica(cual, fechaInicial, fechaFinal, successCallback){

		console.debug("FechaInicial:" + fechaInicial);
		console.debug("FechaFinal:" + fechaFinal);
		console.debug("Cual:" + cual);

		$http({
			method: 'GET',
			//url: contextPath + "/infomovil/getDatosEstadistica",
			url: "/WebAppInfomovil/infomovil/getDatosEstadistica",
			params: { 
				fechaInicial:fechaInicial, 
				fechaFinal:fechaFinal,
				cual:cual}	  
		}).then(function successCallback(response) {
			var plot1 = $.jqplot('chart', [response.data], {
				title:'Visitas',
				axes:{
					xaxis:{
						renderer:$.jqplot.DateAxisRenderer,
						tickInterval:'10 day',
						rendererOptions:{
							tickRenderer:$.jqplot.CanvasAxisTickRenderer
						},
						tickOptions:{formatString:'%d/%m/%Y',  angle:-40}
					},
					yaxis:{
						rendererOptions:{
							tickRenderer:$.jqplot.CanvasAxisTickRenderer},
							tickOptions:{
								angle:30
							}
					}
				},
				highlighter: {
                    show: true,
                    showMarker:true,
                    showTooltip:true,
                    sizeAdjust: 5,
                    tooltipLocation: 'n',
                    tooltipAxes: 'xy',
                    yvalues: 2,
                    formatString:'<table class="jqplot-cursor-tooltip">\
                    	<tr><td>Fecha: %s</td></tr>\
                    	<tr><td>Totales: %s</td></tr>\
                    	<tr><td>Unicas: %s</td></tr>\
                    	</table>',
                    useAxesFormatters: true,
               },
				cursor: {
					show: false,
				},
				series:[{lineWidth:4, markerOptions:{style:'square'}}]
			});

			//Responsive
			window.onresize = function(event) {
				plot1.replot();
			}

		}, function errorCallback(response) {
			console.error("El error es: " + response , response.data.codeError);
		});
	}

});