<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!doctype html>
<html lang="es">

	<tiles:insertDefinition name="headEditorSitio">
		<tiles:putAttribute name="template" value="${ template }"/>
	</tiles:insertDefinition>	

	<body role="document" data-spy="scroll" data-target=".navbar" data-offset="75" id="page-top" onload="autosave()">
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
					<span class="navbar-brand" id="logoBAZ" style="display:none;"><img src="<c:url value="/resources/webapp/images/logo_baz.png"/>"	width="103" height="47" alt="Infomovil" /></span>	
					<!-- /LOGO BANCO AZTECA - BAZ-->
					
					<!-- LOGO INFOMOVIL - REGISTRO GENERAL-->	
					<span class="navbar-brand" id="logoGral" style="display:none;"><img	src="<c:url value="/resources/webapp/images/apple-touch-icon-57x57.png"/>" width="50" height="50" alt="Infomovil" /></span>
					<span class="marLeft navEditor ${colorTexto}">Modo edición</span>
					<!-- /LOGO INFOMOVIL - REGISTRO GENERAL-->
					
				</div>
				<div id="navbar" class="navbar-collapse collapse text-right">
					<ul class="nav navbar-nav navbar-right">
					
						<li>
							<a href="#" class="smoothScroll ${colorTexto}">${usuarioLogueado}
							<img width="20" height="20" alt="Infomovil"	src="<c:url value="/resources/webapp/images/fa-user${ extensionImg }.png"/>" /></a>
						</li>
	
						<li>
							<a href="#" data-toggle="modal" data-target="#myModalTemplates" class="smoothScroll ${colorTexto}">Estilo 
								<img width="20" height="20" alt="Infomovil"	src="<c:url value="/resources/webapp/images/fa-templates${ extensionImg }.png"/>" />
							</a>
						</li>
						
						<li class="botonDesPublicar" style="display:none;">
							<a href="#" data-toggle="modal" data-target="#myModalMaps" class="smoothScroll ${colorTexto}">Ubicación
								<img width="20" height="20" alt="Infomovil"	src="<c:url value="/resources/webapp/images/icn_marc_maps${ extensionImg }.png"/>" />
							</a>
						</li>
						
						<li class="botonDesPublicarVid" id="btnVideoLi" style="display:none;">
							<a href="#" data-toggle="modal" data-target="#myModalVideo" class="smoothScroll ${colorTexto}">Video 
								<img width="20" height="20" alt="Infomovil"	src="<c:url value="/resources/webapp/images/ico_ppp_youtube${ extensionImg }.png"/>" />
							</a>
						</li>
						<li class="botonDesPublicar" id="btnContLi" style="display:none;">
							<a href="#" data-toggle="modal" data-target="#myModalDescApp" class="smoothScroll ${colorTexto}">¿Qué sigue? <span class="hidden-sm hidden-md"></span> 
								<img width="20" height="20" alt="Infomovil"	src="<c:url value="/resources/webapp/images/ico_mas_cont${ extensionImg }.png"/>" />
							</a>
						</li>
						<li>						
							<a href="<c:url value="/logout"></c:url>" class="smoothScroll ${colorTexto}"> Cerrar <span class="hidden-sm hidden-md">sesión	</span>				
								<img width="20"	height="20" alt="Infomovil" src="<c:url value="/resources/webapp/images/fa-sign-out${ extensionImg }.png"/>" />
							</a>
						</li>
						
					<!--  Mostrar para BAZ -->
					<li class="hidden-xs" id="idRegBAZ" style="display: none;"><a href="#" class="smoothScroll"><img width="30" height="30" alt="Infomovil"
								src="<c:url value="/resources/webapp/images/apple-touch-icon-57x57.png"/>" /></a>
					</li>
					<!--  /Mostrar para BAZ -->
					
					<li id="idRegGral" style="display:none" class="hidden-xs"><a href="#" class="smoothScroll">
						<img width="30" height="30" alt="Infomovil" src="<c:url value="/resources/webapp/images/apple-touch-icon-57x57.png"/>" /></a>
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
			<div class="" >
				<a href="#" data-toggle="modal" data-target="#myModalTemplates" class="col-xs-12 col-sm-6 col-sm-offset-3 col-md-6 col-md-offset-3 col-lg-6 col-lg-offset-3 btn btn-defaultBlack btn-outline navEditor textBlack"><strong>Elige estilo</strong> 
					<img width="20" height="20" alt="Infomovil" src="<c:url value="/resources/webapp/images/fa-templates-bk.png"/>" /><br /><span class="text-center _90em textBlack">¡Lo puedes cambiar las veces que quieras!</span></a>
			</div>
		</div>
		<!-- /Botón Nuevo Estilo -->
		
		<!--Theme showcase -->
		<div class="theme-showcaseApp" role="main" id="intro">
			<!-- Main jumbotron for a primary marketing message or call to action -->
			<div class="container">
				<!-- page header -->
				<div class="page-header text-center">
					<strong><span class="text-center btnsEditor _1_1em" id="urlSitio" style="display: none;">
						 <a href="http://${sitioWeb}" target="_blank" class="col-xs-12 col-sm-12  col-md-12 col-lg-12 textBlack navEditor"><strong>${sitioWeb}</strong></a>
					</span></strong>
					<div>
						<form id="formEditar">
							<!--email-->
							<div class="form-group col-xs-12 col-sm-12">
								<div class="control-group">
									<label class="control-label hidden-xs"></label>
									<div class="controls">
										<input type="text" class="form-control h1 text-center"
											maxlength="128" placeholder="Pon tu nombre o negocio"
											onfocus="this.placeholder = ''" onblur="this.placeholder = 'Pon tu nombre o negocio'"
											required="required"
											<c:if test="${not empty nombreEmpresa}"> value = " ${ nombreEmpresa } " </c:if>
											id="txtNombreNegocio" />
										<p class="help-block"></p>
									</div>
								</div>
							</div>
							<!--email-->
							<!--descripcion-->
							<div class=" col-xs-12 col-sm-12">
								<div>
									<div class="controls">
										<textarea class="form-control h2 text-center" maxlength="255"
											placeholder="Agrega una descripción corta de tus servicios o productos"
											onfocus="this.placeholder = ''" onblur="this.placeholder = 'Agrega una descripción corta de tus servicios o productos'"
											required id="txtDescripcionCorta" rows="5"><c:if
												test="${not empty descripcionCorta}">${descripcionCorta}</c:if></textarea>
										<p class="help-block"></p>
									</div>
								</div>
								<hr />
							</div>
							<!--descripcion-->
							<div class="form-group col-xs-12 col-sm-12">
								<div class="mar15 col-xs-12 col-sm-12 col-md-6 col-lg-6 reset">
									<div
										class=" col-xs-12 col-sm-12 col-md-12 col-lg-12 mar0auto reset">
										<img
											src="http://landing.infomovil.com/webapp/templates/${ template }/images/mail_icn.png"
											class="img mxw50miw43w100" alt="Contacto" /> 
											<span
											class="dblw100 mxh70 08em"> </span> 
											<span
											class="col-xs-12 08em mar0auto"> 
											<input type="text" style="text-transform:lowercase;"
											class="form-control colorA text-center col-xs-11"
											maxlength="100" placeholder="Correo" required="required"
											onfocus="this.placeholder = ''" onblur="this.placeholder = 'Correo'"
											<c:if test="${not empty correoElectronico}"> value = "${ correoElectronico }" </c:if>
											id="txtCorreo" />
										</span>
										<p class="help-block"></p>
									</div>
								</div>
								<div class="mar15 col-xs-12 col-sm-12 col-md-6 col-lg-6 reset">
									<div
										class=" col-xs-12 col-sm-12 col-md-12 col-lg-12 mar0auto reset">
										<img
											src="http://landing.infomovil.com/webapp/templates/${ template }/images/cel_icn.png"
											class="img mxw50miw43w100" alt="Contacto" /> <span
											class="dblw100 mxh70 08em"> </span> <span
											class="col-xs-12 08em mar0auto"> <input type="text"
											class="form-control text-center col-xs-11" maxlength="10"
											placeholder="Celular" required="required"
											onfocus="this.placeholder = ''" onblur="this.placeholder = 'Celular'"
											<c:if test="${not empty telefonoUsuario}"> value = "${ telefonoUsuario }" </c:if>
											id="txtTelefono" />
										</span>
										<p class="help-block"></p>
									</div>
								</div>
							</div>
							<div class="clear"></div>
							<div class="divider"></div>
						</form>
					</div>
				</div>
				<!-- /page header -->
				<br/>
				<br/>
			</div>
			
			<!--/Theme showcase -->
	
			<!--Footer-->
			<footer class="footer bgBlack"> 
			<div class="dividerSmall"></div>
			<div class="clearfix"></div>
			<!-- /Botón MAPS --> 
			
			<div class="botonDesPublicar " style="display:none;">
				<a href="#" data-toggle="modal" data-target="#myModalMaps" class="col-xs-12 col-sm-6 col-sm-offset-3 col-md-6 col-md-offset-3 col-lg-6 col-lg-offset-3 btn btn-default btn-outline navEditor">
	 			<img width="30" height="30" alt="Infomovil" src="<c:url value="/resources/webapp/images/icn_marc_maps.png"/>" /> 
	 			<span id="idOpcionUbicacion">Coloca tu ubicación</span>
	 			<br /><span id="direccionMap" class="directionMap"></span>
	 			</a>
	 		</div>
			<!-- /Botón Nuevo Estilo -->
									
			<div class="clearfix"></div>
				<div class="dividerSmallest"></div>
				<!-- /Botón AGREGAR VIDEO --> 
				<div id="idBtnVideo" class="botonDesPublicarVid" style="display:none;">
					<a href="#" data-toggle="modal" data-target="#myModalVideo" class="col-xs-12 col-sm-6 col-sm-offset-3 col-md-6 col-md-offset-3 col-lg-6 col-lg-offset-3 btn btn-default btn-outline navEditor"> 
					<img width="30" height="30" alt="Infomovil" src="<c:url value="/resources/webapp/images/ico_ppp_youtube.png"/>" /> <span id="idOpcionVideo">Agrega un video</span></a> 
				</div>
							<!-- /Botón AGREGAR VIDEO -->	
							<div class="clearfix"></div>
							<div class="dividerSmallest"></div>
							
							<!-- /Botón AGREGAR MAS CONTENIDO --> 
				<div id="idBtnMasCont" class="botonDesPublicar" style="display:none;">
					<a href="#" data-toggle="modal" data-target="#myModalDescApp" class="col-xs-12 col-sm-6 col-sm-offset-3 col-md-6 col-md-offset-3 col-lg-6 col-lg-offset-3 btn btn-default btn-outline navEditor"> 
					<img width="30" height="30" alt="Infomovil" src="<c:url value="/resources/webapp/images/ico_mas_cont.png"/>" /> <span id="idOpcionMasCont">¿Qué sigue?</span></a> 
				</div>
							<!-- /Botón AGREGAR MAS CONTENIDO -->	
							
							<div class="clearfix"></div>
							<div class="dividerSmallest"></div>
	
	<c:if test="${sitioWeb =='SIN_PUBLICAR'}">
	
		<tiles:insertDefinition name="formPublicar">
			<tiles:putAttribute name="urlEjemploSitio" value="${ urlEjemploSitio }"/>
			<tiles:putAttribute name="visibleRecurso" value="${ visibleRecurso }"/>
			<tiles:putAttribute name="visibleTel" value="${ visibleTel }"/>
		</tiles:insertDefinition>	
	</c:if>
	
	</footer>			
		<!--/Footer-->
		
		<!--MODAL TEMPLATES-->
		<div id="modalTemplates"></div>
		<!--/MODAL TEMPLATES-->
		
		<!--MODAL MAPA-->
		<tiles:insertDefinition name="modalGen">
			<tiles:putAttribute name="idModal" value="myModalMaps"/>
			<c:set var="fragmentName" value="modalMapFragment" scope="request" />
		</tiles:insertDefinition>
		<!--/MODAL MAPA-->

		<!--MODAL VIDEO-->
		<tiles:insertDefinition name="modalGen">
			<tiles:putAttribute name="idModal" value="myModalVideo"/>
			<c:set var="fragmentName" value="modalVideoFragment" scope="request" />
		</tiles:insertDefinition>
		<!--/MODAL VIDEO-->

		<!--MODAL EXITO-->
		<tiles:insertDefinition name="modalGen">
			<tiles:putAttribute name="idModal" value="myModalExito"/>
			<c:set var="fragmentName" value="modalExitoFragment" scope="request" />
		</tiles:insertDefinition>
		<!--/MODAL EXITO-->

<!-- 		<!--MODAL FAIL--> 
		<tiles:insertDefinition name="modalGen">
			<tiles:putAttribute name="idModal" value="myModalFallo"/>
			<c:set var="fragmentName" value="modalFalloFragment" scope="request" />
		</tiles:insertDefinition>
<!-- 		<!--/MODAL FAIL--> 
		
<!-- 		<!--MODAL REGISTRO--> 
		<tiles:insertDefinition name="modalGen">
			<tiles:putAttribute name="idModal" value="myModalRegistro"/>
			<c:set var="fragmentName" value="modalRegistroFragment" scope="request" />
		</tiles:insertDefinition>
<!-- 		<!--/MODAL REGISTRO--> 

<!-- 		<!--MODAL DESCARGA LA APP--> 
		<tiles:insertDefinition name="modalGen">
			<tiles:putAttribute name="idModal" value="myModalDescApp"/>
			<c:set var="fragmentName" value="modalDescApp" scope="request" />
		</tiles:insertDefinition>
<!-- 		<!--/MODAL DESCARGA LA APP--> 

								
		<!-- Scroll to Top Button (Only visible on small and extra-small screen sizes) -->
		<div class="scroll-top page-scroll visible-xs visble-sm">
			<a class="btn" href="#page-top"> <img width="20" height="20" alt="Infomovil" src="http://landing.infomovil.com/webapp/templates/${ template }/images/fa-chevron-up.png" />Subir</a>
		</div>

	<!-- /container -->
		<form id="publicarDominio"
			action="<c:url value="/infomovil/publicarSitio"/>" method="post">
			<div id="modalPublicacion"></div>
			<input type="hidden" id="nombreDominio" name="nombreDominio">
			<input type="hidden" id="tipoDominio" name="tipoDominio"> 
			<input type="hidden" id="idCatTipoRecurso" name="idCatTipoRecurso">
		</form>
			
		<input type="hidden" id="plantilla" name="plantilla" <c:if test="${not empty template}"> value = "${ template }" </c:if>>
		<input type="hidden" id="latitud" name="latitud" value = "${ latitud }">
		<input type="hidden" id="longitud" name="longitud" value = "${ longitud }">
		<input type="hidden" id="direccionMapAux" name="direccionMapAux">
		<input type="hidden" id="urlVideo" name="urlVideo" value = "${ urlVideo }">
		<!-- Bootstrap core JavaScript
	    ================================================== -->
		<!-- Placed at the end of the document so the pages load faster -->
		<script src="<c:url value="/resources/webapp/js/jquery.min.js"/>"></script>
		<script src="<c:url value="/resources/webapp/js/bootstrap.js"/>"></script>
		<script src="<c:url value="/resources/webapp/js/docs.min.js"/>"></script>
		<script src="<c:url value="/resources/webapp/js/smoothscroll.js"/>"></script>
		<!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
		<script	src="<c:url value="/resources/webapp/js/ie10-viewport-bug-workaround.js"/>"></script>
		<!-- bxSlider Javascript file -->
		<script src="<c:url value="/resources/webapp/js/jquery.bxslider.min.js"/>"></script>
		<script	src="<c:url value="/resources/webapp/js/jqBootstrapValidation.js"/>"></script>
		
		<script>
			$(function () { $("input,select,textarea").not("[type=submit]").jqBootstrapValidation(); } );
		</script>
	
		<script src="<c:url value="/resources/webapp/js/jquery.numeric.js"/>"></script>
		<script src="<c:url value="/resources/webapp/js/jquery.blockUI.js"/>"></script>
		<script src="<c:url value="/resources/js/webapp/validaciones.js"/>"></script>
		<script src="<c:url value="/resources/js/webapp/mapa.js"/>"></script>
		<script src="<c:url value="/resources/js/webapp/videoYoutube.js"/>"></script>
		
		<script>
			$(document).ready(function(){
				generarSlider();
				google.maps.event.addDomListener(window, 'load', initialize);
				});
		</script>
	
		<script>
	
			$('body').scrollspy({
			    target: '.navbar-fixed-top'
			});
		
			$('.navbar-collapse ul li a').click(function() {
			    $('.navbar-toggle:visible').click();
			});
		
		</script>
		
		<script>
		
			$("#nombreDominioRec").keyup(function () {
				var value = $(this).val().replace(/[^A-Za-z0-9_-]/g, "");
				$("#nombreDominioRec").val($("#nombreDominioRec").val().replace(/[^A-Za-z0-9_-]/g, ""));
		   		 $("#idCatTipoRecAutocompleta").text(value);
		   		 if(value.length ==0){
		   			 $("#idCatTipoRecAutocompleta").text("mi-pagina");
		   		 }
		 	 });

			$("#nombreDominioBusqueda").keyup(function () {
				var value = $(this).val().replace(/[^A-Za-z0-9_-]/g, "");
				$("#nombreDominioBusqueda").val($("#nombreDominioBusqueda").val().replace(/[^A-Za-z0-9_-]/g, ""));
		   		 $("#idCatTipoRecAutocompletaTel").text(value);
		   		 if(value.length ==0){
		   			 $("#idCatTipoRecAutocompletaTel").text("mi-pagina");
		   		 }
		 	 });
			
		</script>

		<script>
		
			<c:choose> 
				<c:when test="${canalUsuario == 'BAZ'}">
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
		
			<c:choose>
				<c:when test="${sitioWeb != 'SIN_PUBLICAR'}">
					$("#urlSitio").css("display", "block");
					$("#descargaApp").css("display", "block");
					$(".botonDesPublicar").css("display", "block");		
					$("#masContenido").css("display", "block");
					
					<c:if test="${planPro == 'SI'}">
						$("#idBtnVideo").css("display", "block");
						$("#btnVideoLi").css("display", "block");
						$(".botonDesPublicarVid").css("display", "block");
						$("#imgPlanPro").css("display", "table-row");
					</c:if>
				
				</c:when>
				<c:otherwise>
				
				</c:otherwise>
			</c:choose>	
		
			<c:if test="${urlVideo != ''}">
				$("#idOpcionVideo").html("Edita tu video");
			</c:if>
			
			<c:if test="${registroExitoso =='SI'}">
				$("#myModalRegistro").modal('show');
			</c:if>
			
			<c:if test="${resultadoPublicacion =='SI'}">
				$("#myModalExito").modal('show');
			</c:if>
		
			<c:if test="${resultadoPublicacion =='NO'}">
				$("#myModalFallo").modal('show');
			</c:if>
			
	 	</script>
	</body>
</html>
