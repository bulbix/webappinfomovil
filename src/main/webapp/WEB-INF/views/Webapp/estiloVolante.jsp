<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!doctype html>
<html lang="es" ng-app="InfomovilEstiloVolantes">

<meta HTTP-EQUIV="CACHE-CONTROL" CONTENT="NO-CACHE">
<meta HTTP-EQUIV="PRAGMA" CONTENT="NO-CACHE">

<tiles:insertDefinition name="headEditorSitio">
	<tiles:putAttribute name="template" value="CoverpageMultiproducto" />
</tiles:insertDefinition>

<body role="document" data-spy="scroll" data-target=".navbar"
	data-offset="75" id="page-top">

	<!-- Fixed navbar -->
	<nav class="navbar navbar-${ claseCss } navbar-static-top">
		<div class="container-fluid">
			<div class="navbar-header">
				<button type="button" class="navbar-toggle collapsed"
					data-toggle="collapse" data-target="#navbar" aria-expanded="false"
					aria-controls="navbar">
					<span class="sr-only">Toggle navigation</span> <span
						class="icon-bar"></span> <span class="icon-bar"></span> <span
						class="icon-bar"></span>
				</button>

				<!-- LOGO BANCO AZTECA - BAZ-->
				<span class="navbar-brand" id="logoBAZ" style="display: none;">
					<img src="<c:url value="/resources/webapp/images/logo_baz.png"/>"
					width="103" height="47" alt="Infomovil" />
				</span>
				<!-- /LOGO BANCO AZTECA - BAZ-->

				<!-- LOGO INFOMOVIL - REGISTRO GENERAL-->
				<span class="navbar-brand" id="logoGral" style="display: none;">
					<img
					src="<c:url value="/resources/webapp/images/apple-touch-icon-57x57.png"/>"
					width="50" height="50" alt="Infomovil" />
				</span> <span class="marLeft navEditor ${colorTexto}"
					style="margin-top: 12px;">MIS VOLANTES</span>
				<!-- /LOGO INFOMOVIL - REGISTRO GENERAL-->
			</div>
			<div id="navbar" class="navbar-collapse collapse text-right">
				<ul class="nav navbar-nav navbar-right">

					<li><a href="" class="smoothScroll ${colorTexto}"> <img
							width="20" height="20" alt="Infomovil"
							src="<c:url value="/resources/webapp/images/fa-user${ extensionImg }.png"/>" />
							Mi Cuenta
					</a></li>
					<li><a href="" class="smoothScroll ${colorTexto}"> <img
							width="20" height="20" alt="Infomovil"
							src="<c:url value="/resources/webapp/images/fa-pencil${ extensionImg }.png"/>" />
							Mi Contenido
					</a></li>
					<li><a href="" class="smoothScroll ${colorTexto}"
						ng-click="volantesCtrl.actualizaProducto()"> <img width="20"
							height="20" alt="Infomovil"
							src="<c:url value="/resources/webapp/images/fa-compu${ extensionImg }.png"/>" />
							Mi Página <span class="hidden-sm">Web</span>
					</a></li>
					<li><a href="<c:url value="/logout"></c:url>"
						class="smoothScroll ${colorTexto}"> <img width="20"
							height="20" alt="Infomovil"
							src="<c:url value="/resources/webapp/images/fa-sign-out${ extensionImg }.png"/>" />
							Cerrar <span class="hidden-sm hidden-md">sesión</span>
					</a></li>

					<!--  Mostrar para BAZ -->
					<li class="hidden-xs" id="idRegBAZ" style="display: none;"><a
						href="#" class="smoothScroll"><img width="30" height="30"
							alt="Infomovil"
							src="<c:url value="/resources/webapp/images/apple-touch-icon-57x57.png"/>" /></a>
					</li>
					<!--  /Mostrar para BAZ -->

					<li id="idRegGral" style="display: none" class="hidden-xs"><a
						href="#" class="smoothScroll"> <img width="30" height="30"
							alt="Infomovil"
							src="<c:url value="/resources/webapp/images/apple-touch-icon-57x57.png"/>" /></a>
					</li>
					<!--/ OCULTAR CUÁNDO SEA - REGISTRO GENERAL-->

				</ul>
			</div>
			<!--/.nav-collapse -->
		</div>
	</nav>
	<!-- / Fixed navbar -->

	<!-- Botón Nuevo Estilo -->
	<div>
		<div class="seccTop bgBlack">
			<div class="containerExt">
				<div class="textWhite">
					<h3 class="text-left textWhite navEditor reset">Elige el estilo <span class="hidden-xs">de
						tu volante</span></h3>
						<a href="<c:url value="/infomovil/misPromociones"></c:url>"
							class="btn-default btn-outline navEditor pull-right">
							<span id="idOpcionMasCont"><img width="20" height="20"
							alt="Infomovil" src="<c:url value="/resources/webapp/images/fa-back.png"/>" /> Regresar </span>
						</a>
				</div>
			</div>

		</div>

		<!-- /Botón Nuevo Estilo -->
		<!-- Formulario Promociones -->

		<div class="containerExt" ng-controller="EstiloVolanteController as estiloVolanteCtrl">

		<p style="line-height:.8em;">Haz clic en el estilo que te agrade</p>

			<div ng-repeat="item in estiloVolanteCtrl.plantillas">
			
				<span style="display:none">{{estiloVolanteCtrl.getClasesPlantillas(item)}}</span>
			<!-- Ficha template -->
				<div class="col-xs-12 col-sm-4" style="margin-top:10px;"> 
					<a href="#" class="ev_std" style="display:block" ng-click="estiloVolanteCtrl.actulizaPlantilla(item)">
						<span class="{{estiloVolanteCtrl.claseSpan}}"><img alt="Infomovil"
							src="<c:url value="/resources/webapp/images/fa-activeTemp.png"/>"/>{{estiloVolanteCtrl.textoPlantilla}}</span>
						<span class="bgDarkTrans" style="display:block">
						<span style="padding: 10px; display:block">
							<img class="{{estiloVolanteCtrl.claseImg}}" alt="Infomovil"
								src="https://s3-us-west-2.amazonaws.com/promo.mobileinfo.io/templates/{{item}}/{{item}}.png" />
						</span>
						<span class="display:block">
							<span class="textWhite col-xs-12 col-sm-12 " style="padding: 10px; display:block">{{estiloVolanteCtrl.nombrePlantillas[$index]}}</span>
							
						</span>
						<span class="clear " style="display:block"></span>
						</span>
						</a>
				</div>
			</div>
			<!-- Ficha template -->
				
			<div class="clear"></div>
			<div style="height:20px; width:100%;"></div>

		</div>
		<!--/Theme showcase -->

		<!--Footer-->
		<footer class="footer bgBlack">
			<div class="dividerSmall"></div>
			<div class="clearfix"></div>

		</footer>


	</div>

	<!-- Bootstrap core JavaScript
		    ================================================== -->
	<!-- Placed at the end of the document so the pages load faster -->

	<script src="<c:url value="/resources/webapp/js/jquery.min.js"/>"></script>
	<script src="<c:url value="/resources/webapp/js/angular.min.js"/>"></script>
	<script src="<c:url value="/resources/webapp/js/bootstrap.js"/>"></script>
	<script src="<c:url value="/resources/webapp/js/docs.min.js"/>"></script>
	<script src="<c:url value="/resources/webapp/js/smoothscroll.js"/>"></script>
	<script
		src="<c:url value="/resources/webapp/js/ie10-viewport-bug-workaround.js"/>"></script>
	<!-- bxSlider Javascript file -->
	<script
		src="<c:url value="/resources/webapp/js/jquery.bxslider.min.js"/>"></script>
	<script
		src="<c:url value="/resources/webapp/js/bootstrap-dialog.min.js"/>"></script>
	<script src="<c:url value="/resources/webapp/js/jquery.numeric.js"/>"></script>
	<script src="<c:url value="/resources/webapp/js/jquery.blockUI.js"/>"></script>
	<script src="<c:url value="/resources/js/webapp/util.js"/>"></script>
	<script src="<c:url value="/resources/js/webapp/estiloVolante.js"/>"></script>
	<script src="<c:url value="/resources/js/webapp/InfomovilServices/volantesService.js"/>"></script>
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
