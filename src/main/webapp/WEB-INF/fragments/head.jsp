<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<!-- HEAD HTML 5 -->
<!doctype html>
<html lang="es">
    <head itemscope="" itemtype="http://schema.org/WebSite">
    
    <!-- META -->
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <meta charset="ISO-8859-1" />
    <meta name="title" content="Infomovil" />
    <meta name="author" content="Infomovil"/>
    <meta name="designer" content="Infomovil"/>
    <meta name="description" content="Infomovil. Nunca antes ha sido tan f&aacute;cil crear una p&aacute;gina web. Con Infomovil crea tu sitio f&aacute;cil, r&aacute;pido y gratuito en 5 minutos."/>
    <meta name="keywords" content="emprendedor, PyMEs, negocios PyMEs, sitio web, p&aacute;gina web, productividad, utilidades, web, m&oacute;vil, infomovil, micronegocio, crea tu sitio, mobile friendly, personal, gratis"/>
    <meta name="revisit-after" content="1 days"/>
    <meta name="rating" content="general"/>
    <meta name="copyright" content="Infomovil" />
    <meta name="name" content="Infomovil"/>
    <meta property="og:title" content="Infomovil" />
    <meta property="og:type" content="website"/>
    <meta property="og:description" content="Infomovil. Nunca antes ha sido tan f&aacute;cil crear una p&aacute;gina web. Con Infomovil crea tu p&aacute;gina f&aacute;cil, r&aacute;pido y gratuito en 5 minutos." />
    <meta property="og:image" content="resources/webapp/images/apple-touch-icon-57x57.png"/>
    <meta property="og:url" content="http://www.infomovil.com" />
    <meta itemprop="name" content="Infomovil"/>
    <meta itemprop="description" content="Infomovil. Nunca antes ha sido tan f&aacute;cil crear una p&aacute;gina web. Con Infomovil crea tu p&aacute;gina f&aacute;cil, r&aacute;pido y gratuito en 5 minutos. P&aacute;gina web creado con www.infomovil.com"/>
    <!-- / META -->
    
    <!-- ICONOS -->
    <link rel="apple-touch-icon" href="resources/webapp/images/apple-touch-icon.png" />
    <link rel="apple-touch-icon" sizes="57x57" href="resources/webapp/images/apple-touch-icon-57x57.png" />
    <link rel="apple-touch-icon" sizes="72x72" href="resources/webapp/images/apple-touch-icon-72x72.png" />
    <link rel="apple-touch-icon" sizes="76x76" href="resources/webapp/images/apple-touch-icon-76x76.png" />
    <link rel="apple-touch-icon" sizes="114x114" href="resources/webapp/images/apple-touch-icon-114x114.png" />
    <link rel="apple-touch-icon" sizes="120x120" href="resources/webapp/images/apple-touch-icon-120x120.png" />
    <link rel="apple-touch-icon" sizes="144x144" href="resources/webapp/images/apple-touch-icon-144x144.png" />
    <link rel="apple-touch-icon" sizes="152x152" href="resources/webapp/images/apple-touch-icon-152x152.png" />
    <link rel="shortcut icon" href="resources/webapp/images/favicon.ico" type="image/x-icon" />
    <link rel="image_src" href="resources/webapp/images/apple-touch-icon-57x57.png"/>
    <!-- / ICONOS -->
    
    <!-- TITULO - URL (VARIA EN CADA PÁGINA)-->
	<title itemprop="name"><tiles:getAsString name="titulo"/></title>
	<link rel="canonical" href="http://www.infomovil.com" itemprop="url" />
	<!-- /TITULO- URL -->
	
    <!-- COMPATIBILIDAD CON IE8 -->
    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 8]>
      <script src=" resources/webapp/js/html5shiv.min.js"></script>
      <script src=" resources/webapp/js/respond.min.js"></script>
    <![endif]-->
    <!-- / COMPATIBILIDAD CON IE8 -->
    
    
    <!-- ESTILOS Bootstrap core CSS -->
    <link href="resources/webapp/css/bootstrap.min.css" rel="stylesheet" />
    <!-- Bootstrap theme -->
    <link href="resources/webapp/css/bootstrap-theme.min.css" rel="stylesheet" />
    <!-- Animate -->
    <link  href="resources/webapp/css/animate.css" rel="stylesheet">
    <!-- /ESTILOS Bootstrap core CSS -->
    
    
    <!-- ESTILOS PERSONALIZADOS Bootstrap core CSS -->
    <!-- Custom styles for this template -->
    <link href="resources/webapp/css/theme.css" rel="stylesheet" />
    <!-- Custom styles for this template -->
    <link href="resources/webapp/css/sticky-footer-navbar.css" rel="stylesheet" />
    <!-- / ESTILOS PERSONALIZADOS Bootstrap core CSS -->
    
    <!-- ESTILOS GALERIA bxSlider CSS -->
    <link href="resources/webapp/css/jquery.bxslider.css" rel="stylesheet" />
    <!-- /ESTILOS GALERIA bxSlider CSS -->
    <!-- CODIGO SEGUIMIENTO ANALYTICS -->
    <script src="<c:url value="/resources/js/webapp/idioma.js"/>" ></script>

	<script type="text/javascript">
			var contextPath='<%=request.getContextPath()%>';
			if(contextPath == "/")
				contextPath = "";
	</script>
		
		<script>
		
			(function() { 

				$.ajax({
					type : "GET",
					url : contextPath + "/infomovil/getUserCanal",
					dataType : "json",
					success : function(json) {

						  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
							  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
							  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
							  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
							  ga('create', 'UA-53077061-1', 'auto');
							  ga('set', 'dimension1', 'WebApp');
							  ga('set', 'dimension2', json.canal);
							  ga('set', 'dimension3', json.user_id);
							  ga('send', 'pageview'); 
					},
					error : function(json) {
						console.log("Error");
					}

				});		
			})();
		</script>    
    
    <script>

    </script>
     <!-- / CODIGO SEGUIMIENTO ANALYTICS -->
    
<!--  /HEAD HTML 5 -->
	<script src="<c:url value="/mensajes/stringsIdioma.js"/>"></script>


 </head>