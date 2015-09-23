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
<%-- 					<li><a href="<c:url value="/infomovil/miCuenta"></c:url>" class="smoothScroll ${colorTexto}"><img --%>
<!-- 							width="20" height="20" alt="Infomovil" -->
<%-- 							src="<c:url value="/resources/webapp/images/fa-user${ extensionImg }.png"/>" /> --%>
<!-- 							Mi cuenta </a></li> -->
							
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
						

							<!-- Producto -->
							<div class="col-xs-12 col-sm-6 col-md-6 col-lg-6"
								style="display: block; " id="dominioActivo">

								<!-- CABECERA -->
								<div class="prodHeader">
									<h5 class="prodTitle">Dominio</h5>
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
								<div class="prodFooter"></div>
								<!-- /PIE -->
							</div>
							<!--/ Producto -->
							
							<!-- Producto -->

							<div class="col-xs-12 col-sm-6 col-md-6 col-lg-6"
								style="display: block;" id="dominioRenovacion">

								<!-- CABECERA -->
								<div class="prodHeader">
									<h5 class="prodTitle">Dominio</h5>
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
									<p class="reset">12 meses</p>
										<h3 class="prodPrice">
											<sup>$</sup><span><strong>600.00</strong><span
												class="prodNotes"> mxn</span></span>
										</h3>
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
								<div class="prodFooter"></div>
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
	<%-- 	 	<h1>${sitioWeb}</h1> --%>
			 
	<script src="<c:url value="/resources/webapp/js/si.files.js"/>"></script>

 
<form id="formPaypal" name="formPaypal" method="post" action="https://www.sandbox.paypal.com/cgi-bin/webscr">
	<input type="hidden" name="charset" value="utf-8">
  <input type="hidden" value="infomovil.ayf-facilitator@gmail.com" name="business"/>
  <input type="hidden" value="ES" name="country"/>
  <input type="hidden" value="_xclick" name="cmd"/>
  <input type="hidden" value="Renovación de tu Dominio .tel" name="item_name"/>
  <input type="hidden" value="Dominio .tel" name="item_number"/>
  <input type="hidden" value="200.00" name="amount"/>
  <input type="hidden" value="1" name="no_shipping"/>
  <input type="hidden" value="2" name="rm"/>
  <input type="hidden" value="1" name="no_note"/>
  <input type="hidden" value="MXN" name="currency_code"/>
   <input type="hidden" value="PP-BuyNowBF" name="cn"/>
    <input type="hidden" name="custom" id="customPaypal"/>
     <input type="hidden" value="es" name="lc"/>
   <input type="hidden" value="primary" name="page_style"/>

</form>

</body>
</html>
