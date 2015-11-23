<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!doctype html>
<html lang="es" ng-app = "InfomovilApp">

	<tiles:insertDefinition name="headEditorSitio">
		<tiles:putAttribute name="template" value="${ template }" />
	</tiles:insertDefinition>


	<body role="document" data-spy="scroll" data-target=".navbar" data-offset="75" id="page-top" >
	
		<!-- Fixed navbar -->
		<nav class="navbar navbar-${ claseCss } navbar-static-top">
			<div class="container-fluid">
				<div class="navbar-header">
					<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
						<span class="sr-only">Toggle navigation</span> 
						<span class="icon-bar"></span> 
						<span class="icon-bar"></span> 
						<span class="icon-bar"></span>
					</button>
	
					<!-- LOGO BANCO AZTECA - BAZ-->
					<span class="navbar-brand" id="logoBAZ" style="display: none;">
						<img src="<c:url value="/resources/webapp/images/logo_baz.png"/>" width="103" height="47" alt="Infomovil" />
					</span>
					<!-- /LOGO BANCO AZTECA - BAZ-->
	
					<!-- LOGO INFOMOVIL - REGISTRO GENERAL-->
					<span class="navbar-brand" id="logoGral" style="display: none;">
						<img src="<c:url value="/resources/webapp/images/apple-touch-icon-57x57.png"/>" width="50" height="50" alt="Infomovil" />
					</span> 
					<span class="marLeft navEditor ${colorTexto}">Modo edición</span>
					<!-- /LOGO INFOMOVIL - REGISTRO GENERAL-->
				</div>
				<div id="navbar" class="navbar-collapse collapse text-right">
					<ul class="nav navbar-nav navbar-right">							
						<li>
							<a href="<c:url value="/infomovil/editarSitio"></c:url>" class="smoothScroll ${colorTexto}">
								<img width="20" height="20" alt="Infomovil" src="<c:url value="/resources/webapp/images/fa-back${ extensionImg }.png"/>"/>Editor								 
							</a>
						</li>
						<li>
							<a href="<c:url value="/logout"></c:url>" class="smoothScroll ${colorTexto}">
								<img width="20" height="20" alt="Infomovil" src="<c:url value="/resources/webapp/images/fa-sign-out${ extensionImg }.png"/>"/>Cerrar 
								<span class="hidden-sm hidden-md">sesión</span> 
							</a>
						</li>
	
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
		<div class="col-xs-12 col-sm-6 hidden-xs"><h3 class="text-left textWhite navEditor" style="font-weight: 300;">Mis
					Contactos</h3></div>
			<div class="col-xs-12 col-sm-6">
				<div class="col-xs-12 reset text-right pull-right navEditor">
					<span id="muestraNombreUsuario">
						<c:if test="${not empty nombreUsuario}">
							${nombreUsuario} <img width="20" height="20" alt="Infomovil" src="<c:url value="/resources/webapp/images/fa-user.png"/>"/>
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
		<!-- Formulario Promociones -->
		<div class="container">
			<div class="col-xs-12 reset">

				<!--Theme showcase -->
				<div class="theme-showcaseApp navEditor" role="main" id="intro">
					<!-- Main jumbotron for a primary marketing message or call to action -->
					<div>
						
						<div class="page-header text-center" style="border-radius:15px; background:url(<c:url value="/resources/webapp/images/bgWhTra.png"/>); padding:10px;">						
						<div class="clear"></div>
									  
								<button type="button" class="btn btn-outlineGreen pull-right textWhite navEditorLato"  id="" style="margin: 5px 0 0 0;" data-toggle="modal" data-target="#myModalContactos">
									<img width="20" height="20" alt="Infomovil" src="<c:url value="/resources/webapp/images/successWhite.png"/>"/> 
									<span class="hidden-xs">Añadir Contacto</span>
								</button>	

							<div class="clear"></div>
				
							<hr/>

							<div ng-controller = "ToolBarContactoController as toolbarContacto" ng-init="downgrade = '${downgrade}'; contacto = '${contacto}'">

								<h5>{{contacto}} - {{downgrade}}</h5>
								<ul id="sortable">


								<div id="contenedorMoverContacto" ng-repeat="item in toolbarContacto.contactos">									
        							<li class="ui-state-default">
										<div ng-click="toolbarContacto.abrirActualizarContacto(item)">

											<div id="regExpContacto" ng-hide="false">regExp: {{item.regExp}}</div>
											<div id="servicesNaptrContacto" ng-hide="false">servicesNaptr: {{item.servicesNaptr}}</div>																																
											<div id="categoryNaptrContacto" ng-hide="true">categoryNaptr: {{item.categoryNaptr}}</div>
											<div id="longLabelNaptrContacto" ng-hide="false">longLabelNaptr: {{item.longLabelNaptr}}</div>
											<div id="subCategoryContacto" ng-hide="false">subCategory: {{item.subCategory}}</div>
											<div id="preferenciaContacto" ng-hide="true">preference: {{item.preference}}</div>
											<div id="idContacto" ng-hide="true">claveContacto: {{item.claveContacto}}</div>
											<div id="visibleContacto" ng-hide="true">visible: {{item.visible}}</div>
										</div>
											<input type="checkbox" id="checkContactoActivo" ng-checked="item.visible==1" ng-click="toolbarContacto.toggleContacto(item)"> Visible <br/>
											<button type="button" class="btn btn-outlineGreen pull-right textWhite navEditorLato" id="btnEliminarContacto" style="margin: 5px 0;" 
												ng-click="toolbarContacto.eliminarContacto(item)">
												<img width="20" height="20" alt="Infomovil" src="<c:url value="/resources/webapp/images/successWhite.png"/>"/>
												<span class="hidden-xs">X</span>
											</button>		
											<button type="button" class="btn btn-outlineGreen pull-right textWhite navEditorLato" id="" style="margin: 5px 0;" ng-click="toolbarContacto.abrirActualizarContacto(item)">
												<img width="20" height="20" alt="Infomovil" src="<c:url value="/resources/webapp/images/successWhite.png"/>"/>
												<span class="hidden-xs">A</span>
											</button>									
										</li>									
									</div>
								</ul>
							</div>
						</div>
		
					</div>
				</div>
			</div>
		</div>
		
		<!-- Bootstrap core JavaScript
		    ================================================== -->
		<!-- Placed at the end of the document so the pages load faster -->
		<script src="<c:url value="/resources/webapp/js/jquery.min.js"/>"></script>
		<script src="<c:url value="/resources/webapp/js/angular.min.js"/>"></script>
		<script src="<c:url value="/resources/webapp/js/bootstrap.js"/>"></script>
		<script src="<c:url value="/resources/webapp/js/docs.min.js"/>"></script>
		<script src="<c:url value="/resources/webapp/js/smoothscroll.js"/>"></script>
		<script src="<c:url value="/resources/webapp/js/ie10-viewport-bug-workaround.js"/>"></script>
		<script src="<c:url value="/resources/webapp/js/jquery-ui.min.js"/>"></script>
		<script src="<c:url value="/resources/webapp/js/jquery.ui.touch-punch.js"/>"></script>
		<!-- bxSlider Javascript file -->
		<script	src="<c:url value="/resources/webapp/js/jquery.bxslider.min.js"/>"></script>
		<script	src="<c:url value="/resources/webapp/js/bootstrap-dialog.min.js"/>"></script>
		<script src="<c:url value="/resources/webapp/js/jquery.numeric.js"/>"></script>
		<script src="<c:url value="/resources/webapp/js/jquery.blockUI.js"/>"></script>
		<script src="<c:url value="/resources/js/webapp/contactos.js"/>"></script>
		<script src="<c:url value="/resources/js/webapp/contactos.js"/>"></script>
		
	 
		<tiles:insertDefinition name="modalGen">
			<tiles:putAttribute name="idModal" value="myModalContactos" />
			<tiles:putAttribute name="tamanioModal"
				value='"modal-dialog modal-lg"' />
			<c:set var="fragmentName" value="modalContactos" scope="request" />
		</tiles:insertDefinition>
		
		<tiles:insertDefinition name="modalGen">
			<tiles:putAttribute name="idModal" value="myModalContactosActualizar" />
			<tiles:putAttribute name="tamanioModal"
				value='"modal-dialog modal-lg"' />
			<c:set var="fragmentName" value="modalContactosActualizar" scope="request" />
		</tiles:insertDefinition>
		
		
		
		
		
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


