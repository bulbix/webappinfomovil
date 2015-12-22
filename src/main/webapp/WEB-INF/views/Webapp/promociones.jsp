<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!doctype html>
<html lang="es" ng-app="InfomovilVolantes">

<meta HTTP-EQUIV="CACHE-CONTROL" CONTENT="NO-CACHE">
<meta HTTP-EQUIV="PRAGMA" CONTENT="NO-CACHE">

<tiles:insertDefinition name="headEditorSitio">
	<tiles:putAttribute name="template" value="${ template }" />
</tiles:insertDefinition>

<link
	href="<c:url value="/resources/webapp/js/datepicker/datepicker.css"/>"
	rel="stylesheet" />
<body role="document" data-spy="scroll" data-target=".navbar"
	data-offset="75" id="page-top">

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
				</span> <span class="marLeft navEditor ${colorTexto}">Mis Volantes</span>
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
					<li><a href="" class="smoothScroll ${colorTexto}"> <img
							width="20" height="20" alt="Infomovil"
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
	<div ng-controller="VolantesController as volantesCtrl">
		<div class="seccTop bgBlack">



			<div class="col-xs-12 col-sm-12">
				<!-- Botones sin publicar -->
				<div ng-show="volantesCtrl.muestraPublicarPromo">

					<div class="col-xs-2 col-sm-2 text-center">
						<button type="button"
							class=" btn btn-outlineGreen textWhite navEditorLato"
							ng-click="volantesCtrl.vistaPrevia()"
							style="margin: 5px 8px 0 0;">
							<img width="20" height="20" alt="Infomovil"
								src="<c:url value="/resources/webapp/images/fa-eye.png"/>" /> <span
								class="hidden-xs">Vista Previa</span>
						</button>
					</div>
					<div class="col-xs-2 col-sm-2 text-center">
						<button type="button"
							class="btn btn-outlineGreen  textWhite navEditorLato"
							style="margin: 5px 8px 0 0;" data-toggle="modal"
							data-target="#myModalTempPromo">
							<img width="20" height="20" alt="Infomovil"
								src="<c:url value="/resources/webapp/images/fa-templates.png"/>" />
							<span class="hidden-xs">Estilo</span>
						</button>
					</div>

					<div class="hidden-xs col-sm-1"></div>

					<div class="col-xs-6 col-sm-5 ">
						<div class=" form-group" style="padding:10px 0;">
							<div class="control-group">
								<label class="control-label hidden-xs col-sm-5"><div style="padding:8px 0;">promo.mobileinfo.io/</div></label>
								<div class="controls col-xs-12 col-sm-7 reset">
									<input type="text" class="form-control text-left"
										maxlength="128" placeholder="Nombre de tu volante"
										onfocus="this.placeholder = ''"
										onblur="this.placeholder = 'Nombre de tu volante'"
										required="required" id="txtNombreVolante" />
									<p class="help-block"></p>
								</div>
							</div>
						</div>
					</div>

					<div class="col-xs-2 col-sm-2 text-center">
						<button type="button"
							class="btn btn-outlineGreen textWhite navEditorLato"
							ng-click="volantesCtrl.publicarVolante()" style="margin: 5px 0;">
							<img width="20" height="20" alt="Infomovil"
								src="<c:url value="/resources/webapp/images/successWhite.png"/>" />
							<span class="hidden-xs">Publicar</span>
						</button>
					</div>



				</div>
				<!-- /Botones sin publicar -->
				<!-- Botones publicados -->
				<div ng-show="volantesCtrl.muestraPromoPublicada">
				<button type="button"
									class="btn btn-outlineGreen textWhite navEditorLato"
									id="btnEstiloTemplates" data-toggle="modal"
									data-target="#myModalTempPromo" style="margin: 5px 8px 0 0;">
									<img width="20" height="20" alt="Infomovil"
										src="<c:url value="/resources/webapp/images/fa-templates.png"/>" />
									<span class="hidden-xs">Estilo</span>
								</button>
								
								<button type="button"
									class="btn btn-outlineGreen textWhite navEditorLato"
									ng-click="volantesCtrl.guardarPromocion()"
									style="margin: 5px 0 0 0;">
									<img width="20" height="20" alt="Infomovil"
										src="<c:url value="/resources/webapp/images/successWhite.png"/>" />
									<span class="hidden-xs">Guardar</span>
								</button>
								<button type="button"
									class="btn btn-outlineGreen  textWhite navEditorLato"
									ng-click="volantesCtrl.eliminarVolante()"
									style="margin: 5px 5px 0 0;">
									<img width="20" height="20" alt="Infomovil"
										src="<c:url value="/resources/webapp/images/trash.png"/>" /> <span
										class="hidden-xs">Eliminar</span>
								</button>
								<button type="button"
									class="btn btn-outlineGreen  textWhite navEditorLato"
									ng-click="volantesCtrl.verPromoActiva()"
									style="margin: 5px 5px 0 0;">
									<img width="20" height="20" alt="Infomovil"
										src="<c:url value="/resources/webapp/images/fa-eye.png"/>" />
									<span class="hidden-xs">Ver</span>
								</button>
								<button type="button"
									class="btn btn-outlineGreen  textWhite navEditorLato"
									ng-click="volantesCtrl.compartirPromo()"
									style="margin: 5px 5px 0 0;">
									<img width="20" height="20" alt="Infomovil"
										src="<c:url value="/resources/webapp/images/fa-compartir.png"/>" />
									<span class="hidden-xs">Compartir</span>
								</button>
								
								<button type="button"
									class="hidden-xs hidden-sm btn btn-outlineGreen  textWhite navEditorLato"
									id="btnImprimirPromo" style="margin: 5px 8px 0 0;">
									<span><img width="20" height="20" alt="Infomovil"
										src="<c:url value="/resources/webapp/images/fa-print.png"/>" />
										Imprimir</span>
								</button>
								<button type="button"
									class="hidden-md hidden-lg btn btn-outlineGreen  textWhite navEditorLato"
									id="btnImprimirPromoMovil" style="margin: 5px 0 0 0;">
									<span><img width="20" height="20" alt="Infomovil"
										src="<c:url value="/resources/webapp/images/fa-pdf.png"/>" />
									</span> <span>PDF/Imagen</span>

								</button>

							</div>
				<!-- /Botones publicados -->

			</div>


		</div>

		<!-- /Botón Nuevo Estilo -->
		<!-- Formulario Promociones -->
		<div class="container">
			<div class="col-xs-12 reset">

				<!--Theme showcase -->
				<div class=" navEditor" role="main" id="intro">
					<!-- Main jumbotron for a primary marketing message or call to action -->
					<div>
						<!-- page header <input type="text" id="checkedRedimir" value=""/>-->
						<div class=" text-center"
							style="border-radius:15px; background:url(<c:url value="/resources/webapp/images/bgWhTra.png"/>); padding:10px;">



							<div class="clear"></div>

							
							<div class="clear"></div>

							
							<div ng-if="volantesCtrl.volantes.length == 0">
								<div>
									<div ng-hide="true" id="idPromocion"></div>
									<div ng-hide="true" id="urlPromocion"></div>

									<div class="col-xs-12 col-sm-12 col-md-6">
										<div class="form-group text-left textBlack">
											<label for="exampleInputEmail1">Nombre de la
												promoción:</label> <input type="text" class="form-control"
												id="nombrePromo" value="">
										</div>
										<div class="divider"></div>

										<div class="form-group text-left textBlack">
											<label for="exampleInputPassword1" class="text-left">Descripción
												de la promoción:</label>
											<textarea rows="4" cols="50" name="descPromo" id="descPromo"
												class="form-control"></textarea>
										</div>

										<div class="divider"></div>
										<div class="form-group text-left textBlack">
											<label for="exampleInputEmail1" class="text-left">Información
												adicional:</label>
											<textarea rows="4" cols="50" class="form-control"
												name="infoadiPromo" id="infoadiPromo"></textarea>
										</div>
									</div>
									<div class="col-xs-12 col-sm-6">

										<div class="divider hidden-md hidden-lg"></div>
										<div class="form-group text-left textBlack">
											<label for="exampleInputEmail1" class="text-left">Vigencia
												al:</label> <input type="text" class="form-control3 datepicker"
												id="datepicker" value="">
										</div>
										<div class="clearfix"></div>
										<div class="divider"></div>
										<div class="form-group text-left textBlack">
											<label class="text-left">¿Cómo redimir?:</label>
											<div class="radio">
												<div class="clear"></div>
												<label><input type="radio" name="radioPromo" id="r1"
													value="No especificado" class="radioPromo"
													ng-checked="1==1">No especificado</label>
											</div>
											<div class="radio">
												<label><input type="radio" name="radioPromo" id="r2"
													value="Llámanos" class="radioPromo">Llámanos</label>
											</div>
											<div class="radio">
												<label><input type="radio" name="radioPromo" id="r3"
													value="Envíanos un e-mail" class="radioPromo">Envíanos
													un e-mail</label>
											</div>
											<div class="radio">
												<label><input type="radio" name="radioPromo" id="r4"
													value="Visítanos" class="radioPromo">Visítanos</label>
											</div>
										</div>
									</div>
								</div>
							</div>

							<div ng-repeat="item in volantesCtrl.volantes"
								style="margin-top: 10px;">

								<div id="volante">
									<div ng-hide="true" id="idPromocion">{{item.idOffer}}</div>
									<div ng-hide="true" id="urlPromocion">{{item.urlPromocion}}</div>
									<div ng-hide="true" id="tempPromocion">{{item.template}}</div>

									<div class="col-xs-12 col-sm-12 col-md-6">
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
										<div class="form-group text-left textBlack">
											<label for="exampleInputEmail1" class="text-left">Vigencia
												al:</label> <input type="text" class="form-control3 datepicker"
												id="datepicker" value="{{item.endDateOffer}}">
										</div>
										<div class="clearfix"></div>
										<div class="divider"></div>
										<div class="form-group text-left textBlack">
											<label class="text-left">¿Cómo redimir?:
												{{item.redeemOffer}}</label>
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
									</div>
								</div>

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
							<div class="clear"></div>
							<div id="divError" ng-show="volantesCtrl.muestraDivError"
								style="color: red;"></div>
						</div>

						<!-- /page header -->
						<br /> <br />
						<div id='myModalTempPromo' class='modal fade' tabindex='-1'
							role='dialog' aria-labelledby='myModalLabel' aria-hidden='true'>
							<div class='modal-dialog modal-md'>
								<div class='modal-content'>
									<div class='modal-header'>
										<button type='button' class='close textBlack pull-left'
											data-dismiss='modal' aria-label='Close'>
											<span aria-hidden='true'>&times;</span>
										</button>
										<button type='button'
											class='btn btn-purple pull-right txtBtnEditor'
											ng-click="volantesCtrl.actualizaPlantillaVolante()">Aplicar
											estilo</button>
									</div>
									<div class='modal-body contenidoSlider'></div>
									<div class='modal-footer'></div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<!--/Theme showcase -->
			</div>
		</div>
		<!-- /Formulario Promociones -->

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

	<script
		src="<c:url value="/resources/webapp/js/datepicker/jquery.ui.core.js"/>"></script>
	<script
		src="<c:url value="/resources/webapp/js/datepicker/jquery.ui.datepicker.js"/>"></script>
	<script src="<c:url value="/resources/js/webapp/promociones.js"/>"></script>
	<script src="<c:url value="/resources/js/webapp/volantes.js"/>"></script>
	<script
		src="<c:url value="/resources/js/webapp/InfomovilServices/volantesService.js"/>"></script>
	<script
		src="<c:url value="/resources/js/webapp/InfomovilServices/mensajesService.js"/>"></script>

	<c:choose>
		<c:when test="${idOffer > 0}">
			<script>
				$(document).ready(function() {
					$("#divPublicarPromo").hide();
					$("#divPromoPublicada").show();
					$activaRadio($("#valRadio").text());
				});
			</script>
		</c:when>
		<c:otherwise>
			<script>
				$("#divPublicarPromo").show();
				$("#divPromoPublicada").hide();
			</script>
		</c:otherwise>
	</c:choose>

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
