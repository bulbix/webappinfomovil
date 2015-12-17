<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>

<link rel="stylesheet" type="text/css" href="<c:url value="/resources/webapp/js/bower_components/jqplot/jquery.jqplot.css"/>" />
<link href="<c:url value="/resources/webapp/js/datepicker/datepicker.css"/>" rel="stylesheet" />

<tiles:insertDefinition name="headEditorSitio">
	<tiles:putAttribute name="template" value="${sessionScope.plantillaUsuario}" />
</tiles:insertDefinition>


<div class="">	
		<div class="">
			<!--Theme showcase -->
			<div class="theme-showcaseApp" role="main" id="intro">
				<!-- Main jumbotron for a primary marketing message or call to action -->
				<div class="container">
					<!-- page header -->
					<div class="page-header text-center navEditorSFl">
					<h3 class="text-left textBlack" style="font-weight: 300; margin:5px 0 0 0;">Mis Reportes - Visitas de mi página web</h3>
					
					<hr/>
					<div>
					
					
									
<div ng-app="EstadisticasInfomovilApp" ng-controller="EstadisticasCtrl as estadistica" 
		ng-init="estadistica.init('${fechaInicial}','${fechaFinal}')" style="margin:auto; width:100%;height:100%">
		

	<div class="col-xs-12 reset">
	 
	 <div class="col-xs-4 col-sm-2" style="padding-top:10px;">
	<button ng-click="estadistica.generarGrafica('1semana')" class="btn  btn-outlineGreen">1 S<span class="hidden-xs">emana</span></button></div>

	 <c:choose>
    <c:when test="${sessionScope.planProSession == 'SI' }">
    	<div class="col-xs-4 col-sm-2" style="padding-top:10px;">
        <button ng-click="estadistica.generarGrafica('1mes')" class="btn  btn-outlineGreen">1 M<span class="hidden-xs">es</span></button></div>
		 <div class="col-xs-4 col-sm-2" style="padding-top:10px;">
		<button ng-click="estadistica.generarGrafica('3meses')" class="btn  btn-outlineGreen">3 M<span class="hidden-xs">eses</span></button></div>
		 <div class="col-xs-4 col-sm-2" style="padding-top:10px;">
		<button ng-click="estadistica.generarGrafica('6meses')" class="btn  btn-outlineGreen">6 M<span class="hidden-xs">eses</span></button></div>
    </c:when>    
    <c:otherwise>
       <div class="col-xs-4 col-sm-2" style="padding-top:10px;">
        <button ng-click="estadistica.generarGrafica('sinplanpro')" class="btn  btn-outlineDisable" >1 M<span class="hidden-xs">es</span></button></div>
		 <div class="col-xs-4 col-sm-2" style="padding-top:10px;">
		<button ng-click="estadistica.generarGrafica('sinplanpro')" class="btn  btn-outlineDisable" >3 M<span class="hidden-xs">eses</span></button></div>
		 <div class="col-xs-4 col-sm-2" style="padding-top:10px;">
		<button ng-click="estadistica.generarGrafica('sinplanpro')" class="btn  btn-outlineDisable" >6 M<span class="hidden-xs">eses</span></button></div>
    </c:otherwise>
</c:choose>
	 

	 <div class="col-xs-4 col-sm-2" style="padding-top:10px;">
	<button ng-click="estadistica.generarGrafica('1anio')" class="btn  btn-outlineGreen">1 A<span class="hidden-xs">ño</span></button>
	</div>
	 <div class="col-xs-4 col-sm-2" style="padding-top:10px;">
	
	  
   	<c:choose>
		<c:when test="${sessionScope.planProSession == 'SI' }">
		    <button class="btn  btn-outlineGreen" ng-click="estadistica.ngclick()">+ <span class="hidden-xs">Periodo</span></button>
			</div>
			</div>
		  	<div id="personalizado" >
	    </c:when>    
	    <c:otherwise>
		    <button class="btn  btn-outlineDisable" disabled>+ <span class="hidden-xs">Periodo</span></button>
			</div>
			</div>
		    <div id="personalizado">
	    </c:otherwise>
	</c:choose>
	
  <div class="clearfix"></div>
  <div class="divider"></div>
 
    <div id="dinamicoPersonalizado">
     <hr/>
		<div class="col-xs-12 text-left textBlack">Reporte personalizado</div>
		<div class="col-xs-12 reset">
			<div class="col-xs-12 col-sm-5"><div class="form-group" style="padding-bottom:10px;">
				 <label class="sr-only" for="fechaInicial">Del</label>
				 <div class="input-group">
				 	<div class="input-group-addon">Del</div>
				      <input type="text" ng-model="estadistica.fechaInicial" class="form-control datepicker" >
				 </div>
		    </div>
	    </div>
		<div class="col-xs-12 col-sm-5">
			<div class="form-group" style="padding-bottom:10px;">
				 <label class="sr-only" for="fechaFinal">al</label>
				 <div class="input-group">
				      <div class="input-group-addon">al</div>
				      <input type="text" ng-model="estadistica.fechaFinal" class="form-control datepicker" >
				 </div>
		    </div>
		</div>
		<div class="col-xs-12 col-sm-2">
			<button type="submit" class="btn btn-purple txtBtnEditor" ng-click="estadistica.generarGrafica('personalizado')">Generar</button>
		</div>
    </div> <!-- Fin del dinamico personalizado -->
    
 </div>
 </div>
  <div class="clearfix"></div>
  
  <hr/>
  	  <h3 class="col-xs-12 textBlack"><strong id="tituloReporte">Reporte 1 semana</strong></h3> 
 	  <div class="col-xs-12 textBlack"><strong id="numVisitasPagina"></strong></div> 
 	  <div class="col-xs-12 textBlack"><strong id="numPersonasUnicas"></strong> </div> 
 
  <hr/>

  <!-- se ocultará la gráfica :( -->
  <div class="clearfix"></div>
   <div class="divider"></div>
 	<!--  <div id="chart" ></div>  CON ESTO APARECE LA GRAFICA --> 
	
</div>
					
					
					</div>
					</div>
					</div>
					</div>
					</div>
				
					
	
<script src="<c:url value="/resources/webapp/js/jquery.min.js"/>"></script>
<script src="<c:url value="/resources/webapp/js/datepicker/jquery.ui.core.js"/>"></script>
<script src="<c:url value="/resources/webapp/js/jquery.blockUI.js"/>"></script>
<script src	="<c:url value="/resources/webapp/js/datepicker/jquery.ui.datepicker.js"/>"></script>
<script src="<c:url value="/resources/webapp/js/angular.min.js"/>"></script>
<script src="<c:url value="/resources/webapp/js/bower_components/jqplot/jquery.jqplot.min.js"/>"></script>
<script src="<c:url value="/resources/webapp/js/bower_components/jqplot/plugins/jqplot.dateAxisRenderer.min.js"/>"></script>
<script src="<c:url value="/resources/webapp/js/bower_components/jqplot/plugins/jqplot.logAxisRenderer.min.js"/>"></script>
<script src="<c:url value="/resources/webapp/js/bower_components/jqplot/plugins/jqplot.canvasTextRenderer.min.js"/>"></script>
<script src="<c:url value="/resources/webapp/js/bower_components/jqplot/plugins/jqplot.canvasAxisTickRenderer.min.js"/>"></script>
<script src="<c:url value="/resources/webapp/js/bower_components/jqplot/plugins/jqplot.highlighter.min.js"/>"></script>
<script src="<c:url value="/resources/webapp/js/bower_components/jqplot/plugins/jqplot.cursor.min.js"/>"></script>
<script src="<c:url value="/resources/webapp/js/bootstrap.js"/>"></script>
<script src="<c:url value="/resources/webapp/js/bootstrap-dialog.min.js"/>"></script>
<script src="<c:url value="/resources/js/webapp/estadisticas.js"/>"></script>
<script src="<c:url value="/resources/js/webapp/InfomovilServices/mensajesService.js"/>"></script>
<script src="<c:url value="/resources/js/webapp/util.js"/>"></script>


