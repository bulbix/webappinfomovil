<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>
<%@ taglib uri="http://www.springframework.org/tags" prefix="spring"%>

<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!doctype html>
<html lang="es" ng-app="InfomovilVolantes">

<meta HTTP-EQUIV="CACHE-CONTROL" CONTENT="NO-CACHE">
<meta HTTP-EQUIV="PRAGMA" CONTENT="NO-CACHE">

<tiles:insertDefinition name="headEditorSitio">
	<tiles:putAttribute name="template" value="CoverpageMultiproducto" />
</tiles:insertDefinition>

<link href="<c:url value="/resources/webapp/js/datepicker/datepicker.css"/>" rel="stylesheet" />
<link href="<c:url value="/resources/webapp/js/bower_components/angular-material/angular-material.min.css"/>" rel="stylesheet" />

<body role="document" data-spy="scroll" data-target=".navbar"
	data-offset="75" id="page-top" ng-controller="VolantesController as volantesCtrl">
	
	

	<div ng-init="planPro = '${planPro}'">
		<div>{{volantesCtrl.init(planPro)}}</div>
	</div>
	
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
				</span> <span class="marLeft navEditor ${colorTexto}" style="margin-top:15px;">MIS VOLANTES</span>
				<!-- /LOGO INFOMOVIL - REGISTRO GENERAL-->
			</div>
			<div id="navbar" class="navbar-collapse collapse text-right">
				<ul class="nav navbar-nav navbar-right">
<li> <a href=""><img src=<c:url value="/resources/webapp/images/fa-lang${ extensionImg }.png"/> width="20" height="20" alt="Infomovil" class="animated fadeIn"/> English</a></li>

					<li class="dropdown">
						<a href="<c:url value="/infomovil/miCuenta"></c:url>" 
							class="dropdown-toggle smoothScroll ${colorTexto}" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
							<img width="20" height="20" alt="Infomovil"	src="<c:url value="/resources/webapp/images/fa-user${ extensionImg }.png"/>" />
							Mi Cuenta <span class="caret"></span>
						</a>	
							<ul class="dropdown-menu navbar-${ claseCss } ${colorTexto} text-right">
								<li><a href="<c:url value="/infomovil/miCuenta"></c:url>"
 									class="smoothScroll borderInicial ${colorTexto}">Mis productos 
 									<img width="20" height="20" alt="Infomovil"
 										src="<c:url value="/resources/webapp/images/fa-products${ extensionImg }.png"/>" /></a>
 								</li>

									<li><a href="#" data-toggle="modal" data-target="#myModalMsjPN"
	 									class="smoothScroll  borderFin ${colorTexto}">Mis mensajes
	 									<img width="20" height="20" alt="Infomovil"
	 									src="<c:url value="/resources/webapp/images/fa-messages${ extensionImg }.png"/>" /></a>
	 								</li>
 								
							</ul>
						</li>
					<li class="dropdown "><a href="#" class="dropdown-toggle ${colorTexto}" 
						data-toggle="dropdown" role="button" aria-haspopup="true"
						aria-expanded="false">
						<img width="20" height="20"
							alt="Infomovil"
							src="<c:url value="/resources/webapp/images/fa-pencil${ extensionImg }.png"/>" />Mi
							Contenido <span class="caret"></span></a>
						<ul class="dropdown-menu navbar-${ claseCss } ${colorTexto} text-right" ng-show="volantesCtrl.muestraPromoPublicada">
							<li class=" borderInicial borderFin" ><a
								href="#" data-toggle="modal" data-target="#myModalMaps"
								class="smoothScroll ${colorTexto}">
									Ubicación <img width="20"
									height="20" alt="Infomovil"
									src="<c:url value="/resources/webapp/images/icn_marc_maps${ extensionImg }.png"/>" /></a></li>
									
						</ul></li>
						
					<li><a href="" class="smoothScroll ${colorTexto}" ng-click="volantesCtrl.actualizaProducto()"> <img
							width="20" height="20" alt="Infomovil"
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
			<div class="container">
				<!-- Botones sin publicar -->
				<div class="muestraPublicarPromo" style="display:none;">

					<div class="col-xs-2 col-sm-2 text-center reset"></div>
					<div class="col-xs-2 col-sm-2 text-center reset muestraPromoPublicada" style="display:none;">
						<a href="<c:url value="/infomovil/estiloVolante"></c:url>" 
							class="btn btn-outlineGreen  textWhite navEditorLato"
							style="margin: 5px 8px 0 0;" >
							<img width="20" height="20" alt="Infomovil"
								src="<c:url value="/resources/webapp/images/fa-templates.png"/>" />
							<span class="hidden-xs">Elige Estilo</span>
						</a>
					</div>					

					<div class="col-xs-8 col-sm-8 reset">
						<div class=" form-group" style="padding:6px 0;">
							<div class="control-group">
								<label class="control-label hidden-xs hidden-sm col-md-4 navEditor"><div style="padding:4px 0; text-align:right">promo.mobileinfo.io/</div></label>
								<div class="controls col-xs-12 col-sm-8  pull-right reset">
									<input type="text" class="form-control text-left "
										maxlength="128" placeholder="Nombre de tu volante"
										onfocus="this.placeholder = ''"
										onblur="this.placeholder = 'Nombre de tu volante'"
										required="required" id="txtNombreVolante" />
									<p class="help-block"></p>
								</div>
							</div>
						</div>
					</div>

					<div class="col-xs-2 col-sm-2 text-center reset">
						<button type="button"
							class="btn btn-purple textWhite navEditorLato"
							ng-click="volantesCtrl.publicarVolante()" style="margin: 5px 0;" id="btnPublicar">
							<img width="20" height="20" alt="Infomovil"
								src="<c:url value="/resources/webapp/images/successWhite.png"/>" />
							<span class="hidden-xs">Publicar</span>
						</button>
					</div>

				</div>
				<!-- /Botones sin publicar -->
				<!-- Botones publicados -->
				<div class="muestraPromoPublicada" style="display:none;">
				
					<div class="col-xs-2 col-sm-2 text-center reset">
						<a href="<c:url value="/infomovil/estiloVolante"></c:url>" 
							class="btn btn-outlineGreen  textWhite navEditorLato"
							style="margin: 5px 8px 0 0;" >
							<img width="20" height="20" alt="Infomovil"
								src="<c:url value="/resources/webapp/images/fa-templates.png"/>" />
							<span class="hidden-xs">Elige Estilo</span>
						</a>
					</div>
								
					<div class="col-xs-2 col-sm-2 text-center reset">
						<button type="button"
							class="btn btn-outlineGreen  textWhite navEditorLato"
							ng-click="volantesCtrl.verPromoActiva()"
							style="margin: 5px 5px 0 0;">
							<img width="20" height="20" alt="Infomovil"
								src="<c:url value="/resources/webapp/images/fa-eye.png"/>" />
							<span class="hidden-xs">Ver volante</span></span>
						</button>
					</div>
								
					<div class="col-xs-2 col-sm-2 text-center reset">
						<button type="button"
							class="btn btn-outlineGreen  textWhite navEditorLato"
							ng-click="volantesCtrl.compartirPromo()"
							style="margin: 5px 5px 0 0;">
							<img width="20" height="20" alt="Infomovil"
								src="<c:url value="/resources/webapp/images/fa-compartir.png"/>" />
							<span class="hidden-xs">Compartir</span>
						</button>
					</div>
								
					<div class="hidden-xs hidden-sm col-xs-2 col-sm-2 text-center reset" >
						<button type="button"
							class=" btn btn-outlineGreen  textWhite navEditorLato"
							ng-click="volantesCtrl.imprimirPromo()"
							style="margin: 5px 8px 0 0;">
							<span><img width="20" height="20" alt="Infomovil"
								src="<c:url value="/resources/webapp/images/fa-print.png"/>" />
								Imprimir</span>
						</button>
					</div>
								
					<div class="hidden-md hidden-lg col-xs-2 col-sm-2 text-center reset">
						<button type="button"
							class=" btn btn-outlineGreen  textWhite navEditorLato"
							onclick="descargarArchivo('pdf')" style="margin: 5px 0 0 0;">
							<span><img width="20" height="20" alt="Infomovil"
								src="<c:url value="/resources/webapp/images/fa-pdf.png"/>" />
							</span> <span class="hidden-xs">PDF/Imagen</span></span>
	
						</button>
					</div>
								
					<div class="col-xs-2 col-sm-2 text-center reset">
						<button type="button"
							class="btn btn-outlineGreen  textWhite navEditorLato"
							ng-click="volantesCtrl.eliminarVolante()"
							style="margin: 5px 5px 0 0;">
							<img width="20" height="20" alt="Infomovil"
								src="<c:url value="/resources/webapp/images/trash.png"/>" /> <span
								class="hidden-xs">Eliminar</span>
						</button>
					</div>
								
					<div class="col-xs-2 col-sm-2 text-center reset">
						<button type="button"
							class="btn btn-purple textWhite navEditorLato"
							ng-click="volantesCtrl.guardarPromocion()"
							style="margin: 5px 0 0 0;">
							<img width="20" height="20" alt="Infomovil"
								src="<c:url value="/resources/webapp/images/ico_actualizar.png"/>" />
							<span class="hidden-xs">Actualizar</span>
						</button>
					</div>

				</div>
				<!-- /Botones publicados -->
			</div>
		</div>

		<!-- /Botón Nuevo Estilo -->
		<!-- Formulario Promociones -->
		<div class="container  " >
			<div class="col-xs-12 reset">

				<!--Theme showcase -->
				<div class="page-header text-center" role="main" id="intro">
					<!-- Main jumbotron for a primary marketing message or call to action -->
						<!-- page header <input type="text" id="checkedRedimir" value=""/>-->
						<div class="clear"></div>
						<div class=" text-center" >
							<div class="clearfix"></div>
							<div id="divErrorImg" style="display:none;" style="margin: 0 0 20px 0;"><img src="<c:url value="/resources/webapp/images/fa-warning-red.png"/>" width="20" height="20" alt="Alerta"  />
							<div id="divError" style="color: red;"></div></div>
							
							<div class="clear"></div>
												
							<div ng-hide="true" id="idTelContactoVolante"></div>
							<div ng-hide="true" id="idCelContactoVolante"></div>
							<div ng-hide="true" id="idEmailContactoVolante"></div>	

							<div ng-repeat="item in volantesCtrl.volantes" style="margin-top: 10px;" style="display:none;">

								<div ng-hide="true" id="idPromocion">{{item.idOffer}}</div>
								<div ng-hide="true" id="urlPromocion">{{item.urlPromocion}}</div>
								<div ng-hide="true" id="tempPromocion">{{item.template}}</div>
									
								<div id="volante" class="navEditorLato">

									<div class="col-xs-12 col-sm-6 col-md-6">
										<div class="form-group text-left textBlack">
											<label for="exampleInputEmpresa">Tu empresa:</label> <input type="text" class="form-control"
												id="nombreEmpresaPromo" value="{{item.empresa}}">
										</div>
										<div class="divider"></div>
										<div class="form-group text-left textBlack">
											<label for="exampleInputEmail1">Nombre de la
												promoción:</label> <input type="text" class="form-control"
												id="nombrePromo" value="{{item.titleOffer}}">
										</div>
										<div class="divider"></div>

										<div class="form-group text-left textBlack">
											<label for="exampleInputPassword1" class="text-left">Descripción
												de la promoción:</label>
											<textarea rows="4" cols="50" name="descPromo" id="descPromo"
												class="form-control">{{item.descOffer}}</textarea>
										</div>

										<div class="divider"></div>
										<div class="form-group text-left textBlack">
											<label for="exampleInputEmail1" class="text-left">Información
												adicional:</label>
											<textarea rows="4" cols="50" class="form-control"
												name="infoadiPromo" id="infoadiPromo">{{item.termsOffer}}</textarea>
										</div>
									</div>
									<div class="col-xs-12 col-sm-6">
										<div class="divider hidden-md hidden-lg"></div>
										<div class="form-group text-left textBlack col-xs-11 reset">
											<label for="exampleInputEmail1" class="text-left">Vigencia
												al:</label>
											<md-content style="margin:0 0 0 -17px;">
												<md-datepicker ng-model="volantesCtrl.fechaVigencia" md-placeholder="Vigencia"/>
											</md-content>

										</div>
										<div class="clearfix"></div>
										<div class="divider"></div>
										
										<div class="form-group text-left textBlack">
											
												<div class="form-group text-left textBlack">
													<label for="exampleInputEmail1" class="text-left">Teléfono</label> 
													<input type="text" id="telContactoVolante" value="" class="textBlack form-control" placeholder="10 digitos"/>
												</div>
												<div class="clearfix"></div>
												<div class="divider"></div>
												<div class="form-group text-left textBlack">
													<label for="exampleInputEmail1" class="text-left">Celular</label> 
													<input type="text" id="celContactoVolante" value="" class="textBlack form-control" placeholder="10 digitos"/>
												</div>
												<div class="clearfix"></div>
												<div class="divider"></div>
												<div class="form-group text-left textBlack">
													<label for="exampleInputEmail1" class="text-left lowCase">E-mail</label> 
													<input type="text" id="emailContactoVolante" value="" class="textBlack form-control lowCase" placeholder="mail@mail.com"/>
												</div>
											
												
										</div>		
										<div class="clearfix"></div>
										<div class="divider"></div>
										<div class="form-group text-left textBlack">
											<label class="text-left">¿Cómo redimir?: </label>
											<div class="radio">
												<div class="clear"></div>
												<label><input type="radio" name="radioPromo" id="r1"
													value="No especificado" class="radioPromo"
													ng-checked="item.redeemOffer == 'No especificado'">No
													especificado</label>
											</div>
											<div class="radio">
												<label><input type="radio" name="radioPromo" id="r2"
													value="Llámanos" class="radioPromo"
													ng-checked="item.redeemOffer == 'Llámanos'">Llámanos</label>
											</div>
											<div class="radio">
												<label><input type="radio" name="radioPromo" id="r3"
													value="Envíanos un e-mail" class="radioPromo"
													ng-checked="item.redeemOffer == 'Envíanos un e-mail'">Envíanos
													un e-mail</label>
											</div>
											<div class="radio">
												<label><input type="radio" name="radioPromo" id="r4"
													value="Visítanos" class="radioPromo"
													ng-checked="item.redeemOffer == 'Visítanos'">Visítanos</label>
											</div>
										</div>
										<div class="clearfix"></div>
										<div class="divider"></div>
										
										
									</div>
								</div>

								
							</div>
							
								<!-- /Botón MAPS -->
								<div class="clear"></div>
								
										<div class="col-xs-12 muestraPromoPublicada" style="display:none;">
											<a href="#" data-toggle="modal" data-target="#myModalMaps"
												class="col-xs-12 col-sm-6 btn btn-default btn-outline navEditor text-left textBlack">
												<img width="25" height="25" alt="Infomovil"
												src="<c:url value="/resources/webapp/images/icn_marc_maps-bk.png"/>" />
												<span id="idOpcionUbicacion">Colocar mi Ubicación</span> <br /> <span
												id="direccionMap" class="directionMap"></span>
												<div class="clearfix"></div>
											</a>
										</div>
										<div class="divider"></div>
										</div>
										<div class="col-xs-12 col-sm-6 col-md-6"></div>
							
							<div class="clear"></div>
							</div>
							
						</div>
						<!-- /page header -->
						<br /> <br />
						
						<tiles:insertDefinition name="modalGen">
									<tiles:putAttribute name="idModal" value="myModalPromoShare" />
									<tiles:putAttribute name="tamanioModal"
										value='"modal-dialog modal-md"' />
									<c:set var="fragmentName" value="modalPromoShare"
										scope="request" />
									<c:set var="urlPromo" value="{{item.urlPromocion}}"
										scope="session" />
								</tiles:insertDefinition>
					</div>
				</div>
				<!--/Theme showcase -->
				
		<input type="hidden" id="tempBanderaPromo" value="${banderaCanal}">
		<input type="hidden" id="tempNombrePromo" value="${nombreSitio}">
	<!-- Bootstrap core JavaScript
		    ================================================== -->
		<!-- Placed at the end of the document so the pages load faster -->
		
		<script src="<c:url value="/mensajes/stringsIdioma.js"/>"></script>
		
		<script src="<c:url value="/resources/webapp/js/datepicker/jquery-1.10.2.js"/>"></script>
		<script src="<c:url value="/resources/webapp/js/jquery.min.js"/>"></script>
		<script src="<c:url value="/resources/webapp/js/datepicker/jquery.ui.core.js"/>"></script>
		<script src="<c:url value="/resources/webapp/js/datepicker/jquery.ui.datepicker.js"/>"></script>
		<script src="<c:url value="/resources/webapp/js/angular.min.js"/>"></script>
		
		<script src="<c:url value="/resources/webapp/js/bower_components/angular-animate/angular-animate.min.js"/>"></script>
		<script src="<c:url value="/resources/webapp/js/bower_components/angular-aria/angular-aria.min.js"/>"></script>
		<script src="<c:url value="/resources/webapp/js/bower_components/angular-messages/angular-messages.min.js"/>"></script>
		<script src="<c:url value="/resources/webapp/js/bower_components/angular-material/angular-material.min.js"/>"></script>
		<script src="<c:url value="/resources/webapp/js/bower_components/moment/min/moment.min.js"/>"></script>
		<script src="<c:url value="/resources/webapp/js/bower_components/angular-momentjs/angular-momentjs.min.js"/>"></script>
			
		<script src="<c:url value="/resources/webapp/js/bootstrap.js"/>"></script>
		<script src="<c:url value="/resources/webapp/js/docs.min.js"/>"></script>
		<script src="<c:url value="/resources/webapp/js/smoothscroll.js"/>"></script>
		<script src="<c:url value="/resources/webapp/js/ie10-viewport-bug-workaround.js"/>"></script>
		<!-- bxSlider Javascript file -->
		<script	src="<c:url value="/resources/webapp/js/jquery.bxslider.min.js"/>"></script>
		<script	src="<c:url value="/resources/webapp/js/bootstrap-dialog.min.js"/>"></script>
		<script src="<c:url value="/resources/webapp/js/jquery.blockUI.js"/>"></script>
		<script src="<c:url value="/resources/js/webapp/util.js"/>"></script>
		<script src="<c:url value="/resources/js/webapp/volantes.js"/>"></script>
		<script src="<c:url value="/resources/js/webapp/InfomovilServices/mensajesService.js"/>"></script>
		<script src="<c:url value="/resources/js/webapp/InfomovilServices/volantesService.js"/>"></script>
		<script src="<c:url value="/resources/js/webapp/mapaAngular.js"/>" ></script>	
		
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
		
		<!--MODAL MAPA-->
	<tiles:insertDefinition name="modalMapFragment">
		<tiles:putAttribute name="idModal" value="myModalMaps" />
		<tiles:putAttribute name="tamanioModal" value='"modal-dialog modal-lg"'/>
		<tiles:putAttribute name="tipo" value='volante'/>
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
		
		<h1><spring:message code="error.loginFailed" /></h1>
	</body>
	
</html>
