<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>

<link rel="stylesheet" type="text/css" href="<c:url value="/resources/webapp/js/bower_components/jqplot/jquery.jqplot.min.js"/>" />
<link href="<c:url value="/resources/webapp/js/datepicker/datepicker.css"/>" rel="stylesheet" />

<div ng-app="EstadisticasInfomovilApp" ng-controller="EstadisticasCtrl as estadistica" 
		ng-init="estadistica.fechaInicial='${today}'; estadistica.fechaFinal='${today}'">

	<label for="fechaInicial">Fecha Inicial</label>
	<input type="text" ng-model="estadistica.fechaInicial" class="datepicker">
	
	<label for="fechaFinal">Fecha Final</label>
	<input type="text" ng-model="estadistica.fechaFinal" class="datepicker">

	<button ng-click="estadistica.generarGrafica('personalizado')">Grafica Personalizada</button>
	
	<button ng-click="estadistica.generarGrafica('1semana')">1 Semana</button>
	<button ng-click="estadistica.generarGrafica('1mes')">1 Mes</button>
	<button ng-click="estadistica.generarGrafica('3meses')">3 Meses</button>
	<button ng-click="estadistica.generarGrafica('6meses')">6 Meses</button>
	<button ng-click="estadistica.generarGrafica('1anio')">1 Año</button>
	
	<br/><br/>

	<div id="chart"></div>
	
</div>

<script src="<c:url value="/resources/webapp/js/jquery.min.js"/>"></script>
<script src="<c:url value="/resources/webapp/js/datepicker/jquery.ui.core.js"/>"></script>
<script src="<c:url value="/resources/webapp/js/jquery.blockUI.js"/>"></script>
<script src	="<c:url value="/resources/webapp/js/datepicker/jquery.ui.datepicker.js"/>"></script>
<script src="<c:url value="/resources/webapp/js/angular.min.js"/>"></script>
<script src="<c:url value="/resources/webapp/js/bower_components/jqplot/jquery.jqplot.min.js"/>"></script>
<script src="<c:url value="/resources/webapp/js/bower_components/jqplot/plugins/jqplot.highlighter.min.js"/>"></script>
<script src="<c:url value="/resources/webapp/js/bower_components/jqplot/plugins/jqplot.dateAxisRenderer.min.js"/>"></script>
<script src="<c:url value="/resources/webapp/js/bower_components/jqplot/plugins/jqplot.cursor.min.js"/>"></script>
<script src="<c:url value="/resources/webapp/js/bower_components/jqplot/plugins/jqplot.canvasTextRenderer.min.js"/>"></script>
<script src="<c:url value="/resources/webapp/js/bower_components/jqplot/plugins/jqplot.canvasAxisTickRenderer.min.js"/>"></script>
<script src="<c:url value="/resources/js/webapp/util.js"/>"></script>
<script src="<c:url value="/resources/js/webapp/estadisticas.js"/>"></script>

