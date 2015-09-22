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
					<li><a href="<c:url value="/infomovil/miCuenta"></c:url>" class="smoothScroll ${colorTexto}"><img
							width="20" height="20" alt="Infomovil"
							src="<c:url value="/resources/webapp/images/fa-user${ extensionImg }.png"/>" />
							Mi cuenta </a></li>
							
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
		<div class="col-xs-12 col-sm-6 col-sm-offset-3 col-md-6 col-md-offset-3 col-lg-6 col-lg-offset-3">
			<div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 reset">
				<img width="30" height="30" alt="Infomovil"
					src="<c:url value="/resources/webapp/images/fa-user.png"/>" /> Nombre ${usuarioLogueado}<br/> <img width="25" height="25" alt="Infomovil"
					src="<c:url value="/resources/webapp/images/fa-mail.png"/>" /> mail@mail.com
			</div>
			<div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 reset">

				<a href="<c:url value="/infomovil/editarSitio"></c:url>"
					class="col-xs-6 col-sm-3 col-md-3 col-lg-3 btn btn-default btn-outline navEditor pull-right">

					<span id="idOpcionMasCont"><img width="20" height="20"
						alt="Infomovil"
						src="<c:url value="/resources/webapp/images/fa-back.png"/>" /> </span>
				</a>


			</div>
		</div>
	</div>
	<!-- /Botón Nuevo Estilo -->
	<div class="">
		<div class="col-xs-12 col-sm-6 col-sm-offset-3 col-md-6 col-md-offset-3 col-lg-6 col-lg-offset-3">
			<h3 class="text-left textWhite" style="font-weight: 300;">Mis
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
						
							<!-- Producto -->
							<div class="col-xs-12 col-sm-6 col-md-6 col-lg-6"
								style="display: block; " id="dominioActivo">
								<!-- CABECERA -->
								<div
									style="background: url(<c:url value="/resources/webapp/images/lineDark.png"/>); color: #fff; padding: 2px 0 5px 0; -webkit-border-top-left-radius: 15px; -webkit-border-top-right-radius: 15px; -moz-border-radius-topleft: 15px; -moz-border-radius-topright: 15px; border-top-left-radius: 15px; border-top-right-radius: 15px;">
									<h5 style="font-weight: 300; text-transform: uppercase">Dominio</h5>
								</div>
								<!-- /CABECERA -->
								<!-- CUERPO -->
								<div
									style="display: block; background: #fff; min-height: 100px; height: auto; padding: 10px;">
									<div class="col-xs-12 text-center" style="padding: 10px 0;">
										<p style="color: #2fa399">${sitioWeb}</p>
										<p style="color:#2fa399">
											<img width="25" height="25" alt="Infomovil"
												src="<c:url value="/resources/webapp/images/btn_active.png"/>" />
											Activo
										</p>
									</div>
									<div class="col-xs-12 text-center">
										<span>Vigencia del:<br/> <strong>dd/mm/aa</strong> <br/>a <br/><strong>dd/mm/aa</strong></span>
									</div>
									<div class="clearfix"></div>
									<div class="divider"></div>

									<div class="clearfix"></div>
								</div>
								<!--/ CUERPO -->
								<!-- PIE -->
								<div
									style="-webkit-border-bottom-right-radius: 15px; -webkit-border-bottom-left-radius: 15px; -moz-border-radius-bottomright: 15px; -moz-border-radius-bottomleft: 15px; border-bottom-right-radius: 15px; border-bottom-left-radius: 15px; height: 15px; background: #fff; margin-bottom:30px"></div>
								<!-- /PIE -->
							</div>
							<!--/ Producto -->
							
							<!-- Producto -->
							<div class="col-xs-12 col-sm-6 col-md-6 col-lg-6"
								style="display: block;" id="dominioRenovacion">
								<!-- CABECERA -->
								<div
									style="background: url(<c:url value="/resources/webapp/images/lineDark.png"/>); color: #fff; padding: 2px 0 5px 0; -webkit-border-top-left-radius: 15px; -webkit-border-top-right-radius: 15px; -moz-border-radius-topleft: 15px; -moz-border-radius-topright: 15px; border-top-left-radius: 15px; border-top-right-radius: 15px;">
									<h5 style="font-weight: 300; text-transform: uppercase">Dominio</h5>
								</div>
								<!-- /CABECERA -->
								<!-- CUERPO -->
								<div 
									style="display: block; background: #fff; min-height: 100px; height: auto; padding: 10px;">
									<div class="col-xs-12 text-center" style="padding: 10px 0;">
										<p style="color: #2fa399">${sitioWeb}</p>
										<p style="color: #2fa399">
											<img width="25" height="25" alt="Infomovil"
												src="<c:url value="/resources/webapp/images/btn_active.png"/>" />
											Activo
										</p>
									</div>
									<div class="col-xs-12 text-center">
										<span>Vigencia del:<br/> <strong>dd/mm/aa</strong> <br/>a <br/><strong>dd/mm/aa</strong></span>
									</div>
									<div class="clearfix"></div>
									<div class="divider"></div>
									<hr />
									
									
									<div class="col-xs-12 text-center">
									<p style="padding:0; margin:0;">12 meses</p>
										<h2 style="font-weight: 300; color: #2fa399; padding:0; margin:0 0 10px 0;">
											<sup>$</sup><span><strong>600.00</strong><span
												style="font-size: .7em;"> mxn</span></span>
										</h2>
<!-- 										<span style="font-size:.9em;"><em>Pago anual</em></span> -->
									</div>
									<div class="clearfix"></div>
									<div class="divider"></div>
									<div class="col-xs-12 text-center" id="compraPaypal">
										<a href="#" data-toggle="modal" data-target="#myModalConfDatos"
											class="btn btn-default btn-outlineGreen text-center textWhite">Renueva
											ahora</a>
									</div>
									<div class="clearfix"></div>
								</div>
								<!--/ CUERPO -->
								<!-- PIE -->
								<div
									style="-webkit-border-bottom-right-radius: 15px; -webkit-border-bottom-left-radius: 15px; -moz-border-radius-bottomright: 15px; -moz-border-radius-bottomleft: 15px; border-bottom-right-radius: 15px; border-bottom-left-radius: 15px; height: 15px; background: #fff;margin-bottom:30px"></div>
								<!-- /PIE -->
							</div>
							<!--/ Producto -->
							
							
						
							
							
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
	<script
		src="<c:url value="/resources/webapp/js/ie10-viewport-bug-workaround.js"/>"></script>
	<!-- bxSlider Javascript file -->
	<script
		src="<c:url value="/resources/webapp/js/jquery.bxslider.min.js"/>"></script>
	<script
		src="<c:url value="/resources/webapp/js/bootstrap-dialog.min.js"/>"></script>


	<script src="<c:url value="/resources/webapp/js/jquery.numeric.js"/>"></script>
	<script src="<c:url value="/resources/webapp/js/jquery.blockUI.js"/>"></script>
	<script src="<c:url value="/resources/js/webapp/paypal.js"/>"></script>
	<%-- 		<h1>${ idDominio }</h1> --%>
	<%-- 		<h1>${ galeriaImagenes }</h1> --%>
	<%-- 	 	<h1>${ downgrade }</h1> --%>
	<%-- 	 	<h1>${ sitioWeb }</h1> --%>
			<h1>${sitioWeb}</h1> 
	<script src="<c:url value="/resources/webapp/js/si.files.js"/>"></script>


</body>
</html>
