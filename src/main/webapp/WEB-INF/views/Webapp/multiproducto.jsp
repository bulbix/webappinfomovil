<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!doctype html>
<html lang="es" ng-app = "InfomovilAppMultiproducto">

<tiles:insertDefinition name="headEditorSitio">
	<tiles:putAttribute name="template" value="${ template }" />
</tiles:insertDefinition>

<body role="document" data-spy="scroll" data-target=".navbar"
	data-offset="75" id="page-top"  ng-controller="MultiproductoController as multiproductoCtrl">

	<div ng-controller="MultiproductoController as multiproductoCtrl">
			<div id="paginaWeb">
			<h3>Crea una PÁGINA WEB</h3>
			<button type="button" ng-click="multiproductoCtrl.paginaWeb()">Comienza</button>
			</div>
			
			<div id="volante"> 
			<h3>Crea un VOLANTE MÓVIL</h3>
			<button type="button" ng-click="multiproductoCtrl.volanteWeb()">Comienza</button>
			</div>
	
	</div>

	<script src="<c:url value="/resources/webapp/js/jquery.min.js"/>"></script>
	<script src="<c:url value="/resources/webapp/js/angular.min.js"/>"></script>
	<script src="<c:url value="/resources/webapp/js/bootstrap.js"/>"></script>
	<script	src="<c:url value="/resources/webapp/js/bootstrap-dialog.min.js"/>"></script>
	<script src="<c:url value="/resources/webapp/js/jquery.numeric.js"/>"></script>
	<script src="<c:url value="/resources/webapp/js/jquery.blockUI.js"/>"></script>
	<script src="<c:url value="/resources/js/webapp/multiproducto.js"/>"></script>
	<script src="<c:url value="/resources/js/webapp/InfomovilServices/mensajesService.js"/>"></script>

	<script>
			<c:choose> 
				<c:when test="${sessionScope.canalUsuario == 'BAZ'}">
					$("#logoBAZ").css("display", "block");
					$("#idRegBAZ").css("display", "block");			
					$("#logoGral").css("display", "none");					
				</c:when>
				<c:otherwise>
					$("#logoBAZ").css("display", "none");
					$("#idRegBAZ").css("display", "none");	
					$("#logoGral").css("display", "block");	
				</c:otherwise>
			</c:choose>
		</script>
	</body>
</html>