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
			<div class="col-xs-12 col-sm-6 text-center " >
			
			<div id="paginaWeb" style="margin:30% 0 0 0; padding:30%;" class="bgDarkTrans">
			<p class="textWhite">CREA UNA <br/><strong>PÁGINA WEB</strong></p>
			<button type="button" ng-click="multiproductoCtrl.paginaWeb()" class="btn btn-outlineGreen textWhite navEditorLato">Comienza</button>
			<div class="textWhite">Crea una página web que muestra tu idea elegantemente</div>
			</div>
			
			</div>
			
			<div class="col-xs-12 col-sm-6 text-center ">
			<div id="volante" style="margin:30% 0 0 0; padding:30%;" class="bgDarkTrans"> 
			<p class="textWhite">CREA UN <br/><strong>VOLANTE MÓVIL</strong></p>
			<button type="button" ng-click="multiproductoCtrl.volanteWeb()" class="btn btn-outlineGreen textWhite navEditorLato">Comienza</button>
			<div class="textWhite">Crea un volante móvil para promover tus promociones</div>
			
			</div></div>
	
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