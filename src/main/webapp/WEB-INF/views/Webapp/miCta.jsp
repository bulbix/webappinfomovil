<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!doctype html>
<html lang="es">

<tiles:insertDefinition name="headEditorSitio">
	<tiles:putAttribute name="template" value="${sessionScope.plantillaUsuario}" />
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
	
	<div class="col-xs-12 col-sm-6 hidden-xs"><h3 class="text-left textWhite navEditor" style="font-weight: 300;">Mi
				Cuenta</h3></div>
		<div class="col-xs-12 col-sm-6">
			<div class="col-xs-12 reset text-right pull-right navEditor">
				<span id="muestraNombreUsuario">
					<c:if test="${not empty nombreUsuario}">
						${nombreUsuario} <img width="20" height="20" alt="Infomovil"	src="<c:url value="/resources/webapp/images/fa-user.png"/>"/>
					</c:if>
				</span>  
					<br/> ${correoElectronico} <img width="25" height="25" alt="Infomovil"
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
		<div class="">
			<!--Theme showcase -->
			<div class="theme-showcaseApp" role="main" id="intro">
				<!-- Main jumbotron for a primary marketing message or call to action -->
				<div class="container">
					<!-- page header -->
					<div class="page-header text-center navEditorSFl">
					<h3 class="text-left textBlack " style="font-weight: 300; margin:5px 0 0 0;">Mis productos</h3><hr/>
					<div>
					<h1>${planPro}</h1>
					<c:choose>
						<c:when test="${totProductos > 0}">	
						
							<c:forEach items="${productos}" var="item">

								<c:set var="siTienePP" value="display:none;" scope="request" />
								<c:set var="noTienePP" value="display:block;" scope="request" />	
																
								<c:if test="${planPro == 'SI'}">
									<c:set var="siTienePP" value="display:block;" scope="request" />
									<c:set var="noTienePP" value="display:none;" scope="request" />									
								</c:if>
								
								<c:if test="${item.descripcion != 'RECURSO'}">	
																
									<tiles:insertDefinition name="prodGen">
										<c:set var="productoNombre" value="planPro" scope="request" />
										<c:set var="datoUrl" value="${item.descripcion}" scope="request" />
										<c:set var="imgActivo" value="btn_active.png" scope="request" />
										<c:set var="displayButton" value="display:none" scope="request" />		
										<c:set var="productoActivo" value="Activo" scope="request" />									
										<c:set var="fechaInicial" value="${item.fechaInicio}" scope="request" />
										<c:set var="fechaFinal" value="${item.fechaFin}" scope="request" />
										<tiles:putAttribute name="productoTitulo" value="${item.abc}"/>
										<tiles:putAttribute name="claseProductos" value="${claseProductos}"/>
									</tiles:insertDefinition>
								</c:if>
							</c:forEach>
																
						</c:when>
						<c:otherwise>
							<tiles:insertDefinition name="prodGen">
							
								<c:set var="siTienePP" value="display:none;" scope="request" />
								<c:set var="noTienePP" value="display:block;" scope="request" />
								<c:set var="productoNombre" value="planPro" scope="request" />
								<c:set var="datoUrl" value="xxxxxx" scope="request" />
								<c:set var="imgActivo" value="btn_active.png" scope="request" />
								<c:set var="displayButton" value="display:none" scope="request" />		
								<c:set var="productoActivo" value="Activo" scope="request" />									
								<c:set var="fechaInicial" value="----" scope="request" />
								<c:set var="fechaFinal" value="----" scope="request" />
								<tiles:putAttribute name="productoTitulo" value="planPro"/>
								<tiles:putAttribute name="claseProductos" value="${claseProductos}"/>
								
							</tiles:insertDefinition>
						</c:otherwise>
					</c:choose>		
					
				</div>
					<div class="clearfix"></div>
					
					</div>
					<!-- /page header -->
					<br /> <br />
				</div>
			</div>
			<!--/Theme showcase -->
		</div>
	</div>

	<!--MODAL RENOVACON EXITOSA .tel-->
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
	
	<!--MODAL COMPRA PP-->
	<tiles:insertDefinition name="modalGen">
		<tiles:putAttribute name="idModal" value="myModalCompraPP" />
		<tiles:putAttribute name="tamanioModal"
			value='"modal-dialog modal-md"' />
		<c:set var="fragmentName" value="modalCompraPP" scope="request" />
	</tiles:insertDefinition>
	<!--/MODAL COMPRA PP-->
	
	<!--MODAL TEMPLATES-->
	<div id="modalTemplates"></div>
	<!--/MODAL TEMPLATES-->

	<!--MODAL CONFIRMACIÓN DATOS-->
	<tiles:insertDefinition name="modalGen">
		<tiles:putAttribute name="idModal" value="myModalConfDatos" />
		<tiles:putAttribute name="tamanioModal" value='"modal-dialog modal-md"' />
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

	<form action="${urlPaypal}" method="post" id="formPaypal">
		<input type="hidden" name="cmd" value="_s-xclick">
		<input type="hidden" name="hosted_button_id" value="">
		<input type="hidden" name="custom" id="customPaypal">
	</form>
	
	<c:if test="${paymentStatus == 'Completed'}">
		<script>
			abrirModalExitoso('myModalCompraExitosa');
		</script>
	</c:if>
	
	<c:if test="${paymentStatus == 'Canceled'}">
		<script>
			abrirModalExitoso('myModalCompraFallida');
		</script>
	</c:if>
	
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

<%-- <h1>${paymentStatus}</h1> --%>
</body>
</html>
