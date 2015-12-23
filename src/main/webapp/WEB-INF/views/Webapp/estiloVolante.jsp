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

<link
	href="<c:url value="/resources/webapp/js/datepicker/datepicker.css"/>"
	rel="stylesheet" />
<body role="document" data-spy="scroll" data-target=".navbar"
	data-offset="75" id="page-top"
	ng-controller="EstiloVolanteController as estiloVolanteCtrl">

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
							Mi Página Web
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
					<h3 class="text-left textWhite navEditor">Elige el estilo <span class="hidden-xs">de
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
		<div class="containerExt">
			<p>Haz clic en el estilo que te agrade</p>

			<!-- Ficha template -->
			<div class="col-xs-12 col-sm-4" style="margin-top:10px;">
				<a href="#" class="ev_std" style="display:block">
				<span class="ev_std_chk text-center"><img alt="Infomovil"
					src="<c:url value="/resources/webapp/images/fa-activeTemp.png"/>" />
					Aplicar estilo</span>
				<span class="bgDarkTrans" style="display:block">
					<span style="padding: 10px; display:block">
						<img class="img-responsiveTemp img-thumbnail" alt="Infomovil"
							src="https://s3-us-west-2.amazonaws.com/promo.mobileinfo.io/templates/promo8/promo8.png" />
					</span>
					<span class="display:block">
						<span class="textWhite col-xs-12 col-sm-12 " style="padding: 10px; display:block">Titulo 1</span>
						
					</span>
					<span class="clear " style="display:block"></span>
					</span>
					</a>
			</div>
			<!-- Ficha template -->
			

<!-- Ficha template -->
			<div class="col-xs-12 col-sm-4" style="margin-top:10px;">
			<a href="#" class="ev_std">
			<span class="ev_std_chkSel text-center"><img  alt="Infomovil"
							src="<c:url value="/resources/webapp/images/fa-activeTemp.png"/>" /></span>
			<span class="bgDarkTrans" style="display:block">
				<span style="padding: 10px; display:block">
					<img class="img-responsiveTemp img-thumbnail ev_img_chkSel" alt="Infomovil"
						src="https://s3-us-west-2.amazonaws.com/promo.mobileinfo.io/templates/promo8/promo8.png" />
				</span>
				<span class="display:block">
					<span class="textWhite col-xs-12 col-sm-12 " style="padding: 10px; display:block">Titulo 1</span>
					
				</span>
				<span class="clear " style="display:block"></span>
				</span>
				</a>
			</div>
			<!-- Ficha template -->
			
			
		
			
			
				
			


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
	<script
		src="<c:url value="/resources/webapp/js/datepicker/jquery-1.10.2.js"/>"></script>
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
	<script
		src="<c:url value="/resources/webapp/js/datepicker/jquery.ui.core.js"/>"></script>
	<script
		src="<c:url value="/resources/webapp/js/datepicker/jquery.ui.datepicker.js"/>"></script>
	<script src="<c:url value="/resources/js/webapp/promociones.js"/>"></script>
	<script src="<c:url value="/resources/js/webapp/volantes.js"/>"></script>
	<script
		src="<c:url value="/resources/js/webapp/InfomovilServices/mensajesService.js"/>"></script>
	<script
		src="<c:url value="/resources/js/webapp/InfomovilServices/volantesService.js"/>"></script>
	<script src="<c:url value="/resources/js/webapp/mapaAngular.js"/>"></script>

	<script>
		$(document).ready(function() {
			generarSliderPromo();
		});
	</script>


	<tiles:insertDefinition name="modalGen">
		<tiles:putAttribute name="idModal" value="myModalPromo" />
		<tiles:putAttribute name="tamanioModal"
			value='"modal-dialog modal-lg"' />
		<c:set var="fragmentName" value="modalPromoVP" scope="request" />
	</tiles:insertDefinition>
	<tiles:insertDefinition name="modalGen">
		<tiles:putAttribute name="idModal" value="myModalPromoImprimir" />
		<tiles:putAttribute name="tamanioModal"
			value='"modal-dialog modal-lg"' />
		<c:set var="fragmentName" value="modalPromoVPI" scope="request" />
	</tiles:insertDefinition>
	<tiles:insertDefinition name="modalGen">
		<tiles:putAttribute name="idModal" value="myModalPromoShare" />
		<tiles:putAttribute name="tamanioModal"
			value='"modal-dialog modal-md"' />
		<c:set var="fragmentName" value="modalPromoShare" scope="request" />
		<c:set var="urlPromo" value="${urlPromocion}" scope="session" />
	</tiles:insertDefinition>

	<tiles:insertDefinition name="modalGen">
		<tiles:putAttribute name="idModal" value="myModalPromoExito" />
		<tiles:putAttribute name="tamanioModal"
			value='"modal-dialog modal-md"' />
		<c:set var="fragmentName" value="modalPromoExito" scope="request" />
	</tiles:insertDefinition>

	<tiles:insertDefinition name="modalGen">
		<tiles:putAttribute name="idModal" value="myModalPromoFallo" />
		<tiles:putAttribute name="tamanioModal"
			value='"modal-dialog modal-md"' />
		<c:set var="fragmentName" value="modalPromoFallo" scope="request" />
	</tiles:insertDefinition>
	<c:set var="urlPromo" value="${ urlPromocion }" scope="session" />

	<!--MODAL MAPA-->
	<tiles:insertDefinition name="modalMapFragment">
		<tiles:putAttribute name="idModal" value="myModalMaps" />
		<tiles:putAttribute name="tamanioModal"
			value='"modal-dialog modal-lg"' />
		<tiles:putAttribute name="tipo" value='volante' />
	</tiles:insertDefinition>
	<!--/MODAL MAPA-->

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
