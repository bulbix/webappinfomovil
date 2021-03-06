<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
    <!doctype html>
<html lang="es">
    <head itemscope="" itemtype="http://schema.org/WebSite">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <meta charset="ISO-8859-1" />
    <meta name="title" content="Infomovil" />
    <meta name="author" content="Infomovil"/>
    <meta name="designer" content="Infomovil"/>
    <meta name="description" content="Infomovil. Nunca antes ha sido tan f&aacute;cil crear un sitio web. Con Infomovil crea tu sitio f&aacute;cil, r&aacute;pido y gratuito en 5 minutos."/>
    <meta name="keywords" content="emprendedor, PyMEs, negocios PyMEs, sitio web, p&aacute;gina web, productividad, utilidades, web, m&oacute;vil, infomovil, micronegocio, crea tu sitio, mobile friendly, personal, gratis"/>
    <meta name="revisit-after" content="1 days"/>
    <meta name="rating" content="general"/>
    <meta name="copyright" content="Infomovil" />
    <meta name="name" content="Infomovil"/>
    <meta property="og:title" content="Infomovil" />
    <meta property="og:type" content="website"/>
    <meta property="og:description" content="Infomovil. Nunca antes ha sido tan f&aacute;cil crear un sitio web. Con Infomovil crea tu sitio f&aacute;cil, r&aacute;pido y gratuito en 5 minutos." />
    <meta property="og:image" content="resources/webapp/images/apple-touch-icon-57x57.png"/>
    <meta property="og:url" content="http://www.infomovil.com" />
    <meta itemprop="name" content="Infomovil"/>
    <meta itemprop="description" content="Infomovil. Nunca antes ha sido tan f&aacute;cil crear un sitio web. Con Infomovil crea tu sitio f&aacute;cil, r&aacute;pido y gratuito en 5 minutos. Sitio web creado con www.infomovil.com"/>

    <link rel="apple-touch-icon" href="<c:url value="/resources/webapp/images/apple-touch-icon.png"/>"/>
    <link rel="apple-touch-icon" sizes="57x57" href="<c:url value="/resources/webapp/images/apple-touch-icon-57x57.png"/>"/>
    <link rel="apple-touch-icon" sizes="72x72" href="<c:url value="/resources/webapp/images/apple-touch-icon-72x72.png"/>"/>
    <link rel="apple-touch-icon" sizes="76x76" href="<c:url value="/resources/webapp/images/apple-touch-icon-76x76.png"/>"/>
    <link rel="apple-touch-icon" sizes="114x114" href="<c:url value="/resources/webapp/images/apple-touch-icon-114x114.png"/>"/>
    <link rel="apple-touch-icon" sizes="120x120" href="<c:url value="/resources/webapp/images/apple-touch-icon-120x120.png"/>"/>
    <link rel="apple-touch-icon" sizes="144x144" href="<c:url value="/resources/webapp/images/apple-touch-icon-144x144.png"/>"/>
    <link rel="apple-touch-icon" sizes="152x152" href="<c:url value="/resources/webapp/images/apple-touch-icon-152x152.png"/>"/>
    <link rel="shortcut icon" href="<c:url value="/resources/webapp/images/favicon.ico" />" type="image/x-icon"/>
    <link href="<c:url value="/resources/webapp/images/apple-touch-icon-57x57.png"/>"/>    
    <title itemprop="name">Infomovil</title>
    <link rel="canonical" href="http://www.infomovil.com" itemprop="url" />
    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 8]>
      <script src="<c:url value="/resources/webapp/js/html5shiv.min.js"/>"></script>
      <script src="<c:url value="/resources/webapp/js/respond.min.js"/>"></script>
    <![endif]-->
    <!-- Bootstrap core CSS -->
    <link href="<c:url value="/resources/webapp/css/bootstrap.min.css"/>" rel="stylesheet" />
    <!-- Bootstrap theme -->
    <link href="<c:url value="/resources/webapp/css/bootstrap-theme.min.css"/>" rel="stylesheet" />
    <!-- Custom styles for this template -->
    <link href="<c:url value="/resources/webapp/css/themeEditor.css"/>" rel="stylesheet"/>
    <!-- Custom styles for this template -->
    <link href="<c:url value="/resources/webapp/css/sticky-editor.css"/>" rel="stylesheet" />
    <!-- bxSlider CSS file -->
    <link href="<c:url value="/resources/webapp/css/jquery.bxslider.css"/>" rel="stylesheet" />
    
    <link href="<c:url value="/resources/webapp/fonts/font-awesome.min.css"/>" rel="stylesheet" />
    <script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
  ga('create', 'UA-53077061-1', 'auto');
 ga('send', 'pageview'); 
    </script>
    

  
    
    
    </head>

    <body role="document" data-spy="scroll" data-target=".navbar" data-offset="75" id="page-top" onload="autosave()">




<!-- Fixed navbar -->
<nav class="navbar navbar-inverse navbar-static-top">
      <div class="container">
    <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"> <span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button>
          <a class="navbar-brand" href="http://infomovil.com"><span><img src="<c:url value="/resources/webapp/images/apple-touch-icon-57x57.png"/>" width="50" height="50" alt="Infomovil" /> </span><span class="marLeft">Modo edici�n  <span class="hidden-xs">Infomovil</span></span></a> </div>
    <div id="navbar" class="navbar-collapse collapse text-right">
          <ul class="nav navbar-nav navbar-right">
        <li class="active"><a href="#" class="smoothScroll">${usuarioLogueado} <img width="20" height="20" alt="Infomovil" src="<c:url value="/resources/webapp/images/fa-user.png"/>"/> </a></li>
        <li><a href="<c:url value="/infomovil/cerrarSesion"></c:url>" class="smoothScroll"> Cerrar sesi�n <img width="20" height="20" alt="Infomovil" src="<c:url value="/resources/webapp/images/fa-sign-out.png"/>"/></a></li>
      </ul>
        </div>
    <!--/.nav-collapse --> 
  </div>
    </nav>
<!-- / Fixed navbar --> 

<!--Theme showcase -->
<div class="theme-showcaseApp" role="main" id="intro"> 
   
   
   
   <!-- Header -->
<div class="headerBg">
  <header>
    <div class="container header" >
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <div style="height:30%; display:block; width:100%; min-height:70px;"></div>
          <p class="textWhite text-center"> <img src="<c:url value="/resources/webapp/images/fa-warning.png"/>" width="30" height="30" alt="Alerta" /></p>
          <p class="textWhite text-center"><strong>El formato de la URL no es el correcto</strong></p>
          <div style="height:30%; display:block; width:100%; min-height:70px;"></div>
        </div>
      </div>
    </div>
  </header>
</div>
<!-- /. Header --> 

    </div>
<!--/Theme showcase --> 


<!--Footer-->

<footer class="footer bgBlack"> </footer>
<!-- Scroll to Top Button (Only visible on small and extra-small screen sizes) -->
<div class="scroll-top page-scroll visible-xs visble-sm"> <a class="btn" href="#page-top"> <img width="20" height="20" alt="Infomovil" src="<c:url value="/resources/webapp/images/fa-chevron-up.png"/>"/> Subir</a> </div>

<!--/Footer--> 

<!-- /container -->


<form id="publicarDominio" action="<c:url value="/infomovil/publicarSitio"/>" method="post">
	<div id="modalPublicacion"></div>
	<input type="hidden" id="nombreDominio" name="nombreDominio" >
	<input type="hidden" id="tipoDominio" name="tipoDominio" >
	<input type="hidden" id="idCatTipoRecurso" name="idCatTipoRecurso" value="1">
</form>
<!-- Bootstrap core JavaScript
    ================================================== --> 
<!-- Placed at the end of the document so the pages load faster --> 
<script type="text/javascript" src="<c:url value="/resources/webapp/js/jquery.min.js"/>"></script>
<script type="text/javascript" src="<c:url value="/resources/webapp/js/bootstrap.min.js"/>"></script>
<script type="text/javascript" src="<c:url value="/resources/webapp/js/docs.min.js"/>"></script>
<script type="text/javascript" src="<c:url value="/resources/webapp/js/smoothscroll.js"/>"> </script>
<!-- IE10 viewport hack for Surface/desktop Windows 8 bug --> 
<script type="text/javascript" src="<c:url value="/resources/webapp/js/ie10-viewport-bug-workaround.js"/>"></script>
<!-- bxSlider Javascript file --> 
<script type="text/javascript" src="<c:url value="/resources/webapp/js/jquery.bxslider.min.js"/>"></script>
<script type="text/javascript" src="<c:url value="/resources/webapp/js/jqBootstrapValidation.js"/>"></script>

<script>

$(function () {
	  $('[data-toggle="popover"]').popover()
	});
	
$('#description').elastic();
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
</body>
</html>
