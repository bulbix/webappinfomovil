<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!doctype html>
<html lang="es">

	<tiles:insertDefinition name="headEditorSitio">
		<tiles:putAttribute name="template" value="${ template }" />
	</tiles:insertDefinition>

	<link href="<c:url value="/resources/webapp/js/datepicker/datepicker.css"/>" rel="stylesheet" />
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
				Promociones</h3></div>
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
						<!-- page header <input type="text" id="checkedRedimir" value=""/>-->
						<div class="page-header text-center" style="border-radius:15px; background:url(<c:url value="/resources/webapp/images/bgWhTra.png"/>); padding:10px;">						
						
						<div id="divPublicarPromo" style="display:none">			
					<button type="button" class="btn btn-outlineGreen pull-right textWhite navEditorLato" id="btnPublicar" style="margin: 5px 0;">
						<img width="20" height="20" alt="Infomovil" src="<c:url value="/resources/webapp/images/successWhite.png"/>"/>
						<span class="hidden-xs">Publicar</span>
					</button>
					<button type="button" class="btn btn-outlineGreen pull-right textWhite navEditorLato"  id="btnVistaPrevia" style="margin: 5px 8px 0 0;">
						<img width="20" height="20" alt="Infomovil"	src="<c:url value="/resources/webapp/images/fa-eye.png"/>"/> 
						<span class="hidden-xs">Vista Previa</span>
					</button>
					
					<button type="button" class="btn btn-outlineGreen pull-right textWhite navEditorLato" id="btnEstiloTemplates" onClick="muestraTemplatePromo()" style="margin: 5px 8px 0 0;">
						<img width="20" height="20" alt="Infomovil"	src="<c:url value="/resources/webapp/images/fa-templates.png"/>"/> 
						<span class="hidden-xs">Estilo</span>
					</button>
				</div>
				
				<div class="clear"></div>
					
						<div id="divPromoPublicada" style="display:none">	  
					<button type="button" class="btn btn-outlineGreen pull-right textWhite navEditorLato"  id="btnGuardar" style="margin: 5px 0 0 0;">
					<img width="20" height="20" alt="Infomovil" src="<c:url value="/resources/webapp/images/successWhite.png"/>"/> 
					<span class="hidden-xs">Guardar</span></button>		 
					<button type="button" class="btn btn-outlineGreen pull-right textWhite navEditorLato" id="btnEliminar" style="margin: 5px 5px 0 0;">
						<img width="20" height="20" alt="Infomovil" src="<c:url value="/resources/webapp/images/trash.png"/>"/> 
						<span class="hidden-xs">Eliminar</span>
					</button> 
					<button type="button" class="btn btn-outlineGreen pull-right textWhite navEditorLato"  id="btnVerPromo" style="margin: 5px 5px 0 0;">
						<img width="20" height="20" alt="Infomovil" src="<c:url value="/resources/webapp/images/fa-eye.png"/>"/> 
						<span class="hidden-xs">Ver</span>
					</button>		 
					<button type="button" class="btn btn-outlineGreen pull-right textWhite navEditorLato"  id="btnCompartir" style="margin: 5px 5px 0 0;">
						<img width="20" height="20" alt="Infomovil" src="<c:url value="/resources/webapp/images/fa-compartir.png"/>" /> 
						<span class="hidden-xs">Compartir</span>
					</button>
					
					<button type="button" class="btn btn-outlineGreen pull-right textWhite navEditorLato"  id="btnEstiloTemplates" data-toggle="modal"
						data-target="#myModalTempPromo" style="margin: 5px 8px 0 0;">
						<img width="20" height="20" alt="Infomovil"	src="<c:url value="/resources/webapp/images/fa-templates.png"/>"/> 
						<span class="hidden-xs">Estilo</span>
					</button>
					<button type="button" class="btn btn-outlineGreen pull-right textWhite navEditorLato"  id="btnImprimirPromo" 
						 style="margin: 5px 8px 0 0;">
						<img width="20" height="20" alt="Infomovil"	src="<c:url value="/resources/webapp/images/fa-print.png"/>"/> 
						<span class="hidden-xs">Imprimir</span>
					</button>
					
				</div>
						<div class="clear"></div>
	
				<hr/>
							<input type="hidden" id="idPromocion" value="${idOffer}"/>
							<input type="hidden" id="urlPromocion" value="${urlPromocion}"/>
							
							<div class="col-xs-12 col-sm-12 col-md-6"><div class="form-group text-left textBlack">
	    						<label for="exampleInputEmail1">Nombre de la promoción:</label>
	    						<input type="text" class="form-control" name="nombrePromo" id="nombrePromo" value="${titleOffer}">
	 	 					</div>
	 	 					<div class="divider"></div>
	 	 					
	 	 					<div class="form-group text-left textBlack">
				    			<label for="exampleInputPassword1" class="text-left">Descripción de la promoción:</label>
				    			<textarea rows="4"  cols="50"  name="descPromo" id="descPromo" class="form-control">${descOffer}</textarea>
				  			</div>
				  			
				  			<div class="divider"></div>
				  			<div class="form-group text-left textBlack">
				     			<label for="exampleInputEmail1" class="text-left">Información adicional:</label>
				    			<textarea rows="4"  cols="50" class="form-control" name="infoadiPromo" id="infoadiPromo" >${termsOffer}</textarea>
					 	 	</div>	
	 	 					</div>
							<div class="col-xs-12 col-sm-6">
							
							<div class="divider hidden-md hidden-lg"></div>
							<div class="form-group text-left textBlack">
				    			<label for="exampleInputEmail1" class="text-left">Vigencia al:</label>
				    			<input type="text" class="form-control3" id="datepicker" value="${endDateOffer}">
				  			</div>
				  			<div class="clearfix"></div>
				  			<div class="divider"></div>
							<div class="form-group text-left textBlack">
				  			<label class="text-left">¿Cómo redimir?:</label>
				   				<div class="radio">
									<div class="clear"></div>
					  				<label><input type="radio" name="radioPromo" id="r1" value="No especificado" class="radioPromo" checked="checked">No especificado</label>
								</div>
								<div class="radio">
					  				<label><input type="radio" name="radioPromo" id="r2" value="Llámanos" class="radioPromo">Llámanos</label>
								</div>		  
					  			<div class="radio">
					  				<label><input type="radio" name="radioPromo" id="r3" value="Envíanos un e-mail" class="radioPromo">Envíanos un e-mail</label>
								</div>		
					  			<div class="radio">
					  				<label><input type="radio" name="radioPromo" id="r4" value="Visítanos" class="radioPromo">Visítanos</label>
								</div>	    
				  			</div>
							
							</div>
							
							<div class="clear"></div>
							<div id="divError" style="color:red;"></div>
	 	 										
						</div>
						
						
						<!-- /page header -->
						<br /> <br />
					</div>
				</div>
				<!--/Theme showcase -->
			</div>
		</div>
		<!-- /Formulario Promociones -->
		<!--MODAL TEMPLATES-->
	<div id="modalTempPromo"></div>
	<!--/MODAL TEMPLATES-->
		
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
		<script type="text/javascript" src="<c:url value="/resources/js/webapp/imprimirpromo.js"/>"></script>
		<input type="hidden" id="valRadio" value="${redeemOffer}"/>
		<input type="hidden" id="tempPromocion" value="${templatePromo}">
		<input type="hidden" id="tempNombrePromo" value="${nombreSitio}">
		
		<h1>${nombreSitio} -- ${banderaCanal}</h1>
		<script>
			$(document).ready(function(){
				generarSliderPromo();
				});
		</script>
		<c:choose>
			   		<c:when test="${idOffer > 0}">
			   				<script>$(document).ready(function() {	$("#divPublicarPromo").hide(); $("#divPromoPublicada").show(); $activaRadio($("#valRadio").val()); }); </script>
			   		</c:when>
			  		<c:otherwise>
				  			<script>$("#divPublicarPromo").show(); $("#divPromoPublicada").hide();  </script>
			  		</c:otherwise>
			</c:choose>
	 
		<tiles:insertDefinition name="modalGen">
			<tiles:putAttribute name="idModal" value="myModalPromo" />
			<tiles:putAttribute name="tamanioModal"
				value='"modal-dialog modal-lg"' />
			<c:set var="fragmentName" value="modalPromoVP" scope="request" />
		</tiles:insertDefinition>
		<tiles:insertDefinition name="modalGen">
			<tiles:putAttribute name="idModal" value="myModalPromoShare" />
			<tiles:putAttribute name="tamanioModal"
				value='"modal-dialog modal-md"' />
			<c:set var="fragmentName" value="modalPromoShare" scope="request" />
			<c:set var="urlPromo" value="${urlPromocion}" scope="session"/>
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
		<c:set var="urlPromo" value="${ urlPromocion }" scope="session"/>
		
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
