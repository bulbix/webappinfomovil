var app = angular.module("EstadisticasInfomovilApp",[]);

app.controller("EstadisticasCtrl", function($scope, $http, MensajesService) {

	
	var estadistica = this;
	$.jqplot.config.enablePlugins = true;
	$.jqplot._noToImageButton = true;
	
	$( ".datepicker" ).datepicker({ dateFormat: 'dd/mm/yy' });
	
	estadistica.init = function(fechaInicial,fechaFinal){
		estadistica.fechaInicial= fechaInicial;
		estadistica.fechaFinal= fechaFinal;
		cargarDatosGrafica('1semana', fechaInicial, fechaFinal);
		$("#dinamicoPersonalizado").hide();
	}
	
	estadistica.ngclick = function(){
		console.log("Entro a click de personaliddod");
		$("#dinamicoPersonalizado").show();
	}
	
	estadistica.generarGrafica = function(cual){
		$("#dinamicoPersonalizado").hide();
		if( cual == 'sinplanpro')
			MensajesService.cerrarBlockUIGeneral("Reportes","Esta opción esta únicamente disponible para el Plan Pro. ¡Adquiérelo ahora desde la sección Mis Productos! ");
		else
			cargarDatosGrafica(cual,estadistica.fechaInicial, estadistica.fechaFinal);
			//cargarGrafica(cual, estadistica.fechaInicial, estadistica.fechaFinal);
	}

	
	function cargarDatosGrafica(cual, fechaInicial, fechaFinal){
		console.debug("FechaInicial:" + fechaInicial);
		console.debug("FechaFinal:" + fechaFinal);
		console.debug("Cual:" + cual);
		generarMensaje("Obteniendo datos");
		
		$http({
			method: 'GET',
			url: contextPath + "/infomovil/getDatosEstadistica",
			params: { 
				fechaInicial:fechaInicial, 
				fechaFinal:fechaFinal,
				cual:cual}	  
		}).then(function successCallback(response) {
			estadistica.fechaInicial= response.data.fechaInicial;
			estadistica.fechaFinal= response.data.fechaFinal;
			console.log("las visitas totales son : " + response.data.sumVisitasTotales);
			console.log("las visitas unicas son : " + response.data.sumVisitasUnicas);
			var titulos = {
					'personalizado':'Del ' + fechaInicial + ' al ' + fechaFinal,
					'1semana':'Reporte 1 semana',
					'1mes':'Reporte 1 mes',
					'3meses':'Reporte 3 meses',
					'6meses':'Reporte 6 meses',
					'1anio':'Reporte 1 año'}
			$("#tituloReporte").text(titulos[cual]);
			$("#numVisitasPagina").html("Visitas totales a mi página: <strong>"+ response.data.sumVisitasTotales+"</strong>");
			$("#numPersonasUnicas").html("Número de personas únicas qué la visitaron: <strong>"+ response.data.sumVisitasUnicas+"</strong>");
		
			
			
			$.unblockUI();
		}, function errorCallback(response) {
			console.error("El error es: " + response.data);
			$.unblockUI();
		});	
	}
	/*
	function cargarGrafica(cual, fechaInicial, fechaFinal){
		console.debug("FechaInicial:" + fechaInicial);
		console.debug("FechaFinal:" + fechaFinal);
		console.debug("Cual:" + cual);
		
		$("#chart").html('');
		generarMensaje("Generando Gráfica");
		
		var titulos = {
			'personalizado':'Del ' + fechaInicial + ' al ' + fechaFinal,
			'1semana':'Reporte 1 semana',
			'1mes':'Reporte 1 mes',
			'3meses':'Reporte 3 meses',
			'6meses':'Reporte 6 meses',
			'1anio':'Reporte 1 año'}
		
		$http({
			method: 'GET',
			url: contextPath + "/infomovil/getDatosEstadistica",
			params: { 
				fechaInicial:fechaInicial, 
				fechaFinal:fechaFinal,
				cual:cual}	  
		}).then(function successCallback(response) {
			estadistica.fechaInicial= response.data.fechaInicial;
			estadistica.fechaFinal= response.data.fechaFinal;
			
			var plot1 = $.jqplot("chart", [response.data.arrayVisitas, response.data.arrayVisitasUnicas], {
		        seriesColors: ["rgba(47, 163, 153, 0.7)", "rgb(124, 65, 188)"],
		        title: titulos[cual],
		        highlighter: {
		            show: true,
		            sizeAdjust: 1,
		            tooltipOffset: 9,
		            formatString:'%s<br/>Visitas: %s'
		        },
		        /*grid: {
		            background: 'rgba(57,57,57,0.0)',
		            drawBorder: false,
		            shadow: false,
		            gridLineColor: '#666666',
		            gridLineWidth: 2
		        }, // /*//* //
					
		        legend: {
		            show: true,
		            placement: 'inside'
		        },
		        seriesDefaults: {
		            rendererOptions: {
		                smooth: true,
		                animation: {
		                    show: true
		                }
		            },
		            showMarker: false
		        },
		        series: [
		            {
		                fill: true,
		                label: 'Totales: ' + response.data.sumVisitasTotales 
		            },
		            {
		                label: 'Únicas: ' + response.data.sumVisitasUnicas
		            }
		        ],
		        axesDefaults: {
		            rendererOptions: {
		                baselineWidth: 1.5,
		                baselineColor: '#444444',
		                drawBaseline: false
		            }
		        },
		        axes: {
		            xaxis: {
		                renderer: $.jqplot.DateAxisRenderer,
		                tickRenderer: $.jqplot.CanvasAxisTickRenderer,
		                tickOptions: {
		                	formatString:'%d/%m/%Y',
		                    angle: -30,
		                    textColor: '#dddddd'
		                },
		                min: response.data.minFecha,
		                max: response.data.maxFecha,
		                //tickInterval: intervalos[cual],
		                drawMajorGridlines: false
		            },
		            yaxis: {
		            	min:-10,
		            	max:response.data.maxVisita,
		                tickOptions: {
		                    formatString: "%'d",
		                    showMark: false
		                }
		            }
		        }
		    });
			
			console.debug('maxVisita:' + response.data.maxVisita);
			console.debug('MinFecha:' + response.data.minFecha);
			console.debug('MaxFecha:' + response.data.maxFecha);

			//Responsive
			window.onresize = function(event) {
				plot1.replot();
			}
			$.unblockUI();

		}, function errorCallback(response) {
			console.error("El error es: " + response.data);
			$.unblockUI();
		});	
	}
    */
});