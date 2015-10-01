<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!doctype html>
<html lang="es">

<tiles:insertDefinition name="headEditorSitio">
	<tiles:putAttribute name="template" value="${ plantillaUsuario }" />
</tiles:insertDefinition>
<link href="<c:url value="/resources/webapp/js/datepicker/datepicker.css"/>" rel="stylesheet" />
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
	
	<div class="col-xs-12 col-sm-6 hidden-xs"><h3 class="text-left textWhite" style="font-weight: 300;">Mis promociones</h3></div>
		<div class="col-xs-12 col-sm-6">
			<div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 reset text-right pull-right">
				Nombre ${usuarioLogueado}<img width="30" height="30" alt="Infomovil"
					src="<c:url value="/resources/webapp/images/fa-user.png"/>" />  <br/> ${correoElectronico} <img width="25" height="25" alt="Infomovil"
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
	<!-- Formulario Promociones -->
	<div class="">
	
		<div class="col-xs-12 col-sm-6 col-sm-offset-3 col-md-6 col-md-offset-3 col-lg-6 col-lg-offset-3">
		
			<h3 class="text-left textWhite" style="font-weight: 300; margin:20px 0 0 0;">Mis
				promociones</h3>
				<div id="divPublicarPromo">
						<input type="button" id="btnPublicar" value="Publicar"/>
						<input type="button" id="btnVistaPrevia" value="Vista Previa"/>
				</div>
				 <div id="divPromoPublicada">
						<input type="button" id="btnCompartir" value="Compartir"/>
						<input type="button" id="btnVerPromo" value="Ver promo"/>
						<input type="button" id="btnEliminar" value="Eliminar"/>
						<input type="button" id="btnGuardar" value="Guardar"/>
						
				</div> 
			<hr />
			<!--Theme showcase -->
			<div class="theme-showcaseApp" role="main" id="intro">
				<!-- Main jumbotron for a primary marketing message or call to action -->
				<div class="">
					<!-- page header <input type="text" id="checkedRedimir" value=""/>-->
					<div class="page-header text-center">
					
					
						<input type="hidden" id="idPromocion" value=""/>
						
						
							Nombre de la promoción:<input type="text" name="nombrePromo" id="nombrePromo" value=""><br>
							Descripción de la promoción:<textarea rows="4"  cols="50"  name="descPromo" id="descPromo"></textarea><br>
							Vigencia al:<input type="text" id="datepicker" value=""><br><br>
							¿Cómo redimir?:<br><br>
							
									<br><input type="radio" name="radioPromo" id="r1" value="No especificado" class="radioPromo">No especificado<br>
									<br><input type="radio" name="radioPromo" id="r2" value="Llámanos" class="radioPromo">Llámanos<br>
									<br><input type="radio" name="radioPromo" id="r3" value="Envíanos un e-mail" class="radioPromo">Envíanos un e-mail<br>
									<br><input type="radio" name="radioPromo" id="r4" value="Visítanos" class="radioPromo">Visítanos<br>
									
							Información adicional:<input type="text" name="infoadiPromo" id="infoadiPromo" value=""><br><br>

					
						
					</div>
					<!-- /page header -->
					<br /> <br />
				</div>
			</div>
			<!--/Theme showcase -->
		</div>
	</div>
	<!-- /Formulario Promociones -->

	<!-- Bootstrap core JavaScript
	    ================================================== -->
	<!-- Placed at the end of the document so the pages load faster -->
	<script src="<c:url value="/resources/webapp/js/datepicker/jquery-1.10.2.js"/>"></script>
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
			 
	<script src="<c:url value="/resources/webapp/js/datepicker/jquery.ui.core.js"/>"></script>
	<script src="<c:url value="/resources/webapp/js/datepicker/jquery.ui.datepicker.js"/>"></script>
	
	<script src="<c:url value="/resources/js/webapp/promociones.js"/>"></script>
	
 


</body>
</html>
