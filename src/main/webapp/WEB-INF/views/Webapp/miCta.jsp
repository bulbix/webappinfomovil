<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!doctype html>
<html lang="es">

<tiles:insertDefinition name="headEditorSitio">
	<tiles:putAttribute name="template" value="${ template }" />
</tiles:insertDefinition>
<body role="document" data-spy="scroll" data-target=".navbar"
	data-offset="75" id="page-top" >
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
				<span class="navbar-brand" id="logoBAZ" style="display: none;"><img
					src="<c:url value="/resources/webapp/images/logo_baz.png"/>"
					width="103" height="47" alt="Infomovil" /></span>
				<!-- /LOGO BANCO AZTECA - BAZ-->

				<!-- LOGO INFOMOVIL - REGISTRO GENERAL-->
				<span class="navbar-brand" id="logoGral" style="display: none;"><img
					src="<c:url value="/resources/webapp/images/apple-touch-icon-57x57.png"/>"
					width="50" height="50" alt="Infomovil" /></span> <span
					class="marLeft navEditor ${colorTexto}">Modo edición</span>
				<!-- /LOGO INFOMOVIL - REGISTRO GENERAL-->

			</div>
			<div id="navbar" class="navbar-collapse collapse text-right">
				<ul class="nav navbar-nav navbar-right">							
							<li><a href="<c:url value="/infomovil/editarSitio"></c:url>" class="smoothScroll ${colorTexto}"><img
							width="20" height="20" alt="Infomovil"
							src="<c:url value="/resources/webapp/images/fa-back${ extensionImg }.png"/>" />
							Editor </a></li>
					<li><a href="<c:url value="/logout"></c:url>"
						class="smoothScroll ${colorTexto}"><img width="20" height="20"
							alt="Infomovil"
							src="<c:url value="/resources/webapp/images/fa-sign-out${ extensionImg }.png"/>" />
							Cerrar <span class="hidden-sm hidden-md">sesión </span> </a></li>

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
	<div class="seccTop bgBlack">
	<div class="container">
	
	<div class="col-xs-12 col-sm-6 hidden-xs"><h3 class="text-left textWhite" style="font-weight: 300;">Mi
				Cuenta</h3></div>
		<div class="col-xs-12 col-sm-6">
			<div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 reset text-right pull-right">
				Nombre ${usuarioLogueado}<img width="30" height="30" alt="Infomovil"
					src="<c:url value="/resources/webapp/images/fa-user.png"/>" />  <br/> mail@mail.com <img width="25" height="25" alt="Infomovil"
					src="<c:url value="/resources/webapp/images/fa-mail.png"/>" /> 
					<div class="clear"></div>
					<a href="<c:url value="/infomovil/editarSitio"></c:url>"
					class="col-xs-4 col-sm-3 col-md-3 col-lg-3 btn btn-default btn-outline navEditor pull-right hidden-sm hidden-md hidden-lg">

					<span id="idOpcionMasCont"><img width="20" height="20"
						alt="Infomovil"
						src="<c:url value="/resources/webapp/images/fa-back.png"/>" /> Editor </span>
				</a>
			</div>			
		</div>
	</div>
	</div>
	
	<!-- /Botón Nuevo Estilo -->
	
	<div class="">
	
		<div class="col-xs-12 col-sm-6 col-sm-offset-3 col-md-6 col-md-offset-3 col-lg-6 col-lg-offset-3">
		
			<h3 class="text-left textWhite" style="font-weight: 300; margin:20px 0 0 0;">Mis
				productos</h3>
			<hr />
			<!--Theme showcase -->
			<div class="theme-showcaseApp" role="main" id="intro">
				<!-- Main jumbotron for a primary marketing message or call to action -->
				<div class="">
					<!-- page header -->
					<div class="page-header text-center">
						<strong></strong>
						<div>
						<!-- Producto  tel-->	
						<c:if test="${tieneProductoTel =='SI'}">				
							<tiles:insertDefinition name="prodGen">
								<tiles:putAttribute name="productoTitulo" value="Dominio" />
								<tiles:putAttribute name="claseProductos" value="${claseProductos}"/>
								<c:set var="productoNombre" value="dominioTel" scope="request" />
								<c:set var="productoActivo" value="Activo" scope="request" />
								<c:set var="datoUrl" value="${urlDominio}" scope="request" />
								<c:set var="fechaInicial" value="${fechaInicio}" scope="request" />
								<c:set var="fechaFin" value="${fechaFin}" scope="request" />
								<c:set var="imgActivo" value="${imgActivo}" scope="request" />
								<c:set var="displayButton" value="${displayButton}" scope="request" />
							</tiles:insertDefinition>	
						</c:if>				
						<!--/ Producto -->

							<!-- Producto -->
							<div class="col-xs-12 col-sm-6 col-md-6 col-lg-6" 
								style="display: block;">
								<!-- CABECERA -->
								<div
									class="prodHeader">
									<h5 class="prodTitle">Plan Pro</h5>
								</div>
								<!-- /CABECERA -->
								<!-- CUERPO -->
								<div
									class="prodBody">
									<div class="col-xs-12 text-center prodPadd10" >
										<p class="textGray">12 meses</p>
										<p class="textGray">
											<img width="25" height="25" alt="Infomovil"
												src="<c:url value="/resources/webapp/images/btn_inactive.png"/>" />
											Inactivo
										</p>
									</div>
									<div class="col-xs-12 text-center">
										<span>Vigencia del:<br/> <strong>dd/mm/aa</strong> <br/>a <br/><strong>dd/mm/aa</strong></span>
									</div>
									<div class="clearfix"></div>
									<div class="divider"></div>
									<hr />
									
									
									<div class="col-xs-12 text-center">
									<p class="reset"><select class="col-xs-12"><option>1 mes</option><option>12 meses</option></select></p>
								<div class="clearfix"></div>
									<div class="divider"></div>
										<h3 class="prodPrice">
											<sup>$</sup><span><strong>50.00</strong><span
												class="prodNotes"> mxn</span></span>
										</h3>
<!-- 										<span style="font-size:.9em;"><em>Pago anual</em></span> -->
									</div>
									<div class="clearfix"></div>
									<div class="divider"></div>
									<div class="col-xs-12 text-center">
										<a href="#" data-toggle="modal" data-target="#myModalConfDatos"
											class="btn btn-default btn-outlineGreen text-center textWhite">Renueva
											ahora</a>
									</div>
									<div class="clearfix"></div>
								</div>
								<!--/ CUERPO -->
								<!-- PIE -->
								<div class="prodFooter"></div>
								<!-- /PIE -->
							</div>
							<!--/ Producto -->
							
							
							<!-- Producto -->
							<div class="col-xs-12 col-sm-6 col-sm-offset-3 col-md-6 col-lg-6" 
								style="display: block;">
								<!-- CABECERA -->
								<div
									class="prodHeader">
									<h5 class="prodTitle">&nbsp;</h5>
								</div>
								<!-- /CABECERA -->
								<!-- CUERPO -->
								<div
									class="prodBody">
									<div class="col-xs-12 text-center prodPadd10" >
										<p class="textGray">Actualmente no cuentas con productos</p>
											<hr />
									</div>
									<div class="col-xs-12 text-center">
										<a href="<c:url value="/infomovil/editarSitio"></c:url>" 
											class="btn btn-default btn-outlineGreen text-center textWhite"><img width="20" height="20"
							alt="Infomovil"
							src="<c:url value="/resources/webapp/images/fa-pencil.png"/>" /> Continuar editando</a>
									</div>
									<div class="clearfix"></div>
									<div class="divider"></div>								
									<div class="clearfix"></div>
								</div>
								<!--/ CUERPO -->
								<!-- PIE -->
								<div class="prodFooter"></div>
								<!-- /PIE -->
							</div>
							<div><a href="#" data-toggle="modal" data-target="#myModalCompraExitosa">.</a></div>
							
							<div><a href="#" data-toggle="modal" data-target="#myModalCompraFallida" >..</a></div>
							
							
							<div><a href="<c:url value="/infomovil/compraExitosa"></c:url>" >....</a></div>
							
							<div><a href="<c:url value="/infomovil/compraFallida"></c:url>"  >........</a></div>

						</div>
					</div>
					<!-- /page header -->
					<br /> <br />
				</div>
			</div>
			<!--/Theme showcase -->
		</div>
	</div>
	<!--Footer-->
	<footer class="footer bgBlack">
		<c:if test="${sitioWeb =='SIN_PUBLICAR'}">
			<tiles:insertDefinition name="formPublicar">
				<tiles:putAttribute name="urlEjemploSitio"
					value="${ urlEjemploSitio }" />
				<tiles:putAttribute name="visibleRecurso"
					value="${ visibleRecurso }" />
				<tiles:putAttribute name="visibleTel" value="${ visibleTel }" />
			</tiles:insertDefinition>
		</c:if>
	</footer>

	<!--/Footer-->
	<!--MODAL COMPRA EXITOSA-->
	<tiles:insertDefinition name="modalGen">
		<tiles:putAttribute name="idModal" value="myModalCompraExitosa" />
		<tiles:putAttribute name="tamanioModal"
			value='"modal-dialog modal-md"' />
		<c:set var="fragmentName" value="modalCompraExito" scope="request" />
	</tiles:insertDefinition>
	<!--/MODAL COMPRA EXITOSA-->
	<!--MODAL COMPRA EXITOSA-->
	<tiles:insertDefinition name="modalGen">
		<tiles:putAttribute name="idModal" value="myModalCompraFallida" />
		<tiles:putAttribute name="tamanioModal"
			value='"modal-dialog modal-md"' />
		<c:set var="fragmentName" value="modalCompraFallo" scope="request" />
	</tiles:insertDefinition>
	<!--/MODAL COMPRA EXITOSA-->
	
	<!--MODAL TEMPLATES-->
	<div id="modalTemplates"></div>
	<!--/MODAL TEMPLATES-->

	<!--MODAL CONFIRMACIÓN DATOS-->
	<tiles:insertDefinition name="modalGen">
		<tiles:putAttribute name="idModal" value="myModalConfDatos" />
		<tiles:putAttribute name="tamanioModal"
			value='"modal-dialog modal-md"' />
		<c:set var="fragmentName" value="modalConfDatos" scope="request" />
	</tiles:insertDefinition>
	<!--/MODAL CONFIRMACIÓN DATOS-->
	<!-- Bootstrap core JavaScript
	    ================================================== -->
	<!-- Placed at the end of the document so the pages load faster -->
	<script src="<c:url value="/resources/webapp/js/jquery.min.js"/>"></script>
	<script src="<c:url value="/resources/webapp/js/bootstrap.js"/>"></script>
	<script src="<c:url value="/resources/webapp/js/docs.min.js"/>"></script>
	<script src="<c:url value="/resources/webapp/js/smoothscroll.js"/>"></script>
	<script src="<c:url value="/resources/webapp/js/ie10-viewport-bug-workaround.js"/>"></script>
	<!-- bxSlider Javascript file -->
	<script	src="<c:url value="/resources/webapp/js/jquery.bxslider.min.js"/>"></script>
	<script	src="<c:url value="/resources/webapp/js/bootstrap-dialog.min.js"/>"></script>
	<script src="<c:url value="/resources/webapp/js/jquery.numeric.js"/>"></script>
	<script src="<c:url value="/resources/webapp/js/jquery.blockUI.js"/>"></script>
	<script src="<c:url value="/resources/js/webapp/paypal.js"/>"></script>
	<script src="<c:url value="/resources/webapp/js/si.files.js"/>"></script>

</body>
</html>
