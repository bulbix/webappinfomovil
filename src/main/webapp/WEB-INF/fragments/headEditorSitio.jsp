<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

	<head itemscope="" itemtype="http://schema.org/WebSite">
		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
		<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
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
			content="Infomovil. Nunca antes ha sido tan f&aacute;cil crear una p&aacute;gina web. Con Infomovil crea tu p&aacute;gina f&aacute;cil, r&aacute;pido y gratuito en 5 minutos." />
		<meta property="og:image"
			content="http://landing.infomovil.com/webapp/templates/<tiles:getAsString name="template"/>/images/apple-touch-icon-57x57.png" />
		<meta property="og:url" content="http://www.infomovil.com" />
		<meta itemprop="name" content="Infomovil" />
		<meta itemprop="description"
			content="Infomovil. Nunca antes ha sido tan f&aacute;cil crear una p&aacute;gina web. Con Infomovil crea tu sitio f&aacute;cil, r&aacute;pido y gratuito en 5 minutos. P&aacute;gina web creada con www.infomovil.com" />
		
		<link rel="apple-touch-icon"
			href="http://landing.infomovil.com/webapp/templates/<tiles:getAsString name="template"/>/images/apple-touch-icon.png" />
		<link rel="apple-touch-icon" sizes="57x57"
			href="http://landing.infomovil.com/webapp/templates/<tiles:getAsString name="template"/>/images/apple-touch-icon-57x57.png" />
		<link rel="apple-touch-icon" sizes="72x72"
			href="http://landing.infomovil.com/webapp/templates/<tiles:getAsString name="template"/>/images/apple-touch-icon-72x72.png" />
		<link rel="apple-touch-icon" sizes="76x76"
			href="http://landing.infomovil.com/webapp/templates/<tiles:getAsString name="template"/>/images/apple-touch-icon-76x76.png" />
		<link rel="apple-touch-icon" sizes="114x114"
			href="http://landing.infomovil.com/webapp/templates/<tiles:getAsString name="template"/>/images/apple-touch-icon-114x114.png" />
		<link rel="apple-touch-icon" sizes="120x120"
			href="http://landing.infomovil.com/webapp/templates/<tiles:getAsString name="template"/>/images/images/apple-touch-icon-120x120.png" />
		<link rel="apple-touch-icon" sizes="144x144"
			href="http://landing.infomovil.com/webapp/templates/<tiles:getAsString name="template"/>/images/apple-touch-icon-144x144.png" />
		<link rel="apple-touch-icon" sizes="152x152"
			href="http://landing.infomovil.com/webapp/templates/<tiles:getAsString name="template"/>/images/apple-touch-icon-152x152.png" />
		<link rel="shortcut icon"
			href="http://landing.infomovil.com/webapp/templates/<tiles:getAsString name="template"/>/images/favicon.ico"
			type="image/x-icon" />
		<link href="http://landing.infomovil.com/webapp/templates/<tiles:getAsString name="template"/>/images/apple-touch-icon-57x57.png" />
		<style>
			.pac-container
			{
				z-index:10500!important;
			}
			/* <![CDATA[ */

.SI-FILES-STYLIZED label.cabinet
{
	width: 250px;
    min-width: 150px;
	height: 18px;
	background: url(<c:url value="/resources/webapp/images/btn-choose-file.png"/>) center center no-repeat;
	background-size:136px;

	display: inline-block;
	overflow: hidden;
	cursor: pointer;
}
.SI-FILES-STYLIZED label.cabinet input.file
{
	/*position: relative;*/
	height: 100%;
	width: auto;
	opacity: 0;
	-moz-opacity: 0;
	filter:progid:DXImageTransform.Microsoft.Alpha(opacity=0);
}

/* ]]> */
		</style>
		<title itemprop="name">Infomovil</title>
		<link rel="canonical" href="http://www.infomovil.com" itemprop="url" />
		<!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
		<!--[if lt IE 8]>
		      <script src="<c:url value="/WebAppInfomovil/resources/webapp/js/html5shiv.min.js"/>"></script>
		      <script src="<c:url value="/WebAppInfomovil/resources/webapp/js/respond.min.js"/>"></script>
		    <![endif]-->
		<!-- Bootstrap core CSS -->
<!-- 		<link href="/WebAppInfomovil/resources/webapp/css/bootstrap.min.css" rel="stylesheet" /> -->
<!-- 		<link href="/WebAppInfomovil/resources/webapp/css/bootstrap-theme.min.css" rel="stylesheet" /> -->
<!-- 		<link href="/WebAppInfomovil/resources/webapp/css/themeEditor.css" rel="stylesheet" /> -->
<%-- 		<link href="https://s3.amazonaws.com/landing.infomovil.com/webapp/templates/<tiles:getAsString name="template"/>/css/info.css" rel="stylesheet" /> --%>
<!-- 		<link href="/WebAppInfomovil/resources/webapp/css/jquery.bxslider.css" rel="stylesheet" />  -->
<!-- 		<link href="/WebAppInfomovil/resources/webapp/fonts/font-awesome.min.css" rel="stylesheet" />			 -->

	<link href="<c:url value="/resources/webapp/css/bootstrap.min.css"/>" rel="stylesheet" />
	<link href="<c:url value="/resources/webapp/css/bootstrap-theme.min.css"/>"	rel="stylesheet" />
	<link href="<c:url value="/resources/webapp/css/themeEditor.css"/>"	rel="stylesheet" />
	<link href="<c:url value="/resources/webapp/css/jquery.bxslider.css"/>" rel="stylesheet" /> 
	<!-- Animate -->
    <link href="<c:url value="/resources/webapp/css/animate.css"/>" rel="stylesheet">
	<link href="<c:url value="/resources/webapp/fonts/font-awesome.min.css"/>" rel="stylesheet" />
	<link href="https://s3.amazonaws.com/landing.infomovil.com/webapp/templates/<tiles:getAsString name="template"/>/css/info.css" rel="stylesheet" />	
		
		<script src="<c:url value="/resources/webapp/js/jquery.min.js"/>"></script>
		<script src="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=places&signed_in=false"></script> 
		
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
		
		<script type="text/javascript">
			setTimeout(function(){var a=document.createElement("script");
			var b=document.getElementsByTagName("script")[0];
			a.src=document.location.protocol+"//script.crazyegg.com/pages/scripts/0039/7317.js?"+Math.floor(new Date().getTime()/3600000);
			a.async=true;a.type="text/javascript";b.parentNode.insertBefore(a,b)}, 1);
		</script>
	
		<script src="<c:url value="/mensajes/stringsIdioma.js"/>"></script>
		
	</head>