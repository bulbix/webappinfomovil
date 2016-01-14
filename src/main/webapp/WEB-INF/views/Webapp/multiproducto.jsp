<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!doctype html>
<html lang="es" ng-app="InfomovilAppMultiproducto">

<tiles:insertDefinition name="headEditorSitio">
	<tiles:putAttribute name="template" value="CoverpageMultiproducto" />
</tiles:insertDefinition>

<body role="document" data-spy="scroll" data-target=".navbar" data-offset="75" id="page-top" ng-controller="MultiproductoController as multiproductoCtrl">

	<div class="container" ng-controller="MultiproductoController as multiproductoCtrl">

		<div class="col-xs-12 mp_mar40tp animated fadeIn">
			<img width="40" height="" alt="Infomovil" class="" src="<c:url value="/resources/webapp/images/apple-touch-icon-57x57.png"/>" />

			<img width="" height="40" alt="Infomovil" class="" src="<c:url value="/resources/webapp/images/logotipoInfomovil.png"/>" />
		</div>
		<div class="col-xs-12 col-sm-6 text-center ">
			<div id="volante" class="mp_mar40tp bgGreenTrans borderRad animated fadeIn">
				<div class="hidden-xs">
					<img alt="Infomovil" class="img-responsive" src="<c:url value="/resources/webapp/images/mp_volante.png"/>" />
				</div>


				<div class="col-xs-12">
					<h3 class="textWhite fw100">CREA UN</h3>
					<h3 class="textWhite fw700 mp_-m10">VOLANTE<span class=""> MÓVIL</span></h3>
				</div>
				<div class="divider"></div>
				<img width="" height="" alt="Infomovil" src="<c:url value="/resources/webapp/images/mp_line.png"/>" />
				<div class="divider"></div>
				<p class="textWhite mp_notes hidden-xs">Y utiliza los smartphones como un canal de promoción.</p>
				<div class="clear"></div>
				<div class="divider hidden-xs"></div>
				<button type="button" ng-click="multiproductoCtrl.volanteWeb()" class="btn btn-outlineBlack textWhite navEditorLato">
					<strong>Comienza</strong>
				</button>
				<div class="textWhite mp_notesPie">Nuestro Plan Básico, es gratis y siempre lo será.</div>

			</div>
		</div>


		<div class="col-xs-12 col-sm-6 text-center">

			<div id="paginaWeb" class="mp_mar40tp bgPurpleTrans borderRad animated fadeIn">
				<div class="hidden-xs">
					<img height="" alt="Infomovil" class="img-responsive" src="<c:url value="/resources/webapp/images/mp_web.png"/>" />
				</div>
				<div class="col-xs-12">
					<h3 class="textWhite fw100" >CREA UNA</h3>
					<h3 class="textWhite fw700 mp_-m10">PÁGINA WEB</h3>
				</div>
				<div class="divider"></div>
				<img width="" height="" alt="Infomovil" src="<c:url value="/resources/webapp/images/mp_line.png"/>" />
				<div class="divider"></div>
				<p class="textWhite mp_notes hidden-xs">Y obtén una presencia e identidad digital para tu negocio <span class="hidden-sm"> o proyecto</span></p>
				<div class="clear"></div>
				<div class="divider hidden-xs"></div>
				<button type="button" ng-click="multiproductoCtrl.paginaWeb()" class="btn btn-outlineBlack textWhite navEditorLato">
					<strong>Comienza</strong>
				</button>
				<div class="textWhite mp_notesPie" >Nuestro Plan Básico, es gratis y siempre lo será.</div>
			</div>

		</div>

	</div>

	<script src="<c:url value="/resources/webapp/js/jquery.min.js"/>"></script>
	<script src="<c:url value="/resources/webapp/js/angular.min.js"/>"></script>
	<script src="<c:url value="/resources/webapp/js/bootstrap.js"/>"></script>
	<script src="<c:url value="/resources/webapp/js/bootstrap-dialog.min.js"/>"></script>
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
	<script type="text/javascript">
		var getUrlParameter = function getUrlParameter(sParam) {
		    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
		        sURLVariables = sPageURL.split('&'),
		        sParameterName,
		        i;
		
		    for (i = 0; i < sURLVariables.length; i++) {
		        sParameterName = sURLVariables[i].split('=');
		
		        if (sParameterName[0] === sParam) {
		            return sParameterName[1] === undefined ? true : sParameterName[1];
		        }
		    }
		};
		var getParam = getUrlParameter('leng');
		var ext = location.search.split('leng=')[1];
		var ln = window.navigator.language||navigator.browserLanguage;
		var getLeng = ln.toLowerCase();
		var url =  window.location.href;
		var x = $(location).attr('<search>');
		console.log('Debe ser: ' + url +"?leng=en");
		if(getLeng == 'en-us' && getParam != 'en')
			window.location.href = url +"?leng=en";
		console.log("El valor del idioma es: " + getLeng + " y el leng="+ getParam);
	</script>
</body>
</html>