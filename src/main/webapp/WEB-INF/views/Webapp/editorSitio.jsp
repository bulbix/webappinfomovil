<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!doctype html>
<html lang="es">
<head itemscope="" itemtype="http://schema.org/WebSite">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<meta charset="UTF-8" />
<meta name="title" content="Infomovil" />
<meta name="author" content="Infomovil" />
<meta name="designer" content="Infomovil" />
<meta name="description"
	content="Infomovil. Nunca antes ha sido tan f&aacute;cil crear un sitio web. Con Infomovil crea tu sitio f&aacute;cil, r&aacute;pido y gratuito en 5 minutos." />
<meta name="keywords"
	content="emprendedor, PyMEs, negocios PyMEs, sitio web, p&aacute;gina web, productividad, utilidades, web, m&oacute;vil, infomovil, micronegocio, crea tu sitio, mobile friendly, personal, gratis" />
<meta name="revisit-after" content="1 days" />
<meta name="rating" content="general" />
<meta name="copyright" content="Infomovil" />
<meta name="name" content="Infomovil" />
<meta property="og:title" content="Infomovil" />
<meta property="og:type" content="website" />
<meta property="og:description"
	content="Infomovil. Nunca antes ha sido tan f&aacute;cil crear un sitio web. Con Infomovil crea tu sitio f&aacute;cil, r&aacute;pido y gratuito en 5 minutos." />
<meta property="og:image"
	content="http://landing.infomovil.com/webapp/templates/${ template }/images/apple-touch-icon-57x57.png" />
<meta property="og:url" content="http://www.infomovil.com" />
<meta itemprop="name" content="Infomovil" />
<meta itemprop="description"
	content="Infomovil. Nunca antes ha sido tan f&aacute;cil crear un sitio web. Con Infomovil crea tu sitio f&aacute;cil, r&aacute;pido y gratuito en 5 minutos. Sitio web creado con www.infomovil.com" />
<link rel="apple-touch-icon"
	href="http://landing.infomovil.com/webapp/templates/${ template }/images/apple-touch-icon.png" />
<link rel="apple-touch-icon" sizes="57x57"
	href="http://landing.infomovil.com/webapp/templates/${ template }/images/apple-touch-icon-57x57.png" />
<link rel="apple-touch-icon" sizes="72x72"
	href="http://landing.infomovil.com/webapp/templates/${ template }/images/apple-touch-icon-72x72.png" />
<link rel="apple-touch-icon" sizes="76x76"
	href="http://landing.infomovil.com/webapp/templates/${ template }/images/apple-touch-icon-76x76.png" />
<link rel="apple-touch-icon" sizes="114x114"
	href="http://landing.infomovil.com/webapp/templates/${ template }/images/apple-touch-icon-114x114.png" />
<link rel="apple-touch-icon" sizes="120x120"
	href="http://landing.infomovil.com/webapp/templates/${ template }/images/images/apple-touch-icon-120x120.png" />
<link rel="apple-touch-icon" sizes="144x144"
	href="http://landing.infomovil.com/webapp/templates/${ template }/images/apple-touch-icon-144x144.png" />
<link rel="apple-touch-icon" sizes="152x152"
	href="http://landing.infomovil.com/webapp/templates/${ template }/images/apple-touch-icon-152x152.png" />
<link rel="shortcut icon"
	href="http://landing.infomovil.com/webapp/templates/${ template }/images/favicon.ico"
	type="image/x-icon" />
<link
	href="http://landing.infomovil.com/webapp/templates/${ template }/images/apple-touch-icon-57x57.png" />
<title itemprop="name">Infomovil</title>
<link rel="canonical" href="http://www.infomovil.com" itemprop="url" />
<!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
<!--[if lt IE 8]>
      <script src="<c:url value="/resources/webapp/js/html5shiv.min.js"/>"></script>
      <script src="<c:url value="/resources/webapp/js/respond.min.js"/>"></script>
    <![endif]-->
<!-- Bootstrap core CSS -->
<%--     <link href="http://landing.infomovil.com/webapp/templates/${ template }/css/bootstrap.min.css" rel="stylesheet" /> --%>
<link href="<c:url value="/resources/webapp/css/bootstrap.min.css"/>"
	rel="stylesheet" />
<!-- Bootstrap theme -->
<%--     <link href="http://landing.infomovil.com/webapp/templates/${ template }/css/bootstrap-theme.min.css" rel="stylesheet" /> global --%>
<link
	href="<c:url value="/resources/webapp/css/bootstrap-theme.min.css"/>"
	rel="stylesheet" />
<!-- Custom styles for this template -->
<%--     <link href="http://landing.infomovil.com/webapp/templates/${ template }/css/themeEditor.css" rel="stylesheet" /> --%>
<link href="<c:url value="/resources/webapp/css/themeEditor.css"/>"
	rel="stylesheet" />
<!-- Custom styles for this template -->
<%--     <link href="http://landing.infomovil.com/webapp/templates/${ template }/css/info.css" rel="stylesheet" /> --%>
<link
	href="https://s3.amazonaws.com/landing.infomovil.com/webapp/templates/${ template }/css/info.css"
	rel="stylesheet" />
<%--     <link href="<c:url value="/resources/webapp/css/info.css"/>" rel="stylesheet" /> --%>
<!-- bxSlider CSS file -->
<%--     <link href="http://landing.infomovil.com/webapp/templates/${ template }/css/jquery.bxslider.css" rel="stylesheet" /> --%>
<link href="<c:url value="/resources/webapp/css/jquery.bxslider.css"/>"
	rel="stylesheet" />
<%--     <link href="http://landing.infomovil.com/webapp/templates/${ template }/fonts/font-awesome.min.css" rel="stylesheet" /> --%>
<link
	href="<c:url value="/resources/webapp/fonts/font-awesome.min.css"/>"
	rel="stylesheet" />
<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
  ga('create', 'UA-53077061-1', 'auto');
 ga('send', 'pageview'); 
    </script>
<script type="text/javascript">
		var contextPath='<%=request.getContextPath()%>';
		console.log("ContextPath: " + contextPath);
	</script>
</head>
<body role="document" data-spy="scroll" data-target=".navbar"
	data-offset="75" id="page-top" onload="autosave()">
	<!-- Fixed navbar -->
	<nav class="navbar navbar-inverse navbar-static-top">
		<div class="container-fluid">
			<div class="navbar-header">
				<button type="button" class="navbar-toggle collapsed"
					data-toggle="collapse" data-target="#navbar" aria-expanded="false"
					aria-controls="navbar">
					<span class="sr-only">Toggle navigation</span> <span
						class="icon-bar"></span> <span class="icon-bar"></span> <span
						class="icon-bar"></span>
				</button>
				<span class="navbar-brand "><img
					src="http://landing.infomovil.com/webapp/templates/${ template }/images/apple-touch-icon-57x57.png"
					width="50" height="50" alt="Infomovil" /> </span><span
					class="marLeft navEditor textWhite">Modo edición 
				</span>
			</div>
			<div id="navbar" class="navbar-collapse collapse text-right">
				<ul class="nav navbar-nav navbar-right">
					<li class="active"><a href="#" class="smoothScroll">${usuarioLogueado}
							<img width="20" height="20" alt="Infomovil"
							src="http://landing.infomovil.com/webapp/templates/${ template }/images/fa-user.png" />
					</a></li>

					<li><a href="#" data-toggle="modal"
						data-target="#myModalTemplates" class="smoothScroll">Elegir
							estilo <img width="20" height="20" alt="Infomovil"
							src="<c:url value="/resources/webapp/images/fa-templates.png"/>" />
					</a>
					<li><a href="<c:url value="/logout"></c:url>"
						class="smoothScroll"> Cerrar sesión <img width="20"
							height="20" alt="Infomovil"
							src="http://landing.infomovil.com/webapp/templates/${ template }/images/fa-sign-out.png" /></a></li>
				</ul>
			</div>
			<!--/.nav-collapse -->
		</div>
	</nav>
	<!-- / Fixed navbar -->
	<!-- Botón Nuevo Estilo -->
	<div class="seccTop bgBlack"><div class="container" ><a href="#" data-toggle="modal"
						data-target="#myModalTemplates" class="col-xs-12 btn btn-default btn-outline navEditor"><strong>¡Nuevo!</strong> Elige estilo <img width="20" height="20" alt="Infomovil"
							src="<c:url value="/resources/webapp/images/fa-templates.png"/>" /></a></div></div>
							<!-- /Botón Nuevo Estilo -->
	
	
	<!--Theme showcase -->
	<div class="theme-showcaseApp" role="main" id="intro">
		<!-- Main jumbotron for a primary marketing message or call to action -->
		<div class="container">
			<!-- page header -->
			<div class="page-header text-center">
				<h5 class=" text-center" id="urlSitio" style="display: none;">
					<a href="http://${sitioWeb}" target="_blank" class="textBlack">${sitioWeb}</a>
				</h5>
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
		</div>
		<!--/Theme showcase -->

		<!--Footer-->
		<footer class="footer bgBlack"> 
		
		<!--Publicar TEL-->
		<div id="publicarTel" style="display: none">
			<div class="bgDobleBlack"></div>
			<section class="bgFondo publicar">
				<div class="container whiteBg">
					<div class="row">
						<h3 class=" text-center textBlack">Ponle un nombre a tu sitio web!</h3>
						<div
							class="form-group col-xs-12 col-sm-12 col-md-6 col-md-offset-3 col-lg-6 col-lg-offset-3">
							<div class="divider"></div>
							<div class="form-group">
								<label class="sr-only" for="exampleInputAmount">www.</label>
								<div class="input-group">
									<div class="input-group-addon">www.</div>
									<input type="text" class="form-control black"
										id="nombreDominioBusqueda" name="nombreDominioBusqueda"
										placeholder="Nombra tu sitio" maxlength="63">
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
							<div class="col-xs-12 text-center textWhite"
								id="validacionNombre"></div>
							<!--           <div class="col-xs-12 text-center textWhite"> <span id="validacionNombre"></span> -->
							<%-- 				<img src="<c:url value="/resources/webapp/images/fa-warning.png"/>" width="20" height="20" alt="Alerta" /> --%>
							<!-- 		  </div> -->
							<div
								class="form-group col-xs-12 col-sm-12 col-md-6 col-md-offset-3 col-lg-6 col-lg-offset-3">
								<div class="divider"></div>
								<input type="submit" value="Publicar" id="btnPublicarTel"
									class="btn btn-default btn-outline col-xs-12 text-center textWhite"
									style="display: none;"> <input type="button"
									value="Buscar nombre" id="btnBuscarTel"
									class="btn btn-default btn-outline col-xs-12 text-center textBlack"
									onClick="validaDominio()">
								<div class="clear"></div>
								<div class="divider"></div>
								<div class="divider"></div>
								<div class="divider"></div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
		<!--/Publicar TEL-->
		</footer>
		
				
		<!--MODAL EXITO-->
		<div id="myModalExito" class="modal fade" tabindex="-1" role="dialog"
			aria-labelledby="myModalLabel" aria-hidden="true">
			<div class="modal-dialog modal-lg">
				<div class="modal-content">
					<div class="modal-header">
						<button type="button" class="close textBlack" data-dismiss="modal"
							aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
						<p class="modal-title"></p>
					</div>
					<div class="modal-body bgWhite">
						<h2
							class="textBlack col-xs-12 col-sm-12 col-md-6 col-md-offset-3 col-lg-6 col-lg-offset-3 text-center">&iexcl;Felicidades!</h2>
						<h5
							class="textBlack col-xs-12 col-sm-12 col-md-6 col-md-offset-3 col-lg-6 col-lg-offset-3 text-center">
							Ya tomaste el primer paso y te pusiste en línea.<br /> El proceso
							de publicación de tu sitio web puede tardar unos minutos.
						</h5>
						<div class="clear"></div>
						<p class="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center textBlack">Descarga
							nuestra app si deseas agregar más contenido.</p>
						<div class="clear"></div>
						<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
							<div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 text-center">
								<p class="text-center">
									<a
										href="https://itunes.apple.com/mx/app/infomovil/id898313250?mt=8"
										target="blank"> <img width="200" content="Apple Store"
										src="http://landing.infomovil.com/images/icn_appstore.png"
										style="margin: 0 auto;" alt="Apple Store"
										class="img-responsive" border="0"></a>
								</p>
							</div>
							<div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 text-center">
								<p class="text-center">
									<a
										href="https://play.google.com/store/apps/details?id=com.infomovil.infomovil"
										target="blank"><img width="200" content="Google Play"
										src="http://landing.infomovil.com/images/icn_gstore.png"
										style="margin: 0 auto;" alt="Google Play"
										class="img-responsive"></a>
								</p>
							</div>
						</div>
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
				<div class="modal-content">
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
							class="btn btn-default text-center col-xs-12 col-sm-12 col-md-6 col-md-offset-3 col-lg-6 col-lg-offset-3"
							data-dismiss="modal">
							<strong>Intenta de nuevo</strong>
						</button>
					</div>
				</div>
			</div>
		</div>
		<!--/MODAL FAIL-->
		<!--MODAL TEMPLATES-->
		<div id="modalTemplates"></div>
		<!-- <div id="myModalTemplates" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true"><div class="modal-dialog modal-lg"><div class="modal-content"><div class="modal-header"><button type="button" class="close textBlack" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button><p class="modal-title textBlack">Elije tu estilo</p></div><div class="modal-body bgWhite"><ul class="bxslider"><li><img src="https://s3.amazonaws.com/landing.infomovil.com/webapp/templates/Coverpage1azul/templateVacio.png" title="Funky roots"></li><li><img src="https://s3.amazonaws.com/landing.infomovil.com/webapp/templates/Coverpage2/templateVacio.png" title="Funky roots"></li></ul></div><div class="modal-footer"><button type="button" class="btn btn-purple" data-dismiss="modal">Cerrar</button></div></div></div></div> -->
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
			<input type="hidden" id="tipoDominio" name="tipoDominio"> <input
				type="hidden" id="idCatTipoRecurso" name="idCatTipoRecurso"
				value="1">
		</form>
		<%-- <h1>${ template }</h1> --%>
		<%-- <h1>${ sitioWeb }</h1> --%>
		<%-- <h1>${ canalUsuario }</h1> --%>
		<input type="hidden" id="plantilla" name="plantilla"
			<c:if test="${not empty template}"> value = "${ template }" </c:if>>
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
		<script>
$(document).ready(function(){
	generarSlider();
	console.log("generarSlider:::::");
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

<script>
	<c:choose>
		<c:when test="${canalUsuario == 'BAZ'}">
			$("#publicarTel").css("display", "block");
		</c:when>
	</c:choose>

	<c:choose>
		<c:when test="${sitioWeb != 'SIN_PUBLICAR'}">
			$("#urlSitio").css("display", "block");
			$("#publicarTel").css("display", "none");
		</c:when>
		<c:otherwise>
		
		</c:otherwise>
	</c:choose>	

	<c:if test="${resultadoPublicacion =='SI'}">
		$("#myModalExito").modal('show');
	</c:if>

	<c:if test="${resultadoPublicacion =='NO'}">
		$("#myModalFallo").modal('show');
	</c:if>

</script>
</body>
</html>
