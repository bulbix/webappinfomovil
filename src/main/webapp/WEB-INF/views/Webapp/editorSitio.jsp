<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!doctype html>
<html lang="es">

	<tiles:insertDefinition name="headEditorSitio">
		<tiles:putAttribute name="template" value="${ template }"/>
	</tiles:insertDefinition>	

	<body role="document" data-spy="scroll" data-target=".navbar"
		data-offset="75" id="page-top" onload="autosave()">
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
	
					<span class="navbar-brand" id="logoBAZ" style="display:none;"><img
						src="<c:url value="/resources/webapp/images/logo_baz.png"/>"
						width="103" height="47" alt="Infomovil" /> </span>
	
					<!-- /LOGO BANCO AZTECA - BAZ-->
					
					<!-- LOGO INFOMOVIL - REGISTRO GENERAL-->
	
					<span class="navbar-brand" id="logoGral" style="display:none;"><img
						src="<c:url value="/resources/webapp/images/apple-touch-icon-57x57.png"/>"
						width="50" height="50" alt="Infomovil" /> </span>
	 					
					<span
						class="marLeft navEditor ${colorTexto}">Modo edición 
					</span>
	
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
						<li>
						
						<li class="botonDesPublicar" style="display:none;">
							<a href="#" data-toggle="modal" data-target="#myModalMaps" class="smoothScroll ${colorTexto}">Ubicación
								<img width="20" height="20" alt="Infomovil"	src="<c:url value="/resources/webapp/images/icn_marc_maps${ extensionImg }.png"/>" />
							</a>
						<li>
						
						<li class="botonDesPublicarVid" id="btnVideoLi" style="display:none;">
							<a href="#" data-toggle="modal" data-target="#myModalVideo" class="smoothScroll ${colorTexto}">Video 
								<img width="20" height="20" alt="Infomovil"	src="<c:url value="/resources/webapp/images/ico_ppp_youtube${ extensionImg }.png"/>" />
							</a>
						<li>
						
							<a href="<c:url value="/logout"></c:url>" class="smoothScroll ${colorTexto}"> Cerrar sesión					
								<img width="20"	height="20" alt="Infomovil" src="<c:url value="/resources/webapp/images/fa-sign-out${ extensionImg }.png"/>" />
							</a>
						</li>
								<!-- OCULTAR CUÁNDO SEA - REGISTRO GENERAL-->
					<!--  Mostrar para BAZ -->
					<li class="hidden-xs" id="idRegBAZ" style="display: none;"><a href="#" class="smoothScroll"><img width="30" height="30" alt="Infomovil"
								src="<c:url value="/resources/webapp/images/apple-touch-icon-57x57.png"/>" /></a></li>
					<!--  /Mostrar para BAZ -->
					
					<li id="idRegGral" style="display:none" class="hidden-xs"><a href="#" class="smoothScroll">
					<img width="30" height="30" alt="Infomovil"
								src="<c:url value="/resources/webapp/images/apple-touch-icon-57x57.png"/>" /></a></li>				
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
				<a href="#" data-toggle="modal" data-target="#myModalTemplates" class="col-xs-12 col-sm-6 col-sm-offset-3 col-md-6 col-md-offset-3 col-lg-6 col-lg-offset-3 btn btn-default btn-outline navEditor"><strong>¡Nuevo! </strong> Elige estilo 
					<img width="20" height="20" alt="Infomovil" src="<c:url value="/resources/webapp/images/fa-templates.png"/>" /><br /><span class="text-center _90em">¡Lo puedes cambiar las veces que quieras!</span></a>
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
						<a href="http://${sitioWeb}" target="_blank" class="textBlack">${sitioWeb}</a>
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
											class="img mxw50miw43w100" alt="Contacto" /> <span
											class="dblw100 mxh70 08em"> </span> <span
											class="col-xs-12 08em mar0auto"> <input type="text"
											class="form-control colorA text-center col-xs-11"
											maxlength="100" placeholder="Correo" required="required"
											<c:if test="${not empty correoElectronico}"> value = "${ correoElectronico }" </c:if>
											id="txtCorreo" style="text-transform:lowercase;"/>
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
	<!-- 			<span id="masContenido" class="col-xs-12 textBlack btnsEditor" style="font-size:1.4em; text-align:center; display:none;"><strong>¡Nuevo!</strong> Agrega más contenido</span> -->
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
	 <br /><span id="direccionMap" style="font-size:.85em; display:block; width:90%; overflow:hidden; margin:0 auto"></span>
	 </a>
	 </div>
								<!-- /Botón Nuevo Estilo -->
									
									<div class="clearfix"></div>
							<div class="dividerSmall"></div>
							<!-- /Botón AGREGAR VIDEO --> 
							<div id="idBtnVideo" class="botonDesPublicarVid" style="display:none;">
							<a href="#" data-toggle="modal" data-target="#myModalVideo" class="col-xs-12 col-sm-6 col-sm-offset-3 col-md-6 col-md-offset-3 col-lg-6 col-lg-offset-3 btn btn-default btn-outline navEditor"> 
							<img width="30" height="30" alt="Infomovil" src="<c:url value="/resources/webapp/images/ico_ppp_youtube.png"/>" /> <span id="idOpcionVideo">Agrega un video</span></a> 
							</div>
							<!-- /Botón AGREGAR VIDEO -->
			<!--Publicar TEL-->
	
			<div id="publicarTel" style="display:none;">
				<div class="bgDobleBlack "></div>
				<section class="bgFondo publicar btnsEditor">
					<div class="container whiteBg">
						<div class="row">
							<h3 class=" text-center textBlack ">&iexcl;Ponle un nombre a tu p&aacute;gina web!</h3>
							<span class="col-xs-12 text-center textBlack"><strong>Ej. www.misitio.tel</strong></span>
							<div
								class="form-group col-xs-12 col-sm-12 col-md-6 col-md-offset-3 col-lg-6 col-lg-offset-3">
								<div class="divider"></div>
								<div class="form-group">
									<label class="sr-only" for="exampleInputAmount">www.</label>
									<div class="input-group">
										<div class="input-group-addon">www.</div>
										<input type="text" class="form-control textBlack text-center"
											id="nombreDominioBusqueda" name="nombreDominioBusqueda"
											placeholder="Nombra tu sitio" maxlength="30" style="text-transform:lowercase;" autocomplete="off"/>
										<div class="input-group-addon">.tel</div>
									</div>
									<input type="hidden" id="tipoDominioBusqueda"
										name="tipoDominioBusqueda" value="tel" /> <input type="hidden"
										id="idCatTipoRecursoBusqueda" name="idCatTipoRecursoBusqueda"
										value="1" />
								</div>
								<div class="col-xs-12 col-sm-6">
									<div class="divider hidden-sm hidden-md hidden-lg"></div>
								</div>
							          <div class="col-xs-12 text-center textWhite" style="display:none" id="validacionNombre">
											<img src="<c:url value="/resources/webapp/images/fa-warning.png"/>" width="20" height="20" alt="Alerta" />
									  </div>
								<div
									class="form-group col-xs-12 col-sm-12 col-md-6 col-md-offset-3 col-lg-6 col-lg-offset-3">
									<div class="divider"></div>
									<input type="submit" value="Publicar" id="btnPublicarTel"
										class="btn btn-default btn-outline col-xs-12 text-center textWhite"
										style="display: none;"> <input type="button"
										value="Buscar nombre" id="btnBuscarTel"
										class="btn btn-default btn-outline col-xs-12 text-center textBlack"
										onClick="validaDominio('tel')">
									<div class="clear"></div>
									<div class="divider"></div>
									
								</div>
							</div>
							 <span class="col-xs-12 text-center textBlack"><strong>Se recomienda usar nombres cortos y fáciles de recordar</strong></span>
		      <div class="clear"></div>
		      <div class="divider"></div>
						</div>
					</div>
				</section>
			</div>
			<!--/Publicar TEL-->
		
		<!--/Publicar Recurso-->
		<div id="publicarRecurso" style="display:none;">
		  <div class="bgDobleBlack" ></div>
		  <section class="bgFondo publicar btnsEditor">
		    <div class="container whiteBg" >
		      <div class="row" >
		        <h3 class="text-center textBlack">&iexcl;Ponle un nombre a tu p&aacute;gina web!</h3>
		        <span class="col-xs-12 text-center textBlack"><strong>Ej. www.infomovil.com/misitio</strong></span>
		        
		        <div class="form-group col-xs-12 col-sm-12 col-md-12 col-lg-12">
		        
		          <div class="col-xs-12 col-sm-6">
		          
		            <div class="divider"></div>
		            	<input id="idCatTipoRec" class="form-control text-center" style="height:36px !important; display:block; padding:6px 12px; color:#000!important;cursor:not-allowed" value="www.infomovil.com/" readonly="readonly"/>
		            <div class="divider hidden-sm hidden-md hidden-lg"></div>
		          </div>
		          <div class="col-xs-12 col-sm-6">
		            <div class="divider hidden-xs"></div>
		            <input type="text" placeholder="Nombra tu sitio" maxlength="30" id="nombreDominioRec" name="nombreDominioRec" class="form-control text-center" autocomplete="off" style="text-transform:lowercase;">
		            <input type="hidden" id="tipoDominioRec" name="tipoDominioRec" value="recurso"/>
		          </div>
		          <div class="form-group col-xs-12 col-sm-12 col-md-6 col-md-offset-3 col-lg-6 col-lg-offset-3">
		            <div class="col-xs-12 text-center textBlack" style="display:none" id="validacionNombreRec">
						<img src="<c:url value="/resources/webapp/images/fa-warning.png"/>" width="20" height="20" alt="Alerta" />
					</div>
		            <div class="divider"></div>
		            <input type="button" value="Buscar nombre" id="btnBuscarTel" class="btn btn-default btn-outline col-xs-12 text-center textBlack" onClick="validaDominio('recurso')">
		            <div class="clear"></div>
		            <div class="divider"></div>
		            
		          </div>
		          
		        </div>
		        <span class="col-xs-12 text-center textBlack"><strong>Se recomienda usar nombres cortos y fáciles de recordar</strong></span>
		      <div class="clear"></div>
		      <div class="divider"></div>
		      </div>
		    </div>
		  </section>
		</div>
	<!--Publicar recurso-->
	
	</footer>
			
					
	
			<!--MODAL EXITO-->
			<div id="myModalExito" class="modal fade" tabindex="-1" role="dialog"
				aria-labelledby="myModalLabel" aria-hidden="true">
				<div class="modal-dialog modal-lg">
					<div class="modal-content btnsEditor">
						<div class="modal-header">
							<button type="button" class="close textBlack" data-dismiss="modal"
								aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
							<p class="modal-title"></p>
						</div>
						<div class="modal-body bgWhite">
							<h2
								class="textPurple col-xs-12 col-sm-12 col-md-6 col-md-offset-3 col-lg-6 col-lg-offset-3 text-center">&iexcl;Felicidades!</h2>
							
							<p class="textBlack text-left col-xs-12 col-sm-12 col-md-6 col-md-offset-3 col-lg-6 col-lg-offset-3" style="line-height:1.3em;">El proceso de publicaci&oacute;n tarda unos minutos.</p>
							<p
								class="textBlack col-xs-12 col-sm-12 col-md-6 col-md-offset-3 col-lg-6 col-lg-offset-3 text-left">
								Ya tomaste el primer paso. 
								
							</p>
							<div class="clear"></div>
							<p class="col-xs-12 col-sm-12 col-md-6 col-md-offset-3 col-lg-6 col-lg-offset-3 text-left textBlack" style="line-height:1.3em;">
								Ahora, haz tu página más llamativa:</p>
								
	<table width="70%" border="0" class="text-left col-xs-12 col-sm-12 col-md-6 col-md-offset-3 col-lg-6 col-lg-offset-3 textPurple" >
	<tbody> 
	 
	  <tr> 
	       <td class="text-right"><img width="25" height="25" alt="Infomovil" src="<c:url value="/resources/webapp/images/icn_marc_maps-pp.png"/>"></td> 
	       <td>&nbsp;</td> 
	       <td><strong> Coloca tu ubicación <span class="">con Google Maps</span></strong>	</td> 
	     </tr> 
	 <tr id="imgPlanPro" style="display:none;"> 
	       <td class="text-right"><img width="25" height="25" alt="Infomovil" src="<c:url value="/resources/webapp/images/ico_ppp_youtube-pp.png"/>"> </td> 
	      <td> &nbsp;</td>
	    <td><strong>Agrega video <span class="">de YouTube</span></strong></td>
	    </tr> 
	     <tr> 
	       <td>&nbsp;</td> 
	       <td>&nbsp;</td> 
	       <td>&nbsp;</td> 
	     </tr> 
	   </tbody> 
	 </table> 
							<!-- /Añade más contenido -->
							<div class="clear divider"></div>
						</div>
						<div class="modal-footer">
							<button type="button" 
								class="btn btn-purple text-center col-xs-12 col-sm-12 col-md-6 col-md-offset-3 col-lg-6 col-lg-offset-3"
								data-dismiss="modal">
								<strong>Continuar editando</strong>
							</button>
						</div>
					</div>
				</div>
			</div>
			<!--/MODAL EXITO-->
			
			<!--MODAL FAIL-->
			<div id="myModalFallo" class="modal fade" tabindex="-1" role="dialog"
				aria-labelledby="myModalLabel" aria-hidden="true">
				<div class="modal-dialog modal-lg">
					<div class="modal-content btnsEditor">
						<div class="modal-header">
							<button type="button" class="close" data-dismiss="modal"
								aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
							<p class="modal-title"></p>
						</div>
						<div class="modal-body bgWhite">
							<h2
								class="textBlack col-xs-12 col-sm-12 col-md-6 col-md-offset-3 col-lg-6 col-lg-offset-3 text-center"></h2>
							<h5
								class="textBlack col-xs-12 col-sm-12 col-md-6 col-md-offset-3 col-lg-6 col-lg-offset-3 text-center">
								${msgPublicacion}<br />
							</h5>
							<div class="clear divider"></div>
						</div>
						<div class="modal-footer">
							<button type="button"
								class="btn btn-purple text-center col-xs-12 col-sm-12 col-md-6 col-md-offset-3 col-lg-6 col-lg-offset-3"
								data-dismiss="modal">
								<strong>Aceptar</strong>
							</button>
						</div>
					</div>
				</div>
			</div>
			<!--/MODAL FAIL-->
			
			<!--MODAL Registro-->
			<div id="myModalRegistro" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
				<div class="modal-dialog modal-lg">
					<div class="modal-content btnsEditor">
						<div class="modal-header">
							<button type="button" class="close textBlack" data-dismiss="modal" aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
							<p class="modal-title"></p>
						</div>
						<div class="modal-body bgWhite">
	<!-- 					<h2	class="textBlack text-center col-xs-12 col-sm-12 text-center" style="font-weight:700; "> </h2> -->
						<h3 class="textBlack col-xs-12 col-sm-12 text-center" style="color:#7c41bc !important;" >Bienvenido a Infomovil</h3>
						<div class="clear"></div>
						<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center textBlack"></div>
						<div class="clear"></div>
						<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">		
							<p class="text-left">
								<table width="80%" border="0" class="text-left col-xs-12 col-sm-12 col-md-4 col-md-offset-4 col-lg-4 col-lg-offset-4" style="font-weight:700;">
	  								<tbody>
	  									<tr>
	      									<td><img width="20" height="20" alt="Infomovil"	src="<c:url value="/resources/webapp/images/paso1.png"/>" /></td>
	      									<td>Selecciona un estilo </td>
	      									<td><img width="20" height="20" alt="Infomovil"	src="<c:url value="/resources/webapp/images/imgPaso1.png"/>" /></td>
	    								</tr>
	    								<tr>
	      									<td><img width="20" height="20" alt="Infomovil"	src="<c:url value="/resources/webapp/images/paso2.png"/>" /></td>
	      									<td>Llena tus datos</td>
	      									<td><img width="20" height="20" alt="Infomovil"	src="<c:url value="/resources/webapp/images/imgPaso2.png"/>" /></td>
	    								</tr>
	    								<tr>
	      									<td><img width="20" height="20" alt="Infomovil" src="<c:url value="/resources/webapp/images/paso3.png"/>" /></td>
	      									<td>Pública tu p&aacute;gina web</td>
	      									<td><img width="20" height="20" alt="Infomovil" src="<c:url value="/resources/webapp/images/imgPaso3.png"/>" /></td>
	    								</tr>
	  								</tbody>
								</table>
							</p>
						</div>
						<div class="clear divider"></div>
					</div>
						<div class="modal-footer">
						<button type="button" class="btn btn-purple text-center col-xs-12 col-sm-12 col-md-6 col-md-offset-3 col-lg-6 col-lg-offset-3" data-dismiss="modal">
							<strong>Continuar</strong>
						</button>
						</div>
					</div>
				</div>
			</div>
			<!--/MODAL Registro-->
	
		<!--MODAL MAPS-->
		<div id="myModalMaps" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
		  <div class="modal-dialog modal-lg">         
		    <div class="modal-content">
		      <div class="modal-header">
		        <button type="button" class="close textBlack pull-left btnsEditor " data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button> 
		        <input id="pac-input" class="controls textBlack btnsEditor" type="text" placeholder="Enter a location" style="height: 32px; min-width:280px; max-width:400px; width:100%; color:#000!important;"/>
		        <button type="button" class="btn btn-purple pull-right btnsEditor" id="guardarUbicacion"><img width="20" height="20" alt="Infomovil" src="<c:url value="/resources/webapp/images/successWhite.png"/>" /> <span class="hidden-xs">Guardar</span></button>
		        <div class="pull-right" style="display:inline-block; width:10px; height:20px;"></div>
		        <button type="button" class="btn btn-purple pull-right btnsEditor" id="ubicame"><img width="20" height="20" alt="Infomovil" src="<c:url value="/resources/webapp/images/btn_ubicame.png"/>" /> <span class="hidden-xs">¡Ubícame!</span></button>
		        <div class="pull-right" style="display:inline-block; width:10px; height:20px;"></div>
		         <button type="button" class="btn btn-purple pull-right btnsEditor" id="borrarUbicacion"><img width="20" height="20" alt="Infomovil" src="<c:url value="/resources/webapp/images/trash.png"/>" /></button>
		      </div>
		      <div class="modal-body bgWhite">
		      	
		      	<div style="background:url(<c:url value="/resources/webapp/images/ubicacion.png"/>) center center no-repeat; position:absolute; top: 42%; left:47%; width:50px; height:50px; z-index: 999" class="hidden-xs hidden-sm"></div>
		   		<div id="map-canvas"></div>
		      </div>
		      <div class="modal-footer"></div>
		    </div>
		  </div>
		</div>
		<!--MODAL MAPS-->
	
	<!-- Modal VIDEO-->
	      <div class="modal fade" id="myModalVideo" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
	        <div class="modal-dialog" role="document">
	          <div class="modal-content">
	                    <div class="modal-header">
	                      <button type="button" class="close textBlack pull-left" data-dismiss="modal" aria-label="Close" id="idClose"><span aria-hidden="true">&times;</span></button> 
	                      <button type="button" class="btn btn-purple pull-right" onClick="guardarUrlVideo()"><img width="20" height="20" alt="Infomovil" src="<c:url value="/resources/webapp/images/successWhite.png"/>" /> <span class="hidden-xs">Guardar</span></button>
		        
		        <div class="pull-right" style="display:inline-block; width:10px; height:20px;"></div>
		        <button type="button" class="btn btn-purple pull-right" id="borrarVideo" onClick="borrarVideo()"><img width="20" height="20" alt="Infomovil" src="<c:url value="/resources/webapp/images/trash.png"/>" /></button>
	
	                    </div>
	            <div class="modal-body"> 
	            <div >
	                            <div id= "primero" style=" display:block; height:100px;">
	                            <div style="display:block; height:30px; width:100%;"></div>
	                            <div style="display:block; margin:0 auto; width:80%;">
	                                  Busca tu video: <input type="text" name="fname" id="algo">
	                                  <div class="divider hidden-sm hidden-md hidden-lg"></div>
	                                  <input type="button" value="Buscar" id="button" class="btn btn-purple">
	                                  
	                                  </div>
	                                  <div>
	                                  </div>
	                             </div><!--Fin del div primero -->
	
	                            <div id="segundo">
	                                   <button type="button" id="idRegresar" class="btn btn-purple pull-left">Regresar</button>
	                                   <div class="clear"></div>
	                                   <div style="width:100%; height:10px; display:block"></div>
	                                   
	                                    <ul id="lista" style="list-style:none; margin:0 0 0 -30px;"></ul>
	                            </div><!--Fin del div segundo -->
	
	                            <div id="tercero">
	                                <div id="playerVideo">
	                                   <iframe src=""  id="playerVideoFrame" style="width:80% !important; height:auto; min-height:200px; display:block; min-width:200px; margin: 0 auto; border:0"></iframe>
	                                </div>
	                            </div><!--Fin del div tercero -->   
	</div>
	                    <div class="modal-footer">
	                      <!-- <button type="button" class="btn btn-default" data-dismiss="modal" >Close</button> -->
	                      <div class="divider"></div>
	                    </div>
	          </div>
	        </div>
	      </div>
	     </div>
	<!-- Modal VIDEO-->
	      
		<!--MODAL TEMPLATES-->
		<div id="modalTemplates"></div>
		<!--/MODAL TEMPLATES-->
			
			<!-- Scroll to Top Button (Only visible on small and extra-small screen sizes) -->
			<div class="scroll-top page-scroll visible-xs visble-sm">
				<a class="btn" href="#page-top"> <img width="20" height="20"
					alt="Infomovil"
					src="http://landing.infomovil.com/webapp/templates/${ template }/images/fa-chevron-up.png" />
					Subir
				</a>
			</div>
			<!--/Footer-->
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
			<script
				src="<c:url value="/resources/webapp/js/ie10-viewport-bug-workaround.js"/>"></script>
			<!-- bxSlider Javascript file -->
			<script
				src="<c:url value="/resources/webapp/js/jquery.bxslider.min.js"/>"></script>
			<script
				src="<c:url value="/resources/webapp/js/jqBootstrapValidation.js"/>"></script>
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
	// jQuery for page scrolling feature - requires jQuery Easing plugin
	// Highlight the top nav as scrolling occurs
	$('body').scrollspy({
	    target: '.navbar-fixed-top'
	});
	// Closes the Responsive Menu on Menu Item Click
	$('.navbar-collapse ul li a').click(function() {
	    $('.navbar-toggle:visible').click();
	});
	
	</script>

<%-- 	<tiles:insertDefinition name="validacionEtiquetas"></tiles:insertDefinition> --%>
	<script>
	<c:choose> 
		<c:when test="${tipoPublica == 'tel'}">
			$("#publicarTel").css("display", "block");					
		</c:when>
		<c:otherwise>
				$("#publicarRecurso").css("display", "block");			
		</c:otherwise>
	</c:choose>

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
			$("#publicarTel").css("display", "none");
			$("#publicarRecurso").css("display", "none");
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
